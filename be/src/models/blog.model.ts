import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  blog_id: {
    type: String,
    unique: true,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  author: {
    type: String,
  },
});

const blogModel = mongoose.model("blogs", blogSchema);

export default blogModel;
