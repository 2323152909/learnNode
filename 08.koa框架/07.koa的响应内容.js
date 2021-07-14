const Koa = require('koa');

const app = new Koa();

app.use((ctx, next) => {
  // 设置内容
  // 通过ctx.response.body响应数据
  // ctx.response.body = 'Hello World~'
  // ctx.response.body = {
  //   name: 'lhd',
  //   age: 18,
  //   avatar_url: 'http://abc.png'
  // };
  // 设置状态码
  // ctx.response.status = 200;
  // ctx.response.body = ['lhd', 'curry', 'kobe']

  // ctx.response.body = "Hello World~";
  ctx.status = 404;
  ctx.body = "Hello Koa~";
});


app.listen(8000, () => {
  console.log('相应内容服务器启动成功~');
})