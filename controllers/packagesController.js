const { Sequelize, DataTypes } = require('sequelize');
const Package = require('../models/Package');
const config = require('../config/config');
const sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password, {
    dialect: config.development.dialect,
}
);

module.exports.getPackageById = async (request, h) => {
    try {
        const packageModel = Package(sequelize, DataTypes);
        const package = await packageModel.findByPk(request.params.id);
        return h.response(package).code(200);

    } catch (err) {
        return h.response({
            error: err.message || "Some error occurred while retrieving this package."
        }).code(500);
    };
};

module.exports.getDistinctPackages = async (request, h) => {
    try {
        const packages = await request.app.db.query('SELECT distinct(name), description FROM busly.Packages');

        return h.response(packages).code(200);

    } catch (err) {
        return h.response({
            error: err.message || "Some error occurred while retrieving packages."
        }).code(500);
    };
};


