const fs = require('fs')

// 传统的方式
// fs.readFile('./foo.txt', (err, data) => {
//   console.log(data);
// })

// 流的方式读取
const reader = fs.createReadStream('./foo.txt', {
  start: 2,
  end:10,
  highWaterMark:2
});

reader.on('data', (data) => {
  console.log(data);

  // 暂停
  reader.pause();

  setTimeout(() => {
    // 重新开始
    reader.resume();
  }, 1000);
})

reader.on('open', () => {
  console.log('文件被打开');
})

reader.on('close', () => {
  console.log('文件被关闭');
})