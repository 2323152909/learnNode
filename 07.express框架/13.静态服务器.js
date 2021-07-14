const express = require('express');

const app = express();

// 对静态资源进行部署
app.use(express.static('./dist'))

app.listen(8000, () => {
  console.log('静态资源服务器启动成功~');
});
