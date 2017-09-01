function _getMethod(currentEnv, hasUniversalUrl, hasAppLink, hasIntent) {
    var method = '';
    if (currentEnv.isIOS && currentEnv.osMVer >= 9 && hasUniversalUrl) {
        method = 'u';
    }

    if (currentEnv.isAndroid && currentEnv.osMVer >= 6 && hasAppLink) {
        method = 'a';
    }

    if (currentEnv.isAndroid && hasIntent && !currentEnv.isUC && !currentEnv.isQQ && !currentEnv.isLieBao) {
        //Android 优先使用intent，除了UC和QQ
        method = 'i';
    }
    return method;
}
module.exports.getMethod = _getMethod;