const { Province, Station, Trip } = require("../services/index.service");
const { DOMAIN } = require("../utils/constants");

const createStation = async (req, res) => {
  const { name, address, provinceId } = req.body;
  const { file } = req;
  try {
    const image = `${DOMAIN}/${file.path}`;
    const station = await Station.create({ name, address, provinceId, image });
    res.status(201).send(station);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllStation = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const stations = await Station.findAll({
        include: [
          { model: Province, as: "stationProvince", map: "provinceId" },
        ],
        where: {
          key: "name",
          value: name,
        },
      });
      res.status(200).send(stations);
    } else {
      const stations = await Station.findAll({
        include: [
          { model: Province, as: "stationProvince", map: "provinceId" },
        ],
      });
      res.status(200).send(stations);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getStationDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const station = await Station.findOne({
      include: [{ model: Province, as: "stationProvince", map: "provinceId" }],
      where: {
        key: "id",
        value: id,
      },
    });
    res.status(200).send(station);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateStation = async (req, res) => {
  const { id } = req.params;
  const { name, address, provinceId } = req.body;
  const { file } = req;
  try {
    const stationItem = await Station.findOne({
      where: {
        key: "id",
        value: id,
      },
    });
    const station = await Station.update(id, {
      name: name || stationItem.name,
      address: address || stationItem.address,
      provinceId: provinceId || stationItem.provinceId,
      image: file ? `${DOMAIN}/${file.path}` : stationItem.image,
    });
    res.status(200).send(station);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteStation = async (req, res) => {
  const { id } = req.params;
  try {
    await Trip.destroy({
      where: {
        or: [
          { where: { key: "fromStation", value: id } },
          { where: { key: "toStation", value: id } },
        ],
      },
    });
    await Station.destroy({ where: { key: "id", value: id } });
    res.status(200).send({ message: `Delete ID: ${id} is successfully` });
  } catch (error) {
    res.status(500).send(error);
  }
};
const findStationByKeyword = async (req, res) => {
  const { keyword } = req.params;
  try {
    const item = await Station.findAll({
      include: [{ model: Province, as: "stationProvince", map: "provinceId" }],
      where: {
        or: [
          { where: { key: "name", value: keyword, like: true } },
          { where: { key: "address", value: keyword, like: true } },
        ],
      },
    });
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
  createStation,
  getAllStation,
  getStationDetail,
  updateStation,
  deleteStation,
  findStationByKeyword,
};
