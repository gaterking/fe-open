var getUrlParameter = require('../util').getUrlParameter;
var feOpenWeb = require('../../src/index');

function feOpenDuobao(openOption) {
    var defaultOption = Object.assign({
        protocal: 'duobaohkg',
        schema: '',
        deepLink: ['https://twitter.com'],
        downloadUrl: 'https://app.henkuaigou.com/applinks/download.htm',
        fallbackUrl: 'https://twitter.com',
        appFlag: 'duobaohkg',
        onNotSupport: function() {
            document.getElementById('wechat').style.dosplay = 'block';
        },
        onFail: function() {
            //openWeb.download();
        }
    }, openOption);
    var openWeb;

    function _init() {
        openWeb = feOpenWeb.init({
                protocal: defaultOption.protocal + '://',
                value: defaultOption.schema
            }, null,
            defaultOption.deepLink,
            defaultOption.downloadUrl,
            defaultOption.appFlag, {
                onNotSupport: defaultOption.onNotSupport,
                onFail: defaultOption.onFail
            }
        );
        openWeb.start();
    }

    _init.call(this);
}

var feOpenDuobaoInstance;

function init(openOption) {
    if (!feOpenDuobaoInstance) {
        feOpenDuobaoInstance = new feOpenDuobao(openOption);
    }
    return feOpenDuobaoInstance;
}

module.exports.init = init;