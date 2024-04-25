import express from "express";
import { routes } from "./routes/index";

// connect to db
import "./utils/connectDB";
import deserializeToken from "./middleware/deserializeToken";

const app = express();
const port: number = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(deserializeToken);

routes(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
