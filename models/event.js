'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    time: DataTypes.DATE,
    reg_time: DataTypes.DATE,
    place: DataTypes.STRING,
    createdBy: DataTypes.STRING
  }, {});
  Event.associate = function(models) {
    Event.hasOne(models.User, {
      foreignKey: {
        name: 'nim',
        allowNull: false
      }
    });
    Event.hasMany(models.Joined);
  };
  return Event;
};
