const http = require('http');
const fs = require('fs');
const qs = require('querystring');

const server = http.createServer((req, res) => {
  if(req.url === '/upload'){
    if(req.method === 'POST'){
      // 图片文件必须设置为二进制的
      req.setEncoding('binary');

      let body = '';
      // 获取content-type中的boundary的值
      const boundary = req.headers['content-type'].split(';')[1].replace(' boundary=', '');
      console.log(boundary);

      // 监听当前的数据
      req.on('data', (data) => {
        body += data;
      });

      // 监听请求结束
      req.on('end', () => {
        // console.log(body);
        // 处理body
        // 1.获取image/jpeg的位置
        const payload = qs.parse(body, '\r\n',': ')
        const type = payload['Content-Type']  //获取文件类型
        console.log(type);
        // 2.开始在img/jpeg的位置进行截取
        const typeIndex = body.indexOf(type);
        const typeLength = type.length;

        console.log(typeIndex);
        console.log(typeLength);
        let imageDate = body.substring(typeIndex + typeLength);
        // console.log(imageDate);

        // 3.将中间的两个空格去掉
        imageDate = imageDate.replace(/^\s\s*/, '');

        // 4.将最后的boundary去掉
        const boundaryIndex = body.indexOf(`--${boundary}--`);
        console.log(boundaryIndex);
        
        imageDate = imageDate.substring(0, boundaryIndex);
        // console.log(imageDate);

        fs.writeFile('./foo.png', imageDate.replace('\\r\\n', ''), {encoding:'binary'}, (err) => {
          res.end('文件上传成功~')
        })
      })
    }
  }
});

// 启动服务器，并指定端口和主机
server.listen(8000, '0.0.0.0', () => {
  console.log('文件上传服务器启动成功~');
})