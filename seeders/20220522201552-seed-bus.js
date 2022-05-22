module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Buses', [
      {
        business_id: 1,
        registration_plate: 'registration_plate 1',
        brand: 'brand 1',
        model: 'model 1',
        has_tecnico_mecanica: ' has_tecnico_mecanica 1',
        has_soat: true,
        createdAt: new Date()
      },
      {
        business_id: 2,
        registration_plate: 'registration_plate 2',
        brand: 'brand 2',
        model: 'model 2',
        has_tecnico_mecanica: ' has_tecnico_mecanica 2',
        has_soat: false,
        createdAt: new Date()
      },
      {
        business_id: 3,
        registration_plate: 'registration_plate 3',
        brand: 'brand 3',
        model: 'model 3',
        has_tecnico_mecanica: ' has_tecnico_mecanica 3',
        has_soat: true,
        createdAt: new Date()
      },
      {
        business_id: 2,
        registration_plate: 'registration_plate 4',
        brand: 'brand 4',
        model: 'model 4',
        has_tecnico_mecanica: ' has_tecnico_mecanica 4',
        has_soat: false,
        createdAt: new Date()
      },
      {
        business_id: 1,
        registration_plate: 'registration_plate 5',
        brand: 'brand 5',
        model: 'model 5',
        has_tecnico_mecanica: ' has_tecnico_mecanica 5',
        has_soat: true,
        createdAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Buses', null, {});
  }
};
