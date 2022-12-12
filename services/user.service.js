const lodash = require("lodash");
const fs = require("fs");

const getURL = (url) => {
  return `./public/data/users/${url}.json`;
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
  User: {
    findAll: (obj) => findAll("users", obj),
    findOne: (obj) => findOne("users", obj),
    destroy: (id) => destroy("users", id),
    create: (item) => create("users", item),
    update: (id, item) => update("users", id, item),
  },
};
