const Controller = require('egg').Controller

class LoginController extends Controller {
    async checkLogin() {
        let userName = this.ctx.request.body.userName
        let password = this.ctx.request.body.password
        const sql = " SELECT userName FROM shop_admin WHERE userName = '" + userName +
            "' AND password = '" + password + "'"

        const res = await this.app.mysql.query(sql)
        if (res.length > 0) {
            this.ctx.body = { data: '登录成功'}

        } else {
            this.ctx.body = { data: '登录失败' }
        }
    }
}
module.exports = LoginController 
