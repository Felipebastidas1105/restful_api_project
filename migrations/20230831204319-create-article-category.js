'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('articleCategories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ArticleId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Articles",
            key: "id"
          }
        }
      },
      CategoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Categories",
            key: "id"
          }
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('articleCategories');
  }
};