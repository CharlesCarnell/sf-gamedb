import apicalypse from 'apicalypse';
import { GameRepository } from "@server/repositories";

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
  return await GameRepository.findOrCreate({
    where: {
      name: gameToRecord.name,
      slug: gameToRecord.slug,
      game_id: gameToRecord.id,
    }
  });
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
    await recordGameToDB(response.data[0]);
    return res.status(200).json({ ...response.data })
  } else {
    return res.status(400).json({ error: 'Game ID must be supplied' })
  }
}