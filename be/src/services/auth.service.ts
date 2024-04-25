import authModel from "../models/auth.model";

export const createUser = async (payload: any) => {
  return await authModel.create(payload);
};

export const findUserByEmail = async (email: string) => {
  return await authModel.findOne({ email });
};
