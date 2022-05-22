
const { Sequelize, DataTypes } = require('sequelize');
const Bus = require('../models/Bus');
const config = require('../config/config');
const sequelize = new Sequelize(
  config.development.database,
  config.development.user,
  config.development.password, {
    dialect: config.development.dialect,
  }
);

// const { Op } = require('@sequelize/core');

module.exports.getBuses = async (request, h) => {
  try {
    const busModel = Bus(sequelize, DataTypes);

    // const bus = await busModel.findAll({
    //   attributes: ['id', 'brand'],
    //   where: {
    //     id: request.params.id
    //   }
    // });

    // const bus = await busModel.findByPk(request.params.id);

    const bus = await busModel.findByPk(request.params.id,{
      attributes: ['id', 'brand']
    });
    // if (bus === null) {
    //   console.log('Not found!');
    // } else {
    //   console.log('found!');
    //   // Its primary key is 123
    // }

    // const bus = await Bus.findById(request.params.id);
    // const bus = await request.app.db.query(`select * from buses where id=${request.params.id}`);// .from('buses').select('*').where('id', request.params.id);
    // console.log("🚀 ~ file: routes.js ~ line 24 ~ handler: ~ bus", bus)

    return h.response({bus}).code(200);
  } catch (error) {
    console.log("🚀 ~ file: busesController.js ~ line 27 ~ module.exports.getBuses= ~ error", error)
    console.log("🚀 ~ file: busesController.js ~ line 28 ~ module.exports.getBuses= ~ error.message", error.message)
  }
};
