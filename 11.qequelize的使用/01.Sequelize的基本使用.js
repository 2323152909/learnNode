const { Sequelize } = require('sequelize');
const mysql = require('mysql2');

// 创建sequelize对象
const sequelize = new Sequelize('coderhub','root', '123456',{
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate().then(() => {
  console.log('连接数据库成功~');
}).catch(err => {
  console.log('连接数据库失败~', err);
});
