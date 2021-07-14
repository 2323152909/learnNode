const { promisify } = require('util')
const path = require('path')

const download = promisify(require('download-git-repo'))
const { vueRope } = require('../config/repo-config')
const { commandSpawn } = require('../utils/terminal')
const { compile,writeToFile,createDirSync } = require('../utils/utils')
// callback => promisify(函数) => Promise => async await
const createProjectAction = async (project) => {
  console.log('lhd helps you create your project...')
  // 1.clone项目
  await download(vueRope, project, {clone:true});

  // 2.执行npm install
  const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
  await commandSpawn(command, ['install'], {cwd: `./${project}`})

  // 3.运行npm run serve
  commandSpawn(command, ['run', 'serve'], {cwd: `./${project}`})

  // 4.打开浏览器
  open("http://localhost:8000/")
}

const addComponentAction = async (name, dest) => {
  // 1.编译ejs模板 result
  const result = await compile('vue-component.ejs', {name,lowerName: name.toLowerCase()})
  console.log(result);
  // 2.将result写入到 .vue文件中
  const targetPath = path.resolve(dest, `${name}.vue`)
  console.log(targetPath);
  writeToFile(targetPath, result)
  // 3.放到对应的文件夹中
}

// 添加组件和路由
const addPageAndRouteAction = async (name, dest) => {
  // 1.编译ejs模板
  const data = {name, lowerName:name.toLowerCase()}
  const pageResult = await compile('vue-component.ejs', data)
  const routeResult = await compile('vue-router.ejs', data)

  // 2. 获取路由信息
  // 东热爱加载pages中所有的路由文件
  // const files = require.context('@/pages', true, /router\.js$/);
  // const routes = files.keys().map(key => {
  //   const page = require('@/pages' + key.replace('.', ''));
  //   return page.default;
  // })

  // 3.写入文件
  const target = path.resolve(dest, name.toLowerCase())
  if(createDirSync(target)){
    const targetPagePath = path.resolve(target, `${name}.vue`);
    const targetRoutePath = path.resolve(target, 'router.js');
    writeToFile(targetPagePath, pageResult);
    writeToFile(targetRoutePath, routeResult)
  }
}

const addStoreAction = async (store, dest) =>{
  // 1.遍历的过程
  const storeResult = await compile('vue-store.ejs', {})
  const typesResult = await compile('vue-types.ejs', {})

  // 2.创建文件
  if(createDirSync(dest)){
    const targetPagePath = path.resolve(dest, `${name}.js`);
    const targetRoutePath = path.resolve(dest, 'types.js');
    writeToFile(targetPagePath, pageResult);
    writeToFile(targetRoutePath, routeResult)
  }
}

module.exports = {
  createProjectAction,
  addComponentAction,
  addPageAndRouteAction,
  addStoreAction
}