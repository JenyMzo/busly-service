module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('BusAmmenities', [
      {
        busId: 1,
        ammenityId: 1
      },
      {
        busId: 1,
        ammenityId: 3
      },
      {
        busId: 2,
        ammenityId: 2
      },
      {
        busId: 2,
        ammenityId: 1
      },
      {
        busId: 3,
        ammenityId: 3
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('BusAmmenities', null, {});
  }
};
