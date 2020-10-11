import { SESSION_NAME } from "./config";

export const logIn = (req, userId) => {
  req.session.userId = userId;
};

export const logOut = (req, res) => {
  // if (req.session.userId) delete req.session.userId;
  return new Promise((resolve, reject) => {
    req.session.destroy(reject);

    res.clearCookie(SESSION_NAME);
    resolve();
  });
};

export const isLoggedIn = (req) => !!req.session.userId;
