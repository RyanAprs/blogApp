import authModel from "../models/auth.model";

export const getAllUser = async () => {
  return await authModel
    .find()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getUserById = async (id: string) => {
  return await authModel.findOne({ user_id: id });
};

export const getUserAndUpdate = async (id: string, payload: any) => {
  return await authModel.findOneAndUpdate(
    {
      user_id: id,
    },
    {
      $set: payload,
    }
  );
};
