const Controller = require('egg').Controller

class GoodsController extends Controller {

    async index() {
        this.ctx.body = 'hi api'
    }

    async getGoods() {

        let sql = 'select id as id,' +
            'goodName as name,' +
            'goodInfo as info,' +
            'goodImg as img,' +
            'goodPrice as price' +
            ' from shop_goods;'

        const results = await this.app.mysql.query(sql)

        this.ctx.body = {
            data: results
        }
    }

    async getGoodInfo() {

        let goodId = this.ctx.request.body.goodId

        let sql = 'select id as id,' +
            'goodName as name,' +
            'goodInfo as info,' +
            'goodImg as img,' +
            'goodPrice as price' +
            ' from shop_goods ' +
            ' where id = ' + goodId

        const results = await this.app.mysql.query(sql)
        console.log(goodId);
        console.log(results);

        this.ctx.body = {
            data: results
        }
    }

}

module.exports = GoodsController