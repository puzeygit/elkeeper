const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Receipt, Order }) {
      // define association here
      this.hasMany(Receipt, { foreignKey: 'userId' });
      this.hasMany(Order, { foreignKey: 'userId' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
