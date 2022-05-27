module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Businesses', [
      {
        name: 'Seditrans',
        nit: '1111111111',
        address: 'Calle 1',
        city: 'Medellin',
        isVerified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Supertours',
        nit: '2222222222',
        address: 'Calle 2',
        city: 'Envigado',
        isVerified: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Precoltur',
        nit: '3333333333',
        address: 'calle 3',
        city: 'Itagui',
        isVerified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bogotrans',
        nit: '4444444444',
        address: 'address Businesses Four',
        city: 'Bogotá',
        isVerified: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Calitours',
        nit: '5555555555',
        address: 'address Businesses Five',
        city: 'Cali',
        isVerified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Businesses', null, {});
  }
};
