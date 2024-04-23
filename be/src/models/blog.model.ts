import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      unique: true,
    },
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
  },
  { timestamps: true, _id: false }
);

const blogModel = mongoose.model("blogs", blogSchema);

export default blogModel;
