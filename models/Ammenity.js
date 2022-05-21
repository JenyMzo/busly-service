const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const Bus = require('./Bus');
const BusAmmenity = require('./BusAmmenity');

module.exports = (sequelize, DataTypes) => {
    class Ammenity extends Model {
        // static associate() {
        //     Ammenity.belongsToMany(Bus, { through: BusAmmenity });
        // }
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
    }, {
        sequelize,
        modelName: 'Ammenity'
    });

    return Ammenity;
};

await Ammenity.sync({ force: true });
console.log("The table for the Ammenity model was just (re)created!");
