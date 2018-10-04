const db = require("../../../models");

module.exports = async () => {
  const events = await db.Event.findAll({ include: [{ model: db.User }]})
  if (events !== null && events.length > 0) {
    const result = events.reduce((prev, event) => {
      prev.push({
        id: event.id,
        name: event.name,
        description: event.description,
        time: event.time,
        regTime: event.regTime,
        place: event.place,
        createdBy: event.User.dataValues,
      });
      return prev;
    }, []);
    return result;
  }
  return [];
}