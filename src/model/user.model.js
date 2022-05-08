const { DataTypes } = require('sequelize');

const seq = require('../db/seq')

const User = seq.define('zd_user', {
    // id 会被sequelize自动创建, 管理
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        comment: '用户名，唯一'
    },
    password: {
        type: DataTypes.CHAR,
        allowNull: false,
        comment: '密码'
    },
    is_admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
        comment: '是否为管理员，0:不是管理员（默认）'
    }
}/*,{
    timestamps: false
}*/)

//强制同步数据库(创建数据库)
// User.sync({force: true})

module.exports = User