const http = require('http');

// 创建一个web服务器
const server = http.createServer((request, response) => {
  response.end("Hello Server")
});

// 启动服务器，并且指定端口号和主机
server.listen(8000, 'localhost', () => {
  console.log('服务器启动成功~~~~~~');
});


