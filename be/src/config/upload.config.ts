import multer from "multer";
import storage from "./storage.config";
import fileFilter from "./fileFilter.config";
import { promisify } from "util";

const upload = multer({ storage: storage, fileFilter: fileFilter }).single(
  "image"
);

const uploadAsync = promisify(upload);

export default uploadAsync;