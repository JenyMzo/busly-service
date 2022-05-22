const { Model } = require('sequelize');
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
        has_tecnico_mecanica: {
            type: DataTypes.STRING,
            allowNull: false,
            default: false,
        },
        has_soat: {
            type: DataTypes.TINYINT,
            allowNull: false,
            default: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        sequelize,
        modelName: 'Bus'
    });

    return Bus;
};
