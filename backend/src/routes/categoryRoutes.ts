import { Router } from "express";
import CategoryController from "../app/controllers/CategoryController";
import UserController from "../app/controllers/UserController";
import authMiddleware, { isAdmin, isAuth } from "../app/middlewares/AuthMiddleware";

const router = Router();

router.post("/create/:userId", authMiddleware, isAuth, isAdmin, CategoryController.create);

router.param("userId", UserController.userById);

export default router;
