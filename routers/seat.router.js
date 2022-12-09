const express = require("express");
const {
    create,
    getAll,
    getDetail,
    update,
    remove,
    findByKeyword
} = require("../controllers/seat.controller");
const { seat } = require("./../models/index");
const { checkExits } = require("../middlewares/validate/checkExist");
const { authenticate } = require("../middlewares/validate/authenticate");
const { authorize } = require("../middlewares/validate/authorize");
const { USER_TYPE } = require("../utils/constants");

const seatRouter = express.Router();

seatRouter.post("/", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), create);
seatRouter.get("/", getAll);
seatRouter.get("/:id", checkExits(seat), getDetail);
seatRouter.put("/:id", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), checkExits(seat), update);
seatRouter.delete("/:id", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), checkExits(seat), remove);
seatRouter.get("/keyword/:keyword", findByKeyword);

module.exports = {
  seatRouter,
};
