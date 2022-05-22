module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Businesses', [
      {
        name: 'Businesses One',
        nit: '123',
        address: 'address Businesses One',
        city: 'Medellin',
        isVerified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Businesses Two',
        nit: '456',
        address: 'address Businesses Two',
        city: 'Envigado',
        isVerified: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Businesses Three',
        nit: 'nit Businesses Three',
        address: 'address Businesses Three',
        city: 'Itagui',
        isVerified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Businesses Four',
        nit: 'nit Businesses Four',
        address: 'address Businesses Four',
        city: 'Tambo',
        isVerified: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Businesses Five',
        nit: 'nit Businesses Five',
        address: 'address Businesses Five',
        city: 'Berlin',
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
