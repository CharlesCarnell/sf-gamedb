import { NextApiRequest, NextApiResponse } from "next";
import { GameRepository } from "@server/repositories";
import {
  Game,
  Rating,
  User
} from "@server/models";
import { ratingClasses } from "@mui/material";

export default async (req: NextApiRequest, res: NextApiResponse) => {

  const ratings = await GameRepository.findAll({
    // where: { user_id: 2 },
    include: [{ all: true, nested: true }],
    raw: true,
  });

  await console.log('ratings', ratings);

  return res.status(200).json(ratings);
}