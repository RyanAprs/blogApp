import { Request, Response } from "express";
import {
  getAllUser,
  getUserAndUpdate,
  getUserById,
} from "../services/user.service";
import { profileUploadAsync } from "../config/upload.config";
import { hashPassword } from "../utils/hashing";

export const getUsers = async (req: Request, res: Response) => {
  const id = req.params.id;

  if (id) {
    const user = await getUserById(id);
    if (user) {
      return res.status(200).send({
        status: true,
        status_code: 200,
        message: "Get detail data user successfully",
        data: user,
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
      const users = await getAllUser();
      if (Array.isArray(users) && users.length > 0) {
        return res.status(200).send({
          status: true,
          status_code: 200,
          message: "Get data user success",
          data: users,
        });
      } else {
        return res.status(200).send({
          status: true,
          status_code: 200,
          message: "No user",
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

export const updateUser = async (req: Request, res: Response) => {
  try {
    await profileUploadAsync(req, res);

    const id = req.params.id;
    const { name, email, password, bio } = req.body;
    const image = req.file ? req.file.originalname : null;

    if (!name || !email || !password) {
      return res.status(400).send({
        status: false,
        status_code: 400,
        message: "Fields are required",
      });
    }

    const hashedPassword = hashPassword(password);

    const userData = {
      email,
      name,
      password: hashedPassword,
      image,
      bio,
    };

    const user = await getUserAndUpdate(id, userData);
    if (user) {
      return res.status(200).send({
        status: true,
        status_code: 200,
        message: "User updated successfully",
        data: userData,
      });
    } else {
      return res.status(404).json({
        status: false,
        status_code: 404,
        message: "Data not found",
        data: {},
      });
    }
  } catch (error: any) {
    return res.status(422).send({
      status: false,
      status_code: 422,
      message: error.message || "An error occurred",
      data: {},
    });
  }
};
