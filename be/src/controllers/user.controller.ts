import { Request, Response } from "express";
import { getAllUser } from "../services/user.service";

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
    return res.status(500).send({
      status: false,
      status_code: 500,
      message: "Internal Server Error",
      data: {},
    });
  }
};
