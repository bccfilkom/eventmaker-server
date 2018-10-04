const db = require("../../../models");

module.exports = async (_, { id }) => {
  if (isNaN(id)) {
    return null;
  }
  const event = await db.Event.findById(id, { include: [{ model: db.User }] });
  if (event !== null) {
    return {
      id: event.id,
      name: event.name,
      description: event.description,
      time: event.time,
      regTime: event.regTime,
      place: event.place,
      createdBy: event.User.dataValues
    };
  }
  return null;
};
