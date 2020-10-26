import { Router } from "express";
import UserController from '../app/controllers/UserController';
import signupValidator from '../validators/signUpValidator';

const routes = Router();

routes.post("/signup", signupValidator, UserController.create);

export default routes;
