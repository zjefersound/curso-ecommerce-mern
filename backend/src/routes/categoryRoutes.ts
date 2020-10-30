import { Router } from "express";
import CategoryController from "../app/controllers/CategoryController";
import UserController from "../app/controllers/UserController";
import authMiddleware, { isAdmin, isAuth } from "../app/middlewares/AuthMiddleware";

const router = Router();

router.get("/", CategoryController.index);
router.get("/:categoryById", CategoryController.show);
router.post("/:userId", authMiddleware, isAuth, isAdmin, CategoryController.create);
router.put("/:categoryById/:userId", authMiddleware, isAuth, isAdmin, CategoryController.update);
router.delete("/:categoryById/:userId", authMiddleware, isAuth, isAdmin, CategoryController.delete);

router.param("userId", UserController.userById);
router.param("categoryById", CategoryController.categoryById);

export default router;
