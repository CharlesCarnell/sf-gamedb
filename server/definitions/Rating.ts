import {
  Table,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";

import { BaseModel } from "./BaseModel";
import { Game } from "./Game";
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
  @BelongsTo(() => Game)
  public game!: Game;

  @ForeignKey(() => Game)
  @Column({ type: DataType.INTEGER, allowNull: false })
  public game_id!: number;
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