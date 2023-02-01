'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tasks', [

      {
        title: 'Buy books from library',
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Read books bought from library',
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Write new books',
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Publish new books',
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Learn React Native',
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tasks', null, {});
  }
};
