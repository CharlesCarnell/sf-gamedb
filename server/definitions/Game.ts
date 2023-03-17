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

  @Column({ type: DataType.INTEGER, allowNull: false, primaryKey: true })
  public game_id!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  public name!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  public slug!: string;

  @Column({ type: DataType.DATE, allowNull: true })
  public first_release_date!: string;
}