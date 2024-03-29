import Joi from "joi";
import { BCRYPT_MAX_BYTES } from "../config";

const email = Joi.string()
  .email()
  .min(8)
  .max(254)
  .lowercase()
  .trim()
  .required();
const name = Joi.string().min(3).max(128).trim().required();
const password = Joi.string().min(8).max(BCRYPT_MAX_BYTES, "utf8").required(); // TODO: Can add regex
// To then hide this regex from the user, use the message method post regex
export const registerSchema = Joi.object({
  email,
  name,
  password,
  passwordConfirmation: Joi.valid(Joi.ref("password")).required(),
});

export const loginSchema = Joi.object({
  email,
  password,
});
