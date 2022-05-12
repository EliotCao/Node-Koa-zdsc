const Router = require('koa-router')

const {auth, hadAdminPermission} = require('../middleware/auth.middleware')
const {goodsValidator} = require('../middleware/goods.middleware')
const {upload,creat,update,remove} = require('../controller/goods.controller')

const router = new Router({prefix: '/goods'})

//图片上传接口
router.post('/upload', auth, hadAdminPermission, upload)

//发布商品接口
router.post('/', auth, hadAdminPermission, goodsValidator, creat)

//修改商品接口
router.put('/:id', auth, hadAdminPermission, goodsValidator, update)

//删除商品接口
router.delete('/:id', auth, hadAdminPermission, goodsValidator, remove)

module.exports = router