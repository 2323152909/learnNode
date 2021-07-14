// 借助第三方库koa-router进行路由的创建
const Router = require('koa-router');

const router = new Router({prefix: '/users'});

router.put('/', (ctx, next) => {
  ctx.response.body = 'Put Request~';
});

router.get('/', (ctx, next) => {
  ctx.response.body = 'User Lists~';
});

router.post('/', (ctx, next) => {
  ctx.response.body = 'create User~';
});

module.exports = router