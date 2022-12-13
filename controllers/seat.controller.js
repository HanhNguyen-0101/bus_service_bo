const { seat, busType, statusSeat, passengerCarCompanies, Station, Trip, vehicle } = require("../services/index.service");

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
        { model: statusSeat, as: "seatStatus", map: "seatStatusId" },
        {
          model: vehicle,
          as: "seatVehicle",
          map: "vehicledId",
          include: [
            {
              model: passengerCarCompanies,
              as: "vehiclePassengerCarCompanies",
              map: "passengerCarCompaniesId",
            },
            {
              model: Trip,
              as: "vehicleTrip",
              map: "tripId",
              include: [
                { model: Station, as: "from", map: "fromStation" },
                { model: Station, as: "to", map: "toStation" },
              ],
            },
            { model: busType, as: "vehicleBusType", map: "busTypeId" },
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
        { model: statusSeat, as: "seatStatus", map: "seatStatusId" },
        {
          model: vehicle,
          as: "seatVehicle",
          map: "vehicledId",
          include: [
            {
              model: passengerCarCompanies,
              as: "vehiclePassengerCarCompanies",
              map: "passengerCarCompaniesId",
            },
            {
              model: Trip,
              as: "vehicleTrip",
              map: "tripId",
              include: [
                { model: Station, as: "from", map: "fromStation" },
                { model: Station, as: "to", map: "toStation" },
              ],
            },
            { model: busType, as: "vehicleBusType", map: "busTypeId" },
          ],
        },
      ],
      where: {
        key: "id",
        value: id,
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
        key: "id",
        value: id,
      },
    });
    const seatItem = await seat.update(id, {
      name: name || seatUpdated.name,
      vehicledId: vehicledId || seatUpdated.vehicledId,
      seatStatusId: seatStatusId || seatUpdated.seatStatusId,
    });
    res.status(200).send(seatItem);
  } catch (error) {
    res.status(500).send(error);
  }
};
const remove = async (req, res) => {
  const { id } = req.params;
  try {
    await seat.destroy({
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
const findByKeyword = async (req, res) => {
  const { keyword } = req.params;
  try {
    const item = await seat.findAll({
      include: [
        { model: statusSeat, as: "seatStatus", map: "seatStatusId" },
        {
          model: vehicle,
          as: "seatVehicle",
          map: "vehicledId",
          include: [
            {
              model: passengerCarCompanies,
              as: "vehiclePassengerCarCompanies",
              map: "passengerCarCompaniesId",
            },
            {
              model: Trip,
              as: "vehicleTrip",
              map: "tripId",
              include: [
                { model: Station, as: "from", map: "fromStation" },
                { model: Station, as: "to", map: "toStation" },
              ],
            },
            { model: busType, as: "vehicleBusType", map: "busTypeId" },
          ],
        },
      ],
      where: {
        key: "name",
        value: keyword,
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
