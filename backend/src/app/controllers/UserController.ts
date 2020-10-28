import { NextFunction, Request, Response } from "express";
import errorHandler from "../../helpers/dbErrorhandler";
import User from "../models/UserModel";

class UserController {
  index = async (req: Request, res: Response) => {};

  show = async (req: Request, res: Response, next: NextFunction) => {
    const { userId: id } = req.params;
    User.findById(id).exec((err, user) => {
      if (err || !user ) {
        return res.status(400).json({
          error: "User not found"
        })
      }
      res.status(200).json({user});
      next();
    });
  };

  create = async (req: Request, res: Response) => {
    const user = new User(req.body);
    user.save((error, user) => {
      if (error) {
        return res.status(400).json({
          error: errorHandler(error),
        });
      }

      res.status(200).json({
        user,
      });
    });
  };

  update = async (req: Request, res: Response) => {};

  delete = async (req: Request, res: Response) => {};
}

export default new UserController();
