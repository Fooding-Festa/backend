const express = require('express');
const app = express();
const routes = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({
    origin: '*',
}));
app.use('/api', routes);

app.listen(config.PORT, () => console.log(`[+] Listening on port ${config.PORT}`));