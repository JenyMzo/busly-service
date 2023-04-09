const Bus = require('./Bus');
const Package = require('./Package');

module.exports = (sequelize, DataTypes) => {
    const BusPackage = sequelize.define('BusPackage', {
        bus_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: Bus,
                key: 'id'
            }
        },
        package_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: Package,
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
        tableName: 'BusPackage',
    });

    BusPackage.associate = (models) => {
        BusPackage.belongsTo(models.Bus, {
            foreignKey: 'bus_id'
        });
        BusPackage.belongsTo(models.Package, {
            foreignKey: 'package_id'
        });
    };

    return BusPackage;
};
