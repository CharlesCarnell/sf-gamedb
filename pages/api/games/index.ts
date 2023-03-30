


import { NextApiRequest, NextApiResponse } from "next";

const querystringConverter = require('sequelize-querystring-converter');
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

  const queries = querystringConverter.convert({ query: req.query });

  return res.status(200).json(await Rating.findAll({
    group: ['Rating.game_id', 'game.game_id'],
    include: [{
      model: Game,
    }],
    attributes: [
      [Sequelize.fn('AVG', Sequelize.cast(Sequelize.col('rating_overall_generated'), 'float')), 'average_overall_rating'],
      [Sequelize.fn('COUNT', Sequelize.col('rating_overall_generated')), 'rating_count'],
      [Sequelize.fn('MAX', Sequelize.cast(Sequelize.col('updatedAt'), 'timestamp')), 'most_recent_rating'],
    ],
    ...queries,
  }));
}

export default async (req: NextApiRequest, res: NextApiResponse) => {

  return returnGamesWithReviews(req, res);
}