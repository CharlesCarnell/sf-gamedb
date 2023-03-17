import { NextApiRequest, NextApiResponse } from "next";
import { RatingRepository } from "@server/repositories";
import {
  Game,
  Rating,
  User
} from "@server/models";

export default async (req: NextApiRequest, res: NextApiResponse) => {

  if (req.query.game_id) {
    const rating = await RatingRepository.findOne({
      where: { game_id: req.query.game_id },
      include: [Game, User]
    });

    if (rating === null) {
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
    const findRating = await RatingRepository.findOne({
      where: {
        game_id: req.query.game_id,
        user_id: req.body.user_id,
      },
    });

    let status = null;
    // If there's no existing rating for this game from this user
    if ( findRating === null ) {
      await RatingRepository.create({
        ...req.body,
        game_id: req.query.game_id,
      });
      status = 'created';
    } else {
      await RatingRepository.update({ ...req.body }, {
        where: {
          game_id: req.query.game_id,
          user_id: req.body.user_id,
        }
      });
      status = 'updated';
    }

    const latestRecord = await RatingRepository.findOne({
      where: {
        game_id: req.query.game_id,
      }
    });
    if ( latestRecord !== null ){
      return res.status(200).json({ ...latestRecord.dataValues, status });
    }
    return res.status(400).json({ error: 'An error has occured whilst trying to create or update your rating' });
  } else {
    return res.status(400).json({ error: 'Game ID must be supplied' })
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