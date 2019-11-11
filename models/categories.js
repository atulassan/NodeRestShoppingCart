/*var express = require('express');
var router = express.Router();*/

Categories = {
    create: function(req, res) {
        let data = {
            Name: req.body.name,
            Type: req.body.type,
            Image: req.body.image
        };

        let sql = "INSERT INTO categories SET ?";
        let query = conn.query(sql, data, (err, results) => {
            if (err) {
                console.log("error ocurred", err);
                res.send(JSON.stringify({ "status": 400, "error": err }));
            } else {
                res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
            }
        });
    },
    update: function(req, res) {
        let sql = "UPDATE categories SET Name='" + req.body.name + "', Type='" + req.body.type + "', Image='" + req.body.image + "' WHERE CategoryID='" + req.params.id + "'";
        //let sql = "UPDATE product SET product_name='" + req.body.product_name + "', product_price='" + req.body.product_price + "' WHERE product_CategoryID=" + req.params.id;
        let query = conn.query(sql, (err, results) => {
            if (err) {
                console.log("error ocurred", err);
                res.send(JSON.stringify({ "status": 400, "error": err }));
            } else {
                res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
            }
        });
    },
    delete: function(req, res) {
        let sql = "DELETE FROM categories WHERE CategoryID=" + req.params.id + "";
        let query = conn.query(sql, (err, results) => {
            if (err) {
                console.log("error ocurred", err);
                res.send(JSON.stringify({ "status": 400, "error": err }));
            } else {
                res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
            }
        });
    },
    lists: function(req, res) {
        let sql = "SELECT * FROM categories";
        let query = conn.query(sql, (err, results) => {
            if (err) {
                console.log("error ocurred", err);
                res.send(JSON.stringify({ "status": 400, "error": err }));
            } else {
                res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
            }
        });
    },
    list: function(req, res) {
        let sql = "SELECT * FROM categories WHERE CategoryID=" + req.params.id;
        let query = conn.query(sql, (err, results) => {
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
    }
}

module.exports = Categories;


//show all categories
/*router.get('/api/v1/categories', (req, res) => {
    let sql = "SELECT * FROM categories";
    let query = conn.query(sql, (err, results) => {
        if (err) {
            console.log("error ocurred", err);
            res.send(JSON.stringify({ "status": 400, "error": err }));
        } else {
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        }
    });
});

//show single category
router.get('/api/v1/categories/:id', function (req, res) {
    let sql = "SELECT * FROM categories WHERE CategoryID=" + req.params.id;
    let query = conn.query(sql, (err, results) => {
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
});

//add New category 
router.post('/api/v1/categories', (req, res) => {

    let data = {
        Name: req.body.name,
        Type: req.body.type,
        Image: req.body.image
    };

    let sql = "INSERT INTO categories SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) {
            console.log("error ocurred", err);
            res.send(JSON.stringify({ "status": 400, "error": err }));
        } else {
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        }
    });

});

//update category
router.put('/api/v1/categories/:id', (req, res) => {
    let sql = "UPDATE categories SET Name='" + req.body.name + "', Type='" + req.body.type + "', Image='" + req.body.image + "' WHERE CategoryID='" + req.params.id + "'";
    //let sql = "UPDATE product SET product_name='" + req.body.product_name + "', product_price='" + req.body.product_price + "' WHERE product_CategoryID=" + req.params.id;
    let query = conn.query(sql, (err, results) => {
        if (err) {
            console.log("error ocurred", err);
            res.send(JSON.stringify({ "status": 400, "error": err }));
        } else {
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        }
    });
});

//Delete category
router.delete('/api/v1/categories/:id', (req, res) => {
    let sql = "DELETE FROM categories WHERE CategoryID=" + req.params.id + "";
    let query = conn.query(sql, (err, results) => {
        if (err) {
            console.log("error ocurred", err);
            res.send(JSON.stringify({ "status": 400, "error": err }));
        } else {
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        }
    });
});

module.exports = router;*/