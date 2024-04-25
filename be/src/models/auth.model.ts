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
    name: {
      type: String,
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
  { timestamps: true, _id: true }
);

const authModel = mongoose.model("auths", authSchema);

export default authModel;
