import { Router } from "express";
import UserController from '../app/controllers/UserController';
import authMiddleware from "../app/middlewares/AuthMiddleware";
import signUpValidator from "../validators/signUpValidator";

const router = Router();

router.param('userId', UserController.show);

router.post("/signup", signUpValidator, UserController.create);
router.get("/users/:userId", authMiddleware, UserController.show);

export default router;
