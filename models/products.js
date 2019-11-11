/*var express = require('express');
var router = express.Router();*/

Products = {
    create(req, res) {

        let data = {
            CategoryID: req.body.cid,
            SKU: req.body.sku,
            Name: req.body.name,
            Description: req.body.description,
            Unit: req.body.unit,
            Price: req.body.price,
            OfferPrice: req.body.offerprice,
            Stock: req.body.stock,
            Image: req.body.image,
            Status: req.body.status
        };
        let sql = "INSERT INTO products SET ?";
        let query = conn.query(sql, data, (err, results) => {
            if (err) {
                console.log("error ocurred", err);
                res.send(JSON.stringify({ "status": 400, "error": err }));
            } else {
                res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
            }
        });
    },
    update(req, res) {
        let sql = "UPDATE products SET CategoryID='" + req.body.cid + "', SKU='" + req.body.sku + "', Name='" + req.body.name + "', Description='" + req.body.description + "', Unit='" + req.body.unit + "', Price='" + req.body.price + "', OfferPrice='" + req.body.offerprice + "', Stock='" + req.body.stock + "', Image='" + req.body.image + "', status='" + req.body.status + "' WHERE ProductID='" + req.params.id + "'";
        //let sql = "UPDATE products SET product_name='" + req.body.product_name + "', product_price='" + req.body.product_price + "' WHERE product_id=" + req.params.id;
        let query = conn.query(sql, (err, results) => {
            if (err) {
                console.log("error ocurred", err);
                res.send(JSON.stringify({ "status": 400, "error": err }));
            } else {
                res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
            }
        });
    },
    delete(req, res) {
        let sql = "DELETE FROM products WHERE ProductID=" + req.params.id + "";
        let query = conn.query(sql, (err, results) => {
            if (err) {
                console.log("error ocurred", err);
                res.send(JSON.stringify({ "status": 400, "error": err }));
            } else {
                res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
            }

        });
    },
    lists(req, res) {
        console.log(utls.getToken);

        let sql = "SELECT * FROM products";
        let query = conn.query(sql, (err, results) => {
            if (err) {
                console.log("error ocurred", err);
                res.send(JSON.stringify({ "status": 400, "error": err }));
            } else {
                res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
            }
        });
    },
    list(req, res) {
        let sql = "SELECT * FROM products WHERE ProductID=" + req.params.id;
        let query = conn.query(sql, (err, results) => {
            //if (err) throw err;
            var numrows = results.length;
            console.log(numrows);
            if (err || parseInt(numrows) == 0) {
                console.log("error ocurred", err);
                if (parseInt(numrows) === 0) {
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

module.exports = Products;


//show all products
/*router.get('/api/v1/products', (req, res) => {

    console.log(utls.getToken);

    let sql = "SELECT * FROM products";
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
router.get('/api/v1/products/:id', function (req, res) {
    let sql = "SELECT * FROM products WHERE ProductID=" + req.params.id;
    let query = conn.query(sql, (err, results) => {
        //if (err) throw err;
        var numrows = results.length;
        console.log(numrows);
        if (err || parseInt(numrows) == 0) {
            console.log("error ocurred", err);
            if (parseInt(numrows) === 0) {
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
router.post('/api/v1/products', (req, res) => {

    let data = {
        CategoryID: req.body.cid,
        SKU: req.body.sku,
        Name: req.body.name,
        Description: req.body.description,
        Unit: req.body.unit,
        Price: req.body.price,
        OfferPrice: req.body.offerprice,
        Stock: req.body.stock,
        Image: req.body.image,
        Status: req.body.status
    };
    let sql = "INSERT INTO products SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) {
            console.log("error ocurred", err);
            res.send(JSON.stringify({ "status": 400, "error": err }));
        } else {
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        }
    });

});

//update Product
router.put('/api/v1/products/:id', (req, res) => {
    let sql = "UPDATE products SET CategoryID='" + req.body.cid + "', SKU='" + req.body.sku + "', Name='" + req.body.name + "', Description='" + req.body.description + "', Unit='" + req.body.unit + "', Price='" + req.body.price + "', OfferPrice='" + req.body.offerprice + "', Stock='" + req.body.stock + "', Image='" + req.body.image + "', status='" + req.body.status + "' WHERE ProductID='" + req.params.id + "'";
    //let sql = "UPDATE products SET product_name='" + req.body.product_name + "', product_price='" + req.body.product_price + "' WHERE product_id=" + req.params.id;
    let query = conn.query(sql, (err, results) => {
        if (err) {
            console.log("error ocurred", err);
            res.send(JSON.stringify({ "status": 400, "error": err }));
        } else {
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        }
    });
});

//Delete Product
router.delete('/api/v1/products/:id', (req, res) => {
    let sql = "DELETE FROM products WHERE ProductID=" + req.params.id + "";
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