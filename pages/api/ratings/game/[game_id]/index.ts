import { NextApiRequest, NextApiResponse } from "next";
import { RatingRepository } from "@server/repositories";
import {
  Game,
  Rating,
  User
} from "@server/models";

export default async (req: NextApiRequest, res: NextApiResponse) => {

  if ( req.query.game_id ) {
    const rating = await RatingRepository.findOne({
      where: { game_id: req.query.game_id },
      include: [Game, User]
    });
    
    if ( rating === null ) {
      return res.status(400).json({ error: 'No records found with provided Game ID' })
    }
    return res.status(200).json({ ...rating.toJSON() });
  } else {
    return res.status(400).json({ error: 'Game ID must be supplied' })
  }

}