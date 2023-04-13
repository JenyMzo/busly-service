const { Sequelize, DataTypes } = require('sequelize');
const Reservation = require('../models/Reservation');
const Bus = require('../models/Bus');
const Package = require('../models/Package');
const config = require('../config/config');
const sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password, {
    dialect: config.development.dialect,
}
);

// WORK IN PROGRESS 🛠
module.exports.getMyReservationsBusiness = async (request, h) => {
    try {
        const businessId = request.params.businessId;

        const reservations = await request.app.db.query(`SELECT r.id, r.status, r.reservation_date,r.travel_date_end, r.travel_date_start, p.price, b.brand  FROM Reservations r
        JOIN Packages p on p.id = r.package_id
        JOIN Buses b on b.id = r.bus_id WHERE r.business_id = '${businessId}'`);

        return h.response(reservations).code(200);

    } catch (err) {
        return h.response({
            error: err.message || "Some error occurred while retrieving reservations."
        }).code(500);
    };
};

module.exports.getMyReservationsCustomer = async (request, h) => {
    try {
        const customerId = request.params.customerId;

        const reservations = await request.app.db.query(`SELECT r.id, r.status, r.reservation_date, r.travel_date_end, r.travel_date_start, p.price, b.brand  FROM Reservations r
        JOIN Packages p on p.id = r.package_id
        JOIN Buses b on b.id = r.bus_id WHERE r.customer_id = '${customerId}'`);

        console.log('looog', reservations);
        return h.response(reservations).code(200);

    } catch (err) {
        return h.response({
            error: err.message || "Some error occurred while retrieving reservations."
        }).code(500);
    };
};

module.exports.getReservationById = async (request, h) => {
    try {
      const reservationModel = Reservation(sequelize, DataTypes);
      const reservation = await reservationModel.findByPk(request.params.id);

      return h.response({reservation}).code(200);
    } catch (error) {
        console.log('error', error)
      return h.response({
        error: error.message || "Some error occurred while retrieving buses."
      }).code(500);
    }
  };

module.exports.getMyReservationsByBus = async (request, h) => {
    try {
        const reservationModel = Reservation(sequelize, DataTypes);
        const busId = request.params.busId;
        const reservations = await reservationModel.findAll({
            where: {
                bus_id: busId
            }
        });
        return h.response(reservations).code(200);

    } catch (err) {
        return h.response({
            error: err.message || "Some error occurred while retrieving reservations per bus."
        }).code(500);
    };
};

module.exports.createReservation = async (request, h) => {
    try {
        const reservationModel = Reservation(sequelize, DataTypes);
        const newReservation = request.payload;
        const reservation = await reservationModel.create(newReservation);
        return h.response(reservation).code(200);

    } catch (err) {
        return h.response({
            error: err.message || "Some error occurred while creating the reservation."
        }).code(500);
    };
};

module.exports.getRecurrentCustomers = async (request, h) => {
    try {
        const businessId = request.params.businessId;
        sequelize.query('CALL recurrentCustomers(:businessid);',
            { replacements: { businessid: businessId } })
            .then(h.response(reservation).code(200));
    } catch (error) {
        return h.response({
            error: err.message || "Some error occurred while calling recurrentCustomers()."
        }).code(500);
    }
}
