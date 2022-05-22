'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'ammenities',
        'createdAt',
        {
          type: Sequelize.DATE,
        }
      ),
      queryInterface.addColumn(
        'ammenities',
        'updatedAt',
        {
          type: Sequelize.DATE,
        }
      ),
      queryInterface.addColumn(
        'busses',
        'createdAt',
        {
          type: Sequelize.DATE,
        }
      ),
      queryInterface.addColumn(
        'busses',
        'updatedAt',
        {
          type: Sequelize.DATE,
        }
      ),
      queryInterface.addColumn(
        'busAmmenities',
        'createdAt',
        {
          type: Sequelize.DATE,
        }
      ),
      queryInterface.addColumn(
        'busAmmenities',
        'updatedAt',
        {
          type: Sequelize.DATE,
        }
      ),
      queryInterface.addColumn(
        'businesses',
        'createdAt',
        {
          type: Sequelize.DATE,
        }
      ),
      queryInterface.addColumn(
        'businesses',
        'updatedAt',
        {
          type: Sequelize.DATE,
        }
      ),
      queryInterface.addColumn(
        'customers',
        'createdAt',
        {
          type: Sequelize.DATE,
        }
      ),
      queryInterface.addColumn(
        'customers',
        'updatedAt',
        {
          type: Sequelize.DATE,
        }
      ),
      queryInterface.addColumn(
        'reservations',
        'createdAt',
        {
          type: Sequelize.DATE,
        }
      ),
      queryInterface.addColumn(
        'reservations',
        'updatedAt',
        {
          type: Sequelize.DATE,
        }
      ),
      queryInterface.addColumn(
        'reviews',
        'createdAt',
        {
          type: Sequelize.DATE,
        }
      ),
      queryInterface.addColumn(
        'reviews',
        'updatedAt',
        {
          type: Sequelize.DATE,
        }
      ),
    ]);
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn(
        'ammenities',
        'createdAt',
      ),
      queryInterface.removeColumn(
        'ammenities',
        'updatedAt',
      ),
      queryInterface.removeColumn(
        'busses',
        'createdAt',
      ),
      queryInterface.removeColumn(
        'busses',
        'updatedAt',
      ),
      queryInterface.removeColumn(
        'busAmmenities',
        'createdAt',
      ),
      queryInterface.removeColumn(
        'busAmmenities',
        'updatedAt',
      ),
      queryInterface.removeColumn(
        'businesses',
        'createdAt',
      ),
      queryInterface.removeColumn(
        'businesses',
        'updatedAt',
      ),
      queryInterface.removeColumn(
        'customers',
        'createdAt',
      ),
      queryInterface.removeColumn(
        'customers',
        'updatedAt',
      ),
      queryInterface.removeColumn(
        'reservations',
        'createdAt',
      ),
      queryInterface.removeColumn(
        'reservations',
        'updatedAt',
      ),
      queryInterface.removeColumn(
        'reviews',
        'createdAt',
      ),
      queryInterface.removeColumn(
        'reviews',
        'updatedAt',
      ),
    ]);
  }
};

