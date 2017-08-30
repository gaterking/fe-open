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
 * @param {string} intentData.host  - 
 * @param {string} intentData.schema  - 
 * @param {string} intentData.package  -
 * @param {string} intentData.action -
 * @param {string} intentData.category -
 * @param {string} intentData.component -
 * @param {string} intentData.fallbackUrl  -
 * @param {string} universalUrl - unitersal地址
 * @returns {object} - fee-open格式url
 */
function _openFormat(schema, downloadUrl, intentData, universalUrl) {
    schema = schema?schema:{};
    downloadUrl=downloadUrl?downloadUrl:'';
    intentData=intentData?intentData:{};
    universalUrl=universalUrl?universalUrl:'';
    var schemaValue = schema.value || getUrlParameter('schema');
    var urls = {
        schema: '',
        universalUrl: '',
        intent: '',
        downloadUrl: ''
    };
    urls.schema = schema.protocal + encodeURIComponent(schemaValue);
    var intents = [];
    intents.push('intent://'+(intentData.host?intentData.host:null) + '/#Intent');
    intentData.schema || schemaValue?intents.push('scheme=' + encodeURIComponent(intentData.schema?intentData.schema:schemaValue)):null;
    intentData.package?intents.push('package=' + intentData.package):null;
    intentData.action?intents.push('action=' + intentData.action):null;
    intentData.category?intents.push('category=' + intentData.category):null;
    intentData.component?intents.push('component=' + intentData.component):null;
    intentData.fallbackUrl ? intents.push('S.browser_fallback_url=' + encodeURIComponent(intentData.fallbackUrl)) : null;
    intents.push('end')
    urls.intent = intents.join(';');
    urls.downloadUrl = downloadUrl?downloadUrl:'';
    urls.universalUrl = universalUrl?universalUrl:'';
    return urls;
}
module.exports.openFormat = _openFormat;