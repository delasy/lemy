const Sequelize = require('sequelize')
const validator = require('validator')

class User extends Sequelize.Model {
  static init (sequelize) {
    return super.init({
      id: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
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
        type: Sequelize.STRING
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
      }
    }, {
      modelName: 'user',
      paranoid: true,
      sequelize: sequelize
    })
  }

  static findOneByEmailOrUsername (emailOrUsername) {
    return this.findOne({
      where: {
        [Sequelize.Op.or]: [
          { email: emailOrUsername },
          { username: emailOrUsername }
        ]
      }
    })
  }

  static findOneByPhone (phone) {
    return this.findOne({
      where: { phone }
    })
  }

  static isEmail (email) {
    return validator.isEmail(email, {
      allow_display_name: false,
      allow_ip_domain: false,
      allow_utf8_local_part: false,
      domain_specific_validation: false,
      require_display_name: false,
      require_tld: true
    })
  }

  static isPassword (password) {
    return validator.isLength(password, { min: 6 })
  }

  static isPhone (phone) {
    return validator.isMobilePhone(phone, null, { strictMode: true })
  }

  static isUsername (username) {
    return !validator.isEmpty(username) && /^[0-9a-zA-Z._]+$/g.test(username)
  }
}

module.exports = User
