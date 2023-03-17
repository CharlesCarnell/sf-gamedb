import { Sequelize } from "sequelize-typescript";

import { Game } from "../definitions/Game";
import { Rating } from "../definitions/Rating";
import { User } from "../definitions/User";

// import config from "../config";

interface SequelizeConfig {
  host: string,
  port: number,
  database: string,
  username: string,
  password: string,
}

const sequelizeConfig : SequelizeConfig = {
  host: process.env.DB_HOST || '127.0.0.1',
  port: Number(process.env.DB_PORT) || 5432,
  database: process.env.DB_DATABASE || 'public',
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'IJ1etuRnS2w6iLp',
}

const sequelize = new Sequelize({
  ...sequelizeConfig,
  dialect: 'postgres',
});


sequelize.addModels([Game, Rating, User]);

export { Game, Rating, User };

export const initDB = async () => {
  console.log('--------------- initDB() ----------------')
  await sequelize.authenticate();
  await sequelize.sync({ alter: true });

  try {
    await User.findOrCreate({
      where: { display_name: "LiquidFlux" },
      // defaults: { name: "admin", email: "admin@example.com" },
    });
  } catch (err) {
    console.error('error creating User "LiquidFlux"', err);
  }
  try {
    await User.findOrCreate({
      where: { display_name: "Akuze" },
    });
  } catch (err) {
    console.error('error creating User "Akuze"', err);
  }

  try {
    await Game.findOrCreate({
      where: {
        name: "Path of Exile",
        game_id: 1911,
        slug: 'path-of-exile'
      }
    });
  } catch (err) {
    console.error('error creating Game "path of exile"', err);
  }

  try {
    await Game.findOrCreate({
      where: {
        name: "World of Warcraft",
        game_id: 123,
        slug: 'world-of-warcraft'
      }
    });
  } catch (err) {
    console.error('error creating Game "path of exile"', err);
  }

  try {
    await Rating.findOrCreate({
      where: {
        game_id: 1911,
        user_id: 1,
        rating_gameplay: 9,
        rating_replayability: 9,
        rating_visuals: 7,
        rating_story: 7,
        rating_overall_generated: 8,
      },
    });
  } catch (err) {
    console.error('error creating Rating "Path of Exile by LiquidFlux"', err);
  }

  try {
    await Rating.findOrCreate({
      where: {
        game_id: 1911,
        user_id: 2,
        rating_gameplay: 8,
        rating_replayability: 8,
        rating_visuals: 6,
        rating_story: 6,
        rating_overall_generated: 7,
      },
    });
  } catch (err) {
    console.error('error creating Rating "Path of Exile by LiquidFlux"', err);
  }
};