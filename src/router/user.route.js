const Router = require('koa-router')

const {userValidator, verifyUser, cryptPassword, verifyLogin} = require('../middleware/user.middleware')
const {auth} = require('../middleware/auth.middleware')
const {register, login, changePassword} = require('../controller/user.controller')

const router = new Router({ prefix: '/users' })

//register
router.post('/register', userValidator, verifyUser, cryptPassword, register)

//login
router.post('/login',userValidator, verifyLogin, login)

//login
router.patch('/changePassword', auth, cryptPassword, changePassword)

module.exports = router