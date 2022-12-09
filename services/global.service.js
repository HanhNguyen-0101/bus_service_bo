const lodash = require("lodash");
const fs = require("fs");

const getURL = (url) => {
  return `./public/data/global/${url}.json`;
};
const getData = async (url) => {
  const path = getURL(url);
  const rawData = await fs.readFileSync(path);
  return JSON.parse(rawData);
};
const updateData = async (url, data) => {
  const path = getURL(url);
  await fs.writeFileSync(path, JSON.stringify(data), function (err) {
    if (err) throw err;
  });
};

const findAll = (url) => {
  return getData(url);
};
const findOne = async (url, id) => {
  const data = await getData(url);
  const index = lodash.findIndex(data, (i) => i.id === Number(id));
  if (index !== -1) {
    return data[index];
  } else {
    return {
      message: "Find by ID",
      content: "Not found by ID",
    };
  }
};
const destroy = async (url, id) => {
  const data = await getData(url);
  const index = await lodash.findIndex(data, (i) => i.id === Number(id));
  if (index !== -1) {
    data.splice(index, 1);
    await updateData(url, data);
    return;
  } else {
    return {
      message: "Find by ID",
      content: "Not found by ID",
    };
  }
};
const create = async (url, item) => {
  const data = await getData(url);
  const elm = {
    ...item,
    id: Math.floor(Math.random() * 10000),
    createdAt: new Date(),
    updatedAt: new Date()
  }
  data.push(elm);
  await updateData(url, data);
  return elm;
};
module.exports = {
  paymentMethod: {
    findAll: () => findAll("payment-method"),
    findOne: (id) => findOne("payment-method", id),
    destroy: (id) => destroy("payment-method", id),
    create: (item) => create("payment-method", item),
  },
  busType: {
    findAll: () => findAll("bus-type"),
    findOne: (id) => findOne("bus-type", id),
    destroy: (id) => destroy("bus-type", id),
    create: (item) => create("bus-type", item),
  },
  userType: {
    findAll: () => findAll("user-type"),
    findOne: (id) => findOne("user-type", id),
    destroy: (id) => destroy("user-type", id),
    create: (item) => create("user-type", item),
  },
  statusSeat: {
    findAll: () => findAll("status-seat"),
    findOne: (id) => findOne("status-seat", id),
    destroy: (id) => findOne("status-seat", id),
    create: (item) => create("status-seat", item),
  },
  Province: {
    findAll: () => findAll("province"),
    findOne: (id) => findOne("province", id),
    destroy: (id) => destroy("province", id),
    create: (item) => create("province", item),
  },
  Point: {
    findAll: () => findAll("point"),
    findOne: (id) => findOne("point", id),
    destroy: (id) => destroy("point", id),
    create: (item) => create("point", item),
  },
  PaymentStatus: {
    findAll: () => findAll("payment-status"),
    findOne: (id) => findOne("payment-status", id),
    destroy: (id) => destroy("payment-status", id),
    create: (item) => create("payment-status", item),
  },
  OrderStatus: {
    findAll: () => findAll("order-status"),
    findOne: (id) => findOne("order-status", id),
    destroy: (id) => destroy("order-status", id),
    create: (item) => create("order-status", item),
  },
  hashTag: {
    findAll: () => findAll("hashtag"),
    findOne: (id) => findOne("hashTag", id),
    destroy: (id) => destroy("hashTag", id),
    create: (item) => create("hashTag", item),
  },
  banner: {
    findAll: () => findAll("banner"),
    findOne: (id) => findOne("banner", id),
    destroy: (id) => destroy("banner", id),
    create: (item) => create("banner", item),
  },
  article: {
    findAll: () => findAll("article"),
    findOne: (id) => findOne("article", id),
    destroy: (id) => destroy("article", id),
    create: (item) => create("article", item),
  },
};
