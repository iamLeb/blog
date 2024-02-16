const express = require('express');
const router = require('./routes/web');
const cors = require('cors');
require('./database/connect');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

const corsOpts = {
    origin: [
        'http://localhost:8080'
    ],
    credentials: true,
    methods: ['GET','POST','HEAD','PUT','PATCH','DELETE'],
    allowedHeaders: ['Content-Type'],
    exposedHeaders: ['Content-Type']
};
app.use(cors(corsOpts));

app.use(router); // control route

app.listen(port, () => console.log(`*** Listening to Port ${port} ***`));