const {
  passengerCarCompanies,
} = require("../services/passengerCarCompanies.service");
const { DOMAIN } = require("../utils/constants");

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
        key: "id",
        value: id,
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
    const item = await passengerCarCompanies.findOne({
      where: {
        key: "id",
        value: id,
      },
    });
    const itemUpdated = await passengerCarCompanies.update(id, {
      image: file ? `${DOMAIN}/${file.path}` : item.image,
      name: name || item.name,
      description: description || item.description,
      address: address || item.address,
      content: content || item.content,
      review: review || item.review,
      comments: comments || item.comments,
    });
    res.status(200).send(itemUpdated);
  } catch (error) {
    res.status(500).send(error);
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    // await vehicle.destroy({
    //   where: {
    //     passengerCarCompaniesId: id,
    //   },
    // });
    await passengerCarCompanies.destroy({
      where: {
        key: "id",
        value: id,
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
    const item = await passengerCarCompanies.findOne({
      where: {
        key: "id",
        value: id,
      },
    });
    const itemFound = await passengerCarCompanies.update(id, {
      image: file ? `${DOMAIN}/${file.path}` : item.image,
    });
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
        key: "name",
        value: keyword,
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
