const http = require('http');

const server = new http.Server((request, response) => {
  console.log(request.headers);
  request.on('data', (data) => {
    console.log(data.length);
  })

  response.end('Hello Server')
});

server.listen(8000, '0.0.0.0',() => {
  console.log('服务器启动成功~');
})