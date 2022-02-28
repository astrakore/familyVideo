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
      price: {
        type: Sequelize.INTEGER
      },
      peliculaId: { 
        type: Sequelize.INTEGER, 
        allowNull: false, 
        references: { 
          model: 'Peliculas', //Le decimos que su referencia es la tabla 'Peliculas' (nombre en plural del modelo master)
          key: 'id' // mediante su id 
        }, 
        onUpdate: 'CASCADE', //Le decimos que al actualizar una película, también lo haga con ese pedido
        onDelete: 'CASCADE' //Le decimos que al borrar una película, también borre ese pedido 
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
      fecha: {
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