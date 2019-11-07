var express = require('express');
var router = express.Router();

var Task = require('../models/task');
var Customers = require('../models/customers');

//Task Route
router.post('/api/v1/task', Task.create);
router.get('/api/v1/task', Task.lists);
router.get('/api/v1/task/:id', Task.list);
router.put('/api/v1/task/:id', Task.update);
router.delete('/api/v1/task/:id', Task.delete);

//Customers Route
router.post('/api/v1/customers', Customers.create);
router.get('/api/v1/customers', Customers.lists);
router.get('/api/v1/customers/:id', Customers.list);
router.put('/api/v1/customers/:id', Customers.update);
router.delete('/api/v1/customers/:id', Customers.delete);

module.exports = router;
