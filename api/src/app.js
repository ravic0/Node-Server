import express from "express";
import expressSession from "express-session";
import { SESSION_OPTIONS } from "./config";
import { active, asyncErrorHandler } from "./middleware";
import { home, login, register } from "./router";

export const createApp = (store) => {
  const app = express();

  app.use(express.json());

  app.use(
    expressSession({
      ...SESSION_OPTIONS,
      store,
    })
  );

  app.use(login);

  app.use(register);

  app.use(home);

  app.use(asyncErrorHandler(active));

  app.get("/", (req, res) => {
    res.json({ message: "Works" });
  });

  app.use((req, res, next) => {
    res.status(404).json({ message: "Error 404" });
  });

  app.use((err, req, res, next) => {
    if (!err.status) console.log(err.stack);
    res.status(err.status || 500).json({ message: err.message || "Error 500" });
  });

  return app;
};
