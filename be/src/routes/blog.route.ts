import { Router } from "express";
import {
  createBlog,
  deleteBlog,
  getBlog,
  updateBlog,
} from "../controllers/blog.controller";

export const Blogrouter: Router = Router();

Blogrouter.get("/", getBlog);
Blogrouter.get("/:id", getBlog);
Blogrouter.post("/", createBlog);
Blogrouter.put("/:id", updateBlog);
Blogrouter.delete("/:id", deleteBlog);
