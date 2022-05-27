module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('Ammenities', [
      {
        name: 'Aire acondicionado',
        description: 'Aire acondicionado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Baño',
        description: 'Baño',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ventanillas panorámicas',
        description: 'Ventanillas panorámicas',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sillas reclinables',
        description: 'Sillas reclinables',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Luz de lectura',
        description: 'Luz de lectura',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'TV',
        description: '6 pantallas de 20 pulgadas',
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
