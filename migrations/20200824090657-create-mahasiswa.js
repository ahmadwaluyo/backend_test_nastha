'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Mahasiswa', {
      ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      Nama: {
        type: Sequelize.STRING
      },
      Alamat: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Mahasiswa');
  }
};