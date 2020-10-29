import { Request, Response } from "express";
import errorHandler from "../../helpers/dbErrorhandler";
import Product from "../models/ProductModel";
import fs from 'fs';

class ProductController {
  index = async (req: Request, res: Response) => {};

  show = async (req: Request, res: Response) => {};

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

      res.status(200).json({
        Product: data,
      });
    });
  };

  update = async (req: Request, res: Response) => {};

  delete = async (req: Request, res: Response) => {};
}

export default new ProductController();
