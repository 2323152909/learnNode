const express = require('express');

const app = express();

/**
 * 自己编写的body解析
 * express使用express.json()函数来实现对请求内容的解析
 */
// app.use((req, res, next) => {
//   if(req.headers['content-type'] === 'application/json'){
//     req.on('data', (data) => {
//       const info = JSON.parse(data);
//       req.body = info;
//       // Object.assign();
//     });

//     req.on('end', () => {
//       next();
//     })
//   }else{
//     next();
//   }
// });

// 直接使用express提供的方法进行body解析
// body-parse: express3.x 内置express框架
// body-parse: express4.X 被分离出去
// body-parse类似功能：express4.16.x 内置成函数
app.use(express.json()); //内置函数将请求的json格式进行解析(也是一个中间件)
// extended
// true: 那么对urlencoded进行解析时，他是用的是第三方库：qs
// false：那对urlencoded进行解析时，它使用的是Node内置模块：querystring
app.use(express.urlencoded({extended: true}));//跟json一样，不够是解析urlencoded格式

app.post('/login', (req, res, next) => {
  console.log(req.body);
  res.end('Coderlhd, Welcome Back!')
});

app.use('/products', (req, res, next) => {
  console.log(req.body);
  res.end('Upload Products is Success!');
});

// 开启监听
app.listen(8000, () => {
  console.log('路径匹配中间件启动成功~');
});