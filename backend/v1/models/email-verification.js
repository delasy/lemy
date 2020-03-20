const Sequelize = require('sequelize')

class EmailVerification extends Sequelize.Model {
  static associate (models) {
    EmailVerification.belongsTo(models.User)
  }

  static init (sequelize, DataTypes) {
    return super.init({
      id: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID
      },
      code: {
        allowNull: false,
        type: DataTypes.STRING
      }
    }, {
      modelName: 'emailVerification',
      paranoid: true,
      sequelize: sequelize
    })
  }
}

module.exports = EmailVerification
