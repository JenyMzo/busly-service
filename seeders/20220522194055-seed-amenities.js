module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('Ammenities', [
      {
        name: 'Ammenity One',
        description: 'Description Ammenity One',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ammenity Two',
        description: 'Description Ammenity Two',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ammenity Three',
        description: 'Description Ammenity Three',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ammenity Four',
        description: 'Description Ammenity Four',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ammenity Five',
        description: 'Description Ammenity Five',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Ammenities', null, {});
  }
};
