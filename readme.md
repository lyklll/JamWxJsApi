# JamWxJsApi 

微信 JsApi 后台服务汇总，Jam是我的笔名~
持续更新中

## 如何安装

> npm i jamwxjsapi --save

## 如何使用

```javascript
var jamwxjsapi= require("jamwxjsapi")
let jsapi=new jamwxjsapi({
    appID:"appID",
    appSecret:"appSecret"
})
jsapi.auth.getUserInfoByCode("code")
```

## 版本历史

### 1.1.0 

1.  增加了网页授权处理，位置：“/Lib/OAuth.js”,提供以下方法：
    + getUserInfoByCode(code) //根据code获取用户信息

### 1.0.0

初始化项目