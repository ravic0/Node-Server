import { isLoggedIn, logOut } from "../auth";
import { SESSION_ABSOLUTE_TIMEOUT } from "../config";
import { Unauthorized } from "../errors";

export const guest = (req, res, next) => {
  if (isLoggedIn(req)) return next(new Unauthorized("Already logged in."));

  next();
};

export const auth = (req, res, next) => {
  if (!isLoggedIn(req)) return next(new Unauthorized("You must be logged in."));
  next();
};

export const active = async (req, res, next) => {
  if (isLoggedIn(req)) {
    const now = Date.now();
    const { createdAt } = req.session;
    if (now > createdAt + SESSION_ABSOLUTE_TIMEOUT) {
      await logOut(req, res);
      return next(new Unauthorized("Session expired"));
    }
  }
  next();
};
