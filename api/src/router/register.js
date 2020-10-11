import { Router } from "express";
import { logIn } from "../auth";
import { BadRequest } from "../errors";
import { guest } from "../middleware";
import { asyncErrorHandler } from "../middleware/errors";
import { User } from "../models";
import { registerSchema, validateUser } from "../validation";

const router = Router();

router.post(
  "/register",
  guest,
  asyncErrorHandler(async (req, res) => {
    await validateUser(registerSchema, req.body);

    const { email, name, password } = req.body;

    const found = await User.exists({ email });
    if (found) {
      throw new BadRequest("User may already exist");
      // throw new Error("Invalid error"); //User already exists - Generic error.
    }

    const user = await User.create({ email, name, password });
    console.log(user.id);
    logIn(req, user.id);
    res.json({ message: "Created" });
  })
);

export default router;
