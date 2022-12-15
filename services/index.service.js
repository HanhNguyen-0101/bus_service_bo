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
function count_element_in_array(array, x) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].id == x.id) count++;
  }
  return count;
}

// *******************Method**********************
const findAll = async (url, obj) => {
  const data = await getData(url);
  let dataFirst = [...data];
  if (obj) {
    const { where, include } = obj;
    if (include) {
      let resultIn = [];
      for (let i = 0; i < dataFirst.length; i++) {
        for (let index = 0; index < include.length; index++) {
          const { model, as, map } = include[index];
          const objItem = {
            where: {
              key: "id",
              value: dataFirst[i][map],
            },
          };
          if (include[index].include) {
            objItem.include = include[index].include;
          }
          if (include[index].where) {
            objItem.where = include[index].where;
          }
          dataFirst[i][as] = await model.findOne(objItem);
        }
        resultIn.push(dataFirst[i]);
      }
      dataFirst = [...resultIn];
    }
    let result = [...dataFirst];
    if (where) {
      const { key, value, like, or, and } = where;
      let dataSecond;
      if (or || and) {
        if (or) {
          dataSecond = [];
          for (let ixd = 0; ixd < or.length; ixd++) {
            if (include) {
              or[ixd].include = include;
            }
            if (and) {
              or[ixd].where.and = and;
            }
            const asc = await findAll(url, or[ixd]);
            lodash.map(asc, (v) => {
              const pos = dataSecond.findIndex((b) => b.id === v.id);
              if (pos === -1) {
                dataSecond.push(v);
              }
              return v;
            });
          }
          result = [...dataSecond];
        }
        if (and) {
          dataSecond = [];
          for (let ixd = 0; ixd < and.length; ixd++) {
            if (include) {
              and[ixd].include = include;
            }
            if (or) {
              and[ixd].where.or = or;
            }
            const asc = await findAll(url, and[ixd]);
            dataSecond.push(...asc);
          }

          let resultF = [];
          lodash.map(dataSecond, (f) => {
            if (count_element_in_array(dataSecond, f) >= and.length) {
              const pos = resultF.findIndex((b) => b.id === f.id);
              if (pos === -1) {
                resultF.push(f);
              }
            }
            return f;
          });
          result = [...resultF];
        }
      } else {
        result = lodash.filter(dataFirst, (i) => {
          // Convert key object
          let ckey = i;
          if (key.includes(".")) {
            let keyF = key.split(".");
            for (let i = 0; i < keyF.length; i++) {
              ckey = ckey[keyF[i]];
            }
          } else {
            ckey = i[key];
          }

          // Check compare equal or like
          if (like) {
            return ckey
              .toString()
              .toLowerCase()
              .includes(value.toString().toLowerCase());
          } else {
            return ckey == value;
          }
        });
      }
    }
    return result;
  } else {
    return data;
  }
};

const findOne = async (url, obj) => {
  const data = await getData(url);
  const { where, include } = obj;
  const { key, value, like, or, and } = where;

  let itemFound, dataSecond;
  if (or || and) {
    if (or) {
      dataSecond = [];
      for (let ixd = 0; ixd < or.length; ixd++) {
        if (and) {
          or[ixd].where.and = and;
        }
        const asc = await findAll(url, or[ixd]);
        lodash.map(asc, (v) => {
          const pos = dataSecond.findIndex((b) => b.id === v.id);
          if (pos === -1) {
            dataSecond.push(v);
          }
          return v;
        });
      }
      itemFound = lodash.first(dataSecond);
    }
    if (and) {
      dataSecond = [];
      for (let ixd = 0; ixd < and.length; ixd++) {
        if (or) {
          and[ixd].where.or = or;
        }
        const asc = await findAll(url, and[ixd]);
        dataSecond.push(...asc);
      }
      let resultF = [];
      lodash.map(dataSecond, (f) => {
        if (count_element_in_array(dataSecond, f) >= and.length) {
          const pos = resultF.findIndex((b) => b.id === f.id);
          if (pos === -1) {
            resultF.push(f);
          }
        }
        return f;
      });

      itemFound = resultF.length ? lodash.first(resultF) : null;
    }
  } else {
    if (like) {
      itemFound = lodash.find(data, (i) =>
        i[key].toString.toLowerCase().includes(value.toString().toLowerCase())
      );
    } else {
      itemFound = lodash.find(data, (i) => i[key] == value);
    }
  }
  if (itemFound) {
    if (include) {
      let item;
      for (let i = 0; i < include.length; i++) {
        const { model, as, map } = include[i];
        const objItem = {
          where: {
            key: "id",
            value: itemFound[map],
          },
        };
        if (include[i].include) {
          objItem.include = include[i].include;
        }
        itemFound[as] = await model.findOne(objItem);
        item = { ...itemFound };
      }
      return { ...item };
    }
    return itemFound;
  } else {
    return {
      message: "Find by ID",
      content: "Not found by ID",
    };
  }
};

