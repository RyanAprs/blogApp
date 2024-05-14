import { Router } from "express";
import {
  createComment,
  getCommentByBlog,
  getComments,
} from "../controllers/comment.controller";

export const CommentRouter: Router = Router();

CommentRouter.get("/", getComments);
CommentRouter.get("/:blog_id", getCommentByBlog);
CommentRouter.post("/", createComment);
