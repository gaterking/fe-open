var getUrlParameter = require('../util').getUrlParameter;
var feOpenWeb = require('../../src/index');
var browserOpenTips = require('./browserOpenTips');
var f5jpg = require('./img/f5.jpg');
var f6jpg = require('./img/f6.jpg');
var f7jpg = require('./img/f7.jpg');
var f52weibojpg = require('./img/f52_weibo.jpg');
function feOpen404(openOption, isAlpha) {
    var defaultOption = Object.assign({
        protocal: 'oldbirdlottery',
        schema: '',
        deepLink: ['https://a.iwincaipiao.com/h1'],
        downloadUrl: 'https://a.iwincaipiao.com/h1',
        fallbackUrl: 'https://a.iwincaipiao.com/h1',
        appFlag: 'ycp'
    }, openOption);
    defaultOption.onNotSupport = function(action, browser) {
        var wakeupTmplDom = document.getElementById('feopen-tmpl-wakeup');
        var downloadTmplDom = document.getElementById('feopen-tmpl-download');
        switch (action) {
            case 'wakeup':
            case 'download':
                if (wakeupTmplDom) {
                    browserOpenTips.open('#feopen-tmpl-wakeup');
                } else if (downloadTmplDom) {
                    browserOpenTips.open('#feopen-tmpl-download');
                } else {
                    var img_0 = (browser === 'WeChat' ? f5jpg : (browser === 'Weibo') ? f52weibojpg : '');
                    browserOpenTips.open('<div class="feopen-close">' +
                        img_0 === '' ? '' : '<img src="' + img_0 + '" style="width:100%;display: block;" />' +
                        '<img src="' + f6jpg + '" style="width:100%;display: block;"/>' +
                        '<img src="' + f7jpg + '" style="width:100%;display: block;"/></div>');
                }
                break;
        }
    };
    defaultOption.onFail = function() {
        openWeb.download();
    };
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
                onNotSupport: defaultOption.onNotSupport,
                onFail: defaultOption.onFail
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