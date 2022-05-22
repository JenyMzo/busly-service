const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Ammenity extends Model {
        static associate(models) {
            Ammenity.hasMany(models.BusAmmenity, {
                as: 'busAmmenities',
                foreignKey: 'ammenity_id'
            });
        }
    }

    Ammenity.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
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
        modelName: 'Ammenity'
    });

    return Ammenity;
};
