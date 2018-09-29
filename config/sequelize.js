const devConfig = {
  username: 'root',
  password: 'root',
  database: 'eventmaker_dev',
  host: '127.0.0.1',
  dialect: "mysql"
};

const testConfig = {
  username: 'root',
  password: 'root',
  database: 'eventmaker_test',
  host: '127.0.0.1',
  dialect: "mysql"
};

const prodConfig = {
  username: 'root',
  password: 'root',
  database: 'eventmaker_prod',
  host: '127.0.0.1',
  dialect: "mysql"
};

module.exports = {
  development: devConfig,
  test: testConfig,
  production: prodConfig
};
