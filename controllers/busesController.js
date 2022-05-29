const { Sequelize, DataTypes } = require('sequelize');
const Bus = require('../models/Bus');
const Reservation = require('../models/Reservation');
const config = require('../config/config');
const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password, {
    dialect: config.development.dialect,
  }
);

const dayjs = require('dayjs');

module.exports.getBuses = async (request, h) => {
  try {
    const busModel = Bus(sequelize, DataTypes);
    const bus = await busModel.findByPk(request.params.id);

    return h.response({bus}).code(200);
  } catch (error) {
    return h.response({
      error: err.message || "Some error occurred while retrieving buses."
    }).code(500);
  }
};

// consultar los buses que no tengan reserva aprobada o pendiente dentro del rango de fechas
module.exports.getAvailableBuses = async (request, h) => {
  try {
    const {
      start, end
    } = request.query;

    const startFormat = dayjs(start).format('YYYY-MM-DD');
    const endFormat = dayjs(end).format('YYYY-MM-DD');

    const buses = await request.app.db.query(`SELECT * FROM Buses WHERE id NOT IN ( SELECT B.id FROM Buses AS B LEFT JOIN Reservations AS R ON B.id = R.bus_id WHERE R.travel_date_start BETWEEN '${startFormat}' AND '${endFormat}' AND R.travel_date_end BETWEEN '${startFormat}' AND '${endFormat}' AND (R.status = 'approved' OR R.status = 'pending'))`);

    return h.response({buses}).code(200);
  } catch (error) {
    return h.response({
      error: error.message || "Some error occurred while retrieving buses."
    }).code(500);
  }
};

module.exports.getMyBuses = async(request, h) => {
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
