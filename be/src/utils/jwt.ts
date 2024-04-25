import jwt from "jsonwebtoken";
import CONFIG from "../config/environment";
import { REFUSED } from "dns";

export const signJWT = (
  payload: object,
  options?: jwt.SignOptions | undefined
) => {
  return jwt.sign(payload, CONFIG.jwt_private, {
    ...(options && options),
    algorithm: "RS256",
  });
};

export const verifyJwt = (token: string) => {
  const decoded: any = jwt.verify(token, CONFIG.jwt_public);
  try {
    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (error: any) {
    return {
      valid: false,
      expired: error.message === "jwt is expired or not eligible to use",
      decoded: null,
    };
  }
};
