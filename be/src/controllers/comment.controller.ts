import { Request, Response } from "express";
import { getAllComment, getCommentByBlogId } from "../services/comment.service";

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
