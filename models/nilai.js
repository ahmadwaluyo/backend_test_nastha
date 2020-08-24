'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nilai extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Nilai.belongsTo(models.Mahasiswa, { foreignKey: "ID_Mahasiswa", as: "Mahasiswa"});
      Nilai.belongsTo(models.MataKuliah, { foreignKey: "ID_MataKuliah", as: "MataKuliah"});
    }
  };
  Nilai.init({
    ID_Mahasiswa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        modelName: "Mahasiswa",
        key: "ID"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    },
    ID_MataKuliah: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        modelName: "MataKuliah",
        key: "ID"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    },
    Nilai: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: "Nilai",
    timestamps: false,
    freezeTableName: true,
    tableName: "Nilai"
  });
  return Nilai;
};