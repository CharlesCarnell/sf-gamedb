import {
  Sequelize,
} from "sequelize-typescript";

import DiscordProvider from 'next-auth/providers/discord';
import SequelizeAdapter, {
  models
} from '@next-auth/sequelize-adapter';

import { Game } from "../definitions/Game";
import { Rating } from "../definitions/Rating";

interface SequelizeConfig {
  host: string,
  port: number,
  database: string,
  username: string,
  password: string,
}

const sequelizeConfig: SequelizeConfig = {
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

const User = sequelize.define('user', {
  ...models.User,
});

const sequelizeAdapter = SequelizeAdapter(sequelize, {
  models: {
    // @ts-ignore
    User: User,
  }
});

const authOptions = {
  providers: [
    DiscordProvider({
      // @ts-ignore
      clientId: process.env.DISCORD_CLIENT_ID,
      // @ts-ignore
      clientSecret: process.env.DISCORD_CLIENT_SECRET
    }),
  ],
  adapter: sequelizeAdapter,
  callbacks: {
    // @ts-ignore
    async session({ session, token, user }) {
      // Add the User ID to their JWT
      session.user.id = user.id;
      return session;
    }
  }
}

sequelize.addModels([Game, Rating]);

User.hasMany(Rating, {
  foreignKey: 'user_id'
});
Rating.belongsTo(User, {
  foreignKey: 'user_id'
});


export { sequelize, authOptions, Game, Rating, User };

export const initDB = async () => {
  console.log('--------------- initDB() ----------------')
  await sequelize.authenticate();
  await sequelize.sync({ alter: true });

  // @ts-ignore
  let userOne: any = null;
  // @ts-ignore
  let userTwo: any = null;
  // @ts-ignore
  let userThree: any = null;
  try {
    userOne = await User.findOrCreate({
      where: { email: "flux@sf.com" },
      defaults: {
        name: "LiquidFlux",
      },
    });
  } catch (err) {
    console.error('error creating User "LiquidFlux"', err);
  }
  try {
    userTwo = await User.findOrCreate({
      where: { email: "akuze@sf.com" },
      defaults: {
        name: "Akuze",
      },
    });
  } catch (err) {
    console.error('error creating User "Akuze"', err);
  }
  try {
    userThree = await User.findOrCreate({
      where: { email: "cam@sf.com" },
      defaults: {
        name: "Cam",
      },
    });
  } catch (err) {
    console.error('error creating User "Cam"', err);
  }

  try {
    await Game.findOrCreate({
      where: {
        game_id: 1911,
      },
      defaults: {
        name: "Path of Exile",
        game_id: 1911,
        slug: 'path-of-exile',
        first_release_date: '2013-10-23 00:00:00+00',
        cover_image: '//images.igdb.com/igdb/image/upload/t_cover_big/co1n6w.png',
        ratings: [
          {
            game_id: 1911,
            user_id: userOne[0].id,
            rating_gameplay: 1,
            rating_replayability: 1,
            rating_visuals: 2,
            rating_story: 1,
            rating_overall_generated: 1,
            review_body: 'Dummy data',
          },
          {
            game_id: 1911,
            user_id: userTwo[0].id,
            rating_gameplay: 3,
            rating_replayability: 4,
            rating_visuals: 4,
            rating_story: 3,
            rating_overall_generated: 3,
            review_body: 'Dummy data',
          },
        ]
      },
      include: [{ model: Rating, as: 'ratings' }]
    });

  } catch (err) {
    console.error('error creating Game "path of exile"', err);
  }

  try {
    await Game.findOrCreate({
      where: {
        game_id: 123,
      },
      defaults: {
        name: "World of Warcraft",
        slug: 'world-of-warcraft',
        first_release_date: '2004-11-23 00:00:00+00',
        cover_image: '//images.igdb.com/igdb/image/upload/t_cover_big/co2l7z.png',
      }
    });
  } catch (err) {
    console.error('error creating Game "path of exile"', err);
  }
};