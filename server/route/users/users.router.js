const express = require('express')
const router = express.Router();
const usersController = require('./users.controller');

router.post('/signin', (req, resp, next) => {
    usersController.createToken(req, resp, next)
})

router.post('/signup', async (req, resp, next) => {
    usersController.signUpUser(req, resp, next)
});

router.get('/getuser/:name', async (req, resp, next) => {
    console.log('param: ', req.params)
    usersController.getUserInfo(req, resp, next)
})

router.get('/alluser', (req, resp, next) => {
    usersController.getAllUserInfo(req, resp, next)
})

router.put('/subtract-lesson/:name', async (req, resp, next) => {
    usersController.subtractLessonCounter(req, resp, next)
})

router.put('/add-lesson', async (req, resp, next) => {
    usersController.addLesson(req, resp, next)
})

module.exports = router;