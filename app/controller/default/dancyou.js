const Controller = require('egg').Controller

class DancyouController extends Controller {

    async dancyouLogin() {
        let userName = this.ctx.request.body.userName
        let password = this.ctx.request.body.password
        const sql = "select dancyouName from shop_dancyou where dancyouName ='" + userName +
            "' and dancyouPassword = '" + password + "'"

        const res = await this.app.mysql.query(sql)
        if (res.length > 0) {

            let openId = new Date().getTime()
            this.ctx.session.openId = { 'openId': 'openId' }
            //登录成功,进行session缓存
            this.ctx.body = {
                'data': '登录成功',
                'userName': userName
            }
        } else {
            this.ctx.body = { 'data': '登录失败' }
        }
    }

    async getDancyouOrder() {
        let name = this.ctx.request.body.Name

        const sql = "select * from user_order where dancyou='" + name + "'"

        const res = await this.app.mysql.query(sql)

        this.ctx.body = {
            data: res
        }
    }

    async changeOrderStatus() {
        let status = this.ctx.request.body.status
        let id = this.ctx.request.body.id

        const sql = " UPDATE user_order SET status='" + status + "' where Id='" + id + "'"
        const res = await this.app.mysql.query(sql)

        this.ctx.body = {
            data: "更新成功"
        }
    }

    async changeOrderCode() {
        let code = this.ctx.request.body.code
        let id = this.ctx.request.body.id

        const sql = " UPDATE user_order SET code='" + code + "' where Id='" + id + "'"
        const res = await this.app.mysql.query(sql)

        this.ctx.body = {
            data: "更新成功"
        }
    }

    async toRegister() {
        let userName = this.ctx.request.body.userName
        let password = this.ctx.request.body.password

        let sql ="INSERT INTO admin_user ( userName, password)VALUES( '"+userName+"', '"+password+"')"
        const res = await this.app.mysql.query(sql)

        this.ctx.body = {
            data: "注册成功"
        }
    }

}






module.exports = DancyouController