var auth=require("./auth")
var jsapi=function(options){
   this.auth=new auth(options)

    this.show=function(){
        console.log(jsapiParams)
    }
}
/* 
options:
    appID:开发者ID,
    appSecret:开发者密码
*/
module.exports =jsapi