const express = require("express");
const {
  register,
  login,
  editUser,
  addUser,
  deleteUser,
  getAllUser,
  getUserDetail,
  uploadAvatar,
  findUserByKeyword
} = require("../controllers/user.controller");
const { User } = require("./../models/index");
const { checkExits } = require("../middlewares/validate/checkExist");
const { authenticate } = require("../middlewares/validate/authenticate");
const { USER_TYPE } = require("../utils/constants");
const { authorize } = require("../middlewares/validate/authorize");
const { checkPasswordValid } = require("../middlewares/validate/checkValid");
const { uploadImage } = require("../middlewares/upload/uploadImage");

const userRouter = express.Router();

userRouter.post("/register", checkPasswordValid, register);
userRouter.post(
  "/",
  authenticate,
  authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]),
  uploadImage("avatar"),
  addUser
);
userRouter.post("/login", login);
userRouter.get("/", authenticate, getAllUser);
userRouter.get("/:id", authenticate, checkExits(User), getUserDetail);
userRouter.put(
  "/:id",
  authenticate,
  authorize([USER_TYPE.CLIENT, USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]),
  checkExits(User),
  uploadImage("avatar"),
  editUser
);
userRouter.delete(
  "/:id",
  authenticate,
  authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]),
  checkExits(User),
  deleteUser
);

userRouter.post(
  "/upload-avatar",
  authenticate,
  uploadImage("avatar"),
  uploadAvatar
);
userRouter.get("/keyword/:keyword", authenticate, findUserByKeyword);

module.exports = {
  userRouter,
};
