const Router = require('koa-router')

const {auth} = require('../middleware/auth.middleware')
const {validator} = require('../middleware/addr.middleware')

const router = new Router({prefix: '/address'})

router.post('/',auth, validator({
    consignee: 'string',
    phone: {type: 'string', format: /^1\d{10}$/},
    address: 'string'
}), (ctx) => {
    console.log(ctx.state.user.id)
    ctx.body = 'address'
})

module.export = router