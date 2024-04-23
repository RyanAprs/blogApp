import { Request, Response, NextFunction } from "express";
import blogModel from "../models/blog.model";
// import BlogType from "../types/blog.type";

export const getAllBlogs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const currentPage = req.query.page || 1;
  const perPage = req.query.perPage || 5;
  let totalItems;

  try {
    const count = await blogModel.countDocuments();
    totalItems = count;

    const blogs = await blogModel
      .find()
      .skip(
        (parseInt(currentPage.toString()) - 1) * parseInt(perPage.toString())
      )
      .limit(parseInt(perPage.toString()));

    if (Array.isArray(blogs) && blogs.length > 0) {
      return res.status(200).json({
        status: true,
        status_code: 200,
        message: "Get data blogs successfully",
        data: blogs,
        total_data: totalItems,
        per_page: parseInt(perPage.toString()),
        current_page: parseInt(currentPage.toString()),
      });
    } else {
      return res.status(200).json({
        status: true,
        status_code: 200,
        message: "Get data blogs successfully",
        data: "No blogs posted",
        total_data: totalItems,
        per_page: parseInt(perPage.toString()),
        current_page: parseInt(currentPage.toString()),
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Still have an error get product by id
export const getBlogById = async (id: string) => {
  return await blogModel.findById({ blog_id: id });
};

export const insertBlog = async (payload: any) => {
  return await blogModel.create(payload);
};
