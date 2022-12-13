const { DOMAIN } = require("../utils/constants");
const {
  Trip,
  busType,
  Station,
  passengerCarCompanies,
  vehicle,
  Ticket,
  seat
} = require("../services/index.service");

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
      where: {
        key: "id",
        value: id,
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
    const vehicleItem = await vehicle.findOne({
      where: {
        key: "id",
        value: id,
      },
    });
    const vehicleUpdated = await vehicle.update(id, {
      name: name || vehicleItem.name,
      passengerCarCompaniesId:
        passengerCarCompaniesId || vehicleItem.passengerCarCompaniesId,
      point: point || vehicleItem.point,
      promo: promo || vehicleItem.promo,
      tripId: tripId || vehicleItem.tripId,
      busTypeId: busTypeId || vehicleItem.busTypeId,
      numberFloor: numberFloor || vehicleItem.numberFloor,
      numberSeat: numberSeat || vehicleItem.numberSeat,
      image: file ? `${DOMAIN}/${file.path}` : vehicle.image,
    });
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
        key: "vehicledId",
        value: id,
      },
    });
    await Ticket.destroy({
      where: {
        key: "vehicledId",
        value: id,
      },
    });
    await vehicle.destroy({
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
    const item = await vehicle.findAll({
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
const search = async (req, res) => {
  const { from, to, date } = req.params;
  try {
    if (date) {
      const item = await vehicle.findAll({
        // include: [
        //   {
        //     model: Trip,
        //     as: "vehicleTrip",
        //     include: [
        //       { model: Station, as: "from" },
        //       { model: Station, as: "to" },
        //     ],
        //     where: {
        //       fromStation: Number(from),
        //       toStation: Number(to),
        //       tripAt: {
        //         [Op.like]: `%${date}%`,
        //       },
        //     },
        //   },
        // ],
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
      });
      res.status(200).send(item);
    } else {
      const item = await vehicle.findAll({
        // include: [
        //   {
        //     model: Trip,
        //     as: "vehicleTrip",
        //     include: [
        //       { model: Station, as: "from" },
        //       { model: Station, as: "to" },
        //     ],
        //     where: {
        //       fromStation: Number(from),
        //       toStation: Number(to),
        //     },
        //   },
        // ],
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
  search,
};
