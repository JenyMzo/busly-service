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

var migrationCommands = [
    {
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
            }
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
            }
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
            }
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
            }
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
            }
        ]
    },
    {
        fn: "createTable",
        params: [
            "Packages",
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                name: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                price: {
                    type: DataTypes.FLOAT,
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
            }
        ]
    },
    {
        fn: "createTable",
        params: [
            "Permissions",
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                perm_name: {
                    type: Sequelize.STRING
                },
                perm_description: {
                    type: Sequelize.STRING
                },
                createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                },
                updatedAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                }
            }
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
                package_id: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: 'Packages',
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
                business_id: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: 'Businesses',
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
                    values: ['confirmada', 'cancelada', 'completada'],
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
            }
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
            }
        ]
    },
    {
        fn: "createTable",
        params: [
            "Roles",
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                role_name: {
                    type: Sequelize.STRING
                },
                role_description: {
                    type: Sequelize.STRING
                },
                createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                },
                updatedAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                }
            }
        ]
    },
    {
        fn: "createTable",
        params: [
            "RolePermissions",
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                role_id: {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'Roles',
                        key: 'id'
                    }
                },
                perm_id: {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'Permissions',
                        key: 'id'
                    }
                },
                createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                },
                updatedAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                }
            }
        ]
    },
    {
        fn: "createTable",
        params: [
            "Users",
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                role_id: {
                    type: Sequelize.INTEGER
                },
                email: {
                    type: Sequelize.STRING
                },
                password: {
                    type: Sequelize.STRING
                },
                fullname: {
                    type: Sequelize.STRING
                },
                createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                },
                updatedAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                }
            }
        ]
    },
    {
        fn: "createTable",
        params: [
            "BusPackages",
            {
                bus_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'Buses',
                        key: 'id'
                    }
                },
                package_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'Packages',
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
            }
        ]
    },
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
