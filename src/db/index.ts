import { Sequelize } from "sequelize-typescript";
import { config, dialect } from "../config/db.config";
import Product from "../models/product.model";
import Category from "../models/category.model";
import dummyProducts from "../../src/assets/products.json";
import dummyCategories from "../../src/assets/categories.json";
import projectRepository from "../repositories/product.repository"


interface DumProducts {
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface DumCategories {
  name: string;
}

class Database {
  public sequelize: Sequelize | undefined;

  constructor() {
    this.connectToDatabase();
  }

  private async connectToDatabase() {
    this.sequelize = new Sequelize({
      database: config.DB,
      username: config.USER,
      password: config.PASSWORD,
      host: config.HOST,
      dialect: dialect,
      port: config.PORT,
      pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle,
      },
      models: [Product, Category],
    });

    await this.sequelize
      .authenticate()
      .then(() => {
        console.log("Connection has been established successfully.");
      })
      .catch((err) => {
        console.error("Unable to connect to the Database:", err);
      });

    await this.sequelize.sync({ force: true });
    console.log("All models were synchronized successfully.");

    this.addDummyProducts();
    this.addDummyProductCategories();
  }

  private async addDummyProducts(): Promise<void> {
    const productsJSON: DumProducts[] = dummyProducts.products;
    await projectRepository.insertDummyProduct(productsJSON);
  }

  private async addDummyProductCategories(): Promise<void> {
    const dummyProductCategories: DumCategories[] = dummyCategories;
    await projectRepository.insertDummyCategory(dummyProductCategories);
  }
}

export default Database;
