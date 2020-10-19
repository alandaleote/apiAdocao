module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Pets', {
      id_pet: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nome: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      especie: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      sexo: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      idade: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      id_ong: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Ongs',
          key: 'id_ong',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
      id_adotante: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
          model: 'Adotantes',
          key: 'id_adotante',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
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
    return queryInterface.dropTable('Pets');
  }
};
