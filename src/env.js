var uaParser = require('./uaParser');

var env = {
    /**
     * 获取当前环境信息
     */

    getEnv: function(uaStr) {
        var uap = new uaParser(uaStr);
        var _env = {
            isApp: null, //是否APP
            isAndroid: uap.os.name==='android', //是否Android环境    
            isIOS: uap.os.name==='ios', //是否IOS环境
            osVer: uap.os.ver, //操作系统版本
            osMVer: uap.os.mver, //操作系统主版本
            appVer: '0', //APP版本
            browser: uap.browser.name?uap.browser.name:'', //浏览器
            browserVer: uap.browser.ver?uap.browser.ver:'0', //浏览器版本
            browserMVer: uap.browser.mver?uap.browser.mver:0, //浏览器主版本
            isWeChat: uap.browser.name? uap.browser.name==='WeChat':false,
            isChrome:  uap.browser.name? uap.browser.name==='Chrome':false,
            isMIUI:  uap.browser.name? uap.browser.name==='MIUI Browser':false,
            isWeibo: uap.browser.name? uap.browser.name==='Weibo':false,
            isUC: uap.browser.name? uap.browser.name==='UCBrowser':false,
            isQQ: uap.browser.name? uap.browser.name==='QQBrowser':false,
            isLieBao: uap.browser.name? uap.browser.name==='LieBaoFast':false,
            isSamsung:uap.browser.name? uap.browser.name==='Samsung Browser':false
        };
        return _env;
    }
}

module.exports = env;