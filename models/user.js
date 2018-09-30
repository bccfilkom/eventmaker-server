'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    nim: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Event);
    User.hasMany(models.Joined);
  };
  return User;
};
