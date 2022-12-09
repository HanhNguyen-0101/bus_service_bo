const { Op } = require("sequelize");
const { DOMAIN } = require("../utils/constants");
const {
  vehicle,
  passengerCarCompanies,
  Trip,
  busType,
  Station,
  seat,
  Ticket
} = require("./../models/index");

const create = async (req, res) => {
  const {
    name,
    numberFloor,
    numberSeat,
    promo,
    point,
    passengerCarCompaniesId,
    tripId,
    busTypeId,
  } = req.body;
  const { file } = req;
  try {
    const image = `${DOMAIN}/${file.path}`;
    const newVehicle = await vehicle.create({
      name,
      numberFloor,
      numberSeat,
      promo,
      point,
      passengerCarCompaniesId,
      tripId,
      busTypeId,
      image,
    });
    res.status(201).send(newVehicle);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAll = async (req, res) => {
  try {
    const vehicles = await vehicle.findAll({
      include: [
        { model: passengerCarCompanies, as: "vehiclePassengerCarCompanies" },
        {
          model: Trip,
          as: "vehicleTrip",
          include: [
            { model: Station, as: "from" },
            { model: Station, as: "to" },
          ],
        },
        { model: busType, as: "vehicleBusType" },
      ],
    });
    res.status(200).send(vehicles);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const foundVehicle = await vehicle.findOne({
      include: [
        { model: passengerCarCompanies, as: "vehiclePassengerCarCompanies" },
        { model: Trip, as: "vehicleTrip" },
        { model: busType, as: "vehicleBusType" },
      ],
      where: {
        id,
      },
    });
    res.status(200).send(foundVehicle);
  } catch (error) {
    res.status(500).send(error);
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    numberFloor,
    numberSeat,
    promo,
    point,
    passengerCarCompaniesId,
    tripId,
    busTypeId,
  } = req.body;
  const { file } = req;
  try {
    const vehicleUpdated = await vehicle.findOne({
      where: {
        id,
      },
    });
    if (file) {
      const image = `${DOMAIN}/${file.path}`;
      vehicleUpdated.image = image;
    }
    vehicleUpdated.name = name;
    vehicleUpdated.passengerCarCompaniesId = passengerCarCompaniesId;
    vehicleUpdated.point = point;
    vehicleUpdated.promo = promo;
    vehicleUpdated.tripId = tripId;
    vehicleUpdated.busTypeId = busTypeId;
    vehicleUpdated.numberFloor = numberFloor;
    vehicleUpdated.numberSeat = numberSeat;
    await vehicleUpdated.save();
    res.status(200).send(vehicleUpdated);
  } catch (error) {
    res.status(500).send(error);
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    await seat.destroy({
      where: {
        vehicledId: id,
      },
    });
    await Ticket.destroy({
      where: {
        vehicledId: id,
      },
    });
    await vehicle.destroy({
      where: {
        id,
      },
    });
    res.status(200).send({ message: `Delete ID: ${id} is successfully` });
  } catch (error) {
    res.status(500).send(error);
  }
};
const findByKeyword = async (req, res) => {
  const { keyword } = req.params;
  try {
    const item = await vehicle.findAll({
      include: [
        { model: passengerCarCompanies, as: "vehiclePassengerCarCompanies" },
        {
          model: Trip,
          as: "vehicleTrip",
          include: [
            { model: Station, as: "from" },
            { model: Station, as: "to" },
          ],
        },
        { model: busType, as: "vehicleBusType" },
      ],
      where: {
        name: {
          [Op.like]: `%${keyword}%`,
        },
      },
    });
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};
const search = async (req, res) => {
  const { from, to, date } = req.params;
  try {
    if (date) {
      const item = await vehicle.findAll({
        include: [
          { model: passengerCarCompanies, as: "vehiclePassengerCarCompanies" },
          {
            model: Trip,
            as: "vehicleTrip",
            include: [
              { model: Station, as: "from" },
              { model: Station, as: "to" },
            ],
            where: {
              fromStation: Number(from),
              toStation: Number(to),
              tripAt: {
                [Op.like]: `%${date}%`,
              },
            },
          },
          { model: busType, as: "vehicleBusType" },
        ],
      });
      res.status(200).send(item);
    } else {
      const item = await vehicle.findAll({
        include: [
          { model: passengerCarCompanies, as: "vehiclePassengerCarCompanies" },
          {
            model: Trip,
            as: "vehicleTrip",
            include: [
              { model: Station, as: "from" },
              { model: Station, as: "to" },
            ],
            where: {
              fromStation: Number(from),
              toStation: Number(to)
            },
          },
          { model: busType, as: "vehicleBusType" },
        ],
      });
      res.status(200).send(item);
    }
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
  findByKeyword,
  search
};
