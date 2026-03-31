const express = require(express);
const cros = require(cros);

const app = express();

app.use(express.json);
app.use(cros);

module.exports = app;