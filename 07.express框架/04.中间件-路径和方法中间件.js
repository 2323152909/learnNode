const express = require('express');

const app = express()

// 路径和方法匹配的中间件
app.use((req, res, next) => {
  console.log('common middleware01');
  next();
})

app.get('/home', (req, res, next) =>{
  console.log('home path and method middleware01');
})

app.post('/login', (req, res ,next) => {
  console.log('login path and method middleware01');
})

// 开启监听
app.listen(8000, () => {
  console.log('路径匹配中间件启动成功~');
})