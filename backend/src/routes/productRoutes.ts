import { Router } from "express";
import multer from 'multer';

import ProductController from "../app/controllers/ProductController";
import UserController from "../app/controllers/UserController";
import authMiddleware, { isAdmin, isAuth } from "../app/middlewares/AuthMiddleware";

const router = Router();
const upload = multer();

router.post("/create/:userId", upload.single('photo'), authMiddleware, isAuth, isAdmin, ProductController.create);

router.param("userId", UserController.userById);

export default router;
