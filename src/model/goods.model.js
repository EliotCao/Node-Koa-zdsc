const { DataTypes } = require('sequelize');

const seq = require('../db/seq')

const Goods = seq.define('zd_goods', {
    // id 会被sequelize自动创建, 管理
    goods_name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '商品名称'
    },
    goods_price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        comment: '商品价格'
    },
    goods_num: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '商品库存'
    },
    goods_img: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '商品图片的URL地址'
    }
})

//强制同步数据库(创建数据库)
// Goods.sync({force: true})

module.exports = Goods