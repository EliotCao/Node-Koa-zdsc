const path = require('path')

const {fileUploadError, unSupportFileType, publishGoodsError} = require('../constant/err.type')
const {createGoods} = require('../service/goods.service')

class GoodsController {
    async upload(ctx, next) {
        //file对应前端上传时的名字
        // console.log(ctx.request.files.file)
        const {file} = ctx.request.files
        const fileTypes = ['image/jpeg', 'image/png']
        if (file) {
            if (!fileTypes.includes(file.type)) {
                return ctx.app.emit('error', unSupportFileType, ctx)
            }
            ctx.body = {
                code: 0,
                message: '商品图片上传成功',
                result: {
                    // goods_img: path.basename(file.path)
                    goods_img: path.basename(file.filepath)
                }
            }
        } else {
            return ctx.app.emit('error', fileUploadError, ctx)
        }
    }

    async creat(ctx){
        //直接调用service的creatGoods()
        try {
            const {createdAt, updatedAt, ...res} = await createGoods(ctx.request.body)
            ctx.body = {
                code: 0,
                message: '发布商品成功',
                result: res
            }
        }catch (err) {
            console.error(err)
            return ctx.app.emit('error', publishGoodsError, ctx)
        }
    }
}

module.exports = new GoodsController()