const {
  paymentMethod,
  busType,
  userType,
  statusSeat,
  Province,
  Point,
  PaymentStatus,
  OrderStatus,
  hashTag,
  banner,
  article,
} = require("../services/global.service");
const { DOMAIN } = require("../utils/constants");

/******************Payment Method Table************************/
const createPaymentMethod = async (req, res) => {
  const { name, subTitle, promo, conditionLink, paymentIntro } = req.body;
  const { file } = req;
  try {
    const logo = `${DOMAIN}/${file.path}`;
    const newItem = await paymentMethod.create({
      logo,
      name,
      subTitle,
      promo,
      conditionLink,
      paymentIntro,
    });
    res.status(201).send(newItem);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getAllPaymentMethod = async (req, res) => {
  try {
    const paymentMethodData = await paymentMethod.findAll();
    res.status(200).send(paymentMethodData);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getDetailPaymentMethod = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await paymentMethod.findOne({
      where: { key: "id", value: id },
    });
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};
const updatePaymentMethod = async (req, res) => {
  const { id } = req.params;
  const { name, subTitle, promo, conditionLink, paymentIntro } = req.body;
  const { file } = req;
  try {
    const item = await paymentMethod.findOne({
      where: { key: "id", value: id },
    });
    const itemUpdated = await paymentMethod.update(id, {
      ...item,
      logo: file ? `${DOMAIN}/${file.path}` : item.logo,
      name: name || item.name,
      subTitle: subTitle || item.subTitle,
      promo: promo || item.promo,
      conditionLink: conditionLink || item.conditionLink,
      paymentIntro: paymentIntro || item.paymentIntro,
    });
    res.status(200).send(itemUpdated);
  } catch (error) {
    res.status(500).send(error);
  }
};
const removePaymentMethod = async (req, res) => {
  const { id } = req.params;
  try {
    // await Ticket.destroy({
    //   where: {
    //     paymentMethodId: id,
    //   },
    // });
    await paymentMethod.destroy(id);
    res.status(200).send({ message: `Delete ID: ${id} is successfully` });
  } catch (error) {
    res.status(500).send(error);
  }
};
// /******************Bus Type Table************************/
const getAllBusType = async (req, res) => {
  try {
    const busTypeData = await busType.findAll();
    res.status(200).send(busTypeData);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getDetailBusType = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await busType.findOne({
      where: { key: "id", value: id },
    });
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};
const removeBusType = async (req, res) => {
  const { id } = req.params;
  try {
    // await vehicle.destroy({
    //   where: {
    //     busTypeId: id,
    //   },
    // });
    await busType.destroy(id);
    res.status(200).send({ message: `Delete ID: ${id} is successfully` });
  } catch (error) {
    res.status(500).send(error);
  }
};
const createBusType = async (req, res) => {
  const { name } = req.body;
  try {
    const newItem = await busType.create({ name });
    res.status(201).send(newItem);
  } catch (error) {
    res.status(500).send(error);
  }
};
const updateBusType = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const item = await busType.findOne({
      where: { key: "id", value: id },
    });
    const itemUpdated = await busType.update(id, {
      ...item,
      name: name || item.name,
    });
    res.status(200).send(itemUpdated);
  } catch (error) {
    res.status(500).send(error);
  }
};
// /******************User Type Table************************/
const getAllUserType = async (req, res) => {
  try {
    const userTypeData = await userType.findAll();
    res.status(200).send(userTypeData);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getDetailUserType = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await userType.findOne({
      where: { key: "id", value: id },
    });
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};
const removeUserType = async (req, res) => {
  const { id } = req.params;
  try {
    // await User.destroy({
    //   where: {
    //     typeId: id,
    //   },
    // });
    await userType.destroy(id);
    res.status(200).send({ message: `Delete ID: ${id} is successfully` });
  } catch (error) {
    res.status(500).send(error);
  }
};
const createUserType = async (req, res) => {
  const { name } = req.body;
  try {
    const newItem = await userType.create({ name });
    res.status(201).send(newItem);
  } catch (error) {
    res.status(500).send(error);
  }
};
const updateUserType = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const item = await userType.findOne({
      where: { key: "id", value: id },
    });
    const itemUpdated = await userType.update(id, {
      ...item,
      name: name || item.name,
    });
    res.status(200).send(itemUpdated);
  } catch (error) {
    res.status(500).send(error);
  }
};
// /******************Status Seat Table************************/
const getAllStatusSeat = async (req, res) => {
  try {
    const statusSeatData = await statusSeat.findAll();
    res.status(200).send(statusSeatData);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getDetailStatusSeat = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await statusSeat.findOne({
      where: { key: "id", value: id },
    });
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};
const removeStatusSeat = async (req, res) => {
  const { id } = req.params;
  try {
    // await seat.destroy({
    //   where: {
    //     seatStatusId: id,
    //   },
    // });
    await statusSeat.destroy(id);
    res.status(200).send({ message: `Delete ID: ${id} is successfully` });
  } catch (error) {
    res.status(500).send(error);
  }
};
const createStatusSeat = async (req, res) => {
  const { name } = req.body;
  try {
    const newItem = await statusSeat.create({ name });
    res.status(201).send(newItem);
  } catch (error) {
    res.status(500).send(error);
  }
};
const updateStatusSeat = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const item = await statusSeat.findOne({
      where: { key: "id", value: id },
    });
    const itemUpdated = await statusSeat.update(id, {
      ...item,
      name: name || item.name,
    });
    res.status(200).send(itemUpdated);
  } catch (error) {
    res.status(500).send(error);
  }
};
// /******************Banner Table************************/
const createBanner = async (req, res) => {
  const { title, description, enable } = req.body;
  const { file } = req;
  try {
    const bannerImg = `${DOMAIN}/${file.path}`;
    const newItem = await banner.create({
      title,
      description,
      banner: bannerImg,
      enable,
    });
    res.status(201).send(newItem);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getAllBanner = async (req, res) => {
  try {
    const bannerData = await banner.findAll();
    res.status(200).send(bannerData);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getDetailBanner = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await banner.findOne({
      where: { key: "id", value: id },
    });
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};
const updateBanner = async (req, res) => {
  const { id } = req.params;
  const { title, description, enable } = req.body;
  const { file } = req;
  try {
    const item = await banner.findOne({
      where: { key: "id", value: id },
    });
    const itemUpdated = await banner.update(id, {
      ...item,
      banner: file ? `${DOMAIN}/${file.path}` : item.banner,
      title: title || item.title,
      description: description || item.description,
      enable: enable,
    });
    res.status(200).send(itemUpdated);
  } catch (error) {
    res.status(500).send(error);
  }
};
const removeBanner = async (req, res) => {
  const { id } = req.params;
  try {
    await banner.destroy(id);
    res.status(200).send({ message: `Delete ID: ${id} is successfully` });
  } catch (error) {
    res.status(500).send(error);
  }
};

// /******************Article Table************************/
const createArticle = async (req, res) => {
  const { title, subTitle, hashtag, description, content } = req.body;
  const { file } = req;
  try {
    const image = `${DOMAIN}/${file.path}`;
    const newItem = await article.create({
      title,
      subTitle,
      hashtag,
      image,
      description,
      content,
    });
    res.status(201).send(newItem);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getAllArticle = async (req, res) => {
  try {
    const articleData = await article.findAll();
    res.status(200).send(articleData);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getDetailArticle = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await article.findOne({
      where: { key: "id", value: id },
    });
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};
const updateArticle = async (req, res) => {
  const { id } = req.params;
  const { title, subTitle, hashtag, description, content } = req.body;
  const { file } = req;
  try {
    const item = await article.findOne({
      where: { key: "id", value: id },
    });
    const itemUpdated = await article.update(id, {
      ...item,
      image: file ? `${DOMAIN}/${file.path}` : item.image,
      title: title || item.title,
      description: description || item.description,
      subTitle: subTitle || item.subTitle,
      hashtag: hashtag || item.hashtag,
      content: content || item.content,
    });
    res.status(200).send(itemUpdated);
  } catch (error) {
    res.status(500).send(error);
  }
};
const removeArticle = async (req, res) => {
  const { id } = req.params;
  try {
    await article.destroy(id);
    res.status(200).send({ message: `Delete ID: ${id} is successfully` });
  } catch (error) {
    res.status(500).send(error);
  }
};
const getArticleByHashtagSubTitle = async (req, res) => {
  const { hashTagId, subTitle } = req.params;
  try {
    const item = await article.findOne({
      key: "subTitle",
      value: subTitle,
    });
    const hashTag = item?.hashtag;
    if (
      hashTag &&
      hashTagId &&
      JSON.parse(hashTag).includes(Number(hashTagId))
    ) {
      res.status(200).send(item);
    } else {
      res.status(404).send("Not found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

// /******************PaymentStatus Table************************/
const getAllPaymentStatus = async (req, res) => {
  try {
    const result = await PaymentStatus.findAll();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getDetailPaymentStatus = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await PaymentStatus.findOne({
      where: { key: "id", value: id },
    });
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};
const removePaymentStatus = async (req, res) => {
  const { id } = req.params;
  try {
    // await Ticket.destroy({
    //   where: {
    //     paymentStatusId: id,
    //   },
    // });
    await PaymentStatus.destroy(id);
    res.status(200).send({ message: `Delete ID: ${id} is successfully` });
  } catch (error) {
    res.status(500).send(error);
  }
};
const createPaymentStatus = async (req, res) => {
  const { name } = req.body;
  try {
    const newItem = await PaymentStatus.create({ name });
    res.status(201).send(newItem);
  } catch (error) {
    res.status(500).send(error);
  }
};
const updatePaymentStatus = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const item = await PaymentStatus.findOne({
      where: { key: "id", value: id },
    });
    const itemUpdated = await PaymentStatus.update(id, {
      ...item,
      name: name || item.name,
    });
    res.status(200).send(itemUpdated);
  } catch (error) {
    res.status(500).send(error);
  }
};

// /******************OrderStatus Table************************/
const getAllOrderStatus = async (req, res) => {
  try {
    const result = await OrderStatus.findAll();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getDetailOrderStatus = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await OrderStatus.findOne({
      where: { key: "id", value: id },
    });
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};
const removeOrderStatus = async (req, res) => {
  const { id } = req.params;
  try {
    // await Ticket.destroy({
    //   where: {
    //     orderStatusId: id,
    //   },
    // });
    await OrderStatus.destroy(id);
    res.status(200).send({ message: `Delete ID: ${id} is successfully` });
  } catch (error) {
    res.status(500).send(error);
  }
};
const createOrderStatus = async (req, res) => {
  const { name } = req.body;
  try {
    const newItem = await OrderStatus.create({ name });
    res.status(201).send(newItem);
  } catch (error) {
    res.status(500).send(error);
  }
};
const updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const item = await OrderStatus.findOne({
      where: { key: "id", value: id },
    });
    const itemUpdated = await OrderStatus.update(id, {
      ...item,
      name: name || item.name,
    });
    res.status(200).send(itemUpdated);
  } catch (error) {
    res.status(500).send(error);
  }
};
// /******************Province Table************************/
const getAllProvince = async (req, res) => {
  try {
    const provinceData = await Province.findAll();
    res.status(200).send(provinceData);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getDetailProvince = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Province.findOne({
      where: { key: "id", value: id },
    });
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};
const removeProvince = async (req, res) => {
  const { id } = req.params;
  try {
    // await Station.destroy({
    //   where: {
    //     provinceId: id,
    //   },
    // });
    await Province.destroy(id);
    res.status(200).send({ message: `Delete ID: ${id} is successfully` });
  } catch (error) {
    res.status(500).send(error);
  }
};
const createProvince = async (req, res) => {
  const { name } = req.body;
  try {
    const newItem = await Province.create({ name });
    res.status(201).send(newItem);
  } catch (error) {
    res.status(500).send(error);
  }
};
const updateProvince = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const item = await Province.findOne({
      where: { key: "id", value: id },
    });
    const itemUpdated = await Province.update(id, {
      ...item,
      name: name || item.name,
    });
    res.status(200).send(itemUpdated);
  } catch (error) {
    res.status(500).send(error);
  }
};
// ///////////////////////////Not process relationship when delete yet//////////////////////////////
// /******************Point Table************************/
const getAllPoint = async (req, res) => {
  try {
    const pointData = await Point.findAll();
    res.status(200).send(pointData);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getDetailPoint = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Point.findOne({
      where: { key: "id", value: id },
    });
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};
const removePoint = async (req, res) => {
  const { id } = req.params;
  try {
    await Point.destroy(id);
    res.status(200).send({ message: `Delete ID: ${id} is successfully` });
  } catch (error) {
    res.status(500).send(error);
  }
};
const createPoint = async (req, res) => {
  const { address, position, time, station, shuttle } = req.body;
  try {
    const newItem = await Point.create({
      address,
      position,
      time,
      station,
      shuttle,
    });
    res.status(201).send(newItem);
  } catch (error) {
    res.status(500).send(error);
  }
};
const updatePoint = async (req, res) => {
  const { id } = req.params;
  const { address, position, time, station, shuttle } = req.body;
  try {
    const item = await Point.findOne({
      where: { key: "id", value: id },
    });
    const itemUpdated = await Point.update(id, {
      ...item,
      address: address || item.address,
      position: position || item.position,
      time: time || item.time,
      station: station || item.station,
      shuttle: shuttle,
    });
    res.status(200).send(itemUpdated);
  } catch (error) {
    res.status(500).send(error);
  }
};

// /******************Hashtag Table************************/
const getAllHashTag = async (req, res) => {
  try {
    const hashTagData = await hashTag.findAll();
    res.status(200).send(hashTagData);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getDetailHashTag = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await hashTag.findOne({
      where: { key: "id", value: id },
    });
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getDetailHashTagByName = async (req, res) => {
  const { name } = req.params;
  try {
    const item = await hashTag.findOne({
      key: "name",
      value: name,
    });
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};
const removeHashTag = async (req, res) => {
  const { id } = req.params;
  try {
    await hashTag.destroy(id);
    res.status(200).send({ message: `Delete ID: ${id} is successfully` });
  } catch (error) {
    res.status(500).send(error);
  }
};
const createHashTag = async (req, res) => {
  const { name } = req.body;
  try {
    const newItem = await hashTag.create({ name });
    res.status(201).send(newItem);
  } catch (error) {
    res.status(500).send(error);
  }
};
const updateHashTag = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const item = await hashTag.findOne({
      where: { key: "id", value: id },
    });
    const itemUpdated = await hashTag.update(id, {
      ...item,
      name: name || item.name,
    });
    res.status(200).send(itemUpdated);
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
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
  getArticleByHashtagSubTitle,
};
