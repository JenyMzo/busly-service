const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const Business = require('./Business');

module.exports = (sequelize, DataTypes) => {
    class Bus extends Model {
        static associate() {
            Business.hasMany(Bus, {
                foreignKey: 'business_id',
            });
            Bus.belongsTo(Business);
        }
    }

    Bus.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
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
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        is_verified: {
            type: DataTypes.TINYINT,
            allowNull: false
        },
        has_tecnico_mecanica: {
            type: DataTypes.STRING,
            allowNull: false,
            default: false,
        },
        has_soat: {
            type: DataTypes.TINYINT,
            allowNull: false,
            default: false,
        }
    }, {
        sequelize,
        modelName: 'Bus'
    });

    return Bus;
};

await Bus.sync({ force: true });
console.log("The table for the Bus model was just (re)created!");
