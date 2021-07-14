const Koa = require('koa');

const app = new Koa();

const middleware01 = (ctx, next) => {
  ctx.message = 'aaa';
  next();
  ctx.body = ctx.message
};

const middleware02 = (ctx, next) => {
  ctx.message += 'bbb';
  next();
};

const middleware03 = (ctx, next) => {
  ctx.message += 'ccc';
  console.log(ctx.message);
};

app.use(middleware01);
app.use(middleware02);
app.use(middleware03);

app.listen(8000, () => {
  console.log('服务器启动成功~');
});