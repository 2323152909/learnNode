const mysql = require('mysql2');

const connections = mysql.createPool({
  host:'localhost',
  port: 3306,
  user:'root',
  password: '123456',
  database: 'coderhub',
  connectionLimit: 10
});

const statement = `
  select * from products where price > ? and score > ?;
`

connections.promise().execute(statement, [6000, 7]).then(([res, fileds]) => {
  console.log(res);
}).catch(err => {
  console.log(err);
});