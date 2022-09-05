const Business = require('./Business');

module.exports = (sequelize, DataTypes) => {
    const Bus = sequelize.define('Bus', {
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
            type: DataTypes.TINYINT,
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
        timestamps: false,
        tableName: 'Buses',
    });

    Bus.associate = (models) => {
        Bus.hasMany(models.Reservation, {
            foreignKey: 'bus_id',
        });
        Bus.hasMany(models.BusAmmenity, {
            foreignKey: 'bus_id'
        });
        Bus.hasMany(models.Review, {
            foreignKey: 'bus_id'
        });
    };

    return Bus;
};
