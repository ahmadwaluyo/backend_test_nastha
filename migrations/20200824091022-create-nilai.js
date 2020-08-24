'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Nilai', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_Mahasiswa: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      ID_MataKuliah: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      Nilai: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Nilai');
  }
};