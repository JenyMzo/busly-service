const { Model } = require('sequelize');
const Bus = require('./Bus');
const Customer = require('./Customer');

module.exports = (sequelize, DataTypes) => {

    class Reservation extends Model {
        static associate(models) {
            Reservation.belongsTo(models.Bus, {
                foreignKey: 'bus_id',
                as: 'buses'
            });
            Reservation.belongsTo(models.Customer, {
                foreignKey: 'customer_id',
                as: 'customers'
            });
        }
    }

    Reservation.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        bus_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Bus,
                key: 'id'
            }
        },
        customer_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Customer,
                key: 'id'
            }
        },
        reservation_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        travel_date_start: {
            type: DataTypes.DATE,
            allowNull: false
        },
        travel_date_end: {
            type: DataTypes.DATE,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM,
            values: ['pending', 'approved', 'canceled'],
            allowNull: false
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
        modelName: 'Reservation'
    });

    return Reservation;
};
