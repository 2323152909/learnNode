const mysql = require('mysql2');

// 1.创建数据库连接
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'coderhub', // 这里数数据库的名字，不是mysql的别名
  user: 'root',
  password: '123456' //必须使用字符串格式
});

// 2.执行sql语句
const statement = `
  SELECT * FROM products; 
`

connection.query(statement,(err,results,fields) => {
  console.log(results);
});