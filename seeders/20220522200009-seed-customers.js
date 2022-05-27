module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Customers', [
      {
        name: 'Nativa Representaciones turisticas',
        nit: '777777777',
        address: 'address Customer One',
        city: 'Medellin'
      },
      {
        name: 'Aviatur',
        nit: '88888888',
        address: 'address Customer Two',
        city: 'Envigado'
      },
      {
        name: 'Viajes Falabella',
        nit: '999999999',
        address: 'address Customer Three',
        city: 'Medellin'
      },
      {
        name: 'Viajes Veracruz',
        nit: '1212121212',
        address: 'address Customer Four',
        city: 'Tambo'
      },
      {
        name: 'Viajes Villanueva',
        nit: '1010101010',
        address: 'address Customer Five',
        city: 'Medellin'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Customers', null, {});
  }
};
