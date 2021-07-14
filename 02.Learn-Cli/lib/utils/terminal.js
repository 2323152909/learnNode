/**
 * 执行终端命令相关的代码
 */

const { exec, spawn} = require('child_process');

const commandSpawn = (...args) => {
  return new Promise((resolve, reject) => {
    const childProcess =  spawn(...args);
    childProcess.stdout.pipe(process.stdout);
    childProcess.stderr.pipe(process.stdout);
    childProcess.on('close',() => {
      resolve();
    })
  })
}

module.exports = {
  exec,
  spawn,
  commandSpawn
}