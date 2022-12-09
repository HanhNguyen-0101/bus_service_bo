const { Op } = require("sequelize");
const { DOMAIN } = require("../utils/constants");
const { Station, Trip, Province } = require("./../models/index");

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
        include: [{ model: Province, as: "stationProvince" }],
        where: {
          name: {
            [Op.like]: `%${name}%`,
          },
        },
      });
      res.status(200).send(stations);
    } else {
      const stations = await Station.findAll({
        include: [{ model: Province, as: "stationProvince" }],
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
      include: { model: Province, as: "stationProvince" },
      where: {
        id,
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
    const station = await Station.findOne({
      where: {
        id,
      },
    });
    if (file) {
      const image = `${DOMAIN}/${file.path}`;
      station.image = image;
    }
    station.name = name;
    station.address = address;
    station.provinceId = provinceId;
    await station.save();
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
        [Op.or]: [{ fromStation: id }, { toStation: id }],
      },
    });
    await Station.destroy({
      where: {
        id,
      },
    });
    res.status(200).send({ message: `Delete ID: ${id} is successfully` });
  } catch (error) {
    res.status(500).send(error);
  }
};
const findStationByKeyword = async (req, res) => {
  const { keyword } = req.params;
  try {
    const item = await Station.findAll({
      include: { model: Province, as: "stationProvince" },
      where: {
        [Op.or]: [
          {
            name: {
              [Op.like]: `%${keyword}%`,
            },
          },
          {
            address: {
              [Op.like]: `%${keyword}%`,
            },
          },
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
