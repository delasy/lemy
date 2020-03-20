module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction()

    try {
      await queryInterface.createTable('users', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID
        },
        email: {
          allowNull: true,
          type: Sequelize.STRING
        },
        phone: {
          allowNull: true,
          type: Sequelize.STRING
        },
        password: {
          allowNull: false,
          type: Sequelize.STRING(60)
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING
        },
        username: {
          allowNull: false,
          type: Sequelize.STRING
        },
        avatar: {
          allowNull: true,
          type: Sequelize.STRING
        },
        gender: {
          allowNull: true,
          type: Sequelize.ENUM('MALE', 'FEMALE', 'OTHER')
        },
        birthdate: {
          allowNull: true,
          type: Sequelize.DATEONLY
        },
        bio: {
          allowNull: false,
          defaultValue: '',
          type: Sequelize.STRING
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
      }, { transaction })

      await queryInterface.addConstraint('users', {
        fields: ['email', 'deleted_at'],
        name: 'users_email_deleted_at_ukey',
        transaction: transaction,
        type: 'unique'
      })

      await queryInterface.addConstraint('users', {
        fields: ['phone', 'deleted_at'],
        name: 'users_phone_deleted_at_ukey',
        transaction: transaction,
        type: 'unique'
      })

      await queryInterface.addConstraint('users', {
        fields: ['username', 'deleted_at'],
        name: 'users_username_deleted_at_ukey',
        transaction: transaction,
        type: 'unique'
      })

      await transaction.commit()
    } catch (err) {
      await transaction.rollback()
      throw err
    }
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('users')
  }
}
