'use strict';
module.exports = (sequelize, DataTypes) => {
  const Joined = sequelize.define('Joined', {
    nim: DataTypes.STRING,
    event_id: DataTypes.INTEGER
  }, {});
  Joined.associate = function(models) {
    Joined.hasOne(models.User, {
      foreignKey: {
        name: 'nim',
        allowNull: false
      }
    });
    Joined.hasOne(models.Event);
  };
  return Joined;
};
