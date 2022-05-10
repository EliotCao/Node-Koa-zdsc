const Router = require('koa-router')

const {auth, hadAdminPermission} = require('../middleware/auth.middleware')
const {goodsValidator} = require('../middleware/goods.middleware')
const {upload,creat} = require('../controller/goods.controller')

const router = new Router({prefix: '/goods'})

//图片上传接口
router.post('/upload', auth, hadAdminPermission, upload)

//发布商品接口
router.post('/', auth, hadAdminPermission, goodsValidator, creat)

module.exports = router