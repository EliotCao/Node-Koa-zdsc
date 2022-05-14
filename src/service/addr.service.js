const Address = require('../model/addr.model')

class AddrService {
    async createAddr(addr) {
        return await Address.creat(addr)
    }

    async findAllAddr(user_id) {
        return await Address.findAll({
            attributes: ['id', 'consignee', "consignee", 'phone', 'address', 'is_default'],
            where: {
                user_id
            }
        })
    }

    async updateAddr(id, addr) {
        return await Address.update(addr, {where: {id}})
    }

    async removeAddr(id) {
        return await Address.destroy({where: {id}})
    }

    async setDefaultAddr(user_id, id) {
        await Address.update({id_default: 0}, {where: {user_id}})

        return await Address.update({id_default: 1}, {where: {id}})
    }
}

module.exports = new AddrService()