const { Sequelize, DataTypes } = require('sequelize');
const Reservation = require('../models/Reservation');
const Bus = require('../models/Bus');
const config = require('../config/config');
const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password, {
    dialect: config.development.dialect,
  }
);

module.exports.getMyReservations = async(request, h) => {
    try {
        const reservationModel = Reservation(sequelize, DataTypes);
        const businessId = request.params.businessId;
        console.log('businessId', businessId);
        console.log('col', Sequelize.col('reservationModel.bus_id'));
        const reservations = await reservationModel.findAll({
            include: ['buses'],
            // include: [{
            //     model: Bus,
            //     attributes: ['id', 'business_id', 'brand', 'license_plate'],
            //     on: { id:  Sequelize.col('reservationModel.bus_id') },
            //     where: {
            //         business_id: businessId
            //     }
            // }],
        });
        console.log('looog', reservations);
        return h.response(reservations).code(200);

    } catch(err) {
        return h.response({
            error: err.message || "Some error occurred while retrieving reservations."
        }).code(500);
    };
};

module.exports.getMyReservationsByBus = async(request, h) => {
    try {
        const reservationModel = Reservation(sequelize, DataTypes);
        const busId = request.params.busId;
        const reservations = await reservationModel.findAll({
            where: {
                    bus_id: busId
             }
            // include: [{
            //     model: Bus,
            //     attributes: ['id', 'business_id', 'brand', 'license_plate'],
            //     on: { id:  Sequelize.col('reservationModel.bus_id') },
            //     where: {
            //         business_id: businessId
            //     }
            // }],
        });
        console.log('looog', reservations);
        return h.response(reservations).code(200);

    } catch(err) {
        return h.response({
            error: err.message || "Some error occurred while retrieving reservations per bus."
        }).code(500);
    };
};
