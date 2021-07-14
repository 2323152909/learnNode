const express = require('express');

const app = express();

const middleware01 = (req, res, next) => {
  req.message = 'aaa';
  next();
  res.end(req.message)
};

const middleware02 = (req, res, next) => {
  req.message += 'bbb';
  next();
};

const middleware03 = (req, res, next) => {
  req.message += 'ccc';
  console.log(req.message);
};

app.use(middleware01,middleware02,middleware03);

app.listen(8000, () => {
  console.log('服务器启动成功~');
});