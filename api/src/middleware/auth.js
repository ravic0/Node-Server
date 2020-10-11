import { isLoggedIn } from "../auth";
import { Unauthorized } from "../errors";

export const guest = (req, res, next) => {
  if (isLoggedIn(req)) return next(new Unauthorized("Already logged in."));

  next();
};

export const auth = (req, res, next) => {
  if (!isLoggedIn(req)) return next(new Unauthorized("You must be logged in."));
  next();
};
