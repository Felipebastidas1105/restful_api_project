'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('Articles', {
      fields: ['UserId'],
      type: 'foreign key',
      name: 'user_article_association',
      references: {
        table: 'Users',
        field: 'id'
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Articles', 'user_article_association');
  }
};
