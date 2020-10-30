import { NextFunction, Request, Response } from "express";
import errorHandler from "../../helpers/dbErrorhandler";
import Category from "../models/CategoryModel";
import _ from "lodash";

class CategoryController {
  index = async (req: Request, res: Response) => {
    Category.find().exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: 'Categories not found',
        });
      }
      res.json(data);
    });
  };

  show = async (req: Request, res: Response) => {
    res.json(req.category);
  };

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

  update = async (req: Request, res: Response) => {
    let category = new Category(req.category);
    category = _.extend(category, req.body);

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

  delete = async (req: Request, res: Response) => {
    const category = new Category(req.category);
    category.remove((err, deletedCategory) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }

      res.json({
        message: "Category deleted successfully",
      });
    });
  };

  categoryById = async (
    req: Request,
    res: Response,
    next: NextFunction,
    id: string
  ) => {
    Category.findById(id).exec((err, category) => {
      if (err || !category) {
        return res.status(404).json({
          error: "Category not found",
        });
      }

      req.category = category;
      next();
    });
  };
}

export default new CategoryController();
