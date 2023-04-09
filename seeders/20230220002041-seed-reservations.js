const dayjs = require('dayjs');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reservations', [
      {
        bus_id: 1,
        package_id: 1,
        customer_id: 1,
        business_id: 1,
        reservation_date: dayjs().add(7, 'day').format(),
        travel_date_start:  dayjs().add(15, 'day').format(),
        travel_date_end:  dayjs().add(20, 'day').format(),
        status: 'confirmada',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bus_id: 2,
        package_id: 1,
        customer_id: 3,
        business_id: 1,
        reservation_date: dayjs().add(8, 'day').format(),
        travel_date_start:  dayjs().add(25, 'day').format(),
        travel_date_end:  dayjs().add(28, 'day').format(),
        status: 'completada',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bus_id: 4,
        package_id: 2,
        customer_id: 2,
        business_id: 1,
        reservation_date: dayjs().add(9, 'day').format(),
        travel_date_start:  dayjs().add(15, 'day').format(),
        travel_date_end:  dayjs().add(27, 'day').format(),
        status: 'completada',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bus_id: 1,
        package_id: 2,
        customer_id: 1,
        business_id: 2,
        reservation_date: dayjs().add(6, 'day').format(),
        travel_date_start:  dayjs().add(30, 'day').format(),
        travel_date_end:  dayjs().add(35, 'day').format(),
        status: 'confirmada',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bus_id: 3,
        package_id: 3,
        customer_id: 3,
        business_id: 1,
        reservation_date: dayjs().add(7, 'day').format(),
        travel_date_start:  dayjs().add(12, 'day').format(),
        travel_date_end:  dayjs().add(18, 'day').format(),
        status: 'confirmada',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reservations', null, {});
  }
};
