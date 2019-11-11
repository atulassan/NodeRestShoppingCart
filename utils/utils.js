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
        console.log('111');
        //let sql = "Select * FROM customers WHERE Phone='" +req.body.Phone+ "' AND Email='"+req.body.Email+"'";
        var msql = "Select * FROM customers WHERE Email='" + req.body.Email + "'";

        console.log(msql);

        conn.query(msql, (err, results) => {
            console.log('222');
            if (err) {
                console.log('333');
                //res.send(JSON.stringify({ "status": 400, "error": err }));
                callback(true);
            }
            console.log('444');
            numrows += results.length;
            console.log(req.body);
            console.log(numrows);
            if (parseInt(numrows) > 0) {
                console.log('555');
                //res.status(400).send(JSON.stringify({ "status": 400, "message": "User is Already Registered" }));
                callback(false);
            } else {
                callback(true);
            }
        });
    },
    checkAvailCust: function (req, res) {
        var numrows = 0;
        let msql = "Select * FROM customers WHERE CustomerID='" + req.params.id + "'";
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
    },
    test: function() {
        console.log('tsasdfasdfsdaf');
    }
}

module.exports = utls;