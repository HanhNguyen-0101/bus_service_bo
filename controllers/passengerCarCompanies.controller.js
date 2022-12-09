const { Op } = require("sequelize");
const { DOMAIN } = require("../utils/constants");
const { passengerCarCompanies } = require("./../models/index");

const create = async (req, res) => {
  const { file } = req;
  const { name, address, content, review, comments, description } = req.body;
  try {
    const image = `${DOMAIN}/${file.path}`;
    const newItem = await passengerCarCompanies.create({
      name,
      address,
      content,
      review,
      comments,
      description,
      image,
    });
    res.status(201).send(newItem);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAll = async (req, res) => {
  try {
    const itemList = await passengerCarCompanies.findAll();
    res.status(200).send(itemList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const foundItem = await passengerCarCompanies.findOne({
      where: {
        id,
      },
    });
    res.status(200).send(foundItem);
  } catch (error) {
    res.status(500).send(error);
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const { file } = req;
  const { name, address, content, review, comments, description } = req.body;
  try {
    const itemUpdated = await passengerCarCompanies.findOne({
      where: {
        id,
      },
    });
    if (file) {
      itemUpdated.image =
        itemUpdated.image + `;${DOMAIN}/${file.path}`;
    }
    itemUpdated.name = name;
    itemUpdated.description = description;
    itemUpdated.address = address;
    itemUpdated.content = content;
    itemUpdated.review = review;
    itemUpdated.comments = comments;
    await itemUpdated.save();
    res.status(200).send(itemUpdated);
  } catch (error) {
    res.status(500).send(error);
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    await vehicle.destroy({
      where: {
        passengerCarCompaniesId: id,
      },
    });
    await passengerCarCompanies.destroy({
      where: {
        id,
      },
    });
    res.status(200).send({ message: `Delete ID: ${id} is successfully` });
  } catch (error) {
    res.status(500).send(error);
  }
};

const uploadImgCompany = async (req, res) => {
  const { id } = req.params;
  const { file } = req;
  try {
    const itemFound = await passengerCarCompanies.findOne({
      where: {
        id,
      },
    });
    itemFound.image = `${DOMAIN}/${file.path}`;
    await itemFound.save();
    res.status(200).send(itemFound);
  } catch (error) {
    res.status(500).send(error);
  }
};
const findByKeyword = async (req, res) => {
  const { keyword } = req.params;
  try {
    const result = await passengerCarCompanies.findAll({
      where: {
        [Op.or]: [
          {
            name: {
              [Op.like]: `%${keyword}%`,
            },
          },
          {
            description: {
              [Op.like]: `%${keyword}%`,
            },
          },
          {
            address: {
              [Op.like]: `%${keyword}%`,
            },
          },
          {
            content: {
              [Op.like]: `%${keyword}%`,
            },
          },
        ],
      },
    });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
  create,
  getAll,
  getDetail,
  update,
  remove,
  uploadImgCompany,
  findByKeyword,
};
