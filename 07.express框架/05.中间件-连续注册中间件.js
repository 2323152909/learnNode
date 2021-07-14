const express = require('express');

const app = express();

// 连续注册中间件
app.use((req, res, next) => {
  console.log('common middleware 01');
  next();
});

app.get('/home', (req, res, next) => {
  console.log('home path and method middleware 01');
  next();
})

app.get('/home', (req, res, next) => {
  console.log('home path and method middleware 02');
  next();
},(req, res, next) => {
  console.log('home path and method middleware 03');
  next();
},(req, res, next) => {
  console.log('home path and method middleware 04');
  res.end('home page');
});

// 开启监听
app.listen(8000, () => {
  console.log('路径匹配中间件启动成功~');
});