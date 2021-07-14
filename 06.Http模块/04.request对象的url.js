const http = require('http');
const url = require('url')
const qs = require('querystring')

const server = new http.Server((req, res) => {
  // request对象中封装了客户端给我们服务器传递过来的所有信息

  // 最基本的使用方式
  // if(req.url === '/login'){
  //   res.end('欢迎回来')
  // }else if(req.url === '/data'){
  //   res.end('数据请求成功')
  // }else{
  //   res.end('错误的请求');
  // }

  // /login?username=lhd&password=123456
  const { pathname, query } = url.parse(req.url)
  // console.log(url.parse(req.url));
  if(pathname === '/login'){
    console.log(query);
    // 对参数进行解析
    console.log(qs.parse(query));
    // 对象的解构
    const { username, password } = qs.parse(query)
    console.log(username,password);
    res.end('请求结果~')
  }

  // console.log(req.url);
  // res.end('请求成功')
})

server.listen(8000, '0.0.0.0', () => {
  console.log('服务器启动成功~');
})