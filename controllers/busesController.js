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

module.exports.getBusById = async (request, h) => {
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

module.exports.getAvailableBuses = async (request, h) => {
  try {
    const {
      start, end
    } = request.query;

    const startFormat = dayjs(start).format('YYYY-MM-DD');
    const endFormat = dayjs(end).format('YYYY-MM-DD');

    const buses = await request.app.db.query(`
    SELECT bu.id, bu.brand, bu.model, pa.id AS packageId, pa.name, pa.description, pa.price
    FROM Buses bu
    JOIN BusPackages bp on bp.bus_id = bu.id
    JOIN Packages pa on pa.id = bp.package_id WHERE
      bu.id NOT IN ( SELECT B.id FROM Buses AS B LEFT JOIN Reservations AS
      R ON B.id = R.bus_id WHERE (R.travel_date_start BETWEEN '${startFormat}'
      AND '${endFormat}') OR (R.travel_date_end BETWEEN '${startFormat}' AND
      '${endFormat}') AND (R.status = 'approved' OR R.status = 'pending'))
      AND has_soat = 1 AND has_tecnico_mecanica = 1 AND pa.id = 1`);

    return h.response({buses}).code(200);
  } catch (error) {
    return h.response({
      error: error.message || "Some error occurred while retrieving buses."
    }).code(500);
  }
};

module.exports.getBusFromReservation = async (request, h) => {
  try {
    const reservationId = request.params.reservationId;

    const bus = await request.app.db.query(`SELECT r.id as reservation_Id, b.*
    FROM busly.Reservations r JOIN busly.Buses b on b.id = r.bus_id
    WHERE r.id = '${reservationId}'`);

    const response = h.response({bus}).code(200);
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    return response;
  } catch (error) {
    return h.response({
      error: error.message || "Some error occurred while retrieving the bus."
    }).code(500);
  }
};

module.exports.getMyBuses = async(request, h) => {
    try {
        const busModel = Bus(sequelize, DataTypes);
        const businessId = request.params.businessId;
        console.log('businessId', businessId);
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

module.exports.createBus = async(request, h) => {
  try {
      const busModel = Bus(sequelize, DataTypes);
      const newBus = request.body.data;
      const bus = await busModel.create(newBus);
      return h.response({
          bus: bus
      }).code(200);

  } catch(err) {
      return h.response({
          error: err.message || "Some error occurred while creating the bus."
      }).code(500);
  };
};
