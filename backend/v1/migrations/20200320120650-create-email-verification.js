module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('email_verifications', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      user_id: {
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        },
        type: Sequelize.UUID
      },
      code: {
        allowNull: false,
        type: Sequelize.STRING(6)
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('email_verifications')
  }
}
