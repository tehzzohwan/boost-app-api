import { Router } from "express";
import ProductController from "../controllers/product.controller";

import  validateProduct  from '../middleware/validation.middleware';
import  { ProductSchema }  from '../schemas/product.schemas';

class ProductRoutes {
  router = Router();
  controller = new ProductController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes(): void {
    this.router.post("/products", validateProduct(ProductSchema), this.controller.create);
    this.router.get("/products", this.controller.findAll);
    this.router.get("/products/category", this.controller.findAllCategories);
    this.router.get("/products/category/:category", this.controller.findProductsByCategory);
    this.router.get("/products/:id", this.controller.findOne);
    this.router.put("/products/:id", this.controller.update);
    this.router.delete("/products/:id", this.controller.delete);
  }
}

export default new ProductRoutes().router;
