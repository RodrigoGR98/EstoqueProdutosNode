//MODEL do Produto

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    
    static associate(models) {
      // Associação
    }
  };

  //DADOS DO PRODUTO

  Produto.init({
    nome: DataTypes.STRING,
    qtde: DataTypes.INTEGER,
    valor: DataTypes.FLOAT
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Produto',
  });
  return Produto;
};