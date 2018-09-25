const config = require("config");
const rawConfig = config.get("mysql");
const dbConfig = {
  username: rawConfig.user,
  password: rawConfig.pass,
  database: rawConfig.name,
  host: rawConfig.host,
  dialect: "mysql"
};

module.exports = {
  development: dbConfig,
  test: dbConfig,
  production: dbConfig
};