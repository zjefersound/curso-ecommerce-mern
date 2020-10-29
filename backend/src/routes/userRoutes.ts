import { Router } from "express";
import UserController from "../app/controllers/UserController";
import authMiddleware, { isAdmin, isAuth } from "../app/middlewares/AuthMiddleware";
import signUpValidator from "../validators/signUpValidator";

const router = Router();

router.post("/signup", signUpValidator, UserController.create);
router.get("/secret/:userId", authMiddleware, isAuth, isAdmin, (req, res) => {
  res.json({ profile: req.profile });
});

router.param("userId", UserController.userById);

export default router;
