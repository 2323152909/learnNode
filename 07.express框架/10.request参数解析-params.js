const express = require('express');

const app = express();

// 解析params参数
app.get('/products/:id/:name', (req, res, next) => {
  console.log(req.params);
  res.end('上平的详情数据~');
})

// 解析query参数
app.get('/login', (req, res, next) => {
  console.log(req.query);
  res.end('用户登录成功~')
})

app.listen(8000, () =>{
  console.log('服务器启动成功~');
})