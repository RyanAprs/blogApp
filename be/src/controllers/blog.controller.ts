import { Request, Response } from "express";
import { getAllBlogs } from "../services/blog.service";

export const getBlog = async (req: Request, res: Response) => {
  const {
    params: { id },
  } = req;

  if (id) {
    console.log("get product by id");
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
