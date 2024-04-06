import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: "categories",
})
export default class Category extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "id",
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    field: "name",
  })
  name!: string;
}