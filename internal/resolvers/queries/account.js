const db = require("../../../models");
module.exports = async (_, { nim }) => {
  const account = await db.User.findOne({ where: { nim } });
  if (account === null) {
    return null;
  }
  return account.dataValues;
};
