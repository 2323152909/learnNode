const http = require('http');
const url = require('url')
const qs = require('querystring')

const server = new http.Server((req, res) => {
  
  const { pathname, query } = url.parse(req.url)
  if(req.method === 'POST'){
    // 拿到body中的数据
    req.setEncoding('utf-8')
    req.on('data', (data) => {
      console.log(data);
      // data = JSON.stringify(data) //把普通字符串转换成JSON字符串
      
      data = JSON.parse(data) // 把JSON字符串转换成普通字符串
      const { username, password } = data
      console.log(data);
      console.log(username,password);
    })
    res.end('Hello World')
  }
})

server.listen(8000, '0.0.0.0', () => {
  console.log('服务器启动成功~');
})