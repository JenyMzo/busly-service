const dayjs = require('dayjs');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reviews', [
      {
        bus_id: 1,
        customer_id: 1,
        rating: 5,
        date: dayjs().add(40, 'day').format(),
        description: 'comfort',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bus_id: 1,
        customer_id: 3,
        rating: 4,
        date: dayjs().add(45, 'day').format(),
        description: 'cleaning',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bus_id: 2,
        customer_id: 2,
        rating: 2,
        date: dayjs().add(41, 'day').format(),
        description: 'comfort',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bus_id: 2,
        customer_id: 1,
        rating: 4,
        date: dayjs().add(43, 'day').format(),
        description: 'comfort',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bus_id: 3,
        customer_id: 3,
        rating: 3,
        date: dayjs().add(47, 'day').format(),
        description: 'comfort',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reservations', null, {});
  }
};
