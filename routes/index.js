var express = require('express');
var router = express.Router();
var crypto = require('crypto');

var Task = require('../models/task');
var Customers = require('../models/customers');
var Categories = require('../models/categories');
var Products = require('../models/products');
var Authorize = require('../models/authorize');

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

//Categories Route
router.post('/api/v1/categories', Categories.create);
router.get('/api/v1/categories', Categories.lists);
router.get('/api/v1/categories/:id', Categories.list);
router.put('/api/v1/categories/:id', Categories.update);
router.delete('/api/v1/categories/:id', Categories.delete);

//Products Route
router.post('/api/v1/products', Products.create);
router.get('/api/v1/products', Products.lists);
router.get('/api/v1/products/:id', Products.list);
router.put('/api/v1/products/:id', Products.update);
router.delete('/api/v1/products/:id', Products.delete);

// Auth
router.post('/api/v1/login', Authorize.login);

module.exports = router;