var env = require('./env');
/**
 * feOpen 唤醒库核心基类，对各个移动端环境进行兼容性处理
 * @class
 */
function feOpen(config, ua) {
    var currentEnv; //当前环境变量
    function openByIframe(url) {
        var _this = this;
        if (document) {
            var openStartTime = Date.now();
            var ifa = document.createElement('iframe');
            ifa.src = url; //APP的schema协议
            ifa.style.display = 'none';
            document.body.appendChild(ifa);
            setTimeout(function() {
                document.body.removeChild(ifa);
                if (Date.now() - openStartTime <= 2500) {
                    //唤醒失败。如果唤醒成功，页面会转到后台，web的计时器会停止，返回后，时间会超过2500ms
                    if (_this.config.callback.onFail && typeof _this.config.callback.onFail === 'function') {
                        _this.config.callback.onFail();
                    }
                } else {
                    //唤醒成功
                    if (_this.config.callback.onSuccess && typeof _this.config.callback.onSuccess === 'function') {
                        _this.config.callback.onSuccess();
                    }
                }
                if (_this.config.callback.onEnd && typeof _this.config.callback.onEnd === 'function') {
                    _this.config.callback.onEnd();
                }
            }, 2000);
        }
    }

    function openByLocation(url) {
        location && location.replace(url);
    }

    /**
     * 根据当前环境获取下载地址
     * @private
     * @returns {string} 下载地址
     */
    this.getDownloadUrl = function() {
        if (Array.isArray(this.config.downloadUrl)) {
            if (currentEnv.isAndroid) {
                return this.config.downloadUrl[1] || '';
            }
            if (currentEnv.isIOS) {
                return this.config.downloadUrl[0] || '';
            }
            return '';
        } else {
            return this.config.downloadUrl;
        }
    };

    /**
     * 启动下载APP
     * @param {string} url -下载地址
     */
    this.download = function(url) {
        url = url || this.getDownloadUrl();
        if (url) {
            window.location.href = (url || this.config.downloadUrl); //APP下载页
        }
    }

    /**
     * 手动执行唤醒
     * @param {object} urls -唤醒参数，指定后本次唤醒替换初始化配置
     * @param {string} urls.universalUrl
     * @param {string} urls.intent
     * @param {string} urls.schema
     */
    this.open = function(urls) {
        if (this.config.isApp) //已经在APP里面，无需打开
            return false;
        if (this.config.callback.onStart && typeof this.config.callback.onStart === 'function') {
            this.config.callback.onStart();
        }
        var universalUrl = urls && urls.universalUrl || this.config.universalUrl;
        var intent = urls && urls.intent || this.config.intent;
        var schema = urls && urls.schema || this.config.schema;
        if (currentEnv.isWeChat) {
            //微信端，不进行open，直接回调
            if (this.config.callback.onWeChat && typeof this.config.callback.onWeChat === 'function') {
                this.config.callback.onWeChat();
            }
            return false;
        }
        if (currentEnv.isIOS && currentEnv.osMVer >= 9 && universalUrl) {
            openByLocation.call(this, universalUrl);
        } else if (currentEnv.isAndroid && currentEnv.isChrome && intent) {
            //Android + Chrome = intent
            //或者直接使用schema，通过手动href点击触发
            //在Android Chrome浏览器中，版本号在chrome 25+的版本不在支持通过传统schema的方法唤醒App，比如通过设置window.location = "xxxx://login"将无法唤醒本地客户端。需要通过Android Intent 来唤醒APP
            openByLocation.call(this, intent);
        } else {
            //openByLocation.call(this, schema);
            openByIframe.call(this, schema);
        }
    };

    /**
     * start
     * 执行open库，在初始化之后调用
     * @param {boolean} open -是否自动打开，如果未配置，则自动读取url参数的auto属性
     */
    this.start = function(open) {
        if (open || (open!==false && this.config.autoOpen)) {
            this.open();
        }
    };

    function _init(config, ua) {
        if (ua) {
            currentEnv = env.getEnv(ua);
        } else if (window && window.navigator) {
            //默认使用window.navigator.userAgent作为UA值
            currentEnv = env.getEnv(window.navigator.userAgent);
        } else {
            currentEnv = null;
        }
        this.config = config;
    }
    _init.call(this, config, ua);
}

/**
 * 配置，初始化后根据参数自动生成
 * @readonly
 * @property {boolean} isApp 是否内嵌在APP，如果为true，会自动忽略open操作
 * @property {boolean} autoOpen 是否尝试自动打开
 * @property {string} schema 完整的唤醒schema
 * @property {string|Array} downloadUrl 下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面
 * @property {object} callback - 回调对象
 * @property {wakeupCallback} callback.onStart -
 * @property {wakeupCallback} callback.onEnd -
 * @property {wakeupCallback} callback.onSuccess -
 * @property {wakeupCallback} callback.onFail  -
 * @property {wakeupCallback} callback.onWeChat  -
 */
feOpen.prototype.config = {
    isApp: false,
    autoOpen: false, //是否自动打开
    schema: '',
    universalUrl: '', //ios 9 universal url
    intent: '', //android intent地址
    downloadUrl: [], //下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面
    callback: {
        onStart: function() {},
        onEnd: function() {},
        onSuccess: function() {},
        onFail: function() {}
    }
};

/**
 * feOpen
 * @module feOpen
 * @see {@link feOpen}
 * @returns {feOpen}
 */
module.exports = feOpen;