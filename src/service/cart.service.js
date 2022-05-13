const {Op} = require('sequelize')

const Cart = require('../model/car.model')

class CartService {
    async creatOrUpdate(user_id, goods_id) {
        let res = Cart.findOne({
            where: {
                [Op.and]: {
                    user_id,
                    goods_id
                }
            }
        })

        if (res) {
            //已经存在一条记录, 将number + 1
            await res.increment('number')
            return await res.reload()
        }else {
            return await Cart.create({
                user_id,
                goods_id
            })
        }
    }
}

module.exports = new CartService()