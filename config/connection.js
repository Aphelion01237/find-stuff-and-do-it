const mysql      = require('mysql');

const connection = mysql.createConnection({
  host     : 'remotemysql.com',
  port     : 3306,
  user     : 'zs63mEQ7Cb',
  password : 'B6Ms1iqXG3',
  database : 'my_db'
});
 
module.exports = connection;