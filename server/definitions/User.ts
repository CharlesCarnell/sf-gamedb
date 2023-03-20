import {
  Table,
  Column,
  DataType,
} from "sequelize-typescript";

import { BaseModel } from "./BaseModel";

@Table({
  tableName: "user",
})
export class User extends BaseModel {
  @Column({ type: DataType.STRING, allowNull: false })
  public display_name!: string;
}