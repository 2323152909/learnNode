// 通过alloc的方式进行Buffer的创建
const buffer = Buffer.alloc(8);
console.log(buffer);

// 通过索引进行修改
buffer[0] = 88
buffer[1] = 0x88
console.log(buffer);