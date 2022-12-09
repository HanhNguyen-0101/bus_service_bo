const express = require('express');
const { authenticate } = require('../middlewares/validate/authenticate');
const { authorize } = require('../middlewares/validate/authorize');
const { checkExits } = require('../middlewares/validate/checkExist');
const { USER_TYPE } = require('../utils/constants');
const { Trip } = require("./../models/index");
const {
    create,
    getAll,
    getDetail,
    edit,
    remove,
    findTripByKeyword
} = require('./../controllers/trip.controller');
const { uploadImage } = require('../middlewares/upload/uploadImage');

const tripRouter = express.Router();

tripRouter.get('/', getAll);
tripRouter.get('/:id', checkExits(Trip), getDetail);
tripRouter.post('/', authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), uploadImage("image"), create);
tripRouter.put('/:id', authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), checkExits(Trip), uploadImage("image"), edit);
tripRouter.delete('/:id', authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), checkExits(Trip), remove);
tripRouter.get("/keyword/:keyword", findTripByKeyword);

module.exports = {
    tripRouter
}