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
        first_name: {
          allowNull: false,
          type: Sequelize.STRING
        },
        last_name: {
          allowNull: false,
          type: Sequelize.STRING
        },
        nickname: {
          allowNull: true,
          type: Sequelize.STRING
        },
        username: {
          allowNull: true,
          type: Sequelize.STRING
        },
        email: {
          allowNull: false,
          type: Sequelize.STRING
        },
        phone_number: {
          allowNull: true,
          type: Sequelize.STRING
        },
        password: {
          allowNull: false,
          type: Sequelize.STRING(60)
        },
        type: {
          allowNull: false,
          type: Sequelize.ENUM('client', 'freelancer')
        },
        description: {
          allowNull: true,
          type: Sequelize.TEXT
        },
        gender: {
          allowNull: true,
          type: Sequelize.ENUM('female', 'male', 'trans')
        },
        date_of_birth: {
          allowNull: true,
          type: Sequelize.DATE
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE
        },
        deleted_at: {
          allowNull: true,
          type: Sequelize.DATE
        },
        email_verified_at: {
          allowNull: true,
          type: Sequelize.DATE
        },
        phone_number_verified_at: {
          allowNull: true,
          type: Sequelize.DATE
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }, { transaction })

      await queryInterface.addConstraint('users', ['email'], {
        name: 'users_email_ukey',
        transaction: transaction,
        type: 'unique'
      })

      await queryInterface.addConstraint('users', ['phone_number'], {
        name: 'users_phone_number_ukey',
        transaction: transaction,
        type: 'unique'
      })

      await queryInterface.addConstraint('users', ['username'], {
        name: 'users_username_ukey',
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
