var getUrlParameter = require('./util').getUrlParameter;
var feeOpen = require('./feeopen');
var openFormat = require('./openFormat').openFormat;
/**
 * 🏊应用于业务的fee-open库,通过url参数或配置初始化fee-open库
 * @param {Object} schema - schema定义
 * @param {string} schema.protocal - schema协议
 * @param {string} schema.value - schema值，默认值为url参数?schema=默认值
 * @param {object} intentData  - android intent定义
 * @param {string} intentData.name  - android intent
 * @param {string} intentData.schema  - android intent
 * @param {string} intentData.package  - android intent
 * @param {string} intentData.fallbackUrl  - android intent
 * @param {string} universalUrl - unitersal地址
 * @param {string} webviewUrl - 默认webview url
 * @param {string} downloadUrl - 下载地址，区分当前环境的下载地址
 * @param {string | function} appFlag - app UA判断标识
 */
function feeOpenWeb(schema, intentData, universalUrl, webviewUrl, downloadUrl, appFlag, callback) {
    var urls = openFormat(schema, webviewUrl, downloadUrl, intentData, universalUrl);
    var config = {
        isApp: false,
        auto: false, //是否自动打开
        schema: urls.schema,
        universalUrl: urls.universalUrl, //ios 9 universal url
        intent: urls.intent, //android intent地址
        downloadUrl: urls.downloadUrl, //下载地址
        callback: {
            onStart: callback && callback.onStart ? callback.onStart : null,
            onEnd: callback && callback.onEnd ? callback.onEnd : null,
            onSuccess: callback && callback.onSuccess ? callback.onSuccess : null,
            onFail: callback && callback.onFail ? callback.onFail : null
        }
    };

    feeOpen.call(this, config);

    function _parseUrlQueryConfig() {
        //解析url query，生成配置
        var isAutoOpen = getUrlParameter('open');
        isAutoOpen = isAutoOpen === '' ? '' : (isAutoOpen === 'true' || isAutoOpen === '1') ? true : false;
        return {
            auto: isAutoOpen
        };
    };

    /**
     * 判断是否在指定APP里面
     * 
     * @returns boolean
     */
    function _isAPP() {
        if (typeof config.appFlag === 'string') {
            //根据UA关键字判断
            return config.appFlag !== '' && window.navigator.userAgent.indexOf(config.appFlag) !== 1;
        } else if (typeof config.appFlag === 'function') {
            //根据自定义函数判断
            return config.appFlag();
        } else {
            return false;
        }
    }

    function _init(config) {
        var queryConfig = _parseUrlQueryConfig();
        this.config.auto = queryConfig.auto && typeof queryConfig.auto === 'boolean' ? queryConfig.auto : config.auto;
        this.config.isApp = _isAPP();
        /*arguments.callee.prototype.constructor.prototype.area(); //子类里调用父方法area
        arguments.callee.prototype.area();//子类里调用重载方法area*/
    }
    _init.call(this, config);
}
feeOpenWeb.prototype = Object.create(feeOpen.prototype);
feeOpenWeb.prototype.constructor = feeOpenWeb;

function _init(schema, intentData, universalUrl, webviewUrl, downloadUrl, appFlag,callback) {
    return new feeOpenWeb(schema, intentData, universalUrl, webviewUrl, downloadUrl, appFlag,callback);
}
module.exports.init = _init;