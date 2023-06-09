import apicalypse from 'apicalypse';

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

export default async function handler(req, res) {
  if ( req.query.name ) {
    const response = await apicalypse(apicalypseConfig)
      .fields([
        // 'artworks',
        // 'category',
        // 'cover.*',
        // 'first_release_date',
        // 'genres',
        'id',
        'name',
        // 'screenshots.*',
        'slug',
        // 'videos',
        // 'url',
        // 'parent_game',
        // 'standalone_expansions',
        // 'version_parent',
        // 'version_title',
        // 'bundles',
        // 'collection',
        // 'status',
        // 'summary',
        'rating',
        'rating_count',
        // 'platforms',
      ])
      .limit(20)
      .sort('first_release_date', 'desc')
      // .search('Sonic')
      .where([
        'category = 0',
        'platforms = (6)',
        'version_parent = null',
        `name ~ "${req.query.name}"*`
      ])
      .request('https://api.igdb.com/v4/games');
    res.status(200).json({ ...response.data })
  } else {
    res.status(400).json({ error: 'Game ID must be supplied' })
  }
}