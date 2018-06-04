function _getMethod(currentEnv, hasUniversalUrl, hasAppLink, hasIntent, isFromAutoOpen) {
    var method = isFromAutoOpen ? 'sl' : ''; //如果是自动打开，默认使用schema location方式，否则使用schema iframe方式
    if (!isFromAutoOpen && currentEnv.isIOS && currentEnv.osMVer >= 9 && hasUniversalUrl) {
        method = 'u';
    } else if (!isFromAutoOpen && currentEnv.isAndroid && currentEnv.osMVer >= 6 && hasAppLink) {
        method = 'a';
    } else if (currentEnv.isAndroid && hasIntent && (currentEnv.isChrome)) {
        // 部分Android使用intent
        // 三星 6.0，支持intent，不支持iframe src schema
        method = 'i';
    }
    return method;
}
module.exports.getMethod = _getMethod;