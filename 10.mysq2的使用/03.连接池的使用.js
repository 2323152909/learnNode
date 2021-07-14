const mysql = require('mysql2');

// 1.创建连接池
const connections = mysql.createPool({
  host:'localhost',
  port:3306,
  user:'root',
  password:'123456',
  database: 'coderhub',
  connectionLimit: 10   // 最多创建多少个连接
});

// 2.使用连接池
const statement = `
  select * from products where price > ? and score > ?;
`
connections.execute(statement, [6000, 7], (err, results) => {
  console.log(results);
});