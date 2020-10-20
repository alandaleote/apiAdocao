module.exports = (sequelize, DataTypes) => {
    const Ong = sequelize.define('ong', {
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      telefone: DataTypes.STRING,
      cidade: DataTypes.STRING,
    });
    return Ong;
  }