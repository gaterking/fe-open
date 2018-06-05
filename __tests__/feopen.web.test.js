var feOpenWeb;
var testConfig = {};
beforeAll(() => {
    testConfig.schema = {
        protocal: 'duobaohkg://',
        value: ''
    };
    testConfig.intentData = {
        host: 'duobao',
        package: 'com.henkuaigou.kuaiduobao',
        schema: '',
        fallbackUrl: 'https://www.163.com'
    };
    testConfig.deepLink = 'universalUrl';
    testConfig.downloadUrl = 'downloadUrl';
    testConfig.appFlag = 'duobaohkg'
});
beforeEach(() => {
    feOpenWeb = require('../src/index');
});
/**
 * @jest-environment jsdom
 */
test('url query config', () => {
    location.search = '?from=sFrom';
    var openWeb = feOpenWeb.init();
    expect(openWeb.config.autoOpen).toBe(false);

    location.search = '?from=sFrom&auto=true';
    openWeb = feOpenWeb.init();
    expect(openWeb.config.autoOpen).toBe(true);

    location.search = '?from=sFrom&auto=1';
    openWeb = feOpenWeb.init();
    expect(openWeb.config.autoOpen).toBe(true);

    location.search = '?from=sFrom&auto=false';
    openWeb = feOpenWeb.init();
    expect(openWeb.config.autoOpen).toBe(false);

    location.search = '?from=sFrom&auto=0';
    openWeb = feOpenWeb.init();
    expect(openWeb.config.autoOpen).toBe(false);
});

test('open deep link', done => {
    window.navigator.userAgent = 'Mozilla/5.0 (Linux; Android 6.0; HUAWEI VIE-AL10 Build/HUAWEIVIE-AL10) AppleWebKit/537.36(KHTML,like Gecko) Version/4.0 Mobile Safari/537.36';
    location.search = '?auto=0';
    var openWeb = feOpenWeb.init(testConfig.schema, testConfig.intentData, testConfig.deepLink, testConfig.downloadUrl, testConfig.appFlag);
    openWeb.start();
    openWeb.open();
    done();
});


test('open deep link array', done => {
    window.navigator.userAgent = 'Mozilla/5.0 (Linux; Android 6.0; HUAWEI VIE-AL10 Build/HUAWEIVIE-AL10) AppleWebKit/537.36(KHTML,like Gecko) Version/4.0 Mobile Safari/537.36';
    location.search = '?auto=0';
    var openWeb = feOpenWeb.init(testConfig.schema, testConfig.intentData, ['universal', 'deeplink'], testConfig.downloadUrl, testConfig.appFlag);
    openWeb.start();
    openWeb.open();

    openWeb = feOpenWeb.init(testConfig.schema, testConfig.intentData, ['universal'], testConfig.downloadUrl, testConfig.appFlag);
    openWeb.start();
    openWeb.open();
    expect(document.getElementsByTagName('iframe')[0].src).not.toBeUndefined();

    openWeb = feOpenWeb.init(testConfig.schema, testConfig.intentData, [], testConfig.downloadUrl, testConfig.appFlag);
    openWeb.start();
    openWeb.open();
    expect(document.getElementsByTagName('iframe')[0].src).not.toBeUndefined();

    done();
});


test('auto open above IOS 9 ', done => {
    window.navigator.userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_2 like Mac OS X; en-US) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/13F69 UCBrowser/10.7.3.808 Mobile';
    location.search = '';
    var openWeb = feOpenWeb.init(testConfig.schema, testConfig.intentData, testConfig.deepLink, testConfig.downloadUrl, testConfig.appFlag, {

    });
    openWeb.start(true);
    expect(document.getElementsByTagName('iframe')[0].src).not.toBeUndefined();
    done();
});

test('auto open below IOS 9 ', (done) => {
    navigator.userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_1 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) OPiOS/8.0.0.78129 Mobile/11D201 Safari/9537.53';
    location.search = '';
    var openWeb = feOpenWeb.init(testConfig.schema, testConfig.intentData, testConfig.deepLink, testConfig.downloadUrl, testConfig.appFlag, {
    });
    openWeb.start(true);
    expect(document.getElementsByTagName('iframe')[0].src).not.toBeUndefined();
    done();
});

