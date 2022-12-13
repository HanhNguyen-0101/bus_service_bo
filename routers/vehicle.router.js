const express = require("express");
const {
    create,
    getAll,
    getDetail,
    update,
    remove,
    findByKeyword,
    search
} = require("../controllers/vehicle.controller");
const { checkExits } = require("../middlewares/validate/checkExist");
const { authenticate } = require("../middlewares/validate/authenticate");
const { authorize } = require("../middlewares/validate/authorize");
const { USER_TYPE } = require("../utils/constants");
const { uploadImage } = require("../middlewares/upload/uploadImage");
const { vehicle } = require("../services/index.service");

const vehicleRouter = express.Router();

vehicleRouter.post("/", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), uploadImage("image"), create);
vehicleRouter.get("/", getAll);
vehicleRouter.get("/:id", checkExits(vehicle), getDetail);
vehicleRouter.put("/:id", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), checkExits(vehicle), uploadImage("image"), update);
vehicleRouter.delete("/:id", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), checkExits(vehicle), remove);
vehicleRouter.get("/keyword/:keyword", findByKeyword);
vehicleRouter.get("/search/:from/:to/:date", search);

module.exports = {
  vehicleRouter,
};
