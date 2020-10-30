import { NextFunction, Request, Response } from "express";
import errorHandler from "../../helpers/dbErrorhandler";
import Product from "../models/ProductModel";
import _ from "lodash";

class ProductController {
  index = async (req: Request, res: Response) => {
    let order = req.body.order ? req.body.order : "asc";
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    let limit = req.body.limit ? Number(req.body.limit) : 6;

    Product.find()
      .select("-photo")
      .populate("category")
      .sort([[sortBy, order]])
      .limit(limit)
      .exec((err, data) => {
        if (err) {
          return res.status(400).json({
            error: "Products not found",
          });
        }
        res.json(data);
      });
  };

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
      if (file.size > 2000000) {
        // 2mb = 2000000
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

  /**
   * let order = req.body.order ? req.body.order : "asc";
   * let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
   * let limit = req.body.limit ? Number(req.body.limit) : 6;
   */
  listRelated = async (req: Request, res: Response) => {
    let limit = req.body.limit ? Number(req.body.limit) : 6;

    Product.find({ _id: { $ne: req.product }, category: req.product.category })
      .limit(limit)
      .populate("category", "_id name")
      .exec((err, products) => {
        if (err) {
          return res.status(400).json({
            error: "Products not found",
          });
        }
        res.json(products);
      });
  };

  listCategories = async (req: Request, res: Response) => {
    Product.distinct("category", {}, (err, categories) => {
      if (err) {
        return res.status(400).json({
          error: "Categories not found",
        });
      }
      res.json(categories);
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
