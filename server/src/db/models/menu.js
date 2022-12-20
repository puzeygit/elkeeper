const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order }) {
      // define association here
      this.hasMany(Order, { foreignKey: 'position' });
    }
  }
  Menu.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    category: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Menu',
  });
  return Menu;
};
