var express = require('express'),
    app = express(),
    router = express.Router(),
    mysql = require('mysql'),
    bodyParser = require('body-parser'),
    morgan = require("morgan"),
    compression = require('compression'),
    myConnection = require('express-myconnection'),
    jwt = require('jsonwebtoken'),
    nodemailer = require('nodemailer');

/**
 * Store database credentials in a separate config.js file
 * Load the file/module and its values
 */
global.config = require('./config');
global.utls = require('./utils/utils');

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


/*var transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "freecoderhub@gmail.com",
        pass: "freecoder19c$&"
    }
});

var mailOptions = {
    from: 'freecoderhub@gmail.com',
    to : 'atulassan777@gmail.com',
    subject : "Testing",
    text : "Testing"
 }
 
 transport.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  }); */

app.get('/', function (req, res) {
    console.log(conn);

    res.setHeader('Content-Type', 'application/json');
    res.json({ ktm: "bike" });
});

//route Model
var customers = require('./models/customers');
var categories = require('./models/categories');
var products = require('./models/products');

//Middlewares
app.use(customers); //Customers Router Model Connect Middleware
app.use(categories); //Categories Router Model Connect Middleware
app.use(products); //Products Router Model Connect Middleware

app.use(morgan('dev')); //develop morgan
app.use(compression()); // Compress all Responses

// Assigning Port
app.listen(port, function () {
    console.log('Server listening on port ' + port + '...');
});
