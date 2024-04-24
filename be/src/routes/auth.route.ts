import { Router } from "express";

export const AuthRouter: Router = Router();

AuthRouter.post("/Register");
AuthRouter.post("/login");
