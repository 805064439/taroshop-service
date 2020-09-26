const Controller = require('egg').Controller

class CartController extends Controller{

    async index() {
        this.ctx.body = 'hi api'
    }

    async getCart(){

        let userName = this.ctx.request.body.userName


        let sql = 'SELECT shop_goods.id,goodName,goodInfo,goodImg,goodPrice,shop_cart.count,shop_cart.Id as cartId '+
        ' FROM shop_goods,shop_cart WHERE shop_goods.id in '+
        " (SELECT goodId FROM shop_cart WHERE userName='"+userName+"') "+
        ' and shop_cart.goodId=shop_goods.id '

        const results = await this.app.mysql.query(sql)

        this.ctx.body={
            data:results
        }
    }

    async countChange(){
        let change = this.ctx.request.body.change
        let id = this.ctx.request.body.id
        let userName = this.ctx.request.body.userName

        let sql = "UPDATE shop_cart SET count = "+change+ " WHERE userName='"+userName+"' and goodId='"+id+"'"

        const results = await this.app.mysql.query(sql)

        this.ctx.body={
            data:results
        }
        
    }

    async checkCartRecord(){
        let goodId = this.ctx.request.body.goodId
        let userName = this.ctx.request.body.userName

        console.log('goodId='+goodId+',userName='+userName)

        let sql = "select id from shop_cart where userName ='"+userName+"' and goodId = '"+goodId+"'"

        const res = await this.app.mysql.query(sql)

        if (res.length > 0) {
            this.ctx.body = {
                'data': '购物车中有'
            }
        } else {
            this.ctx.body = {
                'data': '购物车中无' 
            }
        }

    }

    async addCartRecord(){
        let goodId = this.ctx.request.body.id
        let userName = this.ctx.request.body.userName

        let sql = "insert into shop_cart(userName,goodId,count)values('"+userName+"','"+goodId+"',1)"

        const res = await this.app.mysql.query(sql)

        this.ctx.body={
            data:res
        }
    }

    async deleteCart(){
        let id = this.ctx.request.body.id
console.log(id);

        let sql = "DELETE FROM shop_cart WHERE Id='"+id+"'"

        const res = await this.app.mysql.query(sql)

        this.ctx.body={
            data:'删除成功'
        }
    }

}

module.exports = CartController