var getUrlParameter = require('../util').getUrlParameter;
var feeOpenWeb = require('../../src/index');

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

function feeOpenDuobao(moduleTarget) {
    moduleTarget = moduleTarget ? moduleTarget : '';
    var schema = createSchema(moduleTarget); //默认模块schema
    var donwloadUrl = 'https://app.henkuaigou.com/applinks/download.htm';
    var openWeb;

    function _init() {
        openWeb = feeOpenWeb.init({
            protocal: 'duobaohkg://',
            value: schema
        }, {
            host: '//duobao',
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

var feeOpenDuobaoInstance;

function init(moduleTarget) {
    if (!feeOpenDuobaoInstance) {
        feeOpenDuobaoInstance = new feeOpenDuobao(moduleTarget);
    }
    return feeOpenDuobaoInstance;
}

module.exports.init = init;