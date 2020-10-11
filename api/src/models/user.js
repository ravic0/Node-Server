import { model, Schema } from "mongoose";
import { compare, hash } from "bcryptjs";
import { BCRYPT_WORK_FACTOR } from "../config";

const userSchema = new Schema(
  {
    email: String,
    name: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function () {
  if (this.isModified("password"))
    this.password = await hash(this.password, BCRYPT_WORK_FACTOR);
});

userSchema.methods.matchPassword = function (password) {
  return compare(password, this.password);
};

export const User = model("User", userSchema);
