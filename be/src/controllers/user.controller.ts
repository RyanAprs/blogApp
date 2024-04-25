import { Request, Response } from "express";
import { getAllUser, getUserById } from "../services/user.service";

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
