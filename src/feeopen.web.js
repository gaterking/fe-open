var getUrlParameter = require('./util').getUrlParameter;
var feeOpen = require('./index');
/**
 * 🏊应用于业务的fee-open库,通过url参数或配置初始化fee-open库
 * @param {Object} config - 初始化配置.
 * @param {string} config.universalUrlPrefix
 * @param {string} config.downloadUrl
 * @param {string} config.schemaPrefix
 * @param {string | function} config.appFlag
 */
function feeOpenWeb(config) {
    if (!config) config = {};
    feeOpen.call(this, {});

    function _parseUrlQueryConfig() {
        //解析url query，生成配置
        var isAutoOpen = getUrlParameter('open');
        isAutoOpen = isAutoOpen === '' ? '' : (isAutoOpen === 'true' || isAutoOpen === '1') ? true : false;
        return {
            auto: isAutoOpen
        };
    };

    function _isAPP() {
        if (typeof config.appFlag === 'string') {
            //根据UA关键字判断
            return config.appFlag!=='' && window.navigator.userAgent.indexOf(config.appFlag)!==1;
        }else if(typeof config.appFlag === 'function'){
            //根据自定义函数判断
            return config.appFlag();
        }else{
            return false;
        }
    }

    function _init(config) {
        var queryConfig = _parseUrlQueryConfig();
        this.config.auto = queryConfig.auto && typeof queryConfig.auto === 'boolean' ? queryConfig.auto : this.config.auto;
        this.config.isApp = _isAPP();
        /*arguments.callee.prototype.constructor.prototype.area(); //子类里调用父方法area
        arguments.callee.prototype.area();//子类里调用重载方法area*/
    }
    _init.call(this, config);
}
feeOpenWeb.prototype = Object.create(feeOpen.prototype);
feeOpenWeb.prototype.constructor = feeOpenWeb;

module.exports = feeOpenWeb;