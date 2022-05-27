module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('BusAmmenities', [
      {
        bus_id: 1,
        ammenity_id: 1
      },
      {
        bus_id: 1,
        ammenity_id: 2
      },
      {
        bus_id: 1,
        ammenity_id: 3
      },
      {
        bus_id: 1,
        ammenity_id: 5
      },
      {
        bus_id: 2,
        ammenity_id: 1
      },
      {
        bus_id: 2,
        ammenity_id: 2
      },
      {
        bus_id: 2,
        ammenity_id: 3
      },
      {
        bus_id: 2,
        ammenity_id: 4
      },
      {
        bus_id: 2,
        ammenity_id: 5
      },
      {
        bus_id: 3,
        ammenity_id: 1
      },
      {
        bus_id: 3,
        ammenity_id: 2
      },
      {
        bus_id: 3,
        ammenity_id: 3
      },
      {
        bus_id: 3,
        ammenity_id: 5
      },
      {
        bus_id: 4,
        ammenity_id: 1
      },
      {
        bus_id: 4,
        ammenity_id: 2
      },
      {
        bus_id: 4,
        ammenity_id: 3
      },
      {
        bus_id: 4,
        ammenity_id: 4
      },
      {
        bus_id: 4,
        ammenity_id: 5
      },
      {
        bus_id: 5,
        ammenity_id: 1
      },
      {
        bus_id: 5,
        ammenity_id: 2
      },
      {
        bus_id: 5,
        ammenity_id: 3
      },
      {
        bus_id: 5,
        ammenity_id: 4
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('BusAmmenities', null, {});
  }
};
