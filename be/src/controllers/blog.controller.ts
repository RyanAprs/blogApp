import { Request, Response } from "express";
import {
  getAllBlogs,
  getBlogById,
  getBlogByTitle,
  insertBlog,
} from "../services/blog.service";
import { v4 as uuidv4 } from "uuid";
import uploadAsync from "../config/upload.config";

export const getBlog = async (req: Request, res: Response) => {
  const id = req.params.id;

  if (id) {
    const blog = await getBlogById(id);
    if (blog) {
      return res.status(200).send({
        status: true,
        status_code: 200,
        message: "Get detail data blog successfully",
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
    return await getAllBlogs(req, res, (error) => {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    });
  }
};

export const getSearchBlog = async (req: Request, res: Response) => {
  const q = req.params.q;

  const blog = await getBlogByTitle(q);
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
};

export const createBlog = async (req: Request, res: Response) => {
  try {
    await uploadAsync(req, res);

    const { title, description, author } = req.body;
    const blog_id = uuidv4();
    const _id = uuidv4();
    const image = req.file ? req.file.filename : null;

    if (!title || !description || !author || !image) {
      return res.status(400).send({
        status: false,
        status_code: 400,
        message: "All fields are required",
      });
    }

    const blogData = {
      _id,
      blog_id,
      title,
      description,
      author,
      image,
    };
    await insertBlog(blogData);
    return res.status(200).send({
      status: true,
      status_code: 200,
      message: "Blog created successfully",
      data: blogData,
    });
  } catch (error: any) {
    return res.status(422).send({
      status: false,
      status_code: 422,
      message: error.message || "An error occurred",
      data: {},
    });
  }
};

export const updateBlog = (req: Request, res: Response) => {
  res.send("Update blog");
};

export const deleteBlog = (req: Request, res: Response) => {
  res.send("Delete blog");
};
