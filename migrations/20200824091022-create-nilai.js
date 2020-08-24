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
        references: {
          model: "Mahasiswa",
          key: "ID"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      },
      ID_MataKuliah: {
        type: Sequelize.INTEGER,
        references: {
          model: "MataKuliah",
          key: "ID"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      },
      Nilai: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Nilai');
  }
};