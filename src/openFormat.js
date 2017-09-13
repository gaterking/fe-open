var getUrlParameter = require('./util').getUrlParameter;

/**
 * 格式化deepLink，string|string[]统一格式化成[]
 * 
 * @param {string|string[]} deepLink 
 */
function _formatDeepLink(deepLink) {
    var linkArray = ['', ''];
    if (deepLink && Array.isArray(deepLink)) {
        linkArray[0] = deepLink[0] ? deepLink[0] : '';
        linkArray[1] = deepLink[1] ? deepLink[1] : '';
    }
    if (deepLink && typeof deepLink === 'string') {
        linkArray = [deepLink, deepLink];
    }
    return linkArray;
}
/**
 * 格式化open库地址
 * 
 * @param {object} schema - schema定义
 * @param {string} schema.protocal - schema协议
 * @param {string} schema.value - schema值，默认值为url参数?schema=默认值
 * @param {string} webviewUrl - 默认webview url
 * @param {string} downloadUrl - 下载地址，区分当前环境的下载地址
 * @param {object} intentData  - android intent定义
 * @param {string} intentData.host  - 
 * @param {string} intentData.schema  - 
 * @param {string} intentData.package  -
 * @param {string} intentData.action -
 * @param {string} intentData.category -
 * @param {string} intentData.component -
 * @param {string} intentData.fallbackUrl  -
 * @param {string|string[]} deepLink - deep link地址
 * @returns {object} - fee-open格式url
 */
function _openFormat(schema, downloadUrl, intentData, deepLink) {
    schema = schema ? schema : {};
    downloadUrl = downloadUrl ? downloadUrl : '';
    deepLink = deepLink ? deepLink : '';
    var schemaValue = schema.value || getUrlParameter('schema');
    var urls = {
        tlink: '',
        schema: '',
        universalUrl: '',
        appLink: '',
        intent: '',
        downloadUrl: ''
    };
    urls.tlink = (typeof feopenConfig !== 'undefined' && feopenConfig.tlink) ? feopenConfig.tlink : ''; //页面同步变量，直接读取window.feopenConfig.tlink属性
    urls.schema = schema.protocal + encodeURIComponent(schemaValue);
    var intents = [];
    if (intentData) {
        intents.push('intent://' + (intentData.host ? intentData.host : null) + '/#Intent');
        intentData.schema || schemaValue ? intents.push('scheme=' + (intentData.schema ? intentData.schema : schemaValue)) : null;
        intentData.package ? intents.push('package=' + intentData.package) : null;
        intentData.action ? intents.push('action=' + intentData.action) : null;
        intentData.category ? intents.push('category=' + intentData.category) : null;
        intentData.component ? intents.push('component=' + intentData.component) : null;
        intentData.fallbackUrl ? intents.push('S.browser_fallback_url=' + encodeURIComponent(intentData.fallbackUrl)) : null;
        intents.push('end')
        urls.intent = intents.join(';');
        urls.intentWithoutFallback = urls.intent.replace(/\;S\.browser_fallback_url=((?!\;).)*/,'');
    }
    urls.downloadUrl = downloadUrl ? downloadUrl : '';
    var dlArray = _formatDeepLink(deepLink);
    urls.universalUrl = dlArray && dlArray[0] ? dlArray[0] : '';
    urls.appLink = dlArray && dlArray[1] ? dlArray[1] : '';
    return urls;
}
module.exports.openFormat = _openFormat;