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

function feeOpenDuobao(moduleTarget) {
    var schema = createSchema(moduleTarget); //默认模块schema
    var donwloadUrl = 'https://app.henkuaigou.com/applinks/download.htm';
    var sFrom = getUrlParameter('sFrom') || 'oneduobaoshipei';
    var wPrefix = getUrlParameter('wprefix') || 1;
    var schemaUrl = 'duobaohkg://webview?url='+ encodeURIComponent(top.location.href) || 'duobaohkg://http%3A%2F%2Fm.henkuaigou.com';
    

    var flow = new feeOpenWeb({
        universalUrlPrefix: '',
        downloadUrl: donwloadUrl + '?schema=' + schema + '&from=' + sFrom + '&wprefix=' + wPrefix,//落地页
        schemaPrefix: '',
        appFlag: 'duobaoApp'
    });

    function _init() {

    }
    this.open = function(moduleName) {

    };
    _init.call(this);
}

module.exports.init = init;