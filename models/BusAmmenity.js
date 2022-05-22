const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const Bus = require('./Bus');
const Ammenity = require('./Ammenity');

module.exports = (sequelize, DataTypes) => {
    class BusAmmenity extends Model {}

    BusAmmenity.init({
        busId: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: Bus,
                key: 'id'
            }
        },
        ammenityId: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: Ammenity,
                key: 'id'
            }
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
        modelName: 'BusAmmenity'
    });

    return BusAmmenity;
};
