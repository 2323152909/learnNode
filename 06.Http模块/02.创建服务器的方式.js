const http = require('http');

// 1.创建server的两种方式
const server1 = http.createServer((request, response) => {
  response.end('Server1')
})

server1.listen(8000, () => {
  console.log('Server1启动成功~');
})

// const server2 = http.createServer((req, res) => {
//   res.end('Server2');
// })

const server2 = new http.Server((req, res) => {
  res.end('Server2')
})

server2.listen(8001, () => {
  console.log('Server2启动成功~');
  // console.log(server2.address());
})

// 2.监听方法的使用
