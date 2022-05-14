//1.导入koa-router
const Router = require('koa-router')
//中间件
const {auth} = require('../middleware/auth.middleware')
const {validator} = require('../middleware/cart.middleware')
//控制器
const {add, findAll, update, remove, selectAll, unselectAll} = require('../controller/cart.controller')

//2.实例化router对象
const router = new Router({prefix: '/cart'})

//3.编写路由规则
//3.1 添加到购物车接口: 登录，格式
router.post('/',auth,validator({goods_id: 'number'}), add())

//获取到购物车列表
router.get('/', auth, findAll)

//更新购物车列表
router.patch('/:id', auth, validator({
    number: {type:'number', require: false},
    selected: {type: 'bool', require: false}
}), update)

//删除购物车
router.delete('/:id', auth, validator({id: 'array'}), remove)

//全选
router.post('/selectAll', auth, selectAll)

//全不选
router.post('/unselectAll', auth, unselectAll)

//4.导出router对象
module.exports = router