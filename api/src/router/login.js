import { Router } from "express";
import { logIn, logOut } from "../auth";
import { Unauthorized } from "../errors";
import { asyncErrorHandler, auth, guest } from "../middleware";
import { User } from "../models";
import { loginSchema, validateUser } from "../validation";

const router = Router();

router.post(
  "/login",
  guest,
  asyncErrorHandler(async (req, res) => {
    await validateUser(loginSchema, req.body);
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password)))
      throw new Unauthorized("Incorrect email or password");

    logIn(req, user.id);

    res.json({ message: "logged in" });
    // const user = await User.findOne({email})
  })
);

router.post(
  "/logout",
  auth,
  asyncErrorHandler(async (req, res) => {
    await logOut(req, res);

    res.json({ message: "Logged out." });
  })
);

export default router;
