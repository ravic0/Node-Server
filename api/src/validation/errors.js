import { BadRequest } from "../errors";

export const validateUser = async (schema, payload) => {
  try {
    await schema.validateAsync(payload, { abortEarly: false });
  } catch (err) {
    throw new BadRequest(err);
  }
};
