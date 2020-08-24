'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mahasiswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Mahasiswa.hasMany(models.Nilai, { foreignKey: "ID_Mahasiswa"})
      // define association here
    }
  };
  Mahasiswa.init({
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    Nama: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3],
          msg: "Name length must be at least 3 characters"
        }
      }
    },
    Alamat: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [5],
          msg: "Alamat length must be at least 5 characters"
        }
      }
    }
  }, {
    sequelize,
    modelName: "Mahasiswa",
    timestamps: false,
    freezeTableName: true,
    tableName: "Mahasiswa"
  });
  return Mahasiswa;
};