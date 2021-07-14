const express = require('express');

const app = express();

app.get('/login', (req, res, next) => {
  console.log(req.query);

  // 设置响应码
  res.status(204);

  // res.type('application/json');
  // res.end(JSON.stringify({name: 'lhd',age:18}));
  // res.json({name: 'lhd',age:18}); //这一步直接取代上面两步
  // 设置内容
  res.json(['abc', 'cba', 'nba']);
});


app.listen(8000, () => {
  console.log('服务器启动成功~');
});