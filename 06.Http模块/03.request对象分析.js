const http = require('http');

const server = new http.Server((req, res) => {
  // request对象中封装了客户端给我们服务器传递过来的所有信息
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);

  res.end('Hello Server');
})

server.listen(8000, '0.0.0.0', () => {
  console.log('服务器启动成功~');
})