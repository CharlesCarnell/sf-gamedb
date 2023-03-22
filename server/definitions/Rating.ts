import {
  Table,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";

import { BaseModel } from "./BaseModel";
import { Game } from "./Game";
// import { GameRating } from "./GameRating";
import { User } from "./User";

@Table({
  tableName: "rating",
})
export class Rating extends BaseModel {

  @BelongsTo(() => Game)
  public game!: Game[];

  @ForeignKey(() => Game)
  public game_id!: number

  @BelongsTo(() => User)
  public user!: User;

  @ForeignKey(() => User)
  public user_id!: number

  @Column({ type: DataType.INTEGER, allowNull: false })
  public rating_gameplay!: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  public rating_replayability!: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  public rating_visuals!: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  public rating_story!: string;

  @Column({
    type: DataType.DOUBLE,
    allowNull: false,
    set(this: Rating) {
      const ratingValues = [];
      ratingValues.push(
        this.getDataValue('rating_gameplay'),
        this.getDataValue('rating_replayability'),
        this.getDataValue('rating_visuals'),
        this.getDataValue('rating_story'),
      );
      const averageRating = (ratingValues.reduce((sum, a) => { return parseFloat(sum) + parseFloat(a) }, 0) / ( ratingValues.length || 1 ));
      this.setDataValue('rating_overall_generated', averageRating)
    }
  })
  public rating_overall_generated!: string;
}