import mongoose from "mongoose";

const authSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    username: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    image: {
      type: String,
      default: null,
    },
    bio: {
      type: String,
      default: null,
    },
  },
  { timestamps: true, _id: false }
);

const authModel = mongoose.model("auth", authSchema);

export default authModel;
