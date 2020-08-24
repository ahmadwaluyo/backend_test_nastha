'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MataKuliah', {
      ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      NamaMataKuliah: {
        type: Sequelize.STRING
      },
      ID_Mahasiswa: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('MataKuliah');
  }
};