const { Op } = require("sequelize");
const {
  vehicle,
  seat,
  statusSeat,
  passengerCarCompanies,
  Trip,
  Station,
  busType,
} = require("./../models/index");

const create = async (req, res) => {
  const { name, vehicledId, seatStatusId } = req.body;
  try {
    const newSeat = await seat.create({ name, vehicledId, seatStatusId });
    res.status(201).send(newSeat);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAll = async (req, res) => {
  try {
    const seats = await seat.findAll({
      include: [
        { model: statusSeat, as: "seatStatus" },
        {
          model: vehicle,
          as: "seatVehicle",
          include: [
            {
              model: passengerCarCompanies,
              as: "vehiclePassengerCarCompanies",
            },
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
        },
      ],
    });
    res.status(200).send(seats);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const foundSeat = await seat.findOne({
      include: [
        { model: statusSeat, as: "seatStatus" },
        {
          model: vehicle,
          as: "seatVehicle",
          include: [
            {
              model: passengerCarCompanies,
              as: "vehiclePassengerCarCompanies",
            },
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
        },
      ],
      where: {
        id,
      },
    });
    res.status(200).send(foundSeat);
  } catch (error) {
    res.status(500).send(error);
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name, vehicledId, seatStatusId } = req.body;
  try {
    const seatUpdated = await seat.findOne({
      where: {
        id,
      },
    });
    seatUpdated.name = name;
    seatUpdated.vehicledId = vehicledId;
    seatUpdated.seatStatusId = seatStatusId;
    await seatUpdated.save();
    res.status(200).send(seatUpdated);
  } catch (error) {
    res.status(500).send(error);
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    await seat.destroy({
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
    const item = await seat.findAll({
      include: [
        { model: statusSeat, as: "seatStatus" },
        {
          model: vehicle,
          as: "seatVehicle",
          include: [
            {
              model: passengerCarCompanies,
              as: "vehiclePassengerCarCompanies",
            },
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
        },
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
module.exports = {
  create,
  getAll,
  getDetail,
  update,
  remove,
  findByKeyword,
};
