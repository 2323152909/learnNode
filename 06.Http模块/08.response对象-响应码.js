const http = require('http');

const server = new http.Server((req, res) => {

  // 设置状态码
  // 方式一:直接给属性赋值
  // res.statusCode = 401
  // 方式二：和Head一起设置
  res.writeHead(503, {})


  console.log(res.statusCode);
  // 响应结果
  res.write('相应结果一')
  res.end('Hello Server')
})

server.listen(8000, '0.0.0.0', () => {
  console.log('服务器启动成功~');
})