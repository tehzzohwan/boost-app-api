import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: "products",
})
export default class Product extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "id",
  })
  id!: number;

  @Column({
    type: DataType.STRING(255),
    field: "title",
  })
  title!: string;

  @Column({
    type: DataType.STRING(255),
    field: "description",
  })
  description!: string;

  @Column({
    type: DataType.INTEGER,
    field: "price",
  })
  price!: number;

  @Column({
    type: DataType.DECIMAL,
    field: "discountPercentage",
  })
  discountPercentage!: number;

  @Column({
    type: DataType.DECIMAL,
    field: "rating",
  })
  rating!: number;

  @Column({
    type: DataType.INTEGER,
    field: "stock",
  })
  stock!: number;

  @Column({
    type: DataType.STRING(255),
    field: "brand",
  })
  brand!: string;

  @Column({
    type: DataType.STRING(255),
    field: "category",
  })
  category!: string;

  @Column({
    type: DataType.STRING(255),
    field: "thumbnail",
  })
  thumbnail!: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING(255)),
    field: "images",
  })
  images!: string[];
}



//   title: string;
//   description: string;
//   price: number;
//   discountPercentage: number;
//   rating: number;
//   stock: number;
//   brand: string;
//   category: string;
//   thumbnail: string;
//   images: string[];

