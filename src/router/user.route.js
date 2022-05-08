const Router = require('koa-router')

const {userValidator, verifyUser, cryptPassword} = require('../middleware/user.middleware')
const {register, login} = require('../controller/user.controller')

const router = new Router({ prefix: '/users' })

//register
router.post('/register', userValidator, verifyUser,cryptPassword, register)

//login
router.post('/login', login)

module.exports = router