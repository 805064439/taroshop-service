const Controller = require('egg').Controller

class UpdateController extends Controller {

    async updateGood() {

        let goodId = this.ctx.request.body.goodId
        let info = this.ctx.request.body.info
        let name = this.ctx.request.body.name
        let price = this.ctx.request.body.price
        let img = this.ctx.request.body.img

        let sql =" UPDATE shop_goods SET goodName='"+name+"', goodInfo='"+info+"',goodImg='"+img+"',goodPrice='"+price+"' where id='"+goodId+"'"
        
        const results = await this.app.mysql.query(sql)

        this.ctx.body = {
            data: results
        }
    }

    async insertGood() {

        let info = this.ctx.request.body.info
        let name = this.ctx.request.body.name
        let price = this.ctx.request.body.price
        let img = this.ctx.request.body.img

        let sql ="INSERT INTO shop_goods (goodName,goodInfo,goodImg,goodPrice )"+
        "VALUES( '"+name+"', '"+info+"','"+img+"','"+price+"')"
        
        const results = await this.app.mysql.query(sql)

        this.ctx.body = {
            data: 'success'
        }
    }

    async updateDancyou() {

        let id = this.ctx.request.body.did
        let name = this.ctx.request.body.name
        let psd = this.ctx.request.body.psd

        console.log(id+name+psd);
        

        let sql =" UPDATE shop_dancyou SET dancyouName='"+name+"', dancyouPassword='"+psd+"' where dancyouId='"+id+"'"
        
        const results = await this.app.mysql.query(sql)

        this.ctx.body = {
            data: 'success'
        }
    }

    async addDancyou() {

        let name = this.ctx.request.body.name
        let psd = this.ctx.request.body.psd
        
        let sql ="INSERT INTO shop_dancyou ( dancyouName, dancyouPassword)VALUES( '"+name+"', '"+psd+"')"
        
        const results = await this.app.mysql.query(sql)

        this.ctx.body = {
            data: 'success'
        }
    }

    async deleteGood() {

        let goodId = this.ctx.request.body.goodId

        let sql ="DELETE FROM shop_goods WHERE Id='"+goodId+"'"

        const results = await this.app.mysql.query(sql)

        this.ctx.body = {
            data: '删除成功'
        }
    }

    async deleteMember() {

        let did = this.ctx.request.body.did

        let sql ="DELETE FROM shop_dancyou WHERE dancyouId='"+did+"'"

        const results = await this.app.mysql.query(sql)

        this.ctx.body = {
            data: '删除成功'
        }
    }

}

module.exports = UpdateController
