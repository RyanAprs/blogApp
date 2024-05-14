import commentModel from "../models/comment.model";

export const getAllComment = async () => {
  return await commentModel
    .find()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getCommentByBlogId = async (id: string) => {
  return await commentModel.findOne({ blog_id: id });
};

export const insertComment = async (payload: any) => {
  return await commentModel.create(payload);
};

