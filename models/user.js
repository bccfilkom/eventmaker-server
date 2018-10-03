"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      nim: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING
    },
    {}
  );
  User.associate = function(models) {
    User.hasMany(models.Event, {
      foreignKey: "createdBy",
      targetKey: "nim"
    });
  };
  return User;
};
