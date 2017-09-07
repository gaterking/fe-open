var getUrlParameter = require('../util').getUrlParameter;
var feOpenWeb = require('../../src/index');

function feOpen404(openOption, isAlpha) {
    var defaultOption = Object.assign({
        protocal: 'oldbirdlottery',
        schema: '',
        deepLink: ['https://a.iwincaipiao.com/h1'],
        downloadUrl: 'https://a.iwincaipiao.com/h1',
        fallbackUrl: 'https://a.iwincaipiao.com/h1',
        appFlag: 'ycp',
        onWeChat: function() {
            document.getElementById('wechat').style.dosplay = 'block';
        }
    }, openOption);
    var openWeb;

    function _init() {
        openWeb = feOpenWeb.init({
                protocal: defaultOption.protocal + '://',
                value: defaultOption.schema
            }, {
                //intent://tkrkj/#Intent;scheme=oldbirdlottery://login;package=com.iwincaipiao;S.browser_fallback_url=https%3A%2F%2Fbaidu.com;end
                //intent://tkrkj/#Intent;scheme=oldbirdlottery%3A%2F%2Flogin;package=com.iwincaipiao;S.browser_fallback_url=https%3A%2F%2Fwww.baidu.com;end"
                host: 'tkrkj',
                package: 'com.iwincaipiao' + (isAlpha ? '.alpha' : ''),
                schema: 'oldbirdlottery://' + defaultOption.schema,
                fallbackUrl: defaultOption.fallbackUrl ||
                    (Array.isArray(defaultOption.donwloadUrl) ? (defaultOption.donwloadUrl[2] || defaultOption.donwloadUrl[1]) : defaultOption.donwloadUrl)
            },
            defaultOption.deepLink,
            defaultOption.downloadUrl,
            defaultOption.appFlag, {
                onWeChat: defaultOption.onWeChat
            }
        );
        openWeb.start();
    }

    _init.call(this);
}

var feOpen404Instance;

function init(openOption, isAlpha) {
    if (!feOpen404Instance) {
        feOpen404Instance = new feOpen404(openOption, isAlpha);
    }
    return feOpen404Instance;
}

module.exports.init = init;