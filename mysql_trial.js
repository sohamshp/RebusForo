var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'admin',
    password : 'qwerty',
    database : 'userdb'
});

connection.connect();

connection.query('SELECT * FROM users', function(err, rows, fields){
    if (err)
        throw err;
    console.log(rows);
});

connection.end();