test('open above IOS 9 ', done => {
    window.navigator.userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_2 like Mac OS X; en-US) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/13F69 UCBrowser/10.7.3.808 Mobile';
    location.search = '?auto=0';
    var openWeb = feOpenWeb.init(testConfig.schema, testConfig.intentData, testConfig.deepLink, testConfig.downloadUrl, testConfig.appFlag);
    openWeb.start();
    openWeb.open();
    done();
});

test('open below IOS 9 ', (done) => {
    navigator.userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_1 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) OPiOS/8.0.0.78129 Mobile/11D201 Safari/9537.53';
    location.search = '?auto=0';
    var openWeb = feOpenWeb.init(testConfig.schema, testConfig.intentData, testConfig.deepLink, testConfig.downloadUrl, testConfig.appFlag, {
        onFail: function() {
            expect(document.getElementsByTagName('iframe').length).toBe(0);
            done();
        },
        onSuccess: function() {
            expect(document.getElementsByTagName('iframe').length).toBe(0);
            done();
        }
    });
    openWeb.start();
    openWeb.open();
    expect(document.getElementsByTagName('iframe')[0].src).not.toBeUndefined();
});

test('open Android browser ', (done) => {
    navigator.userAgent = 'Mozilla/5.0 (Linux; U; Android 4.0.4; zh-cn; HTC S720e Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30';
    location.search = '?auto=0';
    var openWeb = feOpenWeb.init(testConfig.schema, testConfig.intentData, testConfig.deepLink, testConfig.downloadUrl, testConfig.appFlag, {
        onFail: function() {
            expect(document.getElementsByTagName('iframe').length).toBe(0);
            done();
        },
        onSuccess: function() {
            expect(document.getElementsByTagName('iframe').length).toBe(0);
            done();
        }
    });
    openWeb.start();
    openWeb.open();
    expect(document.getElementsByTagName('iframe')[0].src).not.toBeUndefined();
});

test('auto open chrome browser ', (done) => {
    window.navigator.userAgent = 'Mozilla/5.0 (Linux; Android 4.1.2; Xperia Tipo Build/JZO54K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Mobile Safari/537.36';
    location.search = '?auto=1';
    var openWeb = feOpenWeb.init(testConfig.schema, testConfig.intentData, testConfig.deepLink, testConfig.downloadUrl, testConfig.appFlag);
    openWeb.start();
    //expect(location.href).toBe('intent://duobao/#Intent;scheme=;package=com.henkuaigou.kuaiduobao;end');
    expect(location.replace).toHaveBeenLastCalledWith('intent://duobao#Intent;package=com.henkuaigou.kuaiduobao;end');
    done();
});

test('open chrome browser', (done) => {
    window.navigator.userAgent = 'Mozilla/5.0 (Linux; Android 4.1.2; Xperia Tipo Build/JZO54K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Mobile Safari/537.36';
    var openWeb = feOpenWeb.init(testConfig.schema, testConfig.intentData, testConfig.deepLink, testConfig.downloadUrl, testConfig.appFlag);
    openWeb.start();
    openWeb.open();
    expect(location.replace).toHaveBeenLastCalledWith('intent://duobao#Intent;package=com.henkuaigou.kuaiduobao;S.browser_fallback_url=https%3A%2F%2Fwww.163.com;end');
    done();
});

test('auto open WeChat ', (done) => {
    window.navigator.userAgent = 'mozilla/5.0 (linux; u; android 4.1.2; zh-cn; mi-one plus build/jzo54k) applewebkit/534.30 (khtml, like gecko) version/4.0 mobile safari/534.30 micromessenger/5.0.1.352';
    location.search = '?auto=1';
    var openWeb = feOpenWeb.init(testConfig.schema, testConfig.intentData, testConfig.deepLink, testConfig.downloadUrl, testConfig.appFlag, {
    });
    openWeb.start();
    done();
});