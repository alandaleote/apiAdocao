module.exports = (sequelize, DataTypes) => {
    const Adotante = sequelize.define('Adotante', {
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      telefone: DataTypes.STRING,
      cidade: DataTypes.STRING,
    });
    return Adotante;
  }