const Sequelize = require('sequelize')

class User extends Sequelize.Model {
  static associate (models) {
    User.hasMany(models.EmailVerification)
  }

  static init (sequelize, DataTypes) {
    return super.init({
      id: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID
      },
      firstName: {
        allowNull: false,
        type: DataTypes.STRING
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING
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
        type: DataTypes.STRING
      },
      phoneNumber: {
        allowNull: true,
        type: DataTypes.STRING
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING
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
      dateOfBirth: {
        allowNull: true,
        type: Sequelize.DATE
      },
      emailVerifiedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      phoneNumberVerifiedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    }, {
      modelName: 'user',
      paranoid: true,
      sequelize: sequelize,

      indexes: [
        {
          fields: ['email'],
          name: 'users_email_ukey',
          unique: true
        },
        {
          fields: ['phone_number'],
          name: 'users_phone_number_ukey',
          unique: true
        },
        {
          fields: ['username'],
          name: 'users_username_ukey',
          unique: true
        }
      ],
      scopes: {
        email: (email) => {
          return {
            where: { email }
          }
        }
      }
    })
  }

  static generateOTP () {
    const digits = '0123456789'
    let result = ''

    for (let i = 0; i < 6; i++) {
      result += digits[Math.floor(Math.random() * 10)]
    }

    return result
  }
}

module.exports = User
