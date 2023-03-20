import {
  Table,
  Column,
  ForeignKey,
} from "sequelize-typescript";

import { BaseModel } from "./BaseModel";
import { Game } from "./Game";
import { Rating } from "./Rating";

@Table({
  timestamps: false,
  tableName: "game_rating",
})
export class GameRating extends BaseModel {

  @ForeignKey(() => Game)
  @Column
  game_id!: number;

  @ForeignKey(() => Rating)
  @Column
  rating_id!: number;
}