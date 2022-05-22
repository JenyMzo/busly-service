const { Model } = require('sequelize');
const Bus = require('./Bus');
const Ammenity = require('./Ammenity');

module.exports = (sequelize, DataTypes) => {
    class BusAmmenity extends Model {
        static associate(models) {
            BusAmmenity.belongsTo(models.Bus, {
                as: 'buses',
                foreignKey: 'bus_id'
            });
            BusAmmenity.belongsTo(models.Ammenity, {
                as: 'ammenity',
                foreignKey: 'ammenity_id'
            });
        }
    }

    BusAmmenity.init({
        bus_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: Bus,
                key: 'id'
            }
        },
        ammenity_id: {
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
