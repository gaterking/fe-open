import Browser from './types/browser';
import OS from './types/os';
import {mapper, regexes} from './mapper-helper.js';

/**
 * UA解析
 */
class UaParser {
    public ua: string = '';
    public os: OS;
    public browser: Browser;

    constructor (uaStr: string) {
        this.ua = uaStr;
        this.os = this.getOS(uaStr);
        this.browser = this.getBrowser(uaStr);
    }
    /**
     * 获取操作系统版本
     */
    private getOS (uaStr: string):OS {
        let os: OS;
        mapper.rgx.call(os, uaStr, regexes.os);
        os.mver = os.ver ? parseInt(os.ver.replace(/^(\d+).*/, '$1')) : 0;
        return os;
    };

    /**
     * 获取浏览器版本
     */
    private getBrowser (uaStr: string): Browser {
        let browser: Browser;
        mapper.rgx.call(browser, uaStr, regexes.browser);
        browser.mver = browser.ver ? parseInt(browser.ver.replace(/^(\d+).*/, '$1')) : 0;
        return browser;
    };
}
export default UaParser;