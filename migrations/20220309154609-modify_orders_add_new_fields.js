'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Orders',
        'usuarioId',
        {
          type: Sequelize.INTEGER,
          allowNull: false,
        references: { 
          model: 'Usuarios', 
          key: 'id' 
        }, 
        onUpdate: 'CASCADE', 
        onDelete: 'CASCADE'
        },
      ),
      queryInterface.addColumn(
        'Orders',
        'peliculaId',
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { 
          model: 'Peliculas',
          key: 'id'
        }, 
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
        },
      ),
])},

  down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Orders', 'peliculaId'),
      queryInterface.removeColumn('Orders', 'usuarioId')
    ]);
  },
};
