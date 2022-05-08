const User = require('../model/user.model')

class UserService {
    async createUser(username, password){
        //插入数据
        /*User.create({
            username: username,
            password: password,
        })*/
        const res = await User.create({username, password});
        // console.log(res)

        return res.dataValues
    }

    async getUserInfo({id, username, password, is_admin}){
        const whereOpt = {}
        id && Object.assign(whereOpt, {id})
        username && Object.assign(whereOpt, {username})
        password && Object.assign(whereOpt, {password})
        is_admin && Object.assign(whereOpt, {is_admin})

        const res = await User.findOne({
            attributes:['id','username', 'password', 'is_admin'],
            where: whereOpt
        })

        return res ? res.dataValues : null
    }
}

module.exports = new UserService()