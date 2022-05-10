const Goods = require('../model/goods.model')

class GoodsService {
    async createGoods(goods){
        //插入数据
        const res = await Goods.create(goods);

        return res.dataValues
    }
}

module.exports = new GoodsService()