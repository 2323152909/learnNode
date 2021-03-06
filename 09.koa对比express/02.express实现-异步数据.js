const express = require('express');
const axios = require('axios')

const app = express();

const middleware01 = async (req, res, next) => {
  req.message = 'aaa';
  await next();
  res.end(req.message)
};

const middleware02 = async (req, res, next) => {
  req.message += 'bbb';
  await next();
};

const middleware03 = async (req, res, next) => {
  const result = await axios.get('http://123.207.32.32:9001/lyric?id=167876')
  req.message += result.data.lrc.lyric
};

app.use(middleware01,middleware02,middleware03);

app.listen(8000, () => {
  console.log('服务器启动成功~');
})
