


import { NextApiRequest, NextApiResponse } from "next";

const { Op } = require("sequelize");
import { Sequelize } from "sequelize-typescript";

import {
  GameRepository
} from "@server/repositories";

import {
  Game,
  Rating,
  User,
} from "@server/models";

async function returnGamesWithReviews(req: NextApiRequest, res: NextApiResponse) {  

  return res.status(200).json(await Rating.findAll({
    group: ['Rating.game_id', 'game.game_id'],
    include: [{
      model: Game,
    }],
    attributes: [
      [Sequelize.fn('AVG', Sequelize.cast(Sequelize.col('rating_overall_generated'), 'integer')), 'average_overall_rating'],
      [Sequelize.fn('COUNT', Sequelize.col('rating_overall_generated')), 'rating_count'],
    ]
  }));
}

export default async (req: NextApiRequest, res: NextApiResponse) => {

  if ( req.query.reviews ) {
    return returnGamesWithReviews(req, res);
  }

  return res.status(200).json(await GameRepository.findOne({
    where: { game_id: 1911 },
    include: [{ model: Rating, as: 'reviews'}],
    // raw: true,
  }));
}