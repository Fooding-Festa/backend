const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require('./routes');
const config = require("./config/config")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({
    origin: '*',
}));
app.use('/api', routes);

app.listen(config.PORT, () => console.log(`[+] Listening on port ${config.PORT}`));