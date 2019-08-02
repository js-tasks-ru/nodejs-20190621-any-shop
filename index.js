const app = require('./app');
const config = require('./config');
const socket = require('./socket');

const server = app.listen(config.port, () => {
  console.log(`App is running on http://localhost:${config.port}`);
});

socket(server);
