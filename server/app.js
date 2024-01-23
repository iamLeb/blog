const express = require('express');
const router = require('./routes/web');
require('./database/connect');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

app.use(router); // control route

app.listen(port, () => console.log(`*** Listening to Port ${port} ***`));