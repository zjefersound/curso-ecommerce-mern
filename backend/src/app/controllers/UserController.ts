import { Request, Response } from "express";
import User from "../models/UserModel";
import errorHandler from "../../helpers/dbErrorhandler";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

class UserController {
  index = async (req: Request, res: Response) => {
    res.json({ vemkopai: true });
  };

  create = async (req: Request, res: Response) => {
    console.log({ body: req.body });

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

  signin = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    User.findOne({ email }, (err, user) => {
      (async () => {
        if (err || !user) {
          return res.status(400).json({
            error: "An user with that password does not exists.",
          });
        }
        const isValidPassword = await bcrypt.compare(password, user.hashed_password);
  
        if (!isValidPassword) {
          return res.sendStatus(401).json({
            error: "Email and password don't match",
          });
        }
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET || '');
  
        const { _id, name, email, role } = user;
  
        const tokenExpiresIn = new Date();
        tokenExpiresIn.setMonth(tokenExpiresIn.getMonth() + 3);
  
        return res
          .cookie("t", token, { expires: tokenExpiresIn })
          .json({
            user: { _id, name, email, role },
            token,
          });
      })();
    });
  }
}

export default new UserController();
