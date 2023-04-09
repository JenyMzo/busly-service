module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('BusPackages', [
      {
        bus_id: 1,
        package_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bus_id: 1,
        package_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bus_id: 1,
        package_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bus_id: 1,
        package_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bus_id: 2,
        package_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bus_id: 2,
        package_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bus_id: 2,
        package_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bus_id: 2,
        package_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bus_id: 2,
        package_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bus_id: 3,
        package_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bus_id: 3,
        package_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bus_id: 3,
        package_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bus_id: 3,
        package_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bus_id: 4,
        package_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bus_id: 4,
        package_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bus_id: 4,
        package_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bus_id: 4,
        package_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bus_id: 4,
        package_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bus_id: 5,
        package_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bus_id: 5,
        package_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bus_id: 5,
        package_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bus_id: 5,
        package_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('BusPackages', null, {});
  }
};
