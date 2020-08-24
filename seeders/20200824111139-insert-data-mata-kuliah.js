'use strict';
const data = require("../helpers/excellReaderMataKuliah");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('MataKuliah', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('MataKuliah', null, {});
  }
};
