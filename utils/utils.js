var crypto = require('crypto');

utls = {
    verify: function (b1 = "") {
        return b1;
    },
    saltHashPassword: function (password, slt = TRUE) {
        var pswd = '';
        var slth = [];
        let Salt = crypto.randomBytes(16).toString('base64');
        let Hash = crypto.createHmac('sha512', Salt).update(password).digest("base64");
        if (slt) {
            slth.push(Salt);
            slth.push(Salt + "$" + Hash);
        } else {
            var splt = password.split('$');
            slth.push(splt[0]);
            slth.push(splt[1]);
        }
        return slth;
    },
    getToken: function () {
        return crypto.randomBytes(16).toString('base64');
    },
    checkAvailUser: function (req, res, callback) {
        var numrows = 0;
        //let sql = "Select * FROM customers WHERE Phone='" +req.body.Phone+ "' AND Email='"+req.body.Email+"'";
        var msql = "Select * FROM customers WHERE Email='" + req.body.Email + "'";

        conn.query(msql, (err, results) => {

            if (err) {
                console.log("error ocurred", err);
                callback(err, null);
            }
            numrows += results.length;
            if (parseInt(numrows) > 0) {
                callback(null, numrows);
            }
        });
    },
    checkAvailCust: function (req, res, callback) {
        var numrows = 0;
        let msql = "Select * FROM customers WHERE CustomerID='" + req.params.id + "'";
        console.log(msql);
        conn.query(msql, (err, results) => {
            if (err) {
                res.send(JSON.stringify({ "status": 400, "error": err }));
                return;
            }
            //console.log(results);
            numrows += results.length;
            if (parseInt(numrows) <= 0) {
                res.status(400).send(JSON.stringify({ "status": 400, 'message': 'User is not found' }));
                return;
            }
        });
    }
}

module.exports = utls;