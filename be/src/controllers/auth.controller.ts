import { Request, Response } from "express";
import { hashPassword } from "../utils/hashing";
import { v4 as uuidv4 } from "uuid";
import { createUser, getAllUser } from "../services/auth.service";

export const getUsers = async (req: Request, res: Response) => {
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
    console.log(error);
    return res.status(500).send({
      status: false,
      status_code: 500,
      message: "Internal Server Error",
      data: {},
    });
  }
};

export const register = async (req: Request, res: Response) => {
  const user_id = uuidv4();
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    return res.status(400).send({
      status: false,
      status_code: 400,
      message: "All fields are required",
    });
  }

  const hashedPassword = hashPassword(password);
  const authData = {
    user_id,
    email,
    username,
    password: hashedPassword,
  };

  try {
    await createUser(authData);
    return res.status(201).json({
      status: true,
      status_code: 201,
      message: "Register successfully",
      data: authData,
    });
  } catch (error: any) {
    return res.status(422).send({
      status: false,
      status_code: 422,
      message: error.message,
    });
  }
};

export const login = (req: Request, res: Response) => {
  res.send("user register");
};
