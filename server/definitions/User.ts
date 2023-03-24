// import {
//   Table,
//   Column,
//   DataType,
//   // HasMany,
// } from "sequelize-typescript";

// import { BaseModel } from "./BaseModel";
// import { Rating } from "./Rating";

// @Table({
//   tableName: "user",
// })
// export class User extends BaseModel {

//   // @HasMany(() => Rating, 'user_id')
//   // ratings?: Rating[];

//   @Column({ type: DataType.STRING, allowNull: false })
//   public display_name!: string;
// }

// import {
//   DataTypes,
//   // hasMany,
// } from 'sequelize';
// import { models } from '@next-auth/sequelize-adapter';

// import {
//   sequelizeInstance,
//   Rating,
// } from '../models';

// const User = sequelizeInstance.define('user', {
//   ...models.User,
//   test: DataTypes.STRING,
// });

// User.hasMany(Rating, {
//   foreignKey: 'user_id'
// });

// export default User;
