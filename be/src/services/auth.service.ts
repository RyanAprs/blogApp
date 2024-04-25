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

export const createUser = async (payload: any) => {
  return await authModel.create(payload);
};

export const findUserByEmail = async (email: string) => {
  return await authModel.findOne({ email });
};

export const findUserByUsername = async (username: string) => {
  return await authModel.findOne({ username });
};
