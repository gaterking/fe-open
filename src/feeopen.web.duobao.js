var getUrlParameter = require('./util').getUrlParameter;
var feeOpenWeb = require('../src/feeopen.web');

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

function feeOpenDuobao(moduleTarget,) {
    moduleTarget= moduleTarget?moduleTarget:'';
    var schema = createSchema(moduleTarget); //默认模块schema
    var donwloadUrl = 'https://app.henkuaigou.com/applinks/download.htm';
    var openWeb;

    function _init() {
        openWeb = feeOpenWeb.init({
            name: 'duobaohkg://',
            value: schema
        }, {
            name: '//duobao',
            package: 'com.henkuaigou.kuaiduobao',
            schema: schema,
            fallbackUrl: ''
        }, '', '', donwloadUrl, 'duobaohkg');
        openWeb.start();
    }

    _init.call(this,);
}

var feeOpenDuobaoInstance;

function init(moduleTarget) {
    if (!feeOpenDuobaoInstance) {
        feeOpenDuobaoInstance = new feeOpenDuobao(moduleTarget);
    }
    return feeOpenDuobaoInstance;
}

module.exports.init = init;