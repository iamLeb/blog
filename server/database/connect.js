const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URI)
    .then(res => console.log('-- connected to database --'))
    .catch(err => console.log('error connecting to db'));


module.exports = mongoose;