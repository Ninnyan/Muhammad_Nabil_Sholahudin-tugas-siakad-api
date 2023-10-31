'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mahasiswaBimbingan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // mahasiswaBimbingan.belongsTo(models.Mahasiswa, {foreignKey : 'id_mahasiswa'})
      // mahasiswaBimbingan.belongsTo(models.Dosen, {foreignKey : 'id_dosen'})
      // mahasiswaBimbingan.belongsTo(models.Mahasiswa, {foreignKey : 'id_mahasiswa'})
    }
  }
  mahasiswaBimbingan.init({
    id_mahasiswa: {
      type : DataTypes.INTEGER,
      references : {
        model : 'Mahasiswas',
        key : 'id'
      } 
    },
    id_dosen: {
      type : DataTypes.INTEGER,
      references : {
        model : 'Dosens',
        key : 'id'
      } 
    }
  }, {
    sequelize,
    modelName: 'mahasiswaBimbingan',
  });
  return mahasiswaBimbingan;
};