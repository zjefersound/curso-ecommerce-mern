import { Router } from "express";
import AuthController from '../app/controllers/AuthController';

const router = Router();

router.post("/signin", AuthController.signin);
router.get("/signout", AuthController.signout);

export default router;
