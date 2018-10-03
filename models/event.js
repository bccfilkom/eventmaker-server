"use strict";
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define(
    "Event",
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      time: DataTypes.DATE,
      regTime: DataTypes.DATE,
      place: DataTypes.STRING,
      createdBy: DataTypes.STRING
    },
    {}
  );
  Event.associate = function(models) {
    Event.belongsTo(models.User, {
      foreignKey: {
        name: "createdBy",
        allowNull: false
      },
      targetKey: "nim"
    });
  };
  return Event;
};
