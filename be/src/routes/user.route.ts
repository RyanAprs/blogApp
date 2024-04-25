import { Router } from "express";
import { getUsers } from "../controllers/user.controller";

export const UserRouter: Router = Router();

UserRouter.get("/", getUsers);
UserRouter.put("/:id", getUsers);
