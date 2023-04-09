const Customer = require('./Customer');
const Package = require('./Package');

module.exports = (sequelize, DataTypes) => {
    const Reservation = sequelize.define('Reservation', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        package_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Package,
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
        business_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Business,
                key: 'id'
            }
        },
        bus_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Bus,
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
            values: ['confirmado', 'cancelado', 'completado'],
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
        timestamps: false,
        tableName: 'Reservations',
    });

    Reservation.associate = (models) => {
        Reservation.belongsTo(models.Package, {
            foreignKey: 'package_id',
        });
        Reservation.belongsTo(models.Customer, {
            foreignKey: 'customer_id',
        });
        Reservation.belongsTo(models.Business, {
            foreignKey: 'business_id',
        });
        Reservation.belongsTo(models.Bus, {
            foreignKey: 'bus_id',
        });
    };

    return Reservation;
};
