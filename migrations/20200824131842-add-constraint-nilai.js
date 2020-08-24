'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Nilai', {
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

      await queryInterface.addConstraint('Nilai', {
        fields: ['ID_MataKuliah'],
        type: 'foreign key',
        name: 'custom_fkey_constraint_ID_MataKuliah',
        references: { //Required field
          table: 'MataKuliah',
          field: 'ID'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Nilai','custom_fkey_constraint_ID_Mahasiswa' );
    await queryInterface.removeConstraint('Nilai','custom_fkey_constraint_ID_MataKuliah' );
  }
};

