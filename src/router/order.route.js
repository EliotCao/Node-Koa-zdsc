const Router = require('koa-router')

const {auth} = require('../middleware/auth.middleware')
const {validator} = require('../middleware/order.middleware')
const {create, findAll} = require('../controller/order.controller')

const router = new Router({prefix: '/orders'})

//提交订单
router.post('/',auth,validator({
    address_id: 'int',
    goods_info: 'string',
    total: 'string'
}), create)

router.get('/id', auth, findAll)

module.exports = router