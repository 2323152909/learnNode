const http = require('http');

// 创建一个web服务器
const server = new http.Server((request, response) => {

  // 响应结果
  response.write('响应结果一');
  response.end('Hello Server');
});

// 启动服务器，并且指定端口号和主机
server.listen(8000, '0.0.0.0',() => {
  console.log('服务器启动成功~');
})