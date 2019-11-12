const jwt = require('jsonwebtoken');
var crypto = require('crypto');

Authorize = {
    login: function (req, res) {

        console.log(utls.verify('testing'));

        var usrAvail = 0;

        let sql = "Select * From Customers Where Email='" + req.body.Email + "'";
        let query = conn.query(sql, (err, results) => {

            var pswd = utls.saltHashPassword(req.body.PassWord, true);
            var Password = pswd[1].split('$');

            if (err) {
                console.log('Error Triggered', err);
            } else {
                usrAvail += results.length;
                console.log(usrAvail);
                if (usrAvail >= 0) {
                    var userPassword = utls.saltHashPassword(results[0].PassWord, false);
                    if (userPassword[1] === Password[1]) {
                        console.log('matched');
                    }
                    /*console.log(Password);
                    console.log(userPassword);
                    console.log(results[0].PassWord);*/
                } else {
                    res.send(JSON.stringify({ "status": 200, "error": null, "response": "User Cant Be login, Check your Credentials" }));
                }
            }
        });
    },
    reset_password() {
        console.log('Reset Password');
    },
    logout() {
        console.log('Logout');
    }
}

module.exports = Authorize;