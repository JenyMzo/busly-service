'use strict';

var {Sequelize, DataTypes} = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Ammenities", deps: []
 * createTable "Buses", deps: []
 * createTable "BusAmmenities", deps: []
 * createTable "Businesses", deps: []
 * createTable "Customers", deps: []
 * createTable "Reservations", deps: []
 * createTable "Reviews", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "mega-migration",
    "created": "2022-05-21T20:43:54.631Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "Ammenities",
            {
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
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Businesses",
            {
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
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Buses",
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                business_id: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: 'Businesses',
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
                    type: DataTypes.STRING,
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
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "BusAmmenities",
            {
                bus_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'Buses',
                        key: 'id'
                    }
                },
                ammenity_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'Ammenities',
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
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Customers",
            {
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
                createdAt: {
                    type: DataTypes.DATE,
                    allowNull: true
                },
                updatedAt: {
                    type: DataTypes.DATE,
                    allowNull: true
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Reservations",
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                bus_id: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: 'Buses',
                        key: 'id'
                    }
                },
                customer_id: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: 'Customers',
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
                    values: ['pending', 'approved', 'canceled'],
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
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Reviews",
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                bus_id: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: 'Buses',
                        key: 'id'
                    }
                },
                customer_id: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: 'Customers',
                        key: 'id'
                    }
                },
                rating: {
                    type: DataTypes.ENUM,
                    values: ['1', '2', '3', '4', '5'],
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
                createdAt: {
                    type: DataTypes.DATE,
                    allowNull: true
                },
                updatedAt: {
                    type: DataTypes.DATE,
                    allowNull: true
                }
            },
            {}
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
