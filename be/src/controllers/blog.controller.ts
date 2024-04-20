import { Request, Response } from "express";

export const getBlog = (req: Request, res: Response) => {
  res.send("Get all blogs");
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
