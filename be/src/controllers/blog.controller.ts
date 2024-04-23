import { Request, Response } from "express";
import { getAllBlogs, getBlogById, insertBlog } from "../services/blog.service";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import multer from "multer";

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
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const fileName = uuidv4() + ext;
    cb(null, fileName);
  },
});

const fileFilter = (req: Request, file: Express.Multer.File, cb: any) => {
  const allowedExtensions = [".jpg", ".jpeg", ".png"];
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowedExtensions.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Only .jpg, .jpeg, and .png files are allowed"));
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter }).single(
  "image"
);

export const createBlog = async (req: Request, res: Response) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(400).send({
        status: false,
        status_code: 400,
        message: err.message,
      });
    }

    const { title, description, author } = req.body;
    const image = req.file ? req.file.filename : null;

    if (!title || !description || !author || !image) {
      return res.status(400).send({
        status: false,
        status_code: 400,
        message: "All fields are required",
      });
    }

    const blog = {
      blog_id: uuidv4(),
      title,
      description,
      author,
      image,
    };
    return res.status(200).send({
      status: true,
      status_code: 200,
      message: "Get data blog successfully",
      data: blog,
    });
  });
};
export const updateBlog = (req: Request, res: Response) => {
  res.send("Update blog");
};

export const deleteBlog = (req: Request, res: Response) => {
  res.send("Delete blog");
};
