var getUrlParameter = require('./util').getUrlParameter;
var feOpen = require('./feOpen');
var openFormat = require('./openFormat').openFormat;
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
 * @param {string} universalUrl - unitersal地址
 * @param {string | string[]} downloadUrl - 下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面
 * @param {string | function} appFlag - app UA判断标识
 * @param {object} callback - 回调对象
 * @param {wakeupCallback} callback.onStart -
 * @param {wakeupCallback} callback.onEnd -
 * @param {wakeupCallback} callback.onSuccess -
 * @param {wakeupCallback} callback.onFail  -
 * @param {wakeupCallback} callback.onWeChat -当前环境是微信
 */
function feOpenWeb(schema, intentData, universalUrl, downloadUrl, appFlag, callback) {
    this.version="0.1.1";
    var urls = openFormat(schema, downloadUrl, intentData, universalUrl);
    var config = {
        isApp: false,
        autoOpen: false, //是否自动打开
        schema: urls.schema,
        universalUrl: urls.universalUrl, //ios 9 universal url
        intent: urls.intent, //android intent地址
        downloadUrl: urls.downloadUrl, //下载地址
        callback: {
            onStart: callback && callback.onStart ? callback.onStart : null,
            onEnd: callback && callback.onEnd ? callback.onEnd : null,
            onSuccess: callback && callback.onSuccess ? callback.onSuccess : null,
            onFail: callback && callback.onFail ? callback.onFail : null,
            onWeChat:callback && callback.onWeChat ? callback.onWeChat : null,
        }
    };

    feOpen.call(this, config);

    function _parseUrlQueryConfig() {
        //解析url query，生成配置
        var isAutoOpen = getUrlParameter('auto');
        isAutoOpen = isAutoOpen === '' ? '' : (isAutoOpen === 'true' || isAutoOpen === '1') ? true : false;
        return {
            auto: isAutoOpen
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
        window.addEventListener('click', function(e) {
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
        this.config.isApp = _isAPP();
        /*arguments.callee.prototype.constructor.prototype.area(); //子类里调用父方法area
        arguments.callee.prototype.area();//子类里调用重载方法area*/
        _initElementsEvent.call(this);
    }
    _init.call(this, config);
}
feOpenWeb.prototype = Object.create(feOpen.prototype);
feOpenWeb.prototype.constructor = feOpenWeb;

function _init(schema, intentData, universalUrl, downloadUrl, appFlag, callback) {
    return new feOpenWeb(schema, intentData, universalUrl, downloadUrl, appFlag, callback);
}
/**
 * 初始化feOpenWeb，new feOpenWeb
 * @module init
 * @see {@link feOpenWeb}
 * @returns {feOpenWeb}
 */
module.exports.init = _init;