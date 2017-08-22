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
            deviceVer: '0', //硬件版本
            appVer: '0', //APP版本
            browserVer: '0' //浏览器版本
        };
        return _env;
    }
}

module.exports = env;