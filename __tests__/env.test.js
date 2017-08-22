var expect = require('chai').expect;
var env = require('../src/env.js');


test('env IOS',()=>{
    var ua = [
        ["Mozilla/5.0 (iPad; CPU OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53",7,'7.0'],
        ["Mozilla/5.0 (iPhone; CPU iPhone OS 9_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13E188a Safari/601.1",9,'9.3'],
        ["Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_3 like Mac OS X) AppleWebKit/603.3.8 (KHTML, like Gecko) OPiOS/11.0.1.107866 Version/7.0 Mobile/14G60 Safari/9537.53",10,'10.3.3'],
        ["Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_1 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) OPiOS/8.0.0.78129 Mobile/11D201 Safari/9537.53",7,'7.1.1'],
        ["Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34 QQ/6.5.9.426 V1_IPH_SQ_6.5.9_1_APP_A Pixel/750 Core/UIWebView NetType/4G Mem/252",9,'9.3.3'],
        ["Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_2 like Mac OS X; en-US) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/13F69 UCBrowser/10.7.3.808 Mobile",9,'9.3.2']
    ]
    let myEnv;
    ua.forEach(u=>{
        myEnv = env.getEnv(u[0]);
        expect(myEnv.isIOS).to.equal(true);
        expect(myEnv.isAndroid).to.equal(false);
        expect(myEnv.osVer).to.equal(u[2]);
        expect(myEnv.osMVer).to.equal(u[1]);
    });
});


test('env Android',()=>{
    var ua = [
        ["Mozilla/5.0 (Linux; U; Android 4.1.2; en-us; LGMS769 Build/JZO54K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",4,'4.1.2'],
        ["Mozilla/5.0 (Linux; U; Android 4.3; en-us; Lenovo K910L/JSS15Q) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.3 Mobile Safari/534.30",4,'4.3'],
        ["Mozilla/5.0 (Linux; Android 5.1.1; D5803 Build/23.4.A.0.546) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.133 Mobile Safari/537.36",5,'5.1.1'],
        ["Mozilla/5.0 (Linux; U; Android 4.2.2; en-US; Micromax A102 Build/MicromaxA102) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 UCBrowser/11.1.0.882 U3/0.8.0 Mobile Safari/534.300",4,'4.2.2']
    ]
    let myEnv;
    ua.forEach(u=>{
        myEnv = env.getEnv(u[0]);
        expect(myEnv.isIOS).to.equal(false);
        expect(myEnv.isAndroid).to.equal(true);
        expect(myEnv.osVer).to.equal(u[2]);
        expect(myEnv.osMVer).to.equal(u[1]);
    });
});