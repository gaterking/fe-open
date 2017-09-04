function _getMethod(currentEnv, hasUniversalUrl, hasAppLink, hasIntent) {
    var method = '';
    if (currentEnv.isIOS && currentEnv.osMVer >= 9 && hasUniversalUrl) {
        method = 'u';
    }else if (currentEnv.isAndroid && currentEnv.osMVer >= 6 && hasAppLink) {
        method = 'a';
    }else if (currentEnv.isAndroid && hasIntent && (currentEnv.isMIUI || currentEnv.isChrome || currentEnv.isSamsung)) {
        //部分Android使用intent
        //三星 6.0，支持intent，不支持iframe src schema
        method = 'i';
    }
    return method;
}
module.exports.getMethod = _getMethod;