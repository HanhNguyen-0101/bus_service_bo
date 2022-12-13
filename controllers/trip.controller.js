const { DOMAIN } = require("../utils/constants");
const { Station, Trip } = require("../services/index.service");

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
        { model: Station, as: "from", map: "fromStation" },
        { model: Station, as: "to", map: "toStation" },
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
        { model: Station, as: "from", map: "fromStation" },
        { model: Station, as: "to", map: "toStation" },
      ],
      where: {
        key: "id",
        value: id
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
    const tripItem = await Trip.findOne({
      where: {
        key: "id",
        value: id
      },
    });
    const trip = await Trip.update(id, {
      fromStation: fromStation || tripItem.fromStation,
      tripAt: tripAt || tripItem.tripAt,
      toStation: toStation || tripItem.toStation,
      startTime: startTime || tripItem.startTime,
      price: price || tripItem.price,
      image: file ? `${DOMAIN}/${file.path}` : tripItem.image,
    })
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
        key: "tripId",
        value: id,
      },
    });
    await Trip.destroy({
      where: {
        key: "id",
        value: id
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
      // where: {
      //   [Op.or]: [
      //     {
      //       "$from.name$": { [Op.like]: `%${keyword}%` },
      //     },
      //     {
      //       "$to.name$": { [Op.like]: `%${keyword}%` },
      //     },
      //   ],
      // },
      include: [
        { model: Station, as: "from", map: "fromStation" },
        { model: Station, as: "to", map: "toStation" },
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
