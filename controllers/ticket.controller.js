const {
  paymentMethod,
  OrderStatus,
  PaymentStatus,
  busType,
  passengerCarCompanies,
  Station, Ticket, Trip, vehicle, seat
} = require("../services/index.service");

const create = async (req, res) => {
  const {
    point,
    identify,
    name,
    email,
    numberPhone,
    vehicledId,
    seatSelected,
    orderStatusId = 1,
    paymentMethodId,
    note,
    paymentStatusId = 2,
  } = req.body;
  try {
    const ticket = await Ticket.create({
      point,
      identify,
      name,
      email,
      numberPhone,
      vehicledId,
      seatSelected,
      orderStatusId,
      paymentMethodId,
      note,
      paymentStatusId,
    });
    if (seatSelected && JSON.parse(seatSelected).length) {
      JSON.parse(seatSelected).map(async (i) => {
        const seatUpdated = await seat.findOne({
          where: {
            key: "id",
            value: i,
          },
        });
        seatUpdated.seatStatusId = 2;
        await seat.update(i, seatUpdated);
      });
    }
    res.status(201).send(ticket);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAll = async (req, res) => {
  try {
    const tickets = await Ticket.findAll({
      include: [
        {
          model: paymentMethod,
          as: "paymentMethodTicket",
          map: "paymentMethodId",
        },
        { model: OrderStatus, as: "orderStatusTicket", map: "orderStatusId" },
        {
          model: PaymentStatus,
          as: "paymentStatusTicket",
          map: "paymentStatusId",
        },
        {
          model: vehicle,
          as: "vehicledTicket",
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
    res.status(200).send(tickets);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const ticket = await Ticket.findOne({
      include: [
        {
          model: paymentMethod,
          as: "paymentMethodTicket",
          map: "paymentMethodId",
        },
        { model: OrderStatus, as: "orderStatusTicket", map: "orderStatusId" },
        {
          model: PaymentStatus,
          as: "paymentStatusTicket",
          map: "paymentStatusId",
        },
        {
          model: vehicle,
          as: "vehicledTicket",
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
        value: id
      },
    });
    res.status(200).send(ticket);
  } catch (error) {
    res.status(500).send(error);
  }
};

const edit = async (req, res) => {
  const { id } = req.params;
  const {
    point,
    identify,
    name,
    email,
    numberPhone,
    vehicledId,
    seatSelected,
    orderStatusId,
    paymentMethodId,
    note,
    paymentStatusId,
  } = req.body;
  try {
    const ticket = await Ticket.findOne({
      where: {
        key: "id",
        value: id
      },
    });
    ticket.name = name;
    ticket.email = email;
    ticket.identify = identify;
    ticket.numberPhone = numberPhone;
    ticket.vehicledId = vehicledId;
    if (ticket.seatSelected && JSON.parse(ticket.seatSelected).length) {
      JSON.parse(ticket.seatSelected).map(async (i) => {
        const seatUpdated = await seat.findOne({
          where: {
            key: "id",
            value: i,
          },
        });
        seatUpdated.seatStatusId = 1;
        await seat.update(i, seatUpdated);
      });
    }
    if (seatSelected && JSON.parse(seatSelected).length) {
      JSON.parse(seatSelected).map(async (i) => {
        const seatUpdated = await seat.findOne({
          where: {
            key: "id",
            value: i,
          },
        });
        seatUpdated.seatStatusId = 2;
        await seat.update(i, seatUpdated);
      });
    }
    ticket.seatSelected = seatSelected;
    ticket.orderStatusId = orderStatusId;
    ticket.paymentMethodId = paymentMethodId;
    ticket.paymentStatusId = paymentStatusId;
    ticket.note = note;
    ticket.point = point;
    const ticketUpdated = await Ticket.update(id, ticket);
    res.status(200).send(ticketUpdated);
  } catch (error) {
    res.status(500).send(error);
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const ticket = await Ticket.findOne({
      where: {
        key: "id",
        value: id
      },
    });
    if (ticket.seatSelected && JSON.parse(ticket.seatSelected).length) {
      JSON.parse(ticket.seatSelected).map(async (i) => {
        const seatUpdated = await seat.findOne({
          where: {
            key: "id",
            value: i,
          },
        });
        seatUpdated.seatStatusId = 1;
        await seat.update(i, seatUpdated);
      });
    }
    await Ticket.destroy({
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

const getTicketByEmail = async (req, res) => {
  const { email } = req.params;
  try {
    const results = await Ticket.findAll({
      include: [
        {
          model: paymentMethod,
          as: "paymentMethodTicket",
          map: "paymentMethodId",
        },
        { model: OrderStatus, as: "orderStatusTicket", map: "orderStatusId" },
        {
          model: PaymentStatus,
          as: "paymentStatusTicket",
          map: "paymentStatusId",
        },
        {
          model: vehicle,
          as: "vehicledTicket",
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
        key: "email",
        value: email
      },
    });
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send(error);
  }
};

const findByKeyword = async (req, res) => {
  const { keyword } = req.params;
  try {
    const item = await Ticket.findAll({
      include: [
        {
          model: paymentMethod,
          as: "paymentMethodTicket",
          map: "paymentMethodId",
        },
        { model: OrderStatus, as: "orderStatusTicket", map: "orderStatusId" },
        {
          model: PaymentStatus,
          as: "paymentStatusTicket",
          map: "paymentStatusId",
        },
        {
          model: vehicle,
          as: "vehicledTicket",
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
      // where: {
      //   [Op.or]: [
      //     {
      //       name: {
      //         [Op.like]: `%${keyword}%`,
      //       },
      //     },
      //     {
      //       email: {
      //         [Op.like]: `%${keyword}%`,
      //       },
      //     },
      //     {
      //       numberPhone: {
      //         [Op.like]: `%${keyword}%`,
      //       },
      //     },
      //   ],
      // },
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
  edit,
  remove,
  getTicketByEmail,
  findByKeyword,
};
