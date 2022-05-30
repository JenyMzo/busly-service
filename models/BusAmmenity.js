const { Model } = require('sequelize');
const Bus = require('./Bus');
const Ammenity = require('./Ammenity');

module.exports = (sequelize, DataTypes) => {
    const BusAmmenity = sequelize.define('BusAmmenity', {
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
        timestamps: false,
        tableName: 'Buses',
    });

    BusAmmenity.associate = (models) => {
        BusAmmenity.belongsTo(models.Bus, {
            foreignKey: 'bus_id'
        });
        BusAmmenity.belongsTo(models.Ammenity, {
            foreignKey: 'ammenity_id'
        });
    };

    return BusAmmenity;
};
