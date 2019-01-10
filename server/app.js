//引入express中间件
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var appRouter = express.Router()
var fs = require('fs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//加载本地json数据
var menuData = require('./data/menulist.json');
var businessData = require('./data/hotBusiness.json');
var userData = require('./data/userInfor.json');

appRouter.route('/:apiName')
    .get(function(req, res) {
        fs.readFile(__dirname + '/data/theme.json', 'utf8', function(err, data) {
            if (err) throw err
            var data = JSON.parse(data)
            if (data[req.params.apiName]) {
                res.json(data[req.params.apiName])
            } else {
                res.send('no such api name')
            }
        })
    })
app.use('/api', appRouter)


//指定启动服务器到哪个文件夹，我这边指的是dist文件夹
app.use(express.static('../dist'));
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/api', function(req, res) {
    res.send('Hello World!');
})

app.get('/api/user/infors', function(req, res) {
    res.json(userData);

})

app.get('/api/user/menulsit', function(req, res) {
    res.json(menuData)
})

app.get('/api/user/hotMenu', function(req, res) {
    res.json(businessData)
})

app.get('/api/chart/aqi', function(req, res) {
    fs.readFile(__dirname + '/data/aqi-beijing.json', 'utf8', function(err, data) {
        if (err) throw err
        var data = JSON.parse(data)
        res.json(data)
    })
})

app.post('/api/testUser', urlencodedParser, function(req, res) {
    var obj = {
            //自定义变量存放前端请求的数据
            username: req.body.username,
            password: req.body.password
        }
        //1.通过用户名查用户
    var dataBaseUserInfo = {
            username: 'admin',
            password: 'abcd1234'
        }
        //2.比较数据库中的用户密码和 传过来的密码
    if (obj.username == dataBaseUserInfo.username && obj.password == dataBaseUserInfo.password) {
        res.send('登录成功');
    }
    res.status(401)
        //console.log(obj); //这里后台打印出来的就是{ username: undefined, password: undefined }
        //如果是res.send('post')则前端能收到'post'字符串
    res.send('登录失败');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found')
    err.status = 404
    next(err)
})

// error handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    console.log(err)
    res.send(err.message)
})


//监听端口为3000
var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
})