import { NextApiRequest, NextApiResponse } from "next";
import { RatingRepository } from "@server/repositories";
import {
  Game,
  Rating,
  User
} from "@server/models";

export default async (req: NextApiRequest, res: NextApiResponse) => {

  const rating = await RatingRepository.findOne({
    where: { user_id: 2 },
    include: [Game, User]
  });

  return res.status(200).json({ ...rating.toJSON() });
}