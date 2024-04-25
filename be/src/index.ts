import express from "express";
import { routes } from "./routes/index";
import deserializeToken from "./middleware/deserializeToken";
// connect to db
import "./utils/connectDB";

const app = express();
const port: number = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(deserializeToken);

routes(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
