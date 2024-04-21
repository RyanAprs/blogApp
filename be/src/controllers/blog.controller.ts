import { Request, Response } from "express";
import { getAllBlogs, getBlogById } from "../services/blog.service";

export const getBlog = async (req: Request, res: Response) => {
  const {
    params: { id },
  } = req;

  if (id) {
    const blog = await getBlogById(id);
    if (blog) {
      return res.status(200).send({
        status: true,
        status_code: 200,
        message: "Get data blog successfully",
        data: blog,
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
    await getAllBlogs(req, res, (error) => {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    });
  }
};

export const createBlog = (req: Request, res: Response) => {
  res.send("Create blog");
};

export const updateBlog = (req: Request, res: Response) => {
  res.send("Update blog");
};

export const deleteBlog = (req: Request, res: Response) => {
  res.send("Delete blog");
};
