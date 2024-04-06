import Product from "../models/product.model";
import { Op } from "sequelize";
import Category from "../models/category.model";

// interface IProductRepository {
//   save(product: Product): Promise<Product>;
//   retrieveAll(searchParams: {
//     title: string;
//     description: string;

//   }): Promise<void | Product[]>;
//   retrieveById(productId: number): Promise<Product | null>;
//   update(product: Product): Promise<number>;
//   delete(productId: number): Promise<number>;
//   deleteAll(): Promise<number>;
// }

class ProductRepository {
  async insertDummyProduct(product: Product[] | any): Promise<Product> {
    try {
      const result: any = await Product.bulkCreate(product);
      return result;
    } catch (err) {
      throw new Error("Failed to create product!");
    }
  }

  async insertDummyCategory(category: Category[] | any): Promise<Category> {
    try {
      const result: any = await Category.bulkCreate(category);
      return result;
    } catch (err) {
      throw new Error(`Failed to create product!, ${err}`);
    }
  }

  async save(product: Product): Promise<Product> {
    try {
      const result = await Product.create({
        title: product.title,
        description: product.description,
        price: product.price,
        discountPercentage: product.discountPercentage,
        rating: product.rating,
        stock: product.stock,
        brand: product.brand,
        category: product.category,
        thumbnail: product.thumbnail,
        images: product.images,
      });
      return result;
    } catch (err) {
      throw new Error("Failed to create product!");
    }
  }

  async retrieveAll(): Promise<Product[]> {
    try {
      return await Product.findAll();
    } catch (error) {
      throw new Error("Failed to retrieve products!");
    }
  }

  async retrieveAllCategories(): Promise<Category[]> {
    try {
      return await Category.findAll();
    } catch (error) {
      throw new Error("Failed to retrieve catecogories!");
    }
  }

  async retrieveProductByCategory(category: string): Promise<Product[]> {
    try{
      return await Product.findAll({
        where: { category: category}
      })
    } catch (error) {
      throw new Error("Failed to retrieve catecogories!");
    }
  }

  async retrieveById(productId: number): Promise<Product | null> {
    try {
      return await Product.findByPk(productId);
    } catch (error) {
      throw new Error("Failed to retrieve product!");
    }
  }
  // TODO: partial update
  async update(product: Product, productId: number): Promise<number> {
    try {
      const affectedRows = await Product.update(
        {
          title: product.title,
          description: product.description,
          price: product.price,
          discountPercentage: product.discountPercentage,
          rating: product.rating,
          stock: product.stock,
          brand: product.brand,
          category: product.category,
          thumbnail: product.thumbnail,
          images: product.images,
        },
        { where: { id: productId } }
      );
      return affectedRows[0];
    } catch (error) {
      throw new Error("Failed to update product!");
    }
  }

  async delete(productId: number): Promise<number> {
    try {
      const affectedRows = await Product.destroy({
        where: { id: productId },
      });
      return affectedRows;
    } catch (error) {
      throw new Error("Failed to delete product!");
    }
  }

  async deleteAll(): Promise<number> {
    try {
      return Product.destroy({
        where: {},
        truncate: false,
      });
    } catch (error) {
      throw new Error("Failed to delete all products!");
    }
  }
}

export default new ProductRepository();
