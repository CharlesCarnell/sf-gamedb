import {
  NextApiRequest,
  NextApiResponse,
} from "next";

import {
  GameRepository,
  RatingRepository,
} from "@server/repositories";
import {
  Game,
  Rating,
  User,
} from "@server/models";

async function get(req: NextApiRequest, res: NextApiResponse) {
  if ( req.query.game_id ) {
    const rating = await RatingRepository.findAll({
      where: { game_id: req.query.game_id },
      include: [Game, User]
    });
    
    if ( rating === null ) {
      return res.status(400).json({ error: 'No records found with provided Game ID' })
    }

    const formattedRating = [];
    for (const [key, value] of Object.entries(rating)) {
      formattedRating.push( { ...rating[key].dataValues });
    }

    return res.status(200).json(formattedRating);
    // return res.status(200).json({ ...rating.toJSON() });
  } else {
    return res.status(400).json({ error: 'Game ID must be supplied' })
  }
}

async function post(req: NextApiRequest, res: NextApiResponse) {

  if ( req.query.game_id && req.body.user_id ) {  
    const game = await GameRepository.findOne({
      where: {
        game_id: req.query.game_id
      },
    });

    console.log('game', req.query.game_id, game);

    const existingRating = (await game.getRatings({
      where: {
        user_id: Number(req.body.user_id),
      }
    }))[0];

    // If a rating for this game & user exists, update it via its ID
    if ( existingRating !== undefined ) {
      const ratingValues = [];
      ratingValues.push(
        req.body.rating_gameplay,
        req.body.rating_replayability,
        req.body.rating_visuals,
        req.body.rating_story,
      );
      const averageRating = (ratingValues.reduce((sum, a) => { return parseFloat(sum) + parseFloat(a) }, 0) / ( ratingValues.length || 1 ));
      const updatedRating = await Rating.update({
        ...req.body,
        rating_overall_generated: averageRating,
      }, {
        where: {
          id: existingRating.id
        }
      });

      return res.status(200).json({
        ...updatedRating,
        status: `Updated an existing rating for ${req.query.game_id} by ${req.body.user_id}`,
      });
    } else {
      // Else create a new rating record for this game & user combination
      console.log(`Creating a new rating for ${req.query.game_id} by ${req.body.user_id}`);
      const ratingValues = [];
      ratingValues.push(
        req.body.rating_gameplay,
        req.body.rating_replayability,
        req.body.rating_visuals,
        req.body.rating_story,
      );
      const averageRating = (ratingValues.reduce((sum, a) => { return parseFloat(sum) + parseFloat(a) }, 0) / (ratingValues.length || 1));
      const newRating = await Rating.create({
        ...req.body,
        rating_overall_generated: averageRating,
        game_id: req.query.game_id,
      });
      // const newSetRating = await game.setRatings([newRating]);
      // console.log('newSetRating', newSetRating);

      return res.status(200).json({
        ...newRating?.dataValues,
        status: `Created a new rating for ${req.query.game_id} by ${req.body.user_id}`
      });
    }
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {

  if (req.method === 'GET' ) {
    return await get(req, res);
  }

  if (req.method === 'POST' ) {
    return await post(req, res);
  }
}