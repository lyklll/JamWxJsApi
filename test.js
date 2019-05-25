var jsapi= require("./index")
let jsapiIn=new jsapi({
    appID:"wxbdad71699f5b2aee",
    appSecret:"69088b6d412c2c04a608b11eb11fce2d"
})
var test=async function(){
    //let a= await jsapiIn.auth.getAccessToken("code")
    let bv=await jsapiIn.auth.getUserInfoByCode("0614GsNc1O87Yw0K2XOc1JjKNc14GsNh")
   //jsapiIn.auth.show()
   console.log(bv)
   jsapiIn.auth.show()
}
test()



