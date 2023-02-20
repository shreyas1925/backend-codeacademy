'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('Users', [
            {
                name: 'John Doe',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Joy',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Maria',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Users', null, {});
    }
};
