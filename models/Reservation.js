const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const Bus = require('./Bus');
const Customer = require('./Customer');

module.exports = (sequelize, DataTypes) => {

    class Reservation extends Model {
        static associate() {
            Bus.hasMany(Reservation, {
                foreignKey: 'bus_id',
            });
            Reservation.belongsTo(Bus);

            Customer.hasMany(Reservation, {
                foreignKey: 'customer_id',
            });
            Reservation.belongsTo(Customer);
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
        }
    }, {
        sequelize,
        modelName: 'Reservation'
    });

    return Reservation;
};

await Reservation.sync({ force: true });
console.log("The table for the Reservation model was just (re)created!");
