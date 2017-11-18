require('./polyfill');
var getUrlParameter = require('./util').getUrlParameter;
var feOpen = require('./feOpen');
var openFormat = require('./openFormat').openFormat;
var version = require("../package.json").version;
/**
 * 唤醒回调函数
 * @callback wakeupCallback
 */
/**
 * 应用于业务的fee-open库,通过url参数或配置初始化fee-open库
 * .feOpen, .feOpen-download，监听.feOpen, .feOpen-download的click事件，手动进行open和download操作
 * @class
 * @implements {feOpen}
 * @param {Object} schema - schema定义
 * @param {string} schema.protocal - schema协议，例如duobaohkg://
 * @param {string} schema.value - schema值
 * @param {Object} intentData  - android intent定义，自动格式成intent link，与Android intent格式一直，例如intent://send/+XXXXXXXXXXX#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end
 * @param {string} intentData.host  - HOST/URI-path
 * @param {string} intentData.schema  -
 * @param {string} intentData.package  -
 * @param {string} intentData.action -
 * @param {string} intentData.category -
 * @param {string} intentData.component -
 * @param {string} intentData.fallbackUrl  -
 * @param {string|string[]} deepLink， - deepLink，{string | string[]} - string,IOS/Android 使用相同的deeplink，Array [0]=IOS Universal,[1]=Android APP Link，如果某项为空，则该平台不使用deep link
 * @param {string | string[]} downloadUrl - 下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面
 * @param {string | function} appFlag - app UA判断标识
 * @param {object} callback - 回调对象
 * @param {wakeupCallback} callback.onStart -
 * @param {wakeupCallback} callback.onEnd -
 * @param {wakeupCallback} callback.onSuccess -该回调在QQ、UC等iframe打开时会因为弹窗而导致失效
 * @param {wakeupCallback} callback.onFail  - 参考onSuccess
 * @param {wakeupCallback} callback.onNotSupport -当前环境不支持
 */
function feOpenWeb(schema, intentData, deepLink, downloadUrl, appFlag, callback) {
    this.version = version;
    var urls = openFormat(schema, downloadUrl, intentData, deepLink);
    var config = {
        isApp: false,
        autoOpen: false, //是否自动打开
        schema: urls.schema,
        universalUrl: urls.universalUrl, //ios 9 universal url
        appLink: urls.appLink, //android 6 app link
        intent: urls.intent, //android intent地址
        intentWithoutFallback: urls.intentWithoutFallback,
        downloadUrl: urls.downloadUrl, //下载地址
        callback: {
            onStart: callback && callback.onStart ? callback.onStart : null,
            onEnd: callback && callback.onEnd ? callback.onEnd : null,
            onSuccess: callback && callback.onSuccess ? callback.onSuccess : null,
            onFail: callback && callback.onFail ? callback.onFail : null,
            onNotSupport: callback && callback.onNotSupport ? callback.onNotSupport : null,
        }
    };

    feOpen.call(this, config);
    
    this.config.tlink = urls.tlink; //同步地址，直接使用schema方式打开;

    function _parseUrlQueryConfig() {
        //解析url query，生成配置
        var isAutoOpen = getUrlParameter('auto');
        isAutoOpen = isAutoOpen === '' ? '' : (isAutoOpen === 'true' || isAutoOpen === '1') ? true : false;
        var isDebug = getUrlParameter('debug');
        isDebug = isDebug === '' ? '' : (isDebug === 'true' || isDebug === '1') ? true : false;
        var isOpened = getUrlParameter('o');
        isOpened = isOpened === '' ? '' : (isOpened === 'true' || isOpened === '1') ? true : false;
        return {
            auto: isAutoOpen,
            debug: isDebug,
            isOpened: isOpened
        };
    };

    /**
     * 判断是否在指定APP里面
     * @private
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

    /**
     * 初始化dom按钮监听事件
     * @private
     */
    function _initElementsEvent() {
        var _this = this;
        document.body.addEventListener('click', function(e) {
            var targetElement = e.target;
            if (targetElement.classList.contains('feopen')) {
                _this.open();
            }
            if (targetElement.classList.contains('feopen-download')) {
                _this.download();
            }
        }, false);
    }



    function _init(config) {
        var queryConfig = _parseUrlQueryConfig();
        this.config.autoOpen = queryConfig.auto && typeof queryConfig.auto === 'boolean' ? queryConfig.auto : config.autoOpen;
        this.config.debug = queryConfig.debug && typeof queryConfig.debug === 'boolean' ? queryConfig.debug : false;
        this.config.isOpened = queryConfig.isOpened && typeof queryConfig.isOpened === 'boolean' ? queryConfig.isOpened : false;
        this.config.isApp = _isAPP();
        /*arguments.callee.prototype.constructor.prototype.area(); //子类里调用父方法area
        arguments.callee.prototype.area();//子类里调用重载方法area*/
        _initElementsEvent.call(this);
    }
    _init.call(this, config);
}
feOpenWeb.prototype = Object.create(feOpen.prototype);
feOpenWeb.prototype.open = function(urls) {
    if (!urls && this.config.tlink) {
        //指定了tlink，优先使用tlink打开
        urls = {
            schema: this.config.tlink
        };
    }
    feOpen.prototype.open.apply(this, [urls]);
};
feOpenWeb.prototype.openAuto = function() {
    var urls = {};
    if (this.config.tlink) {
        //指定了tlink，优先使用tlink打开
        urls = {
            schema: this.config.tlink
        };
    }
    feOpen.prototype.openAuto.apply(this, [urls]);
};
feOpenWeb.prototype.constructor = feOpenWeb;

function _init(schema, intentData, deepLink, downloadUrl, appFlag, callback) {
    return new feOpenWeb(schema, intentData, deepLink, downloadUrl, appFlag, callback);
}
/**
 * 初始化feOpenWeb，new feOpenWeb
 * @module init
 * @see {@link feOpenWeb}
 * @returns {feOpenWeb}
 */
module.exports.init = _init;