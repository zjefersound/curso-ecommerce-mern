import { Request, Response } from "express";
import errorHandler from "../../helpers/dbErrorhandler";
import Category from "../models/CategoryModel";

class CategoryController {
  index = async (req: Request, res: Response) => {};

  show = async (req: Request, res: Response) => {};

  create = async (req: Request, res: Response) => {
    const category = new Category(req.body);
    category.save((error, data) => {
      if (error) {
        return res.status(400).json({
          error: errorHandler(error),
        });
      }

      res.status(200).json({
        category: data,
      });
    });

  };

  update = async (req: Request, res: Response) => {};

  delete = async (req: Request, res: Response) => {};
}

export default new CategoryController();
