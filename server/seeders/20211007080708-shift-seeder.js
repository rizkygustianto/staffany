'use strict';

let shifts = [
  {
    StaffId: 1,
    startTime: new Date('2021-12-17T03:23:00'),
    endTime: new Date('2021-12-17T03:23:00'),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    StaffId: 2,
    startTime: new Date('2021-12-17T03:23:00'),
    endTime: new Date('2021-12-17T03:23:00'),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    StaffId: 3,
    startTime: new Date('2021-12-17T03:23:00'),
    endTime: new Date('2021-12-17T03:23:00'),
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
    await queryInterface.bulkInsert('Shifts', shifts)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Shifts', null, {});
  }
};
