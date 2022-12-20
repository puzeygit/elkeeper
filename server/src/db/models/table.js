const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Table extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Receipt }) {
      // define association here
      this.hasMany(Receipt, { foreignKey: 'tableId' });
    }
  }
  Table.init({
    status: DataTypes.BOOLEAN,
    title: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Table',
  });
  return Table;
};
