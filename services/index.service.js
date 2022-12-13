const lodash = require("lodash");
const fs = require("fs");

const getURL = (url) => {
  return `./public/data/${url}.json`;
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

// *******************Method**********************
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
          const objItem = {
            where: {
              key: "id",
              value: result[i][map],
            },
          };
          if (include[index].include) {
            objItem.include = include[index].include;
          }
          result[i][as] = await model.findOne(objItem);
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
        const objItem = {
          where: {
            key: "id",
            value: data[index][map],
          },
        };
        if (include[i].include) {
          objItem.include = include[i].include;
        }
        data[index][as] = await model.findOne(objItem);
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
    findAll: () => findAll("global/payment-method"),
    findOne: (obj) => findOne("global/payment-method", obj),
    destroy: (id) => destroy("global/payment-method", id),
    create: (item) => create("global/payment-method", item),
    update: (item) => update("global/payment-method", id, item),
  },
  busType: {
    findAll: () => findAll("global/bus-type"),
    findOne: (obj) => findOne("global/bus-type", obj),
    destroy: (id) => destroy("global/bus-type", id),
    create: (item) => create("global/bus-type", item),
    update: (id, item) => update("global/bus-type", id, item),
  },
  userType: {
    findAll: () => findAll("global/user-type"),
    findOne: (obj) => findOne("global/user-type", obj),
    destroy: (id) => destroy("global/user-type", id),
    create: (item) => create("global/user-type", item),
    update: (id, item) => update("global/user-type", id, item),
  },
  statusSeat: {
    findAll: () => findAll("global/status-seat"),
    findOne: (obj) => findOne("global/status-seat", obj),
    destroy: (id) => findOne("global/status-seat", id),
    create: (item) => create("global/status-seat", item),
    update: (id, item) => update("global/status-seat", id, item),
  },
  Province: {
    findAll: () => findAll("global/province"),
    findOne: (obj) => findOne("global/province", obj),
    destroy: (id) => destroy("global/province", id),
    create: (item) => create("global/province", item),
    update: (id, item) => update("global/province", id, item),
  },
  Point: {
    findAll: () => findAll("global/point"),
    findOne: (obj) => findOne("global/point", obj),
    destroy: (id) => destroy("global/point", id),
    create: (item) => create("global/point", item),
    update: (id, item) => update("global/point", id, item),
  },
  PaymentStatus: {
    findAll: () => findAll("global/payment-status"),
    findOne: (obj) => findOne("global/payment-status", obj),
    destroy: (id) => destroy("global/payment-status", id),
    create: (item) => create("global/payment-status", item),
    update: (id, item) => update("global/payment-status", id, item),
  },
  OrderStatus: {
    findAll: () => findAll("global/order-status"),
    findOne: (obj) => findOne("global/order-status", obj),
    destroy: (id) => destroy("global/order-status", id),
    create: (item) => create("global/order-status", item),
    update: (id, item) => update("global/order-status", id, item),
  },
  hashTag: {
    findAll: () => findAll("global/hashtag"),
    findOne: (obj) => findOne("global/hashTag", obj),
    destroy: (id) => destroy("global/hashTag", id),
    create: (item) => create("global/hashTag", item),
    update: (id, item) => update("global/hashTag", id, item),
  },
  banner: {
    findAll: () => findAll("global/banner"),
    findOne: (obj) => findOne("global/banner", obj),
    destroy: (id) => destroy("global/banner", id),
    create: (item) => create("global/banner", item),
    update: (id, item) => update("global/banner", id, item),
  },
  article: {
    findAll: () => findAll("global/article"),
    findOne: (obj) => findOne("global/article", obj),
    destroy: (id) => destroy("global/article", id),
    create: (item) => create("global/article", item),
    update: (id, item) => update("global/article", id, item),
  },
  passengerCarCompanies: {
    findAll: (obj) => findAll("passengerCarCompanies/passengerCarCompanies", obj),
    findOne: (obj) => findOne("passengerCarCompanies/passengerCarCompanies", obj),
    destroy: (id) => destroy("passengerCarCompanies/passengerCarCompanies", id),
    create: (item) => create("passengerCarCompanies/passengerCarCompanies", item),
    update: (id, item) => update("passengerCarCompanies/passengerCarCompanies", id, item),
  },
  Station: {
    findAll: (obj) => findAll("stations/stations", obj),
    findOne: (obj) => findOne("stations/stations", obj),
    destroy: (id) => destroy("stations/stations", id),
    create: (item) => create("stations/stations", item),
    update: (id, item) => update("stations/stations", id, item),
  },
  Ticket: {
    findAll: (obj) => findAll("tickets/tickets", obj),
    findOne: (obj) => findOne("tickets/tickets", obj),
    destroy: (id) => destroy("tickets/tickets", id),
    create: (item) => create("tickets/tickets", item),
    update: (id, item) => update("tickets/tickets", id, item),
  },
  Trip: {
    findAll: (obj) => findAll("trips/trips", obj),
    findOne: (obj) => findOne("trips/trips", obj),
    destroy: (id) => destroy("trips/trips", id),
    create: (item) => create("trips/trips", item),
    update: (id, item) => update("trips/trips", id, item),
  },
  User: {
    findAll: (obj) => findAll("users/users", obj),
    findOne: (obj) => findOne("users/users", obj),
    destroy: (id) => destroy("users/users", id),
    create: (item) => create("users/users", item),
    update: (id, item) => update("users/users", id, item),
  },
  vehicle: {
    findAll: (obj) => findAll("vehicles/vehicles", obj),
    findOne: (obj) => findOne("vehicles/vehicles", obj),
    destroy: (id) => destroy("vehicles/vehicles", id),
    create: (item) => create("vehicles/vehicles", item),
    update: (id, item) => update("vehicles/vehicles", id, item),
  },
  seat: {
    findAll: (obj) => findAll("seats/seats", obj),
    findOne: (obj) => findOne("seats/seats", obj),
    destroy: (id) => destroy("seats/seats", id),
    create: (item) => create("seats/seats", item),
    update: (id, item) => update("seats/seats", id, item),
  },
};
