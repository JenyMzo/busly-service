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
      },
      {
        name: 'Foretours',
        nit: '636363636',
        address: 'address Customer Six',
        city: 'Medellin'
      },
      {
        name: 'Globo',
        nit: '0303030303',
        address: 'address Customer Seven',
        city: 'Envigado'
      },
      {
        name: 'Viajes Sura',
        nit: '9292929292',
        address: 'address Customer Eight',
        city: 'Medellin'
      },
      {
        name: 'Viajes Neptuno',
        nit: '585858585',
        address: 'address Customer Nine',
        city: 'Tambo'
      },
      {
        name: 'Viajes Valencia',
        nit: '1818181818',
        address: 'address Customer Ten',
        city: 'Medellin'
      },
      {
        name: 'World travel',
        nit: '3339393939',
        address: 'address Customer 11',
        city: 'Medellin'
      },
      {
        name: 'Despegar',
        nit: '202020202',
        address: 'address Customer 12',
        city: 'Envigado'
      },
      {
        name: 'Empaque y vámonos',
        nit: '0101010101',
        address: 'address Customer 13',
        city: 'Medellin'
      },
      {
        name: 'Univiajes',
        nit: '779977997',
        address: 'address Customer 14',
        city: 'Tambo'
      },
      {
        name: 'Geotours',
        nit: '65656565656',
        address: 'address Customer 15',
        city: 'Medellin'
      },
      {
        name: 'Génesis',
        nit: '7757575757',
        address: 'address Customer 16',
        city: 'Medellin'
      },
      {
        name: 'Viajes Elite',
        nit: '767676767',
        address: 'address Customer 17',
        city: 'Envigado'
      },
      {
        name: 'Viajes y viajes',
        nit: '090909090',
        address: 'address Customer 18',
        city: 'Medellin'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Customers', null, {});
  }
};
