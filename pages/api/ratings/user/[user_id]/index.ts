import { NextApiRequest, NextApiResponse } from "next";
import { RatingRepository } from "@server/repositories";
import {
  Game,
  Rating,
  User
} from "@server/models";

export default async (req: NextApiRequest, res: NextApiResponse) => {

  if ( req.query.user_id ) {
    const rating = await RatingRepository.findOne({
      where: { user_id: req.query.user_id },
      include: [Game, User]
    });
    
    if ( rating === null ) {
      return res.status(400).json({ error: 'No records found with provided User ID' })
    }
    return res.status(200).json({ ...rating.toJSON() });
  } else {
    res.status(400).json({ error: 'User ID must be supplied' })
  }

}