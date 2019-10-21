var express = require('express');
var router = express.Router();

//show all categories
router.get('/api/v1/categories', (req, res) => {
    let sql = "SELECT * FROM categories";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});


//show single category
router.get('/api/v1/categories/:id', function (req, res) {
    let sql = "SELECT * FROM categories WHERE id=" + req.params.id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        var numrows = results.length;
        if (numrows > 0) {
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        } else {
            res.send(JSON.stringify({ "status": 200, "error": "Requrest Data Is not Valid", "response": "No Data" }));
        }

    });
});

//add New category 
router.post('/api/v1/categories', (req, res) => {

    let data = { name: req.body.name, type: req.body.type };
    let sql = "INSERT INTO categories SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });

});

//update category
router.put('/api/v1/categories/:id', (req, res) => {
    let sql = "UPDATE categories SET name='" + req.body.name + "', type='" + req.body.type + "' WHERE id='" + req.params.id + "'";
    //let sql = "UPDATE product SET product_name='" + req.body.product_name + "', product_price='" + req.body.product_price + "' WHERE product_id=" + req.params.id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

//Delete category
router.delete('/api/v1/categories/:id', (req, res) => {
    let sql = "DELETE FROM categories WHERE id=" + req.params.id + "";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

module.exports = router;