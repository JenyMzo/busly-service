const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

module.exports = (sequelize, DataTypes) => {
    class Review extends Model {
        static associate() {
            Bus.hasMany(Review, {
                foreignKey: 'bus_id',
            });
            Review.belongsTo(Bus);

            Customer.hasMany(Review, {
                foreignKey: 'customer_id',
            });
            Review.belongsTo(Customer);
        }
    }

    Review.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        rating: {
            type: DataTypes.ENUM,
            values: [1, 2, 3, 4, 5],
            allowNull: true
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        customerId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        busId: {
            type: DataTypes.TINYINT,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Review'
    });

    return Review;
};

await Review.sync({ force: true });
console.log("The table for the Review model was just (re)created!");
