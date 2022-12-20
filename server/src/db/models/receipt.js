const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Receipt extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Table, Order }) {
      // define association here
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Table, { foreignKey: 'tableId' });
      this.hasMany(Order, { foreignKey: 'receiptId' });
    }
  }
  Receipt.init({
    total: DataTypes.FLOAT,
    userId: DataTypes.INTEGER,
    tableId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Receipt',
  });
  return Receipt;
};
