const { Op } = require("sequelize");
const {
  Ticket,
  seat,
  Trip,
  paymentMethod,
  OrderStatus,
  PaymentStatus,
  passengerCarCompanies,
  busType,
  vehicle,
  Station,
} = require("./../models/index");

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
            id: i,
          },
        });
        seatUpdated.seatStatusId = 2;
        await seatUpdated.save();
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
        { model: paymentMethod, as: "paymentMethodTicket" },
        { model: OrderStatus, as: "orderStatusTicket" },
        { model: PaymentStatus, as: "paymentStatusTicket" },
        {
          model: vehicle,
          as: "vehicledTicket",
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
        { model: paymentMethod, as: "paymentMethodTicket" },
        { model: OrderStatus, as: "orderStatusTicket" },
        { model: PaymentStatus, as: "paymentStatusTicket" },
        {
          model: vehicle,
          as: "vehicledTicket",
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
        id,
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
            id: i,
          },
        });
        seatUpdated.seatStatusId = 1;
        await seatUpdated.save();
      });
    }
    if (seatSelected && JSON.parse(seatSelected).length) {
      JSON.parse(seatSelected).map(async (i) => {
        const seatUpdated = await seat.findOne({
          where: {
            id: i,
          },
        });
        seatUpdated.seatStatusId = 2;
        await seatUpdated.save();
      });
    }
    ticket.seatSelected = seatSelected;
    ticket.orderStatusId = orderStatusId;
    ticket.paymentMethodId = paymentMethodId;
    ticket.paymentStatusId = paymentStatusId;
    ticket.note = note;
    ticket.point = point;
    await ticket.save();
    res.status(200).send(ticket);
  } catch (error) {
    res.status(500).send(error);
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const ticket = await Ticket.findOne({
      where: {
        id,
      },
    });
    if (ticket.seatSelected && JSON.parse(ticket.seatSelected).length) {
      JSON.parse(ticket.seatSelected).map(async (i) => {
        const seatUpdated = await seat.findOne({
          where: {
            id: i,
          },
        });
        seatUpdated.seatStatusId = 1;
        await seatUpdated.save();
      });
    }
    await Ticket.destroy({
      where: {
        id,
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
        { model: paymentMethod, as: "paymentMethodTicket" },
        { model: OrderStatus, as: "orderStatusTicket" },
        { model: PaymentStatus, as: "paymentStatusTicket" },
        {
          model: vehicle,
          as: "vehicledTicket",
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
        email,
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
        { model: paymentMethod, as: "paymentMethodTicket" },
        { model: OrderStatus, as: "orderStatusTicket" },
        { model: PaymentStatus, as: "paymentStatusTicket" },
        {
          model: vehicle,
          as: "vehicledTicket",
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
        [Op.or]: [
          {
            name: {
              [Op.like]: `%${keyword}%`,
            },
          },
          {
            email: {
              [Op.like]: `%${keyword}%`,
            },
          },
          {
            numberPhone: {
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
  create,
  getAll,
  getDetail,
  edit,
  remove,
  getTicketByEmail,
  findByKeyword,
};
