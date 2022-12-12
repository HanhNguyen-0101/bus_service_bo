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

const findAll = async (url, obj) => {
  const data = await getData(url);
  if (obj) {
    const { where, include } = obj;
    let result = [...data];
    if (where) {
      const { key, value } = where;
      result = lodash.filter(data, (i) => i[key].includes(value));
    }
    if (include) {
      let resultIn = [];
      for (let i = 0; i < result.length; i++) {
        for (let index = 0; index < include.length; index++) {
          const { model, as, map } = include[index];
          result[i][as] = await model.findOne({
            where: {
              key: "id",
              value: result[i][map],
            },
          });
        }
        resultIn.push(result[i]);
      }
      result = [...resultIn];
    }
    return result;
  } else {
    return data;
  }
};
const findOne = async (url, obj) => {
  const data = await getData(url);
  const { where, include } = obj;
  const { key, value } = where;

  const index = lodash.findIndex(data, (i) => {
    if (key === "id") {
      return i[key] === Number(value);
    } else {
      return i[key] === value;
    }
  });
  if (index !== -1) {
    if (include) {
      let item;
      for (let i = 0; i < include.length; i++) {
        const { model, as, map } = include[i];
        data[index][as] = await model.findOne({
          where: {
            key: "id",
            value: data[index][map],
          },
        });
        item = { ...data[index] };
      }
      return { ...item };
    }
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
    updatedAt: new Date(),
  };
  data.push(elm);
  await updateData(url, data);
  return elm;
};
const update = async (url, id, item) => {
  const data = await getData(url);
  const index = lodash.findIndex(data, (i) => i.id === Number(id));
  if (index !== -1) {
    const updated = data[index];
    data[index] = {
      ...updated,
      ...item,
      updatedAt: new Date(),
    };
    await updateData(url, data);
    return data[index];
  } else {
    return {
      message: "Find by ID",
      content: "Not found by ID",
    };
  }
};

module.exports = {
  paymentMethod: {
    findAll: () => findAll("payment-method"),
    findOne: (obj) => findOne("payment-method", obj),
    destroy: (id) => destroy("payment-method", id),
    create: (item) => create("payment-method", item),
    update: (item) => update("payment-method", id, item),
  },
  busType: {
    findAll: () => findAll("bus-type"),
    findOne: (obj) => findOne("bus-type", obj),
    destroy: (id) => destroy("bus-type", id),
    create: (item) => create("bus-type", item),
    update: (id, item) => update("bus-type", id, item),
  },
  userType: {
    findAll: () => findAll("user-type"),
    findOne: (obj) => findOne("user-type", obj),
    destroy: (id) => destroy("user-type", id),
    create: (item) => create("user-type", item),
    update: (id, item) => update("user-type", id, item),
  },
  statusSeat: {
    findAll: () => findAll("status-seat"),
    findOne: (obj) => findOne("status-seat", obj),
    destroy: (id) => findOne("status-seat", id),
    create: (item) => create("status-seat", item),
    update: (id, item) => update("status-seat", id, item),
  },
  Province: {
    findAll: () => findAll("province"),
    findOne: (obj) => findOne("province", obj),
    destroy: (id) => destroy("province", id),
    create: (item) => create("province", item),
    update: (id, item) => update("province", id, item),
  },
  Point: {
    findAll: () => findAll("point"),
    findOne: (obj) => findOne("point", obj),
    destroy: (id) => destroy("point", id),
    create: (item) => create("point", item),
    update: (id, item) => update("point", id, item),
  },
  PaymentStatus: {
    findAll: () => findAll("payment-status"),
    findOne: (obj) => findOne("payment-status", obj),
    destroy: (id) => destroy("payment-status", id),
    create: (item) => create("payment-status", item),
    update: (id, item) => update("payment-status", id, item),
  },
  OrderStatus: {
    findAll: () => findAll("order-status"),
    findOne: (obj) => findOne("order-status", obj),
    destroy: (id) => destroy("order-status", id),
    create: (item) => create("order-status", item),
    update: (id, item) => update("order-status", id, item),
  },
  hashTag: {
    findAll: () => findAll("hashtag"),
    findOne: (obj) => findOne("hashTag", obj),
    destroy: (id) => destroy("hashTag", id),
    create: (item) => create("hashTag", item),
    update: (id, item) => update("hashTag", id, item),
  },
  banner: {
    findAll: () => findAll("banner"),
    findOne: (obj) => findOne("banner", obj),
    destroy: (id) => destroy("banner", id),
    create: (item) => create("banner", item),
    update: (id, item) => update("banner", id, item),
  },
  article: {
    findAll: () => findAll("article"),
    findOne: (obj) => findOne("article", obj),
    destroy: (id) => destroy("article", id),
    create: (item) => create("article", item),
    update: (id, item) => update("article", id, item),
  },
};
