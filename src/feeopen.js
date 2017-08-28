var env = require('./env');
/**
 * fee-open
 */
function feeOpen(config, ua) {
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
                    //唤醒失败，如果是chrome，触发intent
                    if (currentEnv.isChrome) {
                        //http://echizen.github.io/tech/2015/02-23-map-api-for-web-page
                    }
                    if (_this.config.downloadUrl && _this.config.downloadUrl !== '') {
                        _this.download(_this.config.downloadUrl); //APP下载页
                    }
                } else {
                    //唤醒成功
                    if (_this.config.callback.onSuccess && typeof _this.config.callback.onSuccess === 'function') {
                        _this.config.callback.onSuccess();
                    }
                }
            }, 2000);
        }
        /*
        document.addEventListener('visibilitychange webkitvisibilitychange',function(){
            var tag = document.hidden || document.webkitHidden;
            tag ? clearTimeout(timer):'';
          })
          
          window.onpagehide = function(){
            clearTimeout(timer);
          }
        */
    }

    function openByLocation(url) {
        if (window) {
            window.location.href = url;
        }
    }

    this.download = function(url){
        if(url || this.config.downloadUrl){
            window.location.href = (url || this.config.downloadUrl); //APP下载页
        }
    };

    this.open = function(urls) {
        if (this.config.isApp) //已经在APP里面，无需打开
            return false;
        if (this.config.callback.onStart && typeof this.config.callback.onStart === 'function') {
            this.config.callback.onStart();
        }
        if (currentEnv.isIOS && currentEnv.osMVer >= 9) {
            openByLocation.call(this,urls && urls.universalUrl ? urls.universalUrl : this.config.universalUrl);
        } else if (currentEnv.isAndroid && currentEnv.isChrome) {
            //Android + Chrome = intent
            //在Android Chrome浏览器中，版本号在chrome 25+的版本不在支持通过传统schema的方法唤醒App，比如通过设置window.location = "xxxx://login"将无法唤醒本地客户端。需要通过Android Intent 来唤醒APP
            openByLocation.call(this, urls && urls.intent ? urls.intent : this.config.intent);
        } else {
            openByIframe.call(this, (urls && urls.schema ? urls.schema : this.config.schema));
        }
        if (this.config.callback.onEnd && typeof this.config.callback.onEnd === 'function') {
            this.config.callback.onEnd();
        }
    };

    this.start = function() {
        if (this.config.auto) {
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

feeOpen.prototype.config = {
    isApp: false,
    auto: false, //是否自动打开
    schema: '',
    universalUrl: '', //ios 9 universal url
    intent: '', //android intent地址
    downloadUrl: '', //下载地址
    callback: {
        onStart: function() {},
        onEnd: function() {},
        onSuccess: function() {},
        onFail: function() {}
    }
};

module.exports = feeOpen;