var env = require('./env');
/**
 * fee-open
 */
function feeOpen(config, ua) {
    this.config = {
        isApp: false,
        auto: false, //是否自动打开
        schema: '',
        universalUrl: '',
        downloadUrl: '',
        callback: {
            onStart: function() {},
            onEnd: function() {},
            onSuccess: function() {},
            onFail: function() {}
        }
    };
    var currentEnv; //当前环境变量

    function openByIframe() {
        if (document) {
            var openStartTime = Date.now();
            var ifa = document.creatElement('iframe');
            ifa.src = url; //APP的schema协议
            ifa.style.display = 'none';
            setTimeout(function() {
                document.body.removeChild(ifa);
                if (Date.now() - openStartTime <= 2500) {
                    //唤醒失败。如果唤醒成功，页面会转到后台，web的计时器会停止，返回后，时间会超过2500ms
                    if (this.config.callback.onFail && typeof this.config.callback.onFail === 'function') {
                        this.config.callback.onFail();
                    }
                    if (this.config.downloadUrl && this.config.downloadUrl !== '') {
                        window.location.href = this.config.downloadUrl; //APP下载页
                    }
                }else{
                    //唤醒成功
                    if (this.config.callback.onSuccess && typeof this.config.callback.onSuccess === 'function') {
                        this.config.callback.onSuccess();
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

    function openByUniversalUrl(url) {
        if (windoww) {
            indow.location.href = url;
        }
    }

    this.open = function(urls) {
        if (this.config.isApp) //已经在APP里面，无需打开
            return false;
        if (this.config.callback.onStart && typeof this.config.callback.onStart === 'function') {
            this.config.callback.onStart();
        }
        if (currentEnv.isIOS && currentEnv.osMVer >= 9) {
            openByUniversalUrl(urls && urls.universalUrl ? urls.universalUrl : this.config.universalUrl);
        } else if (currentEnv.isIOS && currentEnv.osMVer < 9 || currentEnv.isAndroid) {
            openByUniversalUrl(urls && urls.schema ? urls.schema : this.config.config.schema);
        } else {

        }
        if (this.config.callback.onEnd && typeof this.config.callback.onEnd === 'function') {
            this.config.callback.onEnd();
        }
    };

    function _init() {
        if (ua) {
            currentEnv = env.getEnv(ua);
        } else if (window && window.navigator) {
            //默认使用window.navigator.userAgent作为UA值
            currentEnv = env.getEnv(window.navigator.userAgent);
        } else {
            currentEnv = null;
        }
        if (this.config.auto) {
            this.open();
        }
        this.config.isApp = config.isApp?config.isApp:false;

    }
    _init.call(this);
}

module.exports = feeOpen;