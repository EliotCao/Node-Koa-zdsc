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
        return res > 0
    }

    async restoreGoods(id){
        const res = await Goods.destroy({where:{id}})
        return res > 0
    }

    async findGoods(pageNum, pageSize){
        /*//1.获取总数
        const count = await Goods.count()
        //2.获取分页数据
        const offset = (pageNum - 1) * pageSize
        const rows = Goods.findAll({offset: offset, limit: pageSize})*/
        const offset = (pageNum - 1) * pageSize
        const {count, rows} = Goods.findAndCountAll({offset: offset, limit: pageSize * 1})

        return {
            pageNum,
            pageSize,
            total: count,
            list: rows
        }
    }
}

module.exports = new GoodsService()