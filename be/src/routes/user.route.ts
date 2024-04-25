import { Router } from "express";
import { getUsers, updateUser } from "../controllers/user.controller";
import { requireUser } from "../middleware/auth";

export const UserRouter: Router = Router();

UserRouter.get("/", getUsers);
UserRouter.get("/:id", getUsers);
UserRouter.put("/:id", requireUser, updateUser);
