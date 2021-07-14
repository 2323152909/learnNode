const Koa = require('koa');
const bodyparse = require('koa-bodyparser');// 使用第三方库koa-bodyparse来解析请求时传入的任何格式数据（出去form-data）
const multer = require('koa-multer');// 使用第三方库koa-multer来解析任意的form-data类型
const Router = require('koa-router');

const app = new Koa();

// const loginRouter = new Router({prefix: '/login'})

const upload = multer(); //实例化对象

app.use(bodyparse());
app.use(upload.any());

// loginRouter.post('/', upload.any(), (ctx, next) => {
//   console.log(ctx.request.body);
//   console.log(ctx.req.body);
//   ctx.response.body = 'Hello World'
// });

// app.use(loginRouter.routes());

app.use((ctx, next) => {
  console.log(ctx.request.body); //其他格式解析的数据存在request中
  console.log(ctx.req.body); //form-data解析出来的数据存放在req中，而不是request中
  ctx.response.body = "Hello World~"
});

app.listen(8000, () => {
  console.log('koa参数解析-json-urlencoded-formdata服务器启动成功~');
});