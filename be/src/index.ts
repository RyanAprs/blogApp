import express, { Request, Response } from "express";
import { Blogrouter } from "./routes/blog.route";

// connect to db
import "./utils/connectDB";

const app = express();
const port: number = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/blog", Blogrouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
