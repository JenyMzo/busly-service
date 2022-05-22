module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reservations', [
      {
        bus_id: 1,
        customer_id: 1,
        reservation_date: new Date(),
        travel_date_start: new Date(),
        travel_date_end: new Date(),
        status: 'approved'
      },
      {
        bus_id: 1,
        customer_id: 3,
        reservation_date: new Date(),
        travel_date_start: new Date(),
        travel_date_end: new Date(),
        status: 'approved'
      },
      {
        bus_id: 2,
        customer_id: 2,
        reservation_date: new Date(),
        travel_date_start: new Date(),
        travel_date_end: new Date(),
        status: 'canceled'
      },
      {
        bus_id: 2,
        customer_id: 1,
        reservation_date: new Date(),
        travel_date_start: new Date(),
        travel_date_end: new Date(),
        status: 'pending'
      },
      {
        bus_id: 3,
        customer_id: 3,
        reservation_date: new Date(),
        travel_date_start: new Date(),
        travel_date_end: new Date(),
        status: 'approved'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reservations', null, {});
  }
};
