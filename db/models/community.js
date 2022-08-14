module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Community', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      require: true,
    },
    state: {
      type: DataTypes.STRING,
      require: true,
    },
    zip: {
      type: DataTypes.INTEGER,
      require: true,
    },
  });
};
