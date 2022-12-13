const express = require("express");
const { authenticate } = require("../middlewares/validate/authenticate");
const { authorize } = require("../middlewares/validate/authorize");
const { checkExits } = require("../middlewares/validate/checkExist");
const { Ticket } = require("../services/index.service");
const { USER_TYPE } = require("../utils/constants");
const {
  create,
  getAll,
  getDetail,
  edit,
  remove,
  getTicketByEmail,
  findByKeyword,
} = require("./../controllers/ticket.controller");

const ticketRouter = express.Router();

ticketRouter.get("/", getAll);
ticketRouter.get("/:id", checkExits(Ticket), getDetail);
ticketRouter.get("/email/:email", getTicketByEmail);
ticketRouter.post(
  "/",
  authenticate,
  authorize([USER_TYPE.CLIENT, USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]),
  create
);
ticketRouter.put(
  "/:id",
  authenticate,
  authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]),
  checkExits(Ticket),
  edit
);
ticketRouter.delete(
  "/:id",
  authenticate,
  authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]),
  checkExits(Ticket),
  remove
);
ticketRouter.get("/keyword/:keyword", findByKeyword);

module.exports = {
  ticketRouter,
};