const destroy = async (url, obj) => {
  const { where } = obj;
  if (where) {
    const { key, value, or } = where;
    if (or) {
      for (let ixd = 0; ixd < or.length; ixd++) {
        await destroy(url, or[ixd]);
      }
      return;
    } else {
      const data = await getData(url);
      const result = lodash.filter(data, (i) => i[key] != value);
      await updateData(url, result);
      return;
    }
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
  const index = lodash.findIndex(data, (i) => i.id == id);
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
    destroy: (obj) => destroy("global/payment-method", obj),
    create: (item) => create("global/payment-method", item),
    update: (id, item) => update("global/payment-method", id, item),
  },
  busType: {
    findAll: () => findAll("global/bus-type"),
    findOne: (obj) => findOne("global/bus-type", obj),
    destroy: (obj) => destroy("global/bus-type", obj),
    create: (item) => create("global/bus-type", item),
    update: (id, item) => update("global/bus-type", id, item),
  },
  userType: {
    findAll: () => findAll("global/user-type"),
    findOne: (obj) => findOne("global/user-type", obj),
    destroy: (obj) => destroy("global/user-type", obj),
    create: (item) => create("global/user-type", item),
    update: (id, item) => update("global/user-type", id, item),
  },
  statusSeat: {
    findAll: () => findAll("global/status-seat"),
    findOne: (obj) => findOne("global/status-seat", obj),
    destroy: (obj) => findOne("global/status-seat", obj),
    create: (item) => create("global/status-seat", item),
    update: (id, item) => update("global/status-seat", id, item),
  },
  Province: {
    findAll: () => findAll("global/province"),
    findOne: (obj) => findOne("global/province", obj),
    destroy: (obj) => destroy("global/province", obj),
    create: (item) => create("global/province", item),
    update: (id, item) => update("global/province", id, item),
  },
  Point: {
    findAll: () => findAll("global/point"),
    findOne: (obj) => findOne("global/point", obj),
    destroy: (obj) => destroy("global/point", obj),
    create: (item) => create("global/point", item),
    update: (id, item) => update("global/point", id, item),
  },
  PaymentStatus: {
    findAll: () => findAll("global/payment-status"),
    findOne: (obj) => findOne("global/payment-status", obj),
    destroy: (obj) => destroy("global/payment-status", obj),
    create: (item) => create("global/payment-status", item),
    update: (id, item) => update("global/payment-status", id, item),
  },
  OrderStatus: {
    findAll: () => findAll("global/order-status"),
    findOne: (obj) => findOne("global/order-status", obj),
    destroy: (obj) => destroy("global/order-status", obj),
    create: (item) => create("global/order-status", item),
    update: (id, item) => update("global/order-status", id, item),
  },
  hashTag: {
    findAll: () => findAll("global/hashtag"),
    findOne: (obj) => findOne("global/hashTag", obj),
    destroy: (obj) => destroy("global/hashTag", obj),
    create: (item) => create("global/hashTag", item),
    update: (id, item) => update("global/hashTag", id, item),
  },
  banner: {
    findAll: () => findAll("global/banner"),
    findOne: (obj) => findOne("global/banner", obj),
    destroy: (obj) => destroy("global/banner", obj),
    create: (item) => create("global/banner", item),
    update: (id, item) => update("global/banner", id, item),
  },
  article: {
    findAll: () => findAll("global/article"),
    findOne: (obj) => findOne("global/article", obj),
    destroy: (obj) => destroy("global/article", obj),
    create: (item) => create("global/article", item),
    update: (id, item) => update("global/article", id, item),
  },
  passengerCarCompanies: {
    findAll: (obj) =>
      findAll("passengerCarCompanies/passengerCarCompanies", obj),
    findOne: (obj) =>
      findOne("passengerCarCompanies/passengerCarCompanies", obj),
    destroy: (obj) =>
      destroy("passengerCarCompanies/passengerCarCompanies", obj),
    create: (item) =>
      create("passengerCarCompanies/passengerCarCompanies", item),
    update: (id, item) =>
      update("passengerCarCompanies/passengerCarCompanies", id, item),
  },
  Station: {
    findAll: (obj) => findAll("stations/stations", obj),
    findOne: (obj) => findOne("stations/stations", obj),
    destroy: (obj) => destroy("stations/stations", obj),
    create: (item) => create("stations/stations", item),
    update: (id, item) => update("stations/stations", id, item),
  },
  Ticket: {
    findAll: (obj) => findAll("tickets/tickets", obj),
    findOne: (obj) => findOne("tickets/tickets", obj),
    destroy: (obj) => destroy("tickets/tickets", obj),
    create: (item) => create("tickets/tickets", item),
    update: (id, item) => update("tickets/tickets", id, item),
  },
  Trip: {
    findAll: (obj) => findAll("trips/trips", obj),
    findOne: (obj) => findOne("trips/trips", obj),
    destroy: (obj) => destroy("trips/trips", obj),
    create: (item) => create("trips/trips", item),
    update: (id, item) => update("trips/trips", id, item),
  },
  User: {
    findAll: (obj) => findAll("users/users", obj),
    findOne: (obj) => findOne("users/users", obj),
    destroy: (obj) => destroy("users/users", obj),
    create: (item) => create("users/users", item),
    update: (id, item) => update("users/users", id, item),
  },
  vehicle: {
    findAll: (obj) => findAll("vehicles/vehicles", obj),
    findOne: (obj) => findOne("vehicles/vehicles", obj),
    destroy: (obj) => destroy("vehicles/vehicles", obj),
    create: (item) => create("vehicles/vehicles", item),
    update: (id, item) => update("vehicles/vehicles", id, item),
  },
  seat: {
    findAll: (obj) => findAll("seats/seats", obj),
    findOne: (obj) => findOne("seats/seats", obj),
    destroy: (obj) => destroy("seats/seats", obj),
    create: (item) => create("seats/seats", item),
    update: (id, item) => update("seats/seats", id, item),
  },
};
