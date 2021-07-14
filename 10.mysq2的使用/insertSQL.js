const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 123456,
  database: 'coderhub'
});

// 插入数据
const statement = `INSERT INTO products SET ?;`
const phoneJson = require('');

for(let phone of phoneJson){
  connection.query(statement, phone);
};