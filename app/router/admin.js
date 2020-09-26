module.exports = app =>{
    const {router,controller} = app
    router.get('/default/index1',controller.default.home.index)
    router.get('/admin/upload/index',controller.admin.upload.index);
    router.post('/admin/upload/upload',controller.admin.upload.upload);
    router.post('/admin/updateGoodInfo',controller.admin.update.updateGood);
    router.post('/admin/insertGood',controller.admin.update.insertGood);
    router.post('/admin/getDnameById',controller.default.pay.getDnameById);
    router.post('/admin/updateDancyou',controller.admin.update.updateDancyou);
    router.post('/admin/checkLogin',controller.admin.login.checkLogin)
    router.post('/admin/addDancyou',controller.admin.update.addDancyou)
    router.post('/admin/deleteGood',controller.admin.update.deleteGood)
    router.post('/admin/deleteMember',controller.admin.update.deleteMember)
} 