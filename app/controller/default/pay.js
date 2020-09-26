const Controller = require('egg').Controller

class PayController extends Controller{

    async getDancyou(){

        let sql = 'select dancyouId as id,'+
                  'dancyouName as name '+
                  'from shop_dancyou'

        const results = await this.app.mysql.query(sql)

        this.ctx.body={
            data:results
        }
    }
    async getDnameById(){

        let id = this.ctx.request.body.did

        let sql = "select dancyouName as name from shop_dancyou where dancyouId = '"+id+"'"

        const results = await this.app.mysql.query(sql)

        this.ctx.body={
            data:results
        }

    }

}

module.exports = PayController