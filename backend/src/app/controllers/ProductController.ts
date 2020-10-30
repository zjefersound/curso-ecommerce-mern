import { NextFunction, Request, Response } from "express";
import errorHandler from "../../helpers/dbErrorhandler";
import Product from "../models/ProductModel";
import _ from 'lodash';

class ProductController {
  index = async (req: Request, res: Response) => {};

  show = async (req: Request, res: Response) => {
    req.product.photo = undefined;
    res.json(req.product);
  };

  create = async (req: Request, res: Response) => {
    const { file } = req;
    const { name, description, price, category, quantity, shipping } = req.body;

    if (
      !name ||
      !description ||
      !price ||
      !category ||
      !quantity ||
      !shipping
    ) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    let product = new Product(req.body);

    // 1kb = 1000
    // 1mb = 1000000

    if (file) {
      if (file.size > 2000000) {
        return res.status(400).json({
          error: "Image should be less than 2mb in size",
        });
      }
    }
    product.photo.data = file.buffer;
    product.photo.contentType = file.mimetype;

    product.save((error, data) => {
      if (error) {
        return res.status(400).json({
          error: errorHandler(error),
        });
      }

      res.status(200).json(data);
    });
  };

  update = async (req: Request, res: Response) => {
    const { file } = req;
    const { name, description, price, category, quantity, shipping } = req.body;

    if (
      !name ||
      !description ||
      !price ||
      !category ||
      !quantity ||
      !shipping
    ) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    let product = new Product(req.product);
    product = _.extend(product, req.body);

    if (file) {
      if (file.size > 2000000) { // 2mb = 2000000
        return res.status(400).json({
          error: "Image should be less than 2mb in size",
        });
      }
    }
    product.photo.data = file.buffer;
    product.photo.contentType = file.mimetype;
    
    product.save((error, data) => {
      if (error) {
        return res.status(400).json({
          error: errorHandler(error),
        });
      }

      res.status(200).json(data);
    });
  };

  delete = async (req: Request, res: Response) => {
    const product = new Product(req.product);
    product.remove((err, deletedProduct) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json({
        message: "Product deleted successfully",
      });
    });
  };

  productById = async (
    req: Request,
    res: Response,
    next: NextFunction,
    id: string
  ) => {
    Product.findById(id).exec((err, product) => {
      if (err || !product) {
        return res.status(404).json({
          error: "Product not found",
        });
      }

      req.product = product;
      next();
    });
  };
}

export default new ProductController();
