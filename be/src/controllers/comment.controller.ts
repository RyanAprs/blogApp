import { Request, Response } from "express";
import {
  getAllComment,
  getCommentByBlogId,
  insertComment,
} from "../services/comment.service";
import { v4 as uuidv4 } from "uuid";

export const getComments = async (req: Request, res: Response) => {
  const id = req.params.id;

  if (id) {
    const comment = await getCommentByBlogId(id);
    if (comment) {
      return res.status(200).send({
        status: true,
        status_code: 200,
        message: "Get detail data comment successfully",
        data: comment,
      });
    } else {
      return res.status(404).send({
        status: false,
        status_code: 404,
        message: "Data not found",
        data: {},
      });
    }
  } else {
    try {
      const comments = await getAllComment();
      if (Array.isArray(comments) && comments.length > 0) {
        return res.status(200).send({
          status: true,
          status_code: 200,
          message: "Get data comment success",
          data: comments,
        });
      } else {
        return res.status(200).send({
          status: true,
          status_code: 200,
          message: "No comment posted",
          data: {},
        });
      }
    } catch (error) {
      return res.status(500).send({
        status: false,
        status_code: 500,
        message: "Internal Server Error",
        data: {},
      });
    }
  }
};

export const createComment = async (req: Request, res: Response) => {
  const comment_id = uuidv4();
  const { user_id, blog_id, comment, name } = req.body;

  if ( !comment) {
    return res.status(400).send({
      status: false,
      status_code: 400,
      message: "Comment field are required",
    });
  }

  const commentData = {
    comment_id,
    user_id,
    blog_id,
    comment,
    name,
  };

  try {
    await insertComment(commentData);
    return res.status(200).json({
      status: true,
      status_code: 200,
      message: "created comment successfully",
      data: commentData,
    });
  } catch (error: any) {
    return res.status(422).send({
      status: false,
      status_code: 422,
      message: error.message,
    });
  }
};
