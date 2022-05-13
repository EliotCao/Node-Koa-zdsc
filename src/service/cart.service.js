class CartService {
    async creatOrUpdate(user_id, goods_id) {
        return {
            user_id: 13,
            goods_id: 1,
            number: 1,
            selected: true
        }
    }
}

module.exports = new CartService()