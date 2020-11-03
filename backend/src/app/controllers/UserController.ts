import { NextFunction, Request, Response } from "express";
import errorHandler from "../../helpers/dbErrorhandler";
import User from "../models/UserModel";

class UserController {
  index = async (req: Request, res: Response) => { };

  secret = async (req: Request, res: Response) => {
    return res.json(req.profile);
  };

  show = async (req: Request, res: Response) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;

    return res.json(req.profile);
  };

  create = async (req: Request, res: Response) => {
    const user = new User(req.body);
    user.save((error, user) => {
      if (error) {
        return res.status(400).json({
          error: errorHandler(error),
        });
      }

      return res.status(200).json({
        user,
      });
    });
  };

  update = async (req: Request, res: Response) => {
    User.findByIdAndUpdate(req.profile._id, { $set: req.body }, { new: true }, (err, user) => { 
      if (err) {
        return res.status(400).json({error: "You're not authorized to perform this action"});
      }
      const responseUser = {
        ...user,
        hashed_password: undefined,
        salt: undefined
      }

      return res.json(responseUser);
    });
  };

  delete = async (req: Request, res: Response) => { };

  userById = async (
    req: Request,
    res: Response,
    next: NextFunction,
    id: string
  ) => {
    User.findById(id).exec((err, user) => {
      if (err || !user) {
        return res.status(404).json({
          error: "User not found",
        });
      }

      req.profile = user;
      next();
    });
  };
}

export default new UserController();
