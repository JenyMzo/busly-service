const { Sequelize, DataTypes } = require('sequelize');
const Bus = require('../models/Bus');
const config = require('../config/config');
const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password, {
    dialect: config.development.dialect,
  }
);

module.exports.getBuses = async (request, h) => {
  try {
    const busModel = Bus(sequelize, DataTypes);
    const bus = await busModel.findByPk(request.params.id,{
      attributes: ['id', 'brand']
    });

    return h.response({bus}).code(200);
  } catch (error) {
    console.log("🚀 ~ file: busesController.js ~ line 27 ~ module.exports.getBuses= ~ error", error)
    console.log("🚀 ~ file: busesController.js ~ line 28 ~ module.exports.getBuses= ~ error.message", error.message)
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
