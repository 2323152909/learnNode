const Koa = require('koa');

const app = new Koa();

app.use((ctx, next) => {
  if(ctx.request.url === '/login'){
    if(ctx.request.method === 'GET'){
      ctx.response.body = "Login Success~"
    }
  }else{
    ctx.response.body = "other request~"
  }
});

// Koa没有提供下面的注册方式
// methods的方式： app.get()/.post();
// path方式： app.use('/home', (ctx, next) => {});
// 连续注册的方式： app.use((ctx, next) => {
// }, (ctx, next) => {});

app.listen(8000, () => {
  console.log('Koa注册中间件服务器启动成功~');
});