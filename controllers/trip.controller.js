const { Trip, Station } = require("./../models/index");
const { Op } = require("sequelize");
const { DOMAIN } = require("../utils/constants");

const create = async (req, res) => {
  const { fromStation, toStation, startTime, price, tripAt } = req.body;
  const { file } = req;
  try {
    const image = `${DOMAIN}/${file.path}`;
    const trip = await Trip.create({
      fromStation,
      toStation,
      startTime,
      price,
      tripAt,
      image,
    });
    res.status(201).send(trip);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAll = async (req, res) => {
  try {
    const trips = await Trip.findAll({
      include: [
        { model: Station, as: "from" },
        { model: Station, as: "to" },
      ],
    });
    res.status(200).send(trips);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const trip = await Trip.findOne({
      include: [
        { model: Station, as: "from" },
        { model: Station, as: "to" },
      ],
      where: {
        id,
      },
    });
    res.status(200).send(trip);
  } catch (error) {
    res.status(500).send(error);
  }
};

const edit = async (req, res) => {
  const { id } = req.params;
  const { file } = req;
  const { fromStation, toStation, startTime, price, tripAt } = req.body;
  try {
    const trip = await Trip.findOne({
      where: {
        id,
      },
    });
    if (file) {
      trip.image = `${DOMAIN}/${file.path}`;
    }
    trip.fromStation = fromStation;
    trip.tripAt = tripAt;
    trip.toStation = toStation;
    trip.startTime = startTime;
    trip.price = price;
    await trip.save();
    res.status(200).send(trip);
  } catch (error) {
    res.status(500).send(error);
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    await vehicle.destroy({
      where: {
        tripId: id,
      },
    });
    await Trip.destroy({
      where: {
        id,
      },
    });
    res.status(200).send({ message: `Delete ID: ${id} is successfully` });
  } catch (error) {
    res.status(500).send(error);
  }
};
const findTripByKeyword = async (req, res) => {
  const { keyword } = req.params;
  try {
    const results = await Trip.findAll({
      where: {
        [Op.or]: [
          {
            "$from.name$": { [Op.like]: `%${keyword}%` },
          },
          {
            "$to.name$": { [Op.like]: `%${keyword}%` },
          },
        ],
      },
      include: [
        {
          model: Station,
          as: "from",
        },
        {
          model: Station,
          as: "to",
        },
      ],
    });
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
  create,
  getAll,
  getDetail,
  edit,
  remove,
  findTripByKeyword,
};
