const {creatOrUpdate, findCarts, updateCarts, removeCarts} = require('../service/cart.service')
const {cartFormatError} = require('../constant/err.type')

class CartController {
    async add(ctx) {
        //将商品添加到购物车
        // ctx.body = '添加成功'
        //1.解析user_id, goods_id
        const user_id = ctx.state.user.id
        const goods_id = ctx.request.body.goods_id
        //2.操作数据库
        const res = await creatOrUpdate(user_id, goods_id)
        //3.返回数据库
        ctx.body = {
            res: 0,
            message: '添加到购物车成功',
            result: res
        }
    }

    async findAll(ctx) {
        //1.解析参数
        const {pageNum = 1, pageSize = 10} = ctx.request.query
        //2.操作数据库
        const res = await findCarts(pageNum, pageSize)
        //3.返回结果
        ctx.body = {
            code: 0,
            message: '获取购物车列表成功',
            result: res
        }
    }

    async update(ctx) {
        //1.解析参数
        const {id} = ctx.request.params
        const { number, selected} = ctx.request.body
        if (number === undefined && selected === undefined ) {
            cartFormatError.result = 'number和selected不能同时为空'
            return ctx.app.emit('error', cartFormatError, ctx)
        }
        //2.操作数据库
        const res = await updateCarts({id, number, selected})
        //3.返回数据
        ctx.body = {
            code: 0,
            message: '更新购物车成功',
            result: res
        }
    }

    async remove(ctx) {
        const {ids} = ctx.request.body

        const res = await removeCarts(ids)

        ctx.body = {
            code: 0,
            message: '删除购物车陈工',
            result: res
        }
    }
}

module.exports = new CartController()