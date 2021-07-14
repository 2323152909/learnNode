const mysql = require('mysql2');

// 1.创建mysql连接
const connection = mysql.createConnection({
  port:3306,
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'coderhub'
});

// 2.执行sql语句
const statement = `
  select * from products where price > ? and score > ?;
`


connection.execute(statement, [6000, 7], (err, results) => {
  console.log(results);
});