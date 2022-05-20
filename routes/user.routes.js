const Router = require('express');
const router = new Router();
const userController = require('../controller/user.controller');

router.get('/user/:id', userController.getUser);


module.exports = router;