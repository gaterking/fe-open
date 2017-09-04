'use strict';
var FUNC_TYPE = 'function',
    UNDEF_TYPE = 'undefined',
    OBJ_TYPE = 'object',
    STR_TYPE = 'string',
    NAME = 'name',
    VERSION = 'ver';

var regexes = {
    browser: [
        [

            /((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i
            // UCBrowser
        ],
        [
            [NAME, 'UCBrowser'], VERSION
        ],
        [
            /(weibo)__([\d\.]+)/i //weibo
        ],
        [
            [NAME, 'Weibo'], VERSION
        ],
        [
            /(micromessenger)\/([\w\.]+)/i // WeChat
        ],
        [
            [NAME, 'WeChat'], VERSION
        ],
        [
            /(QQ)\/([\d\.]+)/i // QQ, aka ShouQ
        ],
        [NAME, VERSION],
        [

            /m?(qqbrowser|liebaofast|EUI Browser|OppoBrowser)[\/\s]?([\w\.]+)/i // QQBrowser、leibao
        ],
        [NAME, VERSION],
        [

            /xiaomi\/miuibrowser\/([\w\.]+)/i // MIUI Browser
        ],
        [VERSION, [NAME, 'MIUI Browser']],
        [

            /;fbav\/([\w\.]+);/i // Facebook App for iOS & Android
        ],
        [VERSION, [NAME, 'Facebook']],
        [

            /(headlesschrome) ([\w\.]+)/i // Chrome Headless
        ],
        [VERSION, [NAME, 'Chrome Headless']],
        [

            /\swv\).+(chrome)\/([\w\.]+)/i // Chrome WebView
        ],
        [
            [NAME, /(.+)/, '$1 WebView'], VERSION
        ],
        [

            /((?:oculus|samsung)browser)\/([\w\.]+)/i
        ],
        [
            [NAME, /(.+(?:g|us))(.+)/, '$1 $2'], VERSION
        ],
        [ // Oculus / Samsung Browser
            /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i // Android Browser
        ],
        [VERSION, [NAME, 'Android Browser']],
        [/(chrome)\/v?([\w\.]+)/i
            // Chrome
        ],
        [NAME, VERSION],
        [
            /((?:android.+)crmo|crios)\/([\w\.]+)/i // Chrome for Android/iOS
        ],
        [
            [NAME, 'Chrome'], VERSION
        ],
        [

            /fxios\/([\w\.-]+)/i // Firefox for iOS
        ],
        [VERSION, [NAME, 'Firefox']],
        [

            /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i // Mobile Safari
        ],
        [VERSION, [NAME, 'Mobile Safari']],
        [
            /version\/([\w\.]+).+?(mobile\s?safari|safari)/i // Safari & Safari Mobile
        ],
        [VERSION, NAME]
    ],
    os: [
        //只识别IOS、Android
        [
            /(android)[\/\s-]?([\w\.]+)*/i,
        ],
        [
            [NAME, 'android'],
            [VERSION]
        ],
        [
            /(iphone|ipad)(?:.*os\s([\w]+)*\slike\smac)/i // iOS
        ],
        [
            [NAME, 'ios'],
            [VERSION, /_/g, '.']
        ]
    ]
};
var mapper = {
    rgx: function(ua, arrays) {
        //var result = {},
        var i = 0,
            j, k, p, q, matches, match; //, args = arguments;

        /*// construct object barebones
        for (p = 0; p < args[1].length; p++) {
            q = args[1][p];
            result[typeof q === OBJ_TYPE ? q[0] : q] = undefined;
        }*/

        while (i < arrays.length && !matches) {

            var regex = arrays[i], //正则数组按两项为一组，第一项是正则表达式
                props = arrays[i + 1]; //第二项是属性定义
            j = k = 0;
            while (j < regex.length && !matches) {

                matches = regex[j++].exec(ua);

                if (!!matches) {
                    //匹配成功
                    for (p = 0; p < props.length; p++) {
                        match = matches[++k];
                        q = props[p];
                        if (Array.isArray(q)) {
                            //属性项是数组
                            if (q.length === 1) {
                                this[q[0]] = match;
                            } else if (q.length === 2) {
                                if (typeof q[1] == FUNC_TYPE) {
                                    this[q[0]] = q[1].call(this, match);
                                } else {
                                    this[q[0]] = q[1];
                                }
                            } else if (q.length === 3) {
                                if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                    this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                } else {
                                    this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                }
                            } else if (q.length == 4) {
                                this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                            }
                        } else {
                            this[q] = match ? match : undefined;
                        }
                    }
                }
            }
            i += 2;
        }
        //console.log(this);
        //return this;
    },

    str: function(str, map) {

        for (var i in map) {
            // check if array
            if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                for (var j = 0; j < map[i].length; j++) {
                    if (util.has(map[i][j], str)) {
                        return (i === UNKNOWN) ? undefined : i;
                    }
                }
            } else if (util.has(map[i], str)) {
                return (i === UNKNOWN) ? undefined : i;
            }
        }
        return str;
    }
};

/**
 * UA解析
 */
function uaParser(uaStr) {
    this.ua = '';
    this.os = null;

    /**
     * 获取操作系统版本
     */
    this.getOS = function(ua) {
        if (!this.os) {
            var os = {};
            mapper.rgx.call(os, ua, regexes.os);
            this.os = os;
            this.os.mver = os.ver ? Number.parseInt(os.ver.replace(/^(\d+).*/, '$1')) : 0;
        }
        return this.os;
    };

    /**
     * 获取浏览器版本
     */
    this.getBrowser = function(ua) {
        if (!this.browser) {
            var browser = {};
            mapper.rgx.call(browser, ua, regexes.browser);
            this.browser = browser;
            this.browser.mver = browser.ver ? Number.parseInt(browser.ver.replace(/^(\d+).*/, '$1')) : 0;
            //this.browsbrowser.major = util.major(browser.version); // deprecated
        }
        return this.browser;
    };

    function _init(uaStr) {
        this.ua = uaStr;
        this.os = this.getOS(uaStr);
        this.browser = this.getBrowser(uaStr);
    };
    _init.call(this, uaStr);
}
module.exports = uaParser;