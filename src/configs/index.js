require('dotenv').config();

module.exports = {
  name: process.env.APP_NAME,
  version: process.env.APP_VERSION,
  port: process.env.APP_PORT || 9090,
  host: process.env.APP_HOST || 'localhost'
}