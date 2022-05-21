const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

module.exports = (sequelize, DataTypes) => {
    class Business extends Model {}

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
        }
    }, {
        sequelize,
        modelName: 'Business'
    });

    return Business;
};

await Bus.sync({ force: true });
console.log("The table for the Bus model was just (re)created!");
