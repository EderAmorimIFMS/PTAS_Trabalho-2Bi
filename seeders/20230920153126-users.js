'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'John Doe',
        password: 'senha111',
        email: 'jonh@gmail.com',
      },
      {
        name: 'John Amorim',
        password: 'senha222',
        email: 'amorim@gmail.com',
      },
      {
        name: 'John da Silva',
        password: 'senha333',
        email: 'silva@gmail.com',
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('users', null, {});
  }
};