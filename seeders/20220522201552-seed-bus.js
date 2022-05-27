module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Buses', [
      {
        business_id: 1,
        registration_plate: 'AAA-111',
        brand: 'Chevrolet NPR',
        model: '2021',
        has_tecnico_mecanica: true,
        has_soat: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        business_id: 2,
        registration_plate: 'BBB-222',
        brand: 'Volkswagen 17.210 EOD',
        model: '2014',
        has_tecnico_mecanica: true,
        has_soat: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        business_id: 3,
        registration_plate: 'CCC-333',
        brand: 'Hino FC9J',
        model: '2017',
        has_tecnico_mecanica: true,
        has_soat: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        business_id: 2,
        registration_plate: 'DDD-444',
        brand: 'Mercedes Benz O 500 1836',
        model: '2019',
        has_tecnico_mecanica: true,
        has_soat: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        business_id: 1,
        registration_plate: 'EEE-555',
        brand: 'Volvo B420r',
        model: '2016',
        has_tecnico_mecanica: true,
        has_soat: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Buses', null, {});
  }
};
