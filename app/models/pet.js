module.exports = (sequelize, DataTypes) => {
    const Pet = sequelize.define('pet', {
      nome: DataTypes.STRING,
      especie: DataTypes.STRING,
      sexo: DataTypes.STRING,
      idade: DataTypes.STRING,
    });
    return Pet;
  }