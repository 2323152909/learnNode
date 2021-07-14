const Koa = require('koa');
const userRouter = require('./router/user');

const app = new Koa();

app.use(userRouter.routes());
app.use(userRouter.allowedMethods()); //如果没有定义某个方法，则会显示（Methods Not Allowed）

app.listen(8000, () => {
  console.log('koa路由服务器启动成功~');
})
