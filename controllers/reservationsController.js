const { Sequelize, DataTypes } = require('sequelize');
const Reservations = require('../models/Reservation');
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
        const busModel = Bus(sequelize, DataTypes);
        const businessId = request.params.businessId;
        console.log('BUSINESSiD', businessId);
        const buses = await busModel.findAll({
            where: {
                business_id: businessId
            }
        });
        console.log('looog', buses);
        return h.response({
            buses: buses
        }).code(200);

    } catch(err) {
        return h.response({
            error: err.message || "Some error occurred while retrieving buses."
        }).code(500);
    };
};
