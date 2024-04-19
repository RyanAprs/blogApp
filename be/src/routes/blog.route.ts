import { Router } from "express";
import { getBlog } from "../controllers/blog.controller";

export const Blogrouter: Router = Router();

Blogrouter.get("/", getBlog);

