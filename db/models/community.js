module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Community", {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    zip: {
      type: DataTypes.INTEGER,
    },
  });
};
