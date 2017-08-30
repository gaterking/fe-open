var openFormat = require('../src/openFormat.js').openFormat;

afterEach(() => {
    location.search = '';
});

test('openFormat use url query params', () => {
    location.search = '?from=zhiyou18&wprefix=1&auto=false&template=1&schema=webview%3furl%3dhttps%253a%252f%252fm.fastduobao.com%252fhd%252foneact%252f167%252f%253ffrom%253dzhiyou18';
    var openUrl = openFormat({
        protocal: 'duobaohkg://',
        value: ''
    }, '', {
        host: 'duobao',
        package: 'com.henkuaigou.kuaiduobao'
    });
    expect(openUrl.schema.toLowerCase()).toBe('duobaohkg://webview%3furl%3dhttps%253a%252f%252fm.fastduobao.com%252fhd%252foneact%252f167%252f%253ffrom%253dzhiyou18'.toLowerCase());
    expect(openUrl.universalUrl.toLowerCase()).toBe('');
    expect(openUrl.intent.toLowerCase()).toBe('intent://duobao/#Intent;scheme=webview%3furl%3dhttps%253a%252f%252fm.fastduobao.com%252fhd%252foneact%252f167%252f%253ffrom%253dzhiyou18;package=com.henkuaigou.kuaiduobao;end'.toLowerCase());
    expect(openUrl.downloadUrl.toLowerCase()).toBe('');
});


test('openFormat use custom schema', () => {
    var openUrl = openFormat({
        protocal: 'duobaohkg://',
        value: 'go?module=index'
    }, 'https://m.163.com', {
        host: 'duobao',
        package: 'com.henkuaigou.kuaiduobao',
        fallbackUrl: 'https://www.163.com'
    }, 'https://developer.apple.com/library/content/documentation/General/Conceptual/AppSearch/UniversalLinks.html');
    expect(openUrl.schema.toLowerCase()).toBe('duobaohkg://go%3Fmodule%3Dindex'.toLowerCase());
    expect(openUrl.universalUrl).toBe('https://developer.apple.com/library/content/documentation/General/Conceptual/AppSearch/UniversalLinks.html');
    expect(openUrl.intent.toLowerCase()).toBe('intent://duobao/#Intent;scheme=go%3Fmodule%3Dindex;package=com.henkuaigou.kuaiduobao;S.browser_fallback_url=https%3a%2f%2fwww.163.com;end'.toLowerCase());
    expect(openUrl.downloadUrl).toBe('https://m.163.com');
});