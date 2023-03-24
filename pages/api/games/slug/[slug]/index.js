import apicalypse from 'apicalypse';

import { Sequelize } from "sequelize-typescript";

import {
  GameRepository,
  RatingRepository,
} from "@server/repositories";

import {
  Rating,
  User,
} from "@server/models";

const apicalypseConfig = {
  headers: {
    'Client-ID': process.env.IGDB_CLIENT_ID,
    'Authorization': `Bearer ${process.env.IGDB_BEARER}`,
  },
  method: 'post',
  responseType: 'json',
  timeout: '10000',
  queryMethod: 'body',
};

async function recordGameToDB(gameToRecord) {
  const first_release_date = new Date(0);
  first_release_date.setUTCSeconds(gameToRecord.first_release_date);
  return await GameRepository.findOrCreate({
    where: {
      game_id: gameToRecord.id,
    },
    defaults: {
      first_release_date: first_release_date.toISOString(),
      cover_image: gameToRecord?.cover?.url,
      name: gameToRecord.name,
      slug: gameToRecord.slug,
    }
  });
}

async function returnReviewsByGameID(gameID) {
  const game = await GameRepository.findOne({
    where: {
      game_id: gameID
    }
  });

  if ( !game ) {
    return null;
  }

  return await game.getRatings({
    include: [User]
  });
}

async function returnAverageRatingsByGameID(gameID) {
  const rating = await RatingRepository.findAll({
    where: {
      game_id: gameID
    },
    attributes: [
      [Sequelize.fn('AVG', Sequelize.cast(Sequelize.col('rating_overall_generated'), 'integer')), 'average_overall_rating'],
      [Sequelize.fn('AVG', Sequelize.cast(Sequelize.col('rating_gameplay'), 'integer')), 'average_gameplay_rating'],
      [Sequelize.fn('AVG', Sequelize.cast(Sequelize.col('rating_replayability'), 'integer')), 'average_replayability_rating'],
      [Sequelize.fn('AVG', Sequelize.cast(Sequelize.col('rating_visuals'), 'integer')), 'average_visuals_rating'],
      [Sequelize.fn('AVG', Sequelize.cast(Sequelize.col('rating_story'), 'integer')), 'average_story_rating'],
    ],
    raw: true,
  });

  const averageRatings = {
    overall: parseFloat(rating[0].average_overall_rating),
    gameplay: parseFloat(rating[0].average_gameplay_rating),
    replayability: parseFloat(rating[0].average_replayability_rating),
    visuals: parseFloat(rating[0].average_visuals_rating),
    story: parseFloat(rating[0].average_story_rating),
  };

  return averageRatings;
}

async function returnCountOfRatingsByGameID(gameID) {
  const ratingCount = await RatingRepository.count({
    where: {
      game_id: gameID
    },
  });

  return ratingCount;
}

export default async function handler(req, res) {
  if ( req.query.slug ) {
    const response = await apicalypse(apicalypseConfig)
      .fields([
        'artworks',
        // 'category',
        'cover.*',
        'first_release_date',
        'genres',
        'id',
        'name',
        'screenshots.*',
        'slug',
        'videos',
        'url',
        'parent_game',
        'standalone_expansions',
        'version_parent',
        'version_title',
        'bundles',
        'collection',
        'status',
        'summary',
        'rating',
        'rating_count',
        // 'platforms',
      ])
      .limit(5)
      .sort('first_release_date', 'desc')
      // .search('Sonic')
      .where([
        'category = 0',
        'platforms = (6)',
        'version_parent = null',
        `slug = "${req.query.slug}"*`
      ])
      .request('https://api.igdb.com/v4/games');
    if ( !response.data.length ) {
      return res.status(200).json({
        status: 'No games found from IGDB'
      });
    }
    return res.status(200).json({ 
      ...response.data[0],
      reviews: await returnReviewsByGameID(response.data[0].id),
      ratings: {
        average: await returnAverageRatingsByGameID(response.data[0].id),
        count: await returnCountOfRatingsByGameID(response.data[0].id),
      }
     })
  } else {
    return res.status(400).json({ error: 'Game ID must be supplied' })
  }
}