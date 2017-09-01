var uaParser = require('../src/uaParser.js');


test('ua OS IOS',()=>{
    var ua = [
        ["Mozilla/5.0 (iPad; CPU OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53",7,'7.0'],
        ["Mozilla/5.0 (iPhone; CPU iPhone OS 9_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13E188a Safari/601.1",9,'9.3'],
        ["Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_3 like Mac OS X) AppleWebKit/603.3.8 (KHTML, like Gecko) OPiOS/11.0.1.107866 Version/7.0 Mobile/14G60 Safari/9537.53",10,'10.3.3'],
        ["Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_1 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) OPiOS/8.0.0.78129 Mobile/11D201 Safari/9537.53",7,'7.1.1'],
        ["Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34 QQ/6.5.9.426 V1_IPH_SQ_6.5.9_1_APP_A Pixel/750 Core/UIWebView NetType/4G Mem/252",9,'9.3.3'],
        ["Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_2 like Mac OS X; en-US) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/13F69 UCBrowser/10.7.3.808 Mobile",9,'9.3.2']
    ]
    let uap;
    ua.forEach(u=>{
        uap = new uaParser(u[0]);
        expect(uap.os.name).toBe('ios');
        expect(uap.os.ver).toBe(u[2]);
        expect(uap.os.mver).toBe(u[1]);
    });
});


test('ua OS Android',()=>{
    var ua = [
        ["Mozilla/5.0 (Linux; U; Android 4.1.2; en-us; LGMS769 Build/JZO54K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",4,'4.1.2'],
        ["Mozilla/5.0 (Linux; U; Android 4.3; en-us; Lenovo K910L/JSS15Q) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.3 Mobile Safari/534.30",4,'4.3'],
        ["Mozilla/5.0 (Linux; Android 5.1.1; D5803 Build/23.4.A.0.546) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.133 Mobile Safari/537.36",5,'5.1.1'],
        ["Mozilla/5.0 (Linux; U; Android 4.2.2; en-US; Micromax A102 Build/MicromaxA102) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 UCBrowser/11.1.0.882 U3/0.8.0 Mobile Safari/534.300",4,'4.2.2']
    ]
    let uap;
    ua.forEach(u=>{
        uap = new uaParser(u[0]);
        expect(uap.os.name).toBe('android');
        expect(uap.os.ver).toBe(u[2]);
        expect(uap.os.mver).toBe(u[1]);
    });
});

test('ua browser IOS safari',()=>{
    var ua = [
        ["Mozilla/5.0 (iPhone; CPU iPhone OS 8_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B411 Safari/600.1.4",8,'8.0'],
        ["Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",9,"9.0"],
        ["Mozilla/5.0 (IPhone OS; U; en) AppleWebKit/534.1+ (KHTML, Like Gecko) Version/9.6.0.141 Mobile Safari/534.1+ UNTRUSTED/1.0",9,"9.6.0.141"]
    ]
    let uap;
    ua.forEach(u=>{
        uap = new uaParser(u[0]);
        expect(uap.browser.name).toBe('Mobile Safari');
        expect(uap.browser.ver).toBe(u[2]);
        expect(uap.browser.mver).toBe(u[1]);
    });
});


test('ua browser Android',()=>{
    var ua = [
        ["Android/5.0 (Linux; U; Android 4.2; en-gb; GT-P1000 Build/ICECREAM) AppleWebKit/633.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/633.1",5,'5.0'],
        ["Mozilla/5.0 (Linux; U; Android 4.1.1; zh-cn; SCH-N719 Build/JRO03C) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",4,'4.0'],
        ["Mozilla/5.0 (Linux; U; Android 4.4.4; zh-cn; M351 Build/KTU84P) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",4,'4.0'],
        ["Mozilla/5.0 (Linux; U; Android 4.0.4; zh-cn; HTC S720e Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",4,'4.0']
    ]
    let uap;
    ua.forEach(u=>{
        uap = new uaParser(u[0]);
        expect(uap.browser.name).toBe('Android Browser');
        expect(uap.browser.ver).toBe(u[2]);
        expect(uap.browser.mver).toBe(u[1]);
    });
});

test('ua browser MIUI',()=>{
    
    var ua = [
        ["Mozilla/5.0 (Linux; U; Android 6.0.1; zh-cn; MI NOTE LTE Build/MMB29M) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.146 Mobile Safari/537.36 XiaoMi/MiuiBrowser/8.8.7",8,'8.8.7'],
        ["Mozilla/5.0 (Linux; U; Android 6.0.1; zh-cn; MI 5s Build/MMB29M) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.146 Mobile Safari/537.36 XiaoMi/MiuiBrowser/8.8.5",8,'8.8.5']
    ]
    let uap;
    ua.forEach(u=>{
        uap = new uaParser(u[0]);
        expect(uap.browser.name).toBe('MIUI Browser');
        expect(uap.browser.ver).toBe(u[2]);
        expect(uap.browser.mver).toBe(u[1]);
    });
});


test('ua browser Chrome',()=>{
    
    var ua = [
        ["Mozilla/5.0 (Linux; U; Android-4.0.3; en-us; Galaxy Nexus Build/IML74K) AppleWebKit/535.7 (KHTML, like Gecko) CrMo/16.0.912.75 Mobile Safari/535.7",16,'16.0.912.75'],
        ["Mozilla/5.0 (Linux; Android 4.1.2; Xperia Tipo Build/JZO54K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Mobile Safari/537.36",56,'56.0.2924.87']
    ]
    let uap;
    ua.forEach(u=>{
        uap = new uaParser(u[0]);
        expect(uap.browser.name).toBe('Chrome');
        expect(uap.browser.ver).toBe(u[2]);
        expect(uap.browser.mver).toBe(u[1]);
    });
});

test('ua Weibo',()=>{
    var ua = [
        ["Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_3 like Mac OS X) AppleWebKit/603.3.8 (KHTML, like Gecko) Mobile/14G60 Weibo (iPhone7,2__weibo__7.8.1__iphone__os10.3.3)",7,'7.8.1']
    ]
    let uap;
    ua.forEach(u=>{
        uap = new uaParser(u[0]);
        expect(uap.browser.name).toBe('Weibo');
    });
});

test('ua WeChat',()=>{
    var ua = [
        ["Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_3 like Mac OS X) AppleWebKit/603.3.8 (KHTML, like Gecko) Mobile/14G60 MicroMessenger/6.5.14 NetType/WIFI Language/zh_CN",6,'6.5.14']
    ]
    let uap;
    ua.forEach(u=>{
        uap = new uaParser(u[0]);
        expect(uap.browser.name).toBe('WeChat');
        expect(uap.browser.ver).toBe(u[2]);
        expect(uap.browser.mver).toBe(u[1]);
    });
});

test('ua samsung browser',()=>{
    var ua = [
        ["Mozilla/5.0 (Linux; Android 6.0.1; SAMSUNG SM-N9108V Build/MMB29M) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/4.0 Chrome/44.0.2403.133 Mobile Safari/537.36",4,'4.0']
    ]
    let uap;
    ua.forEach(u=>{
        debugger;
        uap = new uaParser(u[0]);
        expect(uap.browser.name).toBe('Samsung Browser');
        expect(uap.browser.ver).toBe(u[2]);
        expect(uap.browser.mver).toBe(u[1]);
    });
});