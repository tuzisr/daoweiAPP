var router = require('express').Router();
var axios = require('axios');



/*主页面*/
router.get('/', function (req, res, next) {
    axios.get('http://localhost:3000/menuItem')
        .then(function (response) {
            var obj = {menuItem : response.data};
            res.render('index', obj)


        })
        .catch(function (error) {
            console.log(error)
        })

})



/*下载app*/
router.get('/app', function (req, res, next) {
    axios.get('http://localhost:3000/download')
        .then(function (response) {
            var obj = {download : response.data};
            res.render('app', obj)
        })
        .catch(function (error) {
            console.log(error)
        })
})


/*服务商*/
router.get('/provider', function (req, res, next) {
    axios.get('http://www.daoway.cn/service/serviceItems?start=1&size=96')
        .then(function (response) {
            var obj = {service : response.data};
            res.render('provider', obj)
        })
        .catch(function (error) {
            console.log(error)
        })
})

/*商家入驻*/
router.get('/join', function (req, res, next) {
    res.render('join')
})

/*关于我们*/
router.get('/Me', function (req, res, next) {
    res.render('Me')
})

/*登录注册*/
router.get('/login', function (req, res, next) {
    res.render('login')
})

/*服务项列表*/
router.get('/serviceList', function (req, res, next) {
    var Id = req.query.serviceId;
    /*请求服务项数据*/
    axios.get('http://www.daoway.cn/daoway/rest/service/'+Id)
        .then(function (response) {
            var item = response.data.data;

            /*请求评论数据*/
            axios.get('http://www.daoway.cn/fuwushang/getComments?start=10&serviceId='+Id)
                .then(function (response) {
                    var comments = response.data.data;
                            var obj = {
                                item : item,
                                comments : comments
                            };
                            res.render('serviceList', obj)
                })
                .catch(function (error) {
                    console.log(error)
                })
            /*请求评论*/

        })
        .catch(function (error) {
            console.log(error)
        })
    /*请求服务项数据*/
})



/*服务详情页*/
router.get('/detail', function (req, res, next) {
    var Id = req.query.detailId;

    var CNtag = req.query.CNtag;



            /*详情页*/
            axios.get('http://www.daoway.cn/daoway/rest/service/full/'+Id)
                .then(function (response) {
                    var obj = {
                        cn : CNtag,
                        prices : response.data.data
                    };

                    res.render('detail', obj)
                })
                .catch(function (error) {
                    console.log(error)
                })

            /*详情页*/


})

module.exports = router;