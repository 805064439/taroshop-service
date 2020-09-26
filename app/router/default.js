module.exports = app =>{
    const {router,controller} = app
    //小程序用到的路由
    router.get('/default/index1',controller.default.home.index)
    router.get('/default/getWebList',controller.default.home.getWebList)
    router.get('/default/index2',controller.default.login.index)
    router.post('/default/checkLogin',controller.default.login.checkLogin)
    router.get('/default/getGoods',controller.default.goods.getGoods)
    router.post('/default/getGoodInfo',controller.default.goods.getGoodInfo)
    router.post('/default/getCart',controller.default.cart.getCart)
    router.post('/default/countChange',controller.default.cart.countChange)
    router.post('/default/checkCartRecord',controller.default.cart.checkCartRecord)
    router.post('/default/addCartRecord',controller.default.cart.addCartRecord)
    router.post('/default/deleteCart',controller.default.cart.deleteCart)
    router.get('/default/getDancyou',controller.default.pay.getDancyou)
    router.post('/default/addOrder',controller.default.order.addOrder)
    router.post('/default/moveOrder',controller.default.order.moveOrder)
    router.post('/default/getOrder',controller.default.order.getOrder)
    router.post('/default/getOrderGood',controller.default.order.getOrderGood)
    router.post('/default/getOrderInfo',controller.default.order.getOrderInfo)
    router.post('/default/getOrderId',controller.default.order.getOrderId)
    //团长用到的路由
    router.post('/default/dancyouLogin',controller.default.dancyou.dancyouLogin)
    router.post('/default/getDancyouOrder',controller.default.dancyou.getDancyouOrder)
    router.post('/default/changeOrderStatus',controller.default.dancyou.changeOrderStatus)
    router.post('/default/changeOrderCode',controller.default.dancyou.changeOrderCode)
    router.post('/default/toRegister',controller.default.dancyou.toRegister)
    
    
} 