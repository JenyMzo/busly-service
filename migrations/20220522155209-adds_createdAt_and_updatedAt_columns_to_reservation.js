'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
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
    )
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn(
      'reservations',
      'createdAt',
    ),
    queryInterface.removeColumn(
      'reservations',
      'updatedAt',
    )
  }
};
