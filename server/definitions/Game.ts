import {
  Table,
  Column,
  DataType,
  BelongsToMany,
} from "sequelize-typescript";

import { BaseModel } from "./BaseModel";
import { GameRating } from "./GameRating";
import { Rating } from "./Rating";

@Table({
  timestamps: false,
  tableName: "game",
})
export class Game extends BaseModel {

  @Column({ type: DataType.INTEGER, allowNull: false, primaryKey: true })
  public game_id!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  public name!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  public slug!: string;

  @Column({ type: DataType.STRING, allowNull: true })
  public cover_image!: string;

  @Column({ type: DataType.DATE, allowNull: true })
  public first_release_date!: string;
  
  @BelongsToMany(() => Rating, () => GameRating)
  ratings?: Rating[];
}