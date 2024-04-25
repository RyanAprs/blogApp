import { Request, Response } from "express";
import { checkPassword, hashPassword } from "../utils/hashing";
import { v4 as uuidv4 } from "uuid";
import { createUser, findUserByEmail } from "../services/auth.service";
import { signJWT } from "../utils/jwt";

export const register = async (req: Request, res: Response) => {
  const user_id = uuidv4();
  const { email, name, password } = req.body;

  if (!email || !name || !password) {
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
    name,
    password: hashedPassword,
  };

  try {
    const userEmail = await findUserByEmail(email);

    if (userEmail) {
      return res.status(409).send({
        status: false,
        status_code: 409,
        message: "Email is already registered",
      });
    }

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

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({
        status: false,
        status_code: 400,
        message: "All fields are required",
      });
    }

    try {
      const user = await findUserByEmail(email);

      if (!user) {
        return res.status(401).json({
          status: false,
          status_code: 401,
          message: "Invalid email or password",
        });
      }

      const accessToken = signJWT({ ...user }, { expiresIn: "1d" });

      const validPassword =
        user && typeof user.password === "string"
          ? checkPassword(password, user.password)
          : false;

      if (!validPassword) {
        return res.status(401).json({
          status: false,
          status_code: 401,
          message: "Invalid email or password",
        });
      }

      return res.status(200).send({
        status: true,
        status_code: 200,
        message: "Login success",
        data: user,
        token: accessToken,
      });
    } catch (error: any) {
      return res.status(422).send({
        status: false,
        status_code: 422,
        message: error.message,
      });
    }
  } catch (error: any) {
    return res.status(422).send({
      status: false,
      status_code: 422,
      message: error.message,
    });
  }
};
