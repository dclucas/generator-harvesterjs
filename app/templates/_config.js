var config = {};

config.connectionString = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/harvesterTest';
config.port = process.env.PORT || 2426;

module.exports = config;