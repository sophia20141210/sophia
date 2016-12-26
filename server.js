/**
 * Created by Administrator on 2016/12/8 0008.
 */
//引入 path 内置模块
var path=require('path');
//引入 express 依赖模块，用来启动静态服务器
var express=require('express');

var proxy=require('http-proxy-middleware');
/*var nodegrass=require("nodegrass");
var appID="wx3598227072ae5754";
var appSecret="63624aba6e77f90a7842ae0ea5cff522";
var sign=require("./sign");*/
//实例 express
var app=express();

app.use('/api',proxy({
    target:'http://guanjp.com:9805',
    changeOrigin:true,
    ws:true,
    cookieRewrite:true,
    pathRewrite:{
        '^/api':'/'
    }
}));
console.log(__dirname);
console.log(__filename);
//拼接物理路径，用来指定虚拟路径的访问（静态资源文件）
var viewsPath=path.join(__dirname,'views');
console.log(viewsPath);
//指定访问 页面 的路径
app.use('/',express.static(viewsPath));

//拼接物理路径，用来指定虚拟路径的访问（静态资源文件）
var publicPath=path.join(__dirname,'public');
//指定访问静态资源文件的路径
app.use('/public',express.static(publicPath));

//定义一个接口
app.get('/login',function(req,res){
    res.send('ha ha ha')
});

var sha1 = require("sha1");
//定义验证接口
app.use('/weixin', function(req, res){
    //获取get传递数据
    var obj = req.query;
    console.log("weixin", obj);
    //将数据添加到一个数组
    var arr = ["sophia", obj.timestamp, obj.nonce];
    //排序
    arr.sort();

    //拼接字符串，并进行 sha1 加密
    var str = sha1(arr.join(""));
    console.log('sha1   ', str);

    console.log('signature', obj.signature === str);
    //匹配是否是微信请求
    if( obj.signature === str){
        //成功返回 echostr 随机字符串
        res.send(obj.echostr).end();
    }else{
        res.send("验证失败").end();
    }
});

//监听我的端口16934，用来启动服务
app.listen(16934, function(){
    console.log('server run at port 16934')
});

//模块导出
module.exports=app;

//定义通过 /api 访问的请求，转发到指定路径
app.use('/api',proxy({
    target:'http://guanjp.com:9805',
    changeOrigin:true,
    ws:true,
    cookieRewrite:true,
    pathRewrite:{
        '^/api':'/'
    }
}));
// http://127.0.0.1:9888/api/index
// 替换为http://122.10.30.153:9901/index

console.log(__dirname);
console.log(__filename);
