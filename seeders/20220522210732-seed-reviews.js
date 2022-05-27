const dayjs = require('dayjs');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reviews', [
      {
        bus_id: 1,
        customer_id: 1,
        rating: 5,
        date: dayjs().add(30, 'day').format(),
        description: 'Description Reviews One'
      },
      {
        bus_id: 1,
        customer_id: 3,
        rating: 4,
        date: dayjs().add(25, 'day').format(),
        description: 'Description Reviews Two'
      },
      {
        bus_id: 2,
        customer_id: 2,
        rating: 2,
        date: dayjs().add(31, 'day').format(),
        description: 'Description Reviews Three'
      },
      {
        bus_id: 2,
        customer_id: 1,
        rating: 4,
        date: dayjs().add(33, 'day').format(),
        description: 'Description Reviews Four',
      },
      {
        bus_id: 3,
        customer_id: 3,
        rating: 3,
        date: dayjs().add(27, 'day').format(),
        description: 'Description Reviews Five'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reservations', null, {});
  }
};
