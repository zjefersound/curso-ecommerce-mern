import { Router } from "express";
import multer from 'multer';

import ProductController from "../app/controllers/ProductController";
import UserController from "../app/controllers/UserController";
import authMiddleware, { isAdmin, isAuth } from "../app/middlewares/AuthMiddleware";

const router = Router();
const upload = multer();

router.get("/products", ProductController.index);
router.get("/products/related/:productById", ProductController.listRelated);
router.get("/products/categories", ProductController.listCategories);
router.post("/products/by/search", ProductController.listBySearch);

router.get("/product/photo/:productById", ProductController.photo);
router.get("/product/:productById", ProductController.show);

router.post("/product/:userId", upload.single('photo'), authMiddleware, isAuth, isAdmin, ProductController.create);
router.put("/product/:productById/:userId", upload.single('photo'), authMiddleware, isAuth, isAdmin, ProductController.update);
router.delete("/product/:productById/:userId", authMiddleware, isAuth, isAdmin, ProductController.delete);

router.param("userId", UserController.userById);
router.param("productById", ProductController.productById);

export default router;
