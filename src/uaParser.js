'use strict';
var FUNC_TYPE = 'function',
    UNDEF_TYPE = 'undefined',
    OBJ_TYPE = 'object',
    STR_TYPE = 'string',
    NAME = 'name',
    VERSION = 'ver';
/*var reg = {
        isChrome: r(/webkit\W.*(chrome|chromium)\W/i),
        isFirefox: r(/mozilla.*\Wfirefox\W/i),
        isGecko: r(/mozilla(?!.*webkit).*\Wgecko\W/i),
        isIE: function() {
            return "Microsoft Internet Explorer" === navigator.appName || !!r(/\bTrident\b/)
        },
        isKindle: r(/\W(kindle|silk)\W/i),
        isMobile: r(/(iphone|ipod|((?:android)?.*?mobile)|blackberry|nokia)/i),
        isOpera: r(/opera.*\Wpresto\W|OPR/i),
        isSafari: r(/webkit\W(?!.*chrome).*safari\W/i),
        isTablet: r(/(ipad|android(?!.*mobile)|tablet)/i),
        isTV: r(/googletv|sonydtv|appletv/i),
        isWebKit: r(/webkit\W/i),
        isAndroid: r(/android/i),
        isIOS: r(/(ipad|iphone|ipod)/i),
        isIPad: r(/ipad/i),
        isIPhone: r(/iphone/i),
        isIPod: r(/ipod/i),
        isMQQ: r(/mqqbrowser/i),
        isQQ: r(/qqbrowser/i),
        isIMQQ: r(/\bQQ\b/i),
        isUC: r(/uc browser|ucbrowser|ucweb/i),
        is360: r(/qhbrowser|360(.+)browser/i),
        isWechat: r(/micromessenger/i),
        isBaidu: r(/baidubrowser|flyflow/i),
        isLiebao: r(/liebao/i),
        isSogou: r(/sogou|metasr/i),
        isMaxthon: r(/maxthon/i),
        isXiaoMi: r(/XiaoMi/i),
        whoami: function() {
            return window.navigator && navigator.userAgent || ""
        };*/
var regexes = {
    browser: [],
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
        var browser = {
            name: undefined,
            version: undefined
        };
        mapper.rgx.call(browser, ua, rgxmap.browser);
        browser.major = util.major(browser.version); // deprecated
        return browser;
    };

    function _init(uaStr) {
        this.ua = uaStr;
        this.os = this.getOS(uaStr);
    };
    _init.call(this, uaStr);
}
module.exports = uaParser;