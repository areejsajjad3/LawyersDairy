const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose');
const config = require('./DB');
clientRoute = require('./routes/clientroute');
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useUnifiedTopology: true, userNewurlParser: true })

.then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
);

const app = express();

app.use(bodyParser.json()); //bodyparser is a middleware for handling JSON, raw , text and url encoded form data
app.use(cors());
app.use('/clients', clientRoute);

let port = process.env.PORT || 4000;

const server = app.listen(port, function() {
    console.log('listening on port ' + port)
});