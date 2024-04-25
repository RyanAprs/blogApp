import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

export const register = (req: Request, res: Response) => {
  const user_id = uuidv4();
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    return res.status(400).send({
      status: false,
      status_code: 400,
      message: "All fields are required",
    });
  }

  const authData = {
    user_id,
    email,
    username,
    password,
  };

  try {
    return res.status(201).json({
      status: true,
      status_code: 201,
      message: "Register successfully",
      data: authData,
    });
  } catch (error) {
    return res.status(422).send({
      status: false,
      status_code: 422,
      message: error,
    });
  }
};

export const login = (req: Request, res: Response) => {
  res.send("user register");
};
