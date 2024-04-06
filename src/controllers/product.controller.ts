import { Request, Response } from "express";
import Product from "../models/product.model";
import productRepository from "../repositories/product.repository";
import { StatusCodes } from "../Utility/util";

export default class ProductController {
  async create(req: Request, res: Response) {
    const product: Product = req.body;
    try {
      const result = await productRepository.save(product);

      res.status(StatusCodes.CREATED).json({
        message: "create OK",
        data: result,
      });
    } catch (err) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Internal Server Error!",
      });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const result = await productRepository.retrieveAll();
      res.status(StatusCodes.OK).json({
        message: "findAll OK",
        data: result,
      });
    } catch (err) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Internal Server Error!",
      });
    }
  }

  async findProductsByCategory(req: Request, res: Response) {
    const category = req.params.category
    try {
      const result = await productRepository.retrieveProductByCategory(category);
      res.status(StatusCodes.OK).json({
        message: "findProductByCategory OK",
        data: result,
      });
    } catch (err) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Internal Server Error!",
        error: "error finding category",
      });
    }
  }

  async findAllCategories(req: Request, res: Response) {
    try {
      const result = await productRepository.retrieveAllCategories();
      res.status(StatusCodes.OK).json({
        message: "findAllCategories OK",
        data: result,
      });
    } catch (err) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Internal Server Error!",
        error: "error finding category",
      });
    }
  }

  async findOne(req: Request, res: Response) {
    const id: number = parseInt(req.params.id, 10);
    try {
      const result = await productRepository.retrieveById(id);
      if (result === null) {
        res.status(StatusCodes.BAD_REQUEST).json({
          message: `product of id ${id} not found`,
        });
      } else {
        res.status(StatusCodes.OK).json({
          message: "findOne OK",
          data: result,
        });
      }
    } catch (err) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Internal Server Error!",
      });
    }
  }

  async update(req: Request, res: Response) {
    const productId: number = parseInt(req.params.id, 10);
    const updatedProduct: Product = req.body;
    try {
      await productRepository.update(updatedProduct, productId);

      res.status(StatusCodes.OK).json({
        message: `updated product of id ${productId}`,
      });
    } catch (err) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Internal Server Error!",
        error: err,
      });
    }
  }

  async delete(req: Request, res: Response) {
    const productId: number = parseInt(req.params.id, 10);

    try {
      const result = await productRepository.delete(productId);
      if (result === 1) {
        res.status(StatusCodes.OK).json({
          message: `deleted product of id ${productId}`,
        });
      } else {
        res.status(StatusCodes.BAD_REQUEST).json({
          message: `Product of ${productId} not found`,
        });
      }
    } catch (err) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Internal Server Error!",
      });
    }
  }
}
