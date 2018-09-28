'use strict';
module.exports = (sequelize, DataTypes) => {
  const Joined = sequelize.define('Joined', {
    nim: {
      type: DataTypes.STRING
    },
    event_id: {
      type: DataTypes.INTEGER
    }
  }, {});
  Joined.associate = function(models) {
    // associations can be defined here
  };
  return Joined;
};
