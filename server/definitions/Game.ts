import {
  Table,
  Column,
  DataType,
} from "sequelize-typescript";

import { BaseModel } from "./BaseModel";

@Table({
  timestamps: false,
  tableName: "game",
})
export class Game extends BaseModel {
  @Column({ type: DataType.STRING, allowNull: false })
  public name!: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  public game_id!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  public slug!: string;
}