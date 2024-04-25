import { Router } from "express";
import { login, register } from "../controllers/auth.controller";

export const AuthRouter: Router = Router();

AuthRouter.post("/register", register);
AuthRouter.post("/login", login);
