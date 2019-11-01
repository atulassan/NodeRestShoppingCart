var Customers = require('../models/customers');

exports.create = (req, res, next) => {

    //Check Available User
    utls.checkAvailUser(req, res, next);

    Customers.create(req, res, function (err, results) {
        if (err) {
            console.log("error ocurred", err);
            res.send(JSON.stringify({ "status": 400, "error": err }));
        } else {
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        }
    });
};

exports.update = (req, res) => {
    Customers.update(req, res, function (err, results) {
        if (err) {
            console.log("error ocurred", err);
            res.send(JSON.stringify({ "status": 400, "error": err }));
        } else {
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        }
    });
};

exports.lists = (req, res) => {
    Customers.lists(req, res, function (err, results) {
        if (err) {
            console.log("error ocurred", err);
            res.send(JSON.stringify({ "status": 400, "error": err }));
        } else {
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        }
    });
};

exports.list = (req, res) => {
    Customers.list(req, res, function (err, results) {
        //if (err) throw err;
        var numrows = results.length;
        console.log(numrows);
        if (err || parseInt(numrows) == 0) {
            console.log("error ocurred", err);
            if (numrows === 0) {
                res.send(JSON.stringify({ "status": 400, "error": "Requrest Data Is not Valid", "response": "No Data" }));
                return;
            }
            res.send(JSON.stringify({ "status": 400, "error": err }));
        } else {
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        }
    });
};

exports.delete = (req, res) => {
    Customers.delete(req, res, function (err, results) {
        if (err) {
            console.log("error ocurred", err);
            res.send(JSON.stringify({ "status": 400, "error": err }));
        } else {
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        }
    });
};