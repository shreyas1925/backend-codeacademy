'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.addColumn('Notes','user_id', {
      type:Sequelize.INTEGER,
      references:{
        model:'Users',
        key:'id'
      },
      onDelete:'cascade'
    })
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.removeColumn('Notes','userID')
  }
};
