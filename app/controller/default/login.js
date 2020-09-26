const Controller = require('egg').Controller

class LoginController extends Controller {

    async index() {
        this.ctx.body = 'hi api'
    }

    async checkLogin() {
        let userName = this.ctx.request.body.userName
        let password = this.ctx.request.body.password
        const sql = "select userName from admin_user where userName ='" + userName +
            "' and password = '" + password + "'"

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
}






module.exports = LoginController 