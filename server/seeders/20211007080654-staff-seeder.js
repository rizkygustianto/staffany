'use strict';

let staffs = [
  {
    name: 'Nick',
    email: 'nick@mail.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Jack',
    email: 'jack@mail.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Jess',
    email: 'jess@mail.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Staffs', staffs);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Staffs', null, {});
  }
};
