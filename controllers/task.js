
var Task = require('../models/task');

exports.create = (req, res) => {
    var create = Task.create(req, res);
    res.send(JSON.stringify(create));
};

exports.update = (req, res) => {
    var update = Task.update(req, res);
    res.send(JSON.stringify(update));
};

exports.lists = (req, res) => {
    var lists = Task.lists(req, res);
    res.send(JSON.stringify(lists));
};

exports.list = (req, res) => {
    var list = Task.list(req, res);
    res.send(JSON.stringify(list));
};

exports.delete =  (req, res) => {
    var del = Task.list(req, res);
    res.send(JSON.stringify(del));
};