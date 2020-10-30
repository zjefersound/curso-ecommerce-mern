import { Router } from "express";
import multer from 'multer';

import ProductController from "../app/controllers/ProductController";
import UserController from "../app/controllers/UserController";
import authMiddleware, { isAdmin, isAuth } from "../app/middlewares/AuthMiddleware";

const router = Router();
const upload = multer();

router.get("/", ProductController.index);
router.get("/:productById", ProductController.show);
router.get("/related/:productById", ProductController.listRelated);
router.get("/categories", ProductController.listCategories);
router.post("/:userId", upload.single('photo'), authMiddleware, isAuth, isAdmin, ProductController.create);
router.put("/:productById/:userId", upload.single('photo'), authMiddleware, isAuth, isAdmin, ProductController.update);
router.delete("/:productById/:userId", authMiddleware, isAuth, isAdmin, ProductController.delete);

router.param("userId", UserController.userById);
router.param("productById", ProductController.productById);

export default router;
