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

export const getCommentByBlogId = async (blog_id: string) => {
  return await commentModel.find({ blog_id: blog_id });
};

export const insertComment = async (payload: any) => {
  return await commentModel.create(payload);
};

export const getCommentAndDelete = async (id: string) => {
  try {
    const blog = await commentModel.findOne({ comment_id: id });
    if (!blog) {
      const error = new Error("Data not found");
      throw error;
    }
    const result = await commentModel.findOneAndDelete({ comment_id: id });
    return result;
  } catch (error) {
    throw error;
  }
};
