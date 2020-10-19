module.exports = {
  up: (queryInterface, DataTypes) => {
      return queryInterface.createTable('Ongs', {
        id_ong: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        nome: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        email: {
          allowNull: false,
          type: DataTypes.STRING,
          unique: true,
        },
        telefone: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        cidade: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE,
          },
      });
  },

  down: (queryInterface) => {
      return queryInterface.dropTable('Ongs');
  }
};
