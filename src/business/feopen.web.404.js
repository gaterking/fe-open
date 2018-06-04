var getUrlParameter = require('../util').getUrlParameter;
var feOpenWeb = require('../../src/index');
var browserOpenTips = require('./browserOpenTips');

var mimgSite = 'https://mimg.iwincaipiao.com/images/ld/';
var f5jpg = mimgSite + 'popup_1_weixin.jpg'/*'./img/f5.jpg'*/;
var f6jpg = mimgSite + 'popup_2.jpg'/*'./img/f6.jpg'*/;
var f7jpg = mimgSite + 'popup_3.jpg'/*'./img/f7.jpg'*/;
var f52weibojpg = mimgSite + 'popup_1_weibo.jpg';
function feOpen404(openOption, isAlpha) {
    var defaultOption = Object.assign({
        protocal: 'oldbirdlottery',
        schema: '',
        deepLink: ['https://a.iwincaipiao.com/h1'],
        downloadUrl: 'https://m.iwincaipiao.com/client?from=testfrom&template=1',
        fallbackUrl: 'https://a.iwincaipiao.com/h1',
        appFlag: 'ycp',
        autoOpen:null,
        tlink: ''
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
                value: defaultOption.schema,
                tlink: defaultOption.tlink
            }, {
                //intent://tkrkj/#Intent;scheme=oldbirdlottery://login;package=com.iwincaipiao;S.browser_fallback_url=https%3A%2F%2Fbaidu.com;end
                //intent://category?lotteryId=1#Intent;scheme=oldbirdlottery;package=com.iwincaipiao.debug;S.browser_fallback_url=https%3A%2F%2Fa.iwincaipiao.com%2Fh1;end
                host: '',
                package: 'com.iwincaipiao' + (isAlpha ? '.alpha' : ''),
                schema: 'oldbirdlottery',
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
        openWeb.start(defaultOption.autoOpen);//启动时自动打开
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