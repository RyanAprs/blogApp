import { Request, Response } from "express";

export const getBlog = (req: Request, res: Response) => {
  res.send("Get all blogs");
};
