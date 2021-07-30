var express = require('express');
var router = express.Router();


const helloController = require('../controllers/hello.controller.js');

const postController = require('../controllers/post.controller.js');

router.get('/hello', helloController.hello);

router.post('/post', postController.get);

router.get('/post',postController.view);

module.exports = router;