const express = require("express");
const {
    createPaymentMethod,
    getAllPaymentMethod,
    getDetailPaymentMethod,
    updatePaymentMethod,
    removePaymentMethod,
    createBusType,
    getAllBusType,
    getDetailBusType,
    updateBusType,
    removeBusType,
    createUserType,
    getAllUserType,
    getDetailUserType,
    updateUserType,
    removeUserType,
    createStatusSeat,
    getAllStatusSeat,
    getDetailStatusSeat,
    updateStatusSeat,
    removeStatusSeat,
    createProvince,
    getAllProvince,
    getDetailProvince,
    updateProvince,
    removeProvince,
    createPoint,
    getAllPoint,
    getDetailPoint,
    updatePoint,
    removePoint,
    createPaymentStatus,
    getAllPaymentStatus,
    getDetailPaymentStatus,
    updatePaymentStatus,
    removePaymentStatus,
    createOrderStatus,
    getAllOrderStatus,
    getDetailOrderStatus,
    updateOrderStatus,
    removeOrderStatus,
    createHashTag,
    getAllHashTag,
    getDetailHashTag,
    getDetailHashTagByName,
    updateHashTag,
    removeHashTag,
    createBanner,
    getAllBanner,
    getDetailBanner,
    updateBanner,
    removeBanner,
    createArticle,
    getAllArticle,
    getDetailArticle,
    updateArticle,
    removeArticle,
    getArticleByHashtagSubTitle
} = require("../controllers/global.controller");
const { paymentMethod, busType, userType, statusSeat, Province, Point, PaymentStatus, OrderStatus, hashTag, banner, article } = require("../services/global.service");
const { checkExits } = require("../middlewares/validate/checkExist");
const { authenticate } = require("../middlewares/validate/authenticate");
const { authorize } = require("../middlewares/validate/authorize");
const { USER_TYPE } = require("../utils/constants");
const { uploadImage } = require("../middlewares/upload/uploadImage");

const globalRouter = express.Router();

// Payment Method Table
globalRouter.post("/payment-method/", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), uploadImage("logo"), createPaymentMethod);
globalRouter.get("/payment-method/", getAllPaymentMethod);
globalRouter.get("/payment-method/:id", checkExits(paymentMethod), getDetailPaymentMethod);
globalRouter.put("/payment-method/:id", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), checkExits(paymentMethod), uploadImage("logo"), updatePaymentMethod);
globalRouter.delete("/payment-method/:id", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), checkExits(paymentMethod), removePaymentMethod);

// // Bus Type Table
globalRouter.post("/bus-type/", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), createBusType);
globalRouter.get("/bus-type/", getAllBusType);
globalRouter.get("/bus-type/:id", checkExits(busType), getDetailBusType);
globalRouter.put("/bus-type/:id", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), checkExits(busType), updateBusType);
globalRouter.delete("/bus-type/:id", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), checkExits(busType), removeBusType);

// // User Type Table
globalRouter.post("/user-type/", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), createUserType);
globalRouter.get("/user-type/", getAllUserType);
globalRouter.get("/user-type/:id", checkExits(userType), getDetailUserType);
globalRouter.put("/user-type/:id", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), checkExits(userType), updateUserType);
globalRouter.delete("/user-type/:id", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), checkExits(userType), removeUserType);

// // Status Seat Table
globalRouter.post("/status-seat/", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), createStatusSeat);
globalRouter.get("/status-seat/", getAllStatusSeat);
globalRouter.get("/status-seat/:id", checkExits(statusSeat), getDetailStatusSeat);
globalRouter.put("/status-seat/:id", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), checkExits(statusSeat), updateStatusSeat);
globalRouter.delete("/status-seat/:id", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), checkExits(statusSeat), removeStatusSeat);

// // Province Table
globalRouter.post("/province/", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), createProvince);
globalRouter.get("/province/", getAllProvince);
globalRouter.get("/province/:id", checkExits(Province), getDetailProvince);
globalRouter.put("/province/:id", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), checkExits(Province), updateProvince);
globalRouter.delete("/province/:id", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), checkExits(Province), removeProvince);

// // HashTag Table
globalRouter.post("/hashtag/", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), createHashTag);
globalRouter.get("/hashtag/", getAllHashTag);
globalRouter.get("/hashtag/:id", checkExits(hashTag), getDetailHashTag);
globalRouter.get("/hashtag/name/:name", getDetailHashTagByName);
globalRouter.put("/hashtag/:id", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), checkExits(hashTag), updateHashTag);
globalRouter.delete("/hashtag/:id", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), checkExits(hashTag), removeHashTag);

// // Banner Table
globalRouter.post("/banner/", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), uploadImage("banner"), createBanner);
globalRouter.get("/banner/", getAllBanner);
globalRouter.get("/banner/:id", checkExits(banner), getDetailBanner);
globalRouter.put("/banner/:id", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), checkExits(banner), uploadImage("banner"), updateBanner);
globalRouter.delete("/banner/:id", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), checkExits(banner), removeBanner);

// // Point Table
globalRouter.post("/point/", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), createPoint);
globalRouter.get("/point/", getAllPoint);
globalRouter.get("/point/:id", checkExits(Point), getDetailPoint);
globalRouter.put("/point/:id", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), checkExits(Point), updatePoint);
globalRouter.delete("/point/:id", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), checkExits(Point), removePoint);

// // Order Status Table
globalRouter.post("/order-status/", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), createOrderStatus);
globalRouter.get("/order-status/", getAllOrderStatus);
globalRouter.get("/order-status/:id", checkExits(OrderStatus), getDetailOrderStatus);
globalRouter.put("/order-status/:id", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), checkExits(OrderStatus), updateOrderStatus);
globalRouter.delete("/order-status/:id", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), checkExits(OrderStatus), removeOrderStatus);

// // Payment Status Table
globalRouter.post("/payment-status/", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), createPaymentStatus);
globalRouter.get("/payment-status/", getAllPaymentStatus);
globalRouter.get("/payment-status/:id", checkExits(PaymentStatus), getDetailPaymentStatus);
globalRouter.put("/payment-status/:id", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), checkExits(PaymentStatus), updatePaymentStatus);
globalRouter.delete("/payment-status/:id", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), checkExits(PaymentStatus), removePaymentStatus);

// // Article Table
globalRouter.post("/article/", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), uploadImage("image"), createArticle);
globalRouter.get("/article/", getAllArticle);
globalRouter.get("/article/:id", checkExits(article), getDetailArticle);
globalRouter.get("/article/find/:hashTagId/:subTitle", getArticleByHashtagSubTitle);
globalRouter.put("/article/:id", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), checkExits(article), uploadImage("image"), updateArticle);
globalRouter.delete("/article/:id", authenticate, authorize([USER_TYPE.ADMIN, USER_TYPE.SUPER_ADMIN]), checkExits(article), removeArticle);

module.exports = {
  globalRouter,
};
