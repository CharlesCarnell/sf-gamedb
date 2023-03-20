import {
  Table,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
  BelongsToMany,
} from "sequelize-typescript";

import { BaseModel } from "./BaseModel";
import { Game } from "./Game";
import { GameRating } from "./GameRating";
import { User } from "./User";

@Table({
  timestamps: false,
  tableName: "rating",
})
export class Rating extends BaseModel {

  /* Associantions */
  // User
  @BelongsTo(() => User)
  public user!: User;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  public user_id!: number;
  // End User

  
  // Game
  @BelongsToMany(() => Game, () => GameRating)
  cast?: Game[];
  // End User


  @Column({ type: DataType.INTEGER, allowNull: false })
  public rating_gameplay!: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  public rating_replayability!: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  public rating_visuals!: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  public rating_story!: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  public rating_overall_generated!: string;
}