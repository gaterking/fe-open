var env = require('./env');
var wakeupMethods = require('./wakeupMethods');
/**
 * 检查iframe方式是否成功唤醒
 * 
 * @param {callback} cb 
 */
function checkOpen(cb){
    var _clickTime = +(new Date());
    function check(elsTime) {
        if ( elsTime > 3000 || document.hidden || document.webkitHidden) {
            cb(1);
        } else {
            cb(0);
        }
    }
    //启动间隔20ms运行的定时器，并检测累计消耗时间是否超过3000ms，超过则结束
    var _count = 0, intHandle;
    intHandle = setInterval(function(){
        _count++;        
        var elsTime = +(new Date()) - _clickTime;
        if (_count>=100 || elsTime > 3000 ) {
            clearInterval(intHandle);
            check(elsTime);
        }
    }, 20);
}
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
            checkOpen(function(opened){
                if (!opened) {
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
            });
            setTimeout(function() {
                document.body.removeChild(ifa);
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
     * 调试日志
     * @private
     * @param {string} str -需要输出的日志
     */
    this._debugLog = function(str) {
        if (this.config.debug) {
            console.log(str);
        }
    };
    /**
     * 手动执行唤醒
     * @param {object} urls -唤醒参数，指定后本次唤醒替换初始化配置
     * @param {string} urls.universalUrl - IOS 9 Universal Url
     * @param {string} urls.appLink - Android 6 app link
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
        var appLink = urls && urls.appLink || this.config.appLink;
        var intent = urls && urls.intent || this.config.intent;
        var schema = urls && urls.schema || this.config.schema;
        this._debugLog(universalUrl);
        this._debugLog(appLink);
        this._debugLog(intent);
        this._debugLog(schema);
        if (currentEnv.isWeChat) {
            //微信端，不进行open，直接回调
            this._debugLog('WeChat');
            if (this.config.callback.onWeChat && typeof this.config.callback.onWeChat === 'function') {
                this.config.callback.onWeChat();
            }
            return false;
        }
        var isWakeUpIng = false;
        
        var method = wakeupMethods.getMethod(currentEnv, universalUrl !== '', appLink !== '', intent);
        if (method === 'u') {
            this._debugLog('universal url');
            openByLocation.call(this, universalUrl);
            isWakeUpIng = true;
        }

        if (method === 'a') {
            this._debugLog('app link');
            openByLocation.call(this, appLink);
            isWakeUpIng = true;
        }

        if (method === 'i') {
            this._debugLog('intent');
            openByLocation.call(this, intent);
            isWakeUpIng = true;
        }
        if (!isWakeUpIng) {
            //openByLocation.call(this, schema);
            this._debugLog('schema');
            openByIframe.call(this, schema);
        }
    };

    /**
     * start
     * 执行open库，在初始化之后调用
     * @param {boolean} open -是否自动打开，如果未配置，则自动读取url参数的auto属性
     */
    this.start = function(open) {
        if (open || (open !== false && this.config.autoOpen)) {
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
 * @property {string|string[]} downloadUrl 下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面
 * @property {object} callback - 回调对象
 * @property {wakeupCallback} callback.onStart -
 * @property {wakeupCallback} callback.onEnd -
 * @property {wakeupCallback} callback.onSuccess -该回调在QQ、UC等iframe打开时会以为弹窗而导致失效
 * @property {wakeupCallback} callback.onFail  - 参考onSuccess
 * @property {wakeupCallback} callback.onWeChat  -
 */
feOpen.prototype.config = {
    isApp: false,
    autoOpen: false, //是否自动打开
    schema: '',
    universalUrl: '', //IOS Universal url
    appLink: '', //Android APP Link
    intent: '', //android intent地址
    downloadUrl: [], //下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面
    callback: {
        onStart: function() {},
        onEnd: function() {},
        onSuccess: function() {},
        onFail: function() {}
    },
    debug: false
};

/**
 * feOpen
 * @module feOpen
 * @see {@link feOpen}
 * @returns {feOpen}
 */
module.exports = feOpen;