/**
 * 微信网页授权相关接口
 * create By Jam 2019-05-25 17:39
 */
var requester = require('request');
var authParams = {}
var auth = function (options) {
    //基础设置与定义
    //设置当前的认证参数
    setCurAuthParam(this, options)

    //函数定义
    //根据code获取access_token
    this.getAccessToken = async (code) => {
        if (!this.curAuth.accessTokenPkg || !this.curAuth.accessTokenPkg.access_token) {
            await getAccessToken(this, code)
        }
        if (!this.curAuth.accessTokenPkg.access_token) {
            throw Error(`[${this.curAuth.accessTokenPkg.errcode}]${this.curAuth.accessTokenPkg.errmsg}`)
        }
    }
    //根据code获取用户信息
    this.getUserInfoByCode = async (code) => {
        await this.getAccessToken(code)
        return await getUserInfoByCode(this, code)
    }
    this.show = () => {
        console.log(this.curAuth)
    }
}

//设置当前的认证参数
var setCurAuthParam = function (scope, options) {
    if (!authParams[options.appID]) {
        authParams[options.appID] = {
            appID: options.appID,
            appSecret: options.appSecret
        }
    }
    scope.curAuth = authParams[options.appID]
}

//根据code获取access_token
var getAccessToken = function (scope, code) {
    return new Promise((su, rj) => {
        requester({
            url: `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${scope.curAuth.appID}&secret=${scope.curAuth.appSecret}&code=${code}&grant_type=authorization_code`,
            method: 'GET'
        }, function (err, response, body) {
            scope.curAuth.accessTokenPkg =JSON.parse(body)
            su(body)
        })
    })
}

//根据code获取用户信息
var getUserInfoByCode = function (scope, code) {
    return new Promise(async (su, rj) => {
        requester({
            url: `https://api.weixin.qq.com/sns/userinfo?access_token=${scope.curAuth.accessTokenPkg.access_token}&openid=${scope.curAuth.accessTokenPkg.openid}&lang=zh_CN`,
            method: 'GET',

        }, function (err, response, body) {

            su(JSON.parse(body))
        })
    })
}

module.exports = auth