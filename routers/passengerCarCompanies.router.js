const express = require("express");
const {
  create,
  getAll,
  getDetail,
  update,
  remove,
  findByKeyword,
  uploadImgCompany,
} = require("../controllers/passengerCarCompanies.controller");
const { checkExits } = require("../middlewares/validate/checkExist");
const { authenticate } = require("../middlewares/validate/authenticate");
const { authorize } = require("../middlewares/validate/authorize");
const { USER_TYPE } = require("../utils/constants");
const { uploadImage } = require("../middlewares/upload/uploadImage");
const {
  passengerCarCompanies,
} = require("../services/passengerCarCompanies.service");

const passengerCarCompaniesRouter = express.Router();

passengerCarCompaniesRouter.post(
  "/",
  authenticate,
  authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]),
  uploadImage("image"),
  create
);
passengerCarCompaniesRouter.get("/", getAll);
passengerCarCompaniesRouter.get(
  "/:id",
  checkExits(passengerCarCompanies),
  getDetail
);
passengerCarCompaniesRouter.put(
  "/:id",
  authenticate,
  authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]),
  checkExits(passengerCarCompanies),
  uploadImage("image"),
  update
);
passengerCarCompaniesRouter.delete(
  "/:id",
  authenticate,
  authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]),
  checkExits(passengerCarCompanies),
  remove
);
passengerCarCompaniesRouter.get("/keyword/:keyword", findByKeyword);
passengerCarCompaniesRouter.post(
  "/upload-company/:id",
  authenticate,
  uploadImage("company"),
  uploadImgCompany
);
module.exports = {
  passengerCarCompaniesRouter,
};
