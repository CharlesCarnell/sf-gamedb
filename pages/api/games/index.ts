import { NextApiRequest, NextApiResponse } from "next";
import { GameRepository } from "@server/repositories";
import {
  Rating,
} from "@server/models";

export default async (req: NextApiRequest, res: NextApiResponse) => {

  return res.status(200).json(await GameRepository.findOne({
    where: { game_id: 1911 },
    include: [Rating],
    // raw: true,
  }));
}