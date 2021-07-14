const Koa = require('koa');
const axios = require('axios');

const app = new Koa();

const middleware01 = async (ctx, next) => {
  ctx.message = 'aaa';
  await next();
  ctx.body = ctx.message
};

const middleware02 = async (ctx, next) => {
  ctx.message += 'bbb';
  await next();
};

const middleware03 = async (ctx, next) => {
  const result = await axios.get('http://123.207.32.32:9001/lyric?id=167876')
  ctx.message += result.data.lrc.lyric
};

app.use(middleware01);
app.use(middleware02);
app.use(middleware03);

app.listen(8000, () => {
  console.log('服务器启动成功~');
});