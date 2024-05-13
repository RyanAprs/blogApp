import { Router } from "express";
import { getComments } from "../controllers/comment.controller";

export const CommentRouter: Router = Router();

CommentRouter.get("/", getComments);
CommentRouter.get("/:id", getComments);
