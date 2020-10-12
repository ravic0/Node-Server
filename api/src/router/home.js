import { Router } from "express";
import { asyncErrorHandler, auth } from "../middleware";
import { User } from "../models";

const router = Router();

router.post(
  "/home",
  auth,
  asyncErrorHandler(async (req, res) => {
    const user = await User.findById(req.session.userId).select(
      "-password -__v"
    ); // select fields -- Same can be achieved using set on userSchema and using 'toJson'

    res.json(user);
  })
);

export default router;
