var getUrlParameter = require('./util').getUrlParameter;
/**
 * 格式化open库地址
 * 
 * @param {object} schema - schema定义
 * @param {string} schema.protocal - schema协议
 * @param {string} schema.value - schema值，默认值为url参数?schema=默认值
 * @param {string} webviewUrl - 默认webview url
 * @param {string} downloadUrl - 下载地址，区分当前环境的下载地址
 * @param {object} intentData  - android intent定义
 * @param {string} intentData.name  - android intent
 * @param {string} intentData.schema  - android intent
 * @param {string} intentData.package  - android intent
 * @param {string} intentData.fallbackUrl  - android intent
 * @param {string} universalUrl - unitersal地址
 * @returns {object} - fee-open格式url
 */
function _openFormat(schema, webviewUrl, downloadUrl, intentData, universalUrl) {
    var schemaValue = schema.value || getUrlParameter('schema');
    var urls = {
        schema: '',
        universalUrl: '',
        intent: '',
        downloadUrl: ''
    };
    urls.schema = schema.protocal + encodeURIComponent((schemaValue ? schemaValue : ('webview?url=') + webviewUrl));
    urls.intent = ['intent:' + intentData.name + '/#Intent;',
        'scheme=' + encodeURIComponent(intentData.schema?intentData.schema:schemaValue) + ';',
        'package=' + intentData.package + ';',
        intentData.fallbackUrl ? ('S.browser_fallback_url=' + encodeURIComponent(intentData.fallbackUrl) +';') : '',
        'end'
    ].join('');
    urls.downloadUrl = downloadUrl?downloadUrl:'';
    urls.universalUrl = universalUrl?universalUrl:'';
    return urls;
}
module.exports.openFormat = _openFormat;