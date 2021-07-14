const path = require('path');

const Koa = require('koa');
const Router = require('koa-router');
const multer = require('koa-multer');

const app = new Koa();

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './uploads');
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + path.extname(file.originalname))
  },
});

const upload = multer({
  storage
});

const uploadRouter = new Router({prefix: '/upload'});

uploadRouter.post('/avatar', upload.single('avatar'), (ctx, next) => {
  console.log(ctx.req.file);
  ctx.response.body = '上传头像成功~'
});


app.use(uploadRouter.routes()); //注册使用路由中间件

app.listen(8000, () => {
  console.log('文件上传服务器启动成功~');
});