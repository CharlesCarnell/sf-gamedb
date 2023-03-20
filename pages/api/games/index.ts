import { NextApiRequest, NextApiResponse } from "next";

const { Op } = require("sequelize");

import {
  GameRepository
} from "@server/repositories";

import {
  Rating,
  User
} from "@server/models";

async function returnGamesWithReviews(req: NextApiRequest, res: NextApiResponse) {  
  return res.status(200).json(await GameRepository.findAll({
    include: [{
      model: Rating,
      where: {
        id: {
          [Op.not]: null
        },
      },
      include: [User]
    }]
  }));
}

export default async (req: NextApiRequest, res: NextApiResponse) => {

  if ( req.query.reviews ) {
    return returnGamesWithReviews(req, res);
  }

  return res.status(200).json(await GameRepository.findOne({
    where: { game_id: 1911 },
    include: [Rating],
    // raw: true,
  }));
}