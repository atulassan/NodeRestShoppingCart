var express = require('express'),
    app = express(),
    router = express.Router(),
    mysql = require('mysql'),
    bodyParser = require('body-parser'),
    morgan = require("morgan"),
    compression = require('compression'),
    myConnection = require('express-myconnection');

/**
 * Store database credentials in a separate config.js file
 * Load the file/module and its values
 */
var config = require('./config');

var dbOptions = {
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    port: config.db.port,
    database: config.db.db,
    charset: config.db.charset
}

global.conn = mysql.createConnection(dbOptions);

//connect to database
conn.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Mysql Connected...');
});

// port number
var port = process.env.PORT || config.server.port;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

app.get('/', function (req, res) {
    console.log(conn);
    res.setHeader('Content-Type', 'application/json');
    res.json({ ktm: "bike" });
});

//route Model
var categories = require('./models/categories');

//Middlewares
app.use(categories); //Categories Router Model Connect Middleware
app.use(products); //Products Router Model Connect Middleware
app.use(morgan('dev')); //develop morgan
app.use(compression()); // Compress all Responses

// Assigning Port
app.listen(port, function () {
    console.log('Server listening on port ' + port + '...');
});