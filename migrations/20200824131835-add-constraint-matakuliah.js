'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('MataKuliah', {
        fields: ['ID_Mahasiswa'],
        type: 'foreign key',
        name: 'custom_fkey_constraint_ID_Mahasiswa',
        references: { //Required field
          table: 'Mahasiswa',
          field: 'ID'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('MataKuliah','custom_fkey_constraint_ID_Mahasiswa' );
  }
};

