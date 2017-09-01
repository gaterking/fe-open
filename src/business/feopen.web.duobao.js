var getUrlParameter = require('../util').getUrlParameter;
var feOpenWeb = require('../../src/index');

function createSchema(moduleTarget) {
    var s = moduleTarget.split('://');
    var schema = encodeURIComponent('go?module=index');
    if (s[0] === 'http' || s[0] === 'https') {
        schema = encodeURIComponent("webview?url=") + encodeURIComponent(s);
    } else if (s[0] === 'duobaohkg' && s, length > 0) {
        schema = encodeURIComponent(s[1]);
    }
    return schema;
}

function feOpenDuobao(moduleTarget) {
    moduleTarget = moduleTarget ? moduleTarget : '';
    var schema = createSchema(moduleTarget); //默认模块schema
    var donwloadUrl = 'https://app.henkuaigou.com/applinks/download.htm';
    var openWeb;

    function _init() {
        openWeb = feOpenWeb.init({
            protocal: 'duobaohkg://',
            value: schema
        }, {
            host: 'duobao',
            package: 'com.henkuaigou.kuaiduobao',
            schema: schema,
            fallbackUrl: ''
        }, 
        'https://twitter.com',
        donwloadUrl, 
        'duobaohkg', 
        {
            onStart: function() {
                //console.log('start:' + Date());
            },
            onEnd: function() {
                //console.log('end:' + Date());
            },
            onSuccess: function() {
                //console.log('success:' + Date());
            },
            onFail: function() {
                //console.log('fail:' + Date());
            },
            onWeChat:function(){
                console.log('wechat show download');
            }
        });
        openWeb.start();
    }

    _init.call(this);
}

var feOpenDuobaoInstance;

function init(moduleTarget) {
    if (!feOpenDuobaoInstance) {
        feOpenDuobaoInstance = new feOpenDuobao(moduleTarget);
    }
    return feOpenDuobaoInstance;
}

module.exports.init = init;