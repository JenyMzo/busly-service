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

// WORK IN PROGRESS 🛠
module.exports.getMyReservations = async (request, h) => {
    try {
        // SELECT * FROM busly.reservations r
        // JOIN busly.buses b
        // ON b.id = r.bus_id
        // WHERE b.business_id = 1;
        const reservationModel = Reservation(sequelize, DataTypes);
        const busModel = Bus(sequelize, DataTypes);
        const businessId = request.params.businessId;
        console.log('businessId', businessId);
        console.log('col', Sequelize.col('reservations.bus_id'));
        const reservations = await reservationModel.findAll({
            include: [{
                model: busModel,
                attributes: ['id', 'business_id', 'brand', 'license_plate'],
                on: { id: reservationModel.bus_id },
                where: {
                    business_id: businessId
                }
            }],
        });
        console.log('looog', reservations);
        return h.response(reservations).code(200);

    } catch (err) {
        return h.response({
            error: err.message || "Some error occurred while retrieving reservations."
        }).code(500);
    };
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
        const newReservation = request.body.data;
        const reservation = await reservationModel.create(newReservation);
        return h.response(reservation).code(200);

    } catch (err) {
        return h.response({
            error: err.message || "Some error occurred while creating the bus."
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
