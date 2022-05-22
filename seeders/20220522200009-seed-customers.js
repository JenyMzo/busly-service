module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Customers', [
      {
        name: 'Customer One',
        nit: 'nit Customer One',
        address: 'address Customer One',
        city: 'Medellin'
      },
      {
        name: 'Customer Two',
        nit: 'nit Customer Two',
        address: 'address Customer Two',
        city: 'Envigado'
      },
      {
        name: 'Customer Three',
        nit: 'nit Customer Three',
        address: 'address Customer Three',
        city: 'Medellin'
      },
      {
        name: 'Customer Four',
        nit: 'nit Customer Four',
        address: 'address Customer Four',
        city: 'Tambo'
      },
      {
        name: 'Customer Five',
        nit: 'nit Customer Five',
        address: 'address Customer Five',
        city: 'Medellin'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Customers', null, {});
  }
};
