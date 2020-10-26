import { Request, Response } from "express";
import User from '../models/UserModel';

class UserController {
  index = async (req: Request, res: Response) => {
    res.json({ vemkopai: true });
  };
  create = async (req: Request, res: Response) => {
    console.log({body: req.body});
    
    const user = new User(req.body);
    user.save((error, user) => {
      if (error) {
        return res.status(400).json({
          error
        })
      }

      res.status(200).json({
        user
      })
    });
  };
}

export default new UserController();