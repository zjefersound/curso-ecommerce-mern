import { Router } from "express";
import authMiddleware from "../app/middlewares/AuthMiddleware";

const router = Router();

router.get("/hello", authMiddleware, (req, res) => {
  res.send('Olá')
});


export default router;
