"use strict";
module.exports = (sequelize, DataTypes) => {
  const Joined = sequelize.define(
    "Joined",
    {
      nim: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      eventId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      }
    },
    {}
  );
  Joined.associate = function(models) {
    models.Event.belongsToMany(models.User, { through: Joined, foreignKey: "eventId" });
    models.User.belongsToMany(models.Event, { through: Joined, foreignKey: "nim" });
  };
  return Joined;
};
