import { Router } from "express";
import {
  createBlog,
  deleteBlog,
  getBlog,
  getBlogByUser,
  getSearchBlog,
  updateBlog,
} from "../controllers/blog.controller";
import { requireUser } from "../middleware/auth";

export const Blogrouter: Router = Router();

Blogrouter.get("/", getBlog);
Blogrouter.get("/:id", getBlog);
Blogrouter.get("/:user_id/:user_blog_id", getBlogByUser);
Blogrouter.get("/search?q=", getSearchBlog);
Blogrouter.post("/", createBlog);
Blogrouter.put("/:id", requireUser, updateBlog);
Blogrouter.delete("/:id", deleteBlog);
