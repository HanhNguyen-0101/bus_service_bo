const express = require('express');
const { stationRouter } = require('./station.router');
// const { ticketRouter } = require('./ticket.router');
// const { tripRouter } = require('./trip.router');
const { userRouter } = require('./user.router');
const { passengerCarCompaniesRouter } = require('./passengerCarCompanies.router');
// const { vehicleRouter } = require('./vehicle.router');
// const { seatRouter } = require('./seat.router');
const { globalRouter } = require('./global.router');

const rootRouter = express.Router();

rootRouter.use('/stations', stationRouter);
rootRouter.use('/users', userRouter);
// rootRouter.use('/trips', tripRouter);
// rootRouter.use('/tickets', ticketRouter);
// rootRouter.use('/seats', seatRouter);
// rootRouter.use('/vehicles', vehicleRouter);
rootRouter.use('/passengerCarCompanies', passengerCarCompaniesRouter);
rootRouter.use('/global', globalRouter);

module.exports = {
    rootRouter
}
