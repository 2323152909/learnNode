const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const useRouter = new Router({prefix: '/users'});

useRouter.get('/:id', (ctx, next) => {
  console.log(ctx.request.params);
  console.log(ctx.params);
  console.log(ctx.query);
  console.log(ctx.request.query);
  ctx.response.body = 'Hello World'
})

app.use(useRouter.routes())

// app.use((ctx, next) => {
//   console.log(ctx.request.url);
//   console.log(ctx.request.query); //正确
//   console.log(ctx.request.params); //undefined
//   ctx.response.body = 'Hello World'
// })

app.listen(8000, () => {
  console.log('koa中参数处理服务器启动成功~');
})