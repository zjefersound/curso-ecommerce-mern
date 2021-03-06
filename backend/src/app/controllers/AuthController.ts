import { Request, Response } from "express";
import User from "../models/UserModel";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";4
import dotenv from 'dotenv';
dotenv.config();

class UserController {
  signin = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    User.findOne({ email }, (err, user) => {
      (async () => {
        if (err || !user) {
          return res.json({
            error: "An user with that password does not exists.",
          }).sendStatus(400);
        }
        const isValidPassword = await bcrypt.compare(password, user.hashed_password);
  
        if (!isValidPassword) {
          return res.json({
            error: "Email and password don't match",
          }).sendStatus(401);
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

  signout = async (req: Request, res: Response) => {
    res.clearCookie('t').json({ message: 'Signed out successfully' });
  };
  
}

export default new UserController();
