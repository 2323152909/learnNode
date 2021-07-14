const express = require('express');

const app = express()

// 编写普通的中间件
// use注册一个中间件（回调函数）
app.use((req, res, next) => {
  console.log('注册了01个普通中间件~');
  // res.end('Hello World')
  next() //调用栈中的下一个中间件
})

app.use((req, res, next) => {
  console.log('注册了02个普通中间件~');
  next() //调用栈中的下一个中间件
})

app.use((req, res, next) => {
  console.log('注册了03个普通中间件~');
  res.end('Hello Middleware') //结束响应
})


// 开启监听
app.listen(8000, () => {
  console.log('普通中间件启动成功~');
})