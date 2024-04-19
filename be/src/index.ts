import express, { Request, Response } from "express";
import { Blogrouter } from "./routes/blog.route";

const app = express();
const port: number = 3000;

app.use("/v1/blogs", Blogrouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
