'use strict';
const data = require("../helpers/excellReaderMahasiswa");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Mahasiswa', data , {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Mahasiswa', null, {});
  }
};
