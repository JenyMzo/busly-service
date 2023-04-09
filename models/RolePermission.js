const Role = require('./Role');
const Permission = require('./Permission');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RolePermission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RolePermission.belongsTo(models.Role, {
          foreignKey: 'bus_id'
      });
      RolePermission.belongsTo(models.Permission, {
          foreignKey: 'ammenity_id'
      });
    }
  }
  RolePermission.init({
    role_id: DataTypes.INTEGER,
    perm_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RolePermission',
  });
  return RolePermission;
};
