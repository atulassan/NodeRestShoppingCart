var config = {
	db: {
		host:	  '192.168.1.99', 	// database host
		user: 	  'root', 		// your database username
		password: '', 		// your database password
		port: 	  3306, 		// default MySQL port
		db: 	  'at_nodrestapi', 		// your database name
		charset: 'utf8_general_ci' // charset
	},
	server: {
		host: '127.0.0.1',
		port: '3000'
	}
}

module.exports = config;