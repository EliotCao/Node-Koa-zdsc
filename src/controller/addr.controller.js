const {createAddr, findAllAddr, updateAddr, removeAddr} = require('../service/addr.service')

class AddrController {
    async create(ctx) {
        //解析user_id, consignee, phone, address
        const user_id = ctx.state.user.id
        const {consignee, phone, address} = ctx.request.body

        const res = await createAddr({user_id, consignee, phone, address})
        ctx.body = {
            code: 0,
            message: '添加地址成功',
            result: res
        }
    }

    async findAll(ctx) {
        //解析user_id, consignee, phone, address
        const user_id = ctx.state.user.id

        const res = await findAllAddr(user_id)
        ctx.body = {
            code: 0,
            message: '获取地址列表成功',
            result: res
        }
    }

    async update(ctx) {
        const id = ctx.request.params.id

        const res = await updateAddr(id, ctx.request.body)

        ctx.body = {
            code: 0,
            message: '更新地址成功',
            result: res
        }
    }

    async remove(ctx) {
        const id = ctx.request.params.id

        const res = await removeAddr(id)

        ctx.body = {
            code: 0,
            message: '删除地址成功',
            result: res
        }
    }
}

module.exports = new AddrController()