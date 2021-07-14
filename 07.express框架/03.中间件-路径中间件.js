const express = require('express');

const app = express()

// 中间件的匹配机制是按照顺序进行匹配的，当存在next则进入下一个中间件

// 普通中间件
app.use((req, res, next) => {
  console.log('common middleware01');
  // res.end('common middleware')
  next()
})

// 路径匹配的中间件
app.use('/home', (req, res, next) => {
  console.log('home middleware 01');
  // res.end('Home Middleware')
  next()
})

// 中间插入一个普通中间件
app.use((req, res, next) => {
  console.log('common middleware02');
  next()
})

app.use('/home', (req, res, next) => {
  console.log('home middleware 02');
  res.end('Home Middleware')
})

// 开启监听
app.listen(8000, () => {
  console.log('路径匹配中间件启动成功~');
})