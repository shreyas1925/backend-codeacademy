'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Notes', [
      {
        title: "note 1 for user 1",
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1
      },
      {
        title: "note 1 for user 1",
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1,
      },
      {
        title: "note 1 for user 1",
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 2,
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Notes', null, {});
  }
};
