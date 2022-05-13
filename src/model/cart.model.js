const { DataTypes } = require('sequelize');

const seq = require('../db/seq')
const Goods = require('./goods.model')

const Cart = seq.define('zd_carts', {
    goods_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '商品的id'
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '用户的id'
    },
    number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '商品的数量'
    },
    selected: {
        type: DataTypes.Boolean,
        allowNull: false,
        defaultValue: false,
        comment: '是否选中'
    }
})

// Cart.sync({force: true})
Cart.belongsTo(Goods, {
    foreignKey: 'goods_id',
})

module.exports = Cart