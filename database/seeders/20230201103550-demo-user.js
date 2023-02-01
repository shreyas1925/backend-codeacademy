'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tasks', [

      {
        id:"1",
        name: 'Learn React',
        isComplete: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:"2",
        name: 'Learn Node',
        isComplete: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:"3",
        name: 'Learn Express',
        isComplete: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:"4",
        name: 'Learn MongoDB',
        isComplete: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:"5",
        name: 'Learn React Native',
        isComplete: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tasks', null, {});
  }
};
