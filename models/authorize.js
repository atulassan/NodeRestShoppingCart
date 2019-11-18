const jwt = require('jsonwebtoken');
var crypto = require('crypto');

Authorize = {
    login: function (req, res) {

        console.log(utls.verify('testing'));

        var usrAvail = 0;

        let sql = "Select * From Customers Where Email='" + req.body.Email + "'";
        let query = conn.query(sql, (err, results) => {

            //var pswd = utls.saltHashPassword(req.body.PassWord, true);
            //var Password = pswd[1].split('$');

            if (err) {
                console.log('Error Triggered', err);
            } else {
                usrAvail += results.length;
                console.log(usrAvail);
                if (usrAvail >= 0) {
                    var userPassword = utls.saltHashPassword(req.body.PassWord, results[0].Token, false);
                    if (userPassword[1] === results[0].PassWord) {

                        let customer = {
                            CustomerID: results[0].CustomerID,
                            Email: results[0].Email,
                            Token: results[0].Token
                        };

                        // create a token
                        jwt.sign({ customer }, "x8JVjyY8rNZ24LVy9mvsuA==", { expiresIn: 86400 }, (err, token) => {

                            if (err) {
                                res.send(JSON.stringify({ "status": 200, "Token": 'Expiry' }));
                            } else {
                                res.send(JSON.stringify({ "status": 200, "Token": token }));
                            }

                        });

                    } else {
                        res.send(JSON.stringify({ "status": 200, "error": null, "response": "Password Is not Valid" }));
                    }
                } else {
                    res.send(JSON.stringify({ "status": 200, "error": null, "response": "User Can't Be Find, Check your Credentials" }));
                }
            }
        });
    },
    reset_password() {
        console.log('Reset Password');
    },
    logout() {
        console.log('Logout');
    },
    check: function (req, res) {

        console.log(req.headers);

        // read the token from header or url 
        //const token = req.headers['x-access-token'] || req.query.token
        console.log('check');
    }
}

module.exports = Authorize;