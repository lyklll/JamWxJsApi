var OAuth=require("./Lib/OAuth")
/* 
options:
    appID:开发者ID,
    appSecret:开发者密码
*/
var jsapi=function(options){
   this.OAuth=new OAuth(options)

    this.show=function(){
        console.log(jsapiParams)
    }
}

module.exports =jsapi