const Controller = require('egg').Controller

class orderController extends Controller {

    async addOrder() {
        let addressee = this.ctx.request.body.addressee
        let telephone = this.ctx.request.body.telephone
        let address = this.ctx.request.body.address
        let distribution = this.ctx.request.body.distribution
        let dancyou = this.ctx.request.body.dancyou
        let userName = this.ctx.request.body.userName
        let sum = this.ctx.request.body.sum
        let sql = "insert into user_order (addressee,telephone,address,dancyou,distribution,userName,date,price)" +
            "values('" + addressee + "','" + telephone + "','" + address + "','" + dancyou + "','" + distribution + "','" + userName + "',CURDATE(),'" + sum + "')"
        const res = await this.app.mysql.query(sql)

        this.ctx.body = {
            data: res
        }
    }
    async getOrderId() {
        let sql2 = "SELECT max(id) as insertId from user_order"
        const res2 = await this.app.mysql.query(sql2)
        this.ctx.body = {
            data: res2
        }
    }

    async moveOrder() {

        let orderId = this.ctx.request.body.orderId
        let userName = this.ctx.request.body.userName

        let sql = "insert into order_good " +
            "select *,'" + orderId + "' as orderId from shop_cart where userName='" + userName + "'"

        const res = await this.app.mysql.query(sql)

        let delSql = "DELETE FROM shop_cart WHERE userName='" + userName + "'"
        const res2 = await this.app.mysql.query(delSql)

        this.ctx.body = {
            data: res
        }
    }

    async getOrder() {
        let userName = this.ctx.request.body.userName

        let sql = "select * from user_order where userName='" + userName + "'"
        const res = await this.app.mysql.query(sql)


        this.ctx.body = {
            data: res
        }
    }

    async getOrderGood() {

        let orderId = this.ctx.request.body.orderId

        let sql = " SELECT shop_goods.id,goodName,goodInfo,goodImg,goodPrice,order_good.count,order_good.orderId " +
            " FROM shop_goods,order_good WHERE shop_goods.id in " +
            " (SELECT goodId FROM order_good) " +
            " and order_good.goodId=shop_goods.id and orderId='" + orderId + "'"

        const results = await this.app.mysql.query(sql)
        this.ctx.body = {
            data: results
        }
    }

    async getOrderInfo() {
        let orderId = this.ctx.request.body.orderId

        let sql = "select * from user_order where id='" + orderId + "'"
        const res = await this.app.mysql.query(sql)

        this.ctx.body = {
            data: res
        }
    }


}

module.exports = orderController