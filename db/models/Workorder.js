module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Workorder', {
    issue: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
      default: 'Workorder',
    },
    resolution: {
      type: DataTypes.STRING,
    },
  });
};
