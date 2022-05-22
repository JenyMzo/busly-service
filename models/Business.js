const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Business extends Model {
        static associate(models) {
            Business.hasMany(models.Bus, {
                as: 'buses',
                foreignKey: 'business_id'
            });
        }
    }

    Business.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nit: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isVerified: {
            type: DataTypes.TINYINT,
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
        modelName: 'Business'
    });

    return Business;
};

