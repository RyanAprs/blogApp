import { Router } from "express";
import {
  createBlog,
  deleteBlog,
  getBlog,
  getSearchBlog,
  updateBlog,
} from "../controllers/blog.controller";
import { requireUser } from "../middleware/auth";

export const Blogrouter: Router = Router();

Blogrouter.get("/", getBlog);
Blogrouter.get("/:id", getBlog);
Blogrouter.get("/search?q=", getSearchBlog);
Blogrouter.post("/", requireUser, createBlog);
Blogrouter.put("/:id", requireUser, updateBlog);
Blogrouter.delete("/:id", requireUser, deleteBlog);
