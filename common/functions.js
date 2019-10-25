var crypto = require('crypto');

fns = {
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
    checkAvailUser: function (req, res) {
        var numrows = '';
        var tst = 'testing';
        //console.log('testing');
        //let sql = "Select * FROM customers WHERE Phone='" +req.body.Phone+ "' AND Email='"+req.body.Email+"'";
        let sql = "Select * FROM customers WHERE Email='" + req.body.Email + "'";
        console.log(sql);
        let query = conn.query(sql, (err, results) => {
            console.log('testing22');
            if (err) {
                throw err;
            }
            //console.log(results);
            numrows += results.length;
            if (parseInt(numrows) > 0) {
                res.status(400).send(JSON.stringify({ "status": 400, 'message': 'Request User Already Registered' }));
                console.log('111');
                return;
            }
        });
    },
    checkAvailCust: function (req, res) {
        var numrows = 0;
        //console.log('testing');
        //let sql = "Select * FROM customers WHERE Phone='" +req.body.Phone+ "' AND Email='"+req.body.Email+"'";
        let sql = "Select * FROM customers WHERE CustomerID='" + req.params.id + "'";
        console.log(sql);
        let query = conn.query(sql, (err, results) => {
            console.log('testing22');
            if (err) {
                throw err;
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

module.exports = fns;