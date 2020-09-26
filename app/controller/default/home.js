const Controller = require('egg').Controller

class HomeController extends Controller{

    async index(){
        //获取用户表的数据

        let result = await this.app.mysql.get("websites",{})
        console.log(result)
        this.ctx.body=result
    }

    async getWebList(){

        let sql = 'select id as Id,'+
                  'name as Name,'+
                  'url as URL,'+
                  'country as Country '+
                  'from websites'

        const results = await this.app.mysql.query(sql)

        this.ctx.body={
            data:results
        }
    }

}

module.exports = HomeController