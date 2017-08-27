var expect = require('chai').expect;
var feeOpenWeb;
var testConfig = {};
beforeAll(()=>{
    testConfig.schema = {
        protocal: 'duobaohkg://',
        value: ''
    };
    testConfig.intentData = {
        name: '//duobao',
        package: 'com.henkuaigou.kuaiduobao',
        schema:'',
        fallbackUrl:''
    };
    testConfig.universalUrl='universalUrl';
    testConfig.webviewUrl='webviewUrl';
    testConfig.downloadUrl='downloadUrl';
    testConfig.appFlag = 'duobaohkg'
});
beforeEach(() => {
    feeOpenWeb = require('../src/feeopen.web');
});
/**
 * @jest-environment jsdom
 */
test('url query config',()=>{
    location.search = '?from=sFrom';
    var openWeb = feeOpenWeb.init();
    expect(openWeb.config.auto).to.equal(false);
    
    location.search = '?from=sFrom&open=true';
    openWeb = feeOpenWeb.init();
    expect(openWeb.config.auto).to.equal(true);

    location.search = '?from=sFrom&open=1';
    openWeb = feeOpenWeb.init();
    expect(openWeb.config.auto).to.equal(true);
    
    location.search = '?from=sFrom&open=false';
    openWeb = feeOpenWeb.init();
    expect(openWeb.config.auto).to.equal(false);

    location.search = '?from=sFrom&open=0';
    openWeb = feeOpenWeb.init();
    expect(openWeb.config.auto).to.equal(false);
});

test('auto open above IOS 9 ',done=>{
    location.search = '?open=1';
    var openWeb = feeOpenWeb.init(testConfig.schema,testConfig.intentData,testConfig.universalUrl,testConfig.webviewUrl,testConfig.downloadUrl,testConfig.appFlag,{
        onFail:function(){
            expect(document.getElementsByTagName('iframe').length).to.equal(0);
            done();
        },
        onSuccess:function(){
            expect(document.getElementsByTagName('iframe').length).to.equal(0);
            done();
        }
    });
    openWeb.start();
    expect(document.getElementsByTagName('iframe')[0].src).to.equal('duobaohkg://webview%3Furl%3DwebviewUrl');
});

test('auto open below IOS 9 ',()=>{
    
});

test('auto open Androw browser ',()=>{
    
});

test('auto open chrome browser ',()=>{
    
});

test('auto open WeChat ',()=>{
    
});