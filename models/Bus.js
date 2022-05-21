const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const Business = require('./Business');

module.exports = (sequelize, DataTypes) => {
    class Bus extends Model {}

    Bus.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        business_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Business,
                key: 'id'
            }
        },
        registration_plate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        is_verified: {
            type: DataTypes.TINYINT,
            allowNull: false
        },
        has_tecnico_mecanica: {
            type: DataTypes.STRING,
            allowNull: false,
            default: false,
        },
        has_soat: {
            type: DataTypes.TINYINT,
            allowNull: false,
            default: false,
        }
    }, {
        sequelize,
        modelName: 'Bus'
    });

    return Bus;
};
