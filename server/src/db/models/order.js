const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Menu, Receipt, User }) {
      // define association here
      this.belongsTo(Menu, { foreignKey: 'position' });
      this.belongsTo(Receipt, { foreignKey: 'receiptId' });
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Order.init({
    position: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    receiptId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
