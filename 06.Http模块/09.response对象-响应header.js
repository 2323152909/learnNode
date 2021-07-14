const http = require('http');

const server = new http.Server((req, res) => {

  // 设置响应header
  // 设置方式一：
  // res.setHeader('Content-Type','text/plain;charset=utf8')
  res.writeHead(200, {
    "Content-Type": "text/html;charset=utf8"
  });
  
  // 响应结果
  res.end('<h2>Hello Server</h2>');
});

server.listen(8000, '0.0.0.0', () => {
  console.log('服务器启动成功~');
});