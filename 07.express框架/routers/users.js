/**
 * 举个例子：(引入路由的知识)
 *    请求所有的用户信息： get /users
 *    请求某个用户的信息： get /users/:id
 *    注册某个用户的信息： post /users/:id body {username; password}
 *    删除某个用户的信息： delete /users/:id
 *    更改某个用户的信息： patch /users/:id {nickname:}
 */

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json(['lhd', 'curry', 'kobe']);
});

router.get('/:id', (req, res, next) => {
  res.json(`${req.params.id}用户信息`);
});

router.post('/', (req, res, next) => {
  res.json('create user success~');
});

module.exports = router;