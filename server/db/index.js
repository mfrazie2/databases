var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

//REMEMBER TO START MYSQL SERVER IN TERMINAL TO CONNECT!!!!!
//NODE IS TRYING TO CONNECT TO MYSQL....SO TURN ON MYSQL
exports.connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chat'
});



