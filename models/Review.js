const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const Bus = require('./Bus');
const Customer = require('./Customer');

module.exports = (sequelize, DataTypes) => {
    class Review extends Model {
        static associate(models) {
            Review.belongsTo(models.Bus, {
                as: 'buses',
                foreignKey: 'bus_id'
            });
            Review.belongsTo(models.Customer, {
                as: 'customers',
                foreignKey: 'customer_id'
            });
        }
    }

    Review.init({
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
        rating: {
            type: DataTypes.ENUM,
            values: [1, 2, 3, 4, 5],
            allowNull: true
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
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
        modelName: 'Review'
    });

    return Review;
};

