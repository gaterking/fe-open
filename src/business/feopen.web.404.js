var getUrlParameter = require('../util').getUrlParameter;
var feOpenWeb = require('../../src/index');

function createSchema(moduleTarget) {
    var s = moduleTarget.split('://');
    var schema = encodeURIComponent('');
    if (s[0] === 'http' || s[0] === 'https') {
        schema = encodeURIComponent("webview?url=") + encodeURIComponent(s);
    } else if (s[0] === 'oldbirdlottery' && s.length > 0) {
        schema = encodeURIComponent(s[1]);
    }
    return schema;
}

function feOpen404(moduleTarget, protocol) {
    moduleTarget = moduleTarget ? moduleTarget : '';
    var schema = createSchema(moduleTarget); //默认模块schema
    var donwloadUrl = 'https://app.henkuaigou.com/applinks/download.htm';
    var openWeb;

    function _popWeChat() {

    }

    function _init() {
        openWeb = feOpenWeb.init({
                protocal: (protocol || 'oldbirdlottery') + '://',
                value: schema
            }, {
                //intent://tkrkj/#Intent;scheme=oldbirdlottery://login;package=com.iwincaipiao;S.browser_fallback_url=https%3A%2F%2Fbaidu.com;end
                //intent://tkrkj/#Intent;scheme=oldbirdlottery%3A%2F%2Flogin;package=com.iwincaipiao;S.browser_fallback_url=https%3A%2F%2Fwww.baidu.com;end"
                host: 'tkrkj',
                package: 'com.iwincaipiao' + '.alpha',
                schema: 'oldbirdlottery://' + schema,
                fallbackUrl: 'https://baidu.com'
            },
            '',
            donwloadUrl,
            'duobaohkg', {
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
                onWeChat: function() {
                    document.getElementById('wechat').style.dosplay = 'block';
                }
            });
        openWeb.start();
    }

    _init.call(this);
}

var feOpen404Instance;

function init(moduleTarget, protocol) {
    if (!feOpen404Instance) {
        feOpen404Instance = new feOpen404(moduleTarget, protocol);
    }
    return feOpen404Instance;
}

module.exports.init = init;