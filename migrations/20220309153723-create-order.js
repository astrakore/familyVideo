'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      precio: {
        type: Sequelize.INTEGER
      },
      peliculaId: { 
        type: Sequelize.INTEGER, 
        allowNull: false, 
        references: { 
          model: 'Peliculas',
          key: 'id'
        }, 
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      usuarioId: { 
        type: Sequelize.INTEGER, 
        allowNull: false, 
        references: { 
          model: 'Usuarios', 
          key: 'id' 
        }, 
        onUpdate: 'CASCADE', 
        onDelete: 'CASCADE' 
      },
      fechaPedido: {
        type: Sequelize.DATE
      },
      fechaDevolver: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};