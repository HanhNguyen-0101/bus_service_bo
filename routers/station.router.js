const express = require("express");
const {
  createStation,
  getAllStation,
  getStationDetail,
  updateStation,
  deleteStation,
  findStationByKeyword
} = require("../controllers/station.controller");
const { checkExits } = require("../middlewares/validate/checkExist");
const { authenticate } = require("../middlewares/validate/authenticate");
const { authorize } = require("../middlewares/validate/authorize");
const { USER_TYPE } = require("../utils/constants");
const { uploadImage } = require("../middlewares/upload/uploadImage");
const { Station } = require("../services/index.service");

const stationRouter = express.Router();

stationRouter.post("/", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), uploadImage("image"), createStation);
stationRouter.get("/", getAllStation);
stationRouter.get("/:id", checkExits(Station), getStationDetail);
stationRouter.put("/:id", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), checkExits(Station), uploadImage("image"), updateStation);
stationRouter.delete("/:id", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), checkExits(Station), deleteStation);
stationRouter.get("/keyword/:keyword", findStationByKeyword);

module.exports = {
  stationRouter,
};
