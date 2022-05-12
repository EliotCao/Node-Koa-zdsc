const Goods = require('../model/goods.model')

class GoodsService {
    async createGoods(goods){
        //插入数据
        const res = await Goods.create(goods);

        return res.dataValues
    }

    async updateGoods(id, goods){
        try {
            const res = await Goods.update(goods, {where: {id}})
            return res[0] > 0
        }catch (err){
            console.error(err)
        }
    }

    async removeGoods(id){
        const res = await Goods.destroy({where:{id}})
        return res[0] > 0
    }
}

module.exports = new GoodsService()