const path = require('path');

const express = require('express');
const multer = require('multer');

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, callback) => { //目标路径，是一个回调函数
    callback(null, './uploads');
  },
  filename: (req, file, callback) => { //文件名，是一个回调函数
    callback(null, Date.now() + path.extname(file.originalname));
  }
})

const upload = multer({
  // dest: './uploads/',  //保存的路径
  storage //自己控制存储的路径以及存储的文件名字
});

app.use(express.json()); //解析上传的json格式数据
app.use(express.urlencoded({extended: true})); //解析上传的urlencoded格式数据
// app.use(upload.any()); //解析上传的form-data格式数据(注意：永远不要将multer作为全局中间件来使用)

app.post('/login', upload.any(), (req, res, next) => {
  console.log(req.body);
  res.end('用户登录成功~')
});

app.post('/upload', upload.array('file'), (req, res, next) => {
  console.log(req.files);
  res.end('文件上传成功~');
});

app.listen(8000, () => {
  console.log('form-data文件上传服务器启动成功~');
})