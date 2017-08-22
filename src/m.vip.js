webpackJsonp([6], {
    100: function(e, t) {},
    101: function(e, t) {},
    102: function(e, t, n) {
        "use strict";
        e.exports = {
            isEmpty: function(e) {
                return "" === e
            },
            lessThanLength: function(e, t) {
                return "string" == typeof e && e.length < t
            },
            greaterThanLength: function(e, t) {
                return "string" == typeof e && e.length > t
            },
            isMobile: function(e) {
                return !!/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|17[0|1|3|5|6|7|8]|18[0-9])\d{8}$/.test(e)
            },
            isEmail: function(e) {
                return !!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(e)
            },
            isIdcard: function(e) {
                return !!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e)
            },
            isQq: function(e) {
                return !!/^[1-9]\d{4,9}$/.test(e)
            },
            isPostcode: function(e) {
                return !!/^[1-9]\d{5}$/.test(e)
            },
            username: function(e) {
                return !!(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : /^.{6,}$/).test(e)
            },
            password: function(e, t) {
                return t = t || /(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?=.*[A-Z])(?=.*[a-z])(?!.*\n).*$/,
                !!t.test(e)
            },
            authCode: function(e) {
                return !!(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : /^\d{6}$/).test(e)
            }
        }
    },
    103: function(e, t, n) {
        "use strict";
        var i = n(0);
        i.isScrollToFixed = function(e) {
            return !!i(e).data("ScrollToFixed")
        }
        ,
        i.ScrollToFixed = function(e, t) {
            function n() {
                y.trigger("preUnfixed.ScrollToFixed"),
                l(),
                y.trigger("unfixed.ScrollToFixed"),
                E = -1,
                $ = y.offset().top,
                k = y.offset().left,
                v.options.offsets && (k += y.offset().left - y.position().left),
                -1 == S && (S = k),
                g = y.css("position"),
                T = !0,
                -1 != v.options.bottom && (y.trigger("preFixed.ScrollToFixed"),
                c(),
                y.trigger("fixed.ScrollToFixed"))
            }
            function o() {
                var e = v.options.limit;
                return e ? "function" == typeof e ? e.apply(y) : e : 0
            }
            function a() {
                return "fixed" === g
            }
            function s() {
                return "absolute" === g
            }
            function r() {
                return !(a() || s())
            }
            function c() {
                if (!a()) {
                    var e = y[0].getBoundingClientRect();
                    C.css({
                        display: y.css("display"),
                        width: e.width,
                        height: e.height,
                        float: y.css("float")
                    });
                    var t = {
                        "z-index": v.options.zIndex,
                        position: "fixed",
                        top: -1 == v.options.bottom ? p() : "",
                        bottom: -1 == v.options.bottom ? "" : v.options.bottom,
                        "margin-left": "0px"
                    };
                    v.options.dontSetWidth || (t.width = y.css("width")),
                    y.css(t),
                    y.addClass(v.options.baseClassName),
                    v.options.className && y.addClass(v.options.className),
                    g = "fixed"
                }
            }
            function d() {
                var e = o()
                  , t = k;
                v.options.removeOffsets && (t = "",
                e -= $);
                var n = {
                    position: "absolute",
                    top: e,
                    left: t,
                    "margin-left": "0px",
                    bottom: ""
                };
                v.options.dontSetWidth || (n.width = y.css("width")),
                y.css(n),
                g = "absolute"
            }
            function l() {
                r() || (E = -1,
                C.css("display", "none"),
                y.css({
                    "z-index": x,
                    width: "",
                    position: w,
                    left: "",
                    top: b,
                    "margin-left": ""
                }),
                y.removeClass("scroll-to-fixed-fixed"),
                v.options.className && y.removeClass(v.options.className),
                g = null)
            }
            function u(e) {
                e != E && (y.css("left", k - e),
                E = e)
            }
            function p() {
                var e = v.options.marginTop;
                return e ? "function" == typeof e ? e.apply(y) : e : 0
            }
            function f() {
                if (i.isScrollToFixed(y) && !y.is(":hidden")) {
                    var e = T
                      , t = r();
                    T ? r() && ($ = y.offset().top,
                    k = y.offset().left) : n();
                    var f = i(window).scrollLeft()
                      , g = i(window).scrollTop()
                      , _ = o();
                    v.options.minWidth && i(window).width() < v.options.minWidth ? r() && e || (h(),
                    y.trigger("preUnfixed.ScrollToFixed"),
                    l(),
                    y.trigger("unfixed.ScrollToFixed")) : v.options.maxWidth && i(window).width() > v.options.maxWidth ? r() && e || (h(),
                    y.trigger("preUnfixed.ScrollToFixed"),
                    l(),
                    y.trigger("unfixed.ScrollToFixed")) : -1 == v.options.bottom ? _ > 0 && g >= _ - p() ? t || s() && e || (h(),
                    y.trigger("preAbsolute.ScrollToFixed"),
                    d(),
                    y.trigger("unfixed.ScrollToFixed")) : g >= $ - p() ? (a() && e || (h(),
                    y.trigger("preFixed.ScrollToFixed"),
                    c(),
                    E = -1,
                    y.trigger("fixed.ScrollToFixed")),
                    u(f)) : r() && e || (h(),
                    y.trigger("preUnfixed.ScrollToFixed"),
                    l(),
                    y.trigger("unfixed.ScrollToFixed")) : _ > 0 ? g + i(window).height() - y.outerHeight(!0) >= _ - (p() || -m()) ? a() && (h(),
                    y.trigger("preUnfixed.ScrollToFixed"),
                    "absolute" === w ? d() : l(),
                    y.trigger("unfixed.ScrollToFixed")) : (a() || (h(),
                    y.trigger("preFixed.ScrollToFixed"),
                    c()),
                    u(f),
                    y.trigger("fixed.ScrollToFixed")) : u(f)
                }
            }
            function m() {
                return v.options.bottom ? v.options.bottom : 0
            }
            function h() {
                var e = y.css("position");
                "absolute" == e ? y.trigger("postAbsolute.ScrollToFixed") : "fixed" == e ? y.trigger("postFixed.ScrollToFixed") : y.trigger("postUnfixed.ScrollToFixed")
            }
            var v = this;
            v.$el = i(e),
            v.el = e,
            v.$el.data("ScrollToFixed", v);
            var g, w, _, b, x, T = !1, y = v.$el, $ = 0, k = 0, S = -1, E = -1, C = null, J = function(e) {
                y.is(":visible") ? (T = !1,
                f()) : l()
            }, I = function(e) {
                window.requestAnimationFrame ? requestAnimationFrame(f) : f()
            }, P = function(e) {
                e = e || window.event,
                e.preventDefault && e.preventDefault(),
                e.returnValue = !1
            };
            v.init = function() {
                v.options = i.extend({}, i.ScrollToFixed.defaultOptions, t),
                x = y.css("z-index"),
                v.$el.css("z-index", v.options.zIndex),
                C = i("<div />"),
                g = y.css("position"),
                w = y.css("position"),
                _ = y.css("float"),
                b = y.css("top"),
                r() && v.$el.after(C),
                i(window).bind("resize.ScrollToFixed", J),
                i(window).bind("scroll.ScrollToFixed", I),
                "ontouchmove"in window && i(window).bind("touchmove.ScrollToFixed", f),
                v.options.preFixed && y.bind("preFixed.ScrollToFixed", v.options.preFixed),
                v.options.postFixed && y.bind("postFixed.ScrollToFixed", v.options.postFixed),
                v.options.preUnfixed && y.bind("preUnfixed.ScrollToFixed", v.options.preUnfixed),
                v.options.postUnfixed && y.bind("postUnfixed.ScrollToFixed", v.options.postUnfixed),
                v.options.preAbsolute && y.bind("preAbsolute.ScrollToFixed", v.options.preAbsolute),
                v.options.postAbsolute && y.bind("postAbsolute.ScrollToFixed", v.options.postAbsolute),
                v.options.fixed && y.bind("fixed.ScrollToFixed", v.options.fixed),
                v.options.unfixed && y.bind("unfixed.ScrollToFixed", v.options.unfixed),
                v.options.spacerClass && C.addClass(v.options.spacerClass),
                y.bind("resize.ScrollToFixed", function() {
                    C.height(y.height())
                }),
                y.bind("scroll.ScrollToFixed", function() {
                    y.trigger("preUnfixed.ScrollToFixed"),
                    l(),
                    y.trigger("unfixed.ScrollToFixed"),
                    f()
                }),
                y.bind("detach.ScrollToFixed", function(e) {
                    P(e),
                    y.trigger("preUnfixed.ScrollToFixed"),
                    l(),
                    y.trigger("unfixed.ScrollToFixed"),
                    i(window).unbind("resize.ScrollToFixed", J),
                    i(window).unbind("scroll.ScrollToFixed", I),
                    y.unbind(".ScrollToFixed"),
                    C.remove(),
                    v.$el.removeData("ScrollToFixed")
                }),
                J()
            }
            ,
            v.init()
        }
        ,
        i.ScrollToFixed.defaultOptions = {
            marginTop: 0,
            limit: 0,
            bottom: -1,
            zIndex: 1e3,
            baseClassName: "scroll-to-fixed-fixed"
        },
        i.fn.scrollToFixed = function(e) {
            return this.each(function() {
                new i.ScrollToFixed(this,e)
            })
        }
        ,
        e.exports = i.ScrollToFixed
    },
    104: function(e, t, n) {
        var i = n(1);
        e.exports = new i('<a href="javascript:void(0)" class="J-close-wh close-btn" mars_sead="home_province_close_btn">\n    <i class="icon-cross"></i>\n</a>\n<div class="warehouse-win">\n    <div class="modal-header">\n        <h3 class="tit"><span class="hj icons-rocket"></span>选择收货地址，火速配送哦</h3>\n    </div>\n    <div class="modal-body J-modal-body">\n        <div class="modal-message">\n            <div class="ui-xx clearfix" data-merpos="true">\n                {if $recmd && $recmd.position && $recmd.mars && $recmd.name}\n                <h4>我们猜您在</h4>\n                <ul class="ui-list-li">\n                    <li>\n                        <a href="javascript:;" data-whlink=\'1\' data-position="{$recmd.position}" mars_sead="local-dress_btn" data_mars="{$recmd.mars}">{$recmd.name}</a>\n                    </li>\n                </ul>\n                {/if}\n                {foreach from=$data item=item}\n                <h4>{$item.area}</h4>\n                <ul class="ui-list-li">\n                    {foreach from=$item.list item=wh}\n                    <li>\n                        <a href="javascript:;" data-whlink=\'1\' data-position="{$wh.warehouse}" mars_sead="home_province_btn" data_mars="{$wh.mars}">{$wh.short_name}</a>\n                    </li>\n                    {/foreach}\n                </ul>\n                {/foreach}\n            </div>\n        </div>\n    </div>\n    <div class="modal-header">\n        <h3 class="tit"><span class="hj"></span>选择最近收货地址，送货更快哦</h3>\n    </div>\n</div>\n')
    },
    106: function(e, t, n) {
        "use strict";
        n(129);
        var i, o, a, s, r, c, d, l = n(0), u = (n(40),
        n(6),
        n(15)), p = n(29), f = n(5), m = n(4), h = n(8)({
            id: "appWakeupDialog",
            className: "app-wakeup-dialog"
        }), v = n(123), g = {
            initState: function() {
                var e = this;
                e.isWakeup() && (1 == o && !p.isSafari() && !p.isXiaoMi() || (p.isSafari() || p.isXiaoMi()) && 1 == a ? (m("button", "click", "WAP_wake_up_app_pop_up_appear"),
                h.conf({
                    content: "打开唯品会app，更多惊喜等你来",
                    btns: ["取消", "打开"],
                    onBtnClick: function(t, n) {
                        h.close(),
                        1 === n ? (m("button", "click", "WAP_wake_up_app_pop_up_appear_agree_click"),
                        e.wakeupApp()) : (u.setLocal("app_wakeup_time", Date.now()),
                        u.setLocal("app_wakeup_status", "fail"),
                        m("button", "click", "WAP_wake_up_app_fail"),
                        m("button", "click", "WAP_wake_up_app_pop_up_appear_Disagree_click"))
                    }
                }).open()) : e.wakeupApp())
            },
            isWakeup: function() {
                var e = u.getLocal("app_wakeup_status")
                  , t = u.getLocal("app_wakeup_time");
                return !t || Date.now() - parseInt(t) > ("fail" == e ? c : d)
            },
            wakeupApp: function() {
                var e = new Date;
                v.wakeup({
                    url: s,
                    type: 1
                }, function() {
                    m("button", "click", "WAP_wake_up_app_start"),
                    u.setLocal("app_wakeup_time", e.getTime())
                }, function() {
                    u.setLocal("app_wakeup_status", "fail"),
                    m("button", "click", "WAP_wake_up_app_fail")
                })
            },
            init: function() {
                var e = this;
                i = l(".J-wakeup-enable").val(),
                s = l(".J-wakeup-android-url").val(),
                p.isIOS() && (s = l(".J-wakeup-iphone-url").val()),
                !f.isWeixin() && 0 != i && s && (o = l(".J-wakeup-show-popup").val(),
                a = l(".J-wakeup-show-ios-popup").val(),
                c = l(".J-wakeup-coolinghour-fail").val(),
                d = l(".J-wakeup-coolinghour-success").val(),
                r = location.href,
                l(function() {
                    e.initState()
                }))
            }
        };
        e.exports = g
    },
    107: function(e, t, n) {
        "use strict";
        n(130);
        var i = n(17)
          , o = n(135)
          , a = n(8)({
            id: "product-remind-dialog"
        })
          , s = n(4)
          , r = n(110)
          , c = location.pathname.replace("/", "") || "index.html"
          , d = location.search.replace("?", "")
          , l = {
            loopId: null,
            getRemind: function() {
                var e = this;
                e.stopLoop(),
                i.getRemind({
                    action: "get"
                }, function(t) {
                    10001 == t.code ? (e.deleteRemind(t.data),
                    s("button", "click", "vip_remind_popup"),
                    a.conf({
                        title: "",
                        content: o.fetch(t.data),
                        btns: ["错过", "加入购物车"],
                        onBtnClick: function(n, i) {
                            if (a.close(),
                            0 == i)
                                s("button", "click", "vip_remind_popup_no"),
                                e.startLoop();
                            else {
                                s("button", "click", "vip_remind_popup_yes");
                                var o = {
                                    page: c,
                                    query: d,
                                    size_num: 1,
                                    product_id: t.data.goodsid,
                                    brand_id: t.data.brand_id,
                                    size_id: t.data.skuid,
                                    showSimpleCart: 1,
                                    captcha: ""
                                };
                                1 === t.data.isIndependent && (o.is_independent = 1),
                                r.add({
                                    method: "Cart.addCart",
                                    params: o,
                                    showToast: !0
                                }, function(t) {
                                    e.startLoop();
                                    var n = t && t.data ? t.data : {};
                                    0 === t.code && n.isFastcheckout && n.url && (window.location.href = n.url)
                                }, !0)
                            }
                        }
                    }).open()) : 10005 == t.code ? e.stopLoop() : 1e4 != t.code && e.startLoop()
                })
            },
            deleteRemind: function(e) {
                var t = {
                    action: "del",
                    skuId: e.skuid,
                    productId: e.goodsid
                };
                i.deleteRemind(t)
            },
            startLoop: function() {
                var e = this;
                e.loopId = setInterval(function() {
                    e.getRemind.call(e)
                }, 3e4)
            },
            stopLoop: function() {
                var e = this;
                e.loopId && clearInterval(e.loopId)
            },
            init: function() {
                this.startLoop()
            }
        };
        e.exports = l
    },
    108: function(e, t, n) {
        var i = n(1);
        e.exports = new i('{if ($appDownload && $appDownload.showTop == true)}\n<div class="top-download-bar J-download-bar">\n    <a class="download-link J-download-link" mars_sead="{$appDownload.topMarsSead}" href="//viva.vip.com/s/mdl">\n        <div class="download-text">\n            {*后台配置格式*}\n            {*<p class="text">标题</p>\n            <p class="sub-text">副标题</p>*}\n            {$appDownload.topText}\n        </div>\n    </a>\n    {if !$appDownload.isWeixin}\n    <a href="javascript:;" class="J-download-close download-close icon-close" mars_sead="close_download_page"></a>\n    {/if}\n</div>\n{/if}\n')
    },
    11: function(e, t) {
        function n(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
        }
        e.exports = n
    },
    110: function(e, t, n) {
        "use strict";
        n(113);
        var i = n(17)
          , o = n(9)()
          , a = n(8)()
          , s = n(14)
          , r = n(23)
          , c = n(91)
          , d = n(117)
          , l = n(3)
          , u = n(15)
          , p = (n(0),
        window)
          , f = {
            init: function() {
                this.getUIRef(),
                this.bindEvent()
            },
            getUIRef: function() {},
            bindEvent: function() {},
            add: function(e, t, n) {
                var s = this
                  , r = e
                  , u = e.captchaObj;
                u && delete e.captchaObj,
                i.addCart(r, function(i) {
                    switch (i = i && i[0] && i[0].result ? i[0].result : {},
                    5003 != i.code && 14207 != i.code && 14216 != i.code && u && u.close(),
                    i.code) {
                    case 0:
                        e.showToast && o.open("添加成功", 3e3),
                        l.emit("cart-fixed-bottom", "updateCart", i.data),
                        l.emit("cart-cmp", "updateCart", i.data),
                        l.emit("resident-function-entry", "updateCart", i.data);
                        break;
                    case 102:
                        o.open("当前尺码库存不足", 3e3);
                        break;
                    case 111:
                    case 406:
                    case 14201:
                        s.goToLogin(e, "", t);
                        break;
                    case 5003:
                    case 14207:
                    case 14216:
                        var r = "";
                        i.data && i.data.captchaResult && (r = i.data.captchaResult.picString),
                        n ? c.open({
                            img: r,
                            success: function(n) {
                                var i = e;
                                1 === e.isIndependent ? i.captcha = n.captcha : i.params.captcha = n.captcha,
                                i.captchaObj = c,
                                s.add(i, t)
                            },
                            cancel: function() {
                                t(i, e.params),
                                c.close()
                            }
                        }) : (c.showErrorMsg("验证码输入错误"),
                        c.refresh(r));
                        break;
                    case 5004:
                    case 5005:
                        o.open("校验出错，请重试", 3e3);
                        break;
                    case 5006:
                        o.open("校验码输入错误", 3e3);
                        break;
                    case 6001:
                        a.open({
                            freeze: !0,
                            title: "账号失效",
                            content: "请点击右上角“x”按钮<br />关闭当前页面",
                            btns: ["知道了"]
                        });
                        break;
                    case 6002:
                        d.open({
                            success: function(n) {
                                n.data = e,
                                n.fn = t,
                                s.bindXiaomiUser(n)
                            },
                            cancel: function() {}
                        });
                        break;
                    default:
                        o.open(i.msg || "系统繁忙，请稍候再试。", 3e3)
                    }
                    t && 5003 != i.code && t(i, e.params)
                }, function(e, n, i) {
                    if (408 === e.status || 418 === e.status)
                        return void o.open("前面人山人海，亲稍后再来。", 3e3);
                    t && t(n, i)
                })
            },
            goToLogin: function(e, t, n) {
                var i = this;
                s.go({
                    usePop: !0,
                    backUrl: t,
                    onBeforeJumpLogin: function() {
                        u.setSession("addCartLoginData", JSON.stringify({
                            isLogin: 1,
                            data: e
                        }))
                    },
                    onWinLogin: function(t) {
                        t.success && i.add(e, n)
                    }
                })
            },
            changeWarehouse: function(e) {
                o.open("正在切换...", 1e4),
                r.change({
                    warehouse: e.pwarehouse
                }, function(e) {
                    p.location.href = e.url
                })
            },
            bindXiaomiUser: function(e) {
                var t = this;
                i.bindXiaomiUser({
                    mobile: e.phone,
                    verify: e.code
                }, function(n) {
                    1 !== n.code && t.add(e.data, e.fn)
                }, function() {})
            }
        };
        f.init(),
        e.exports = f
    },
    113: function(e, t) {},
    114: function(e, t) {},
    115: function(e, t) {},
    116: function(e, t, n) {
        "use strict";
        function i() {
            this.cache = []
        }
        var o = n(102)
          , a = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(o)
          , s = {
            isNotEmpty: function(e, t) {
                if (a.default.isEmpty(e))
                    return t
            },
            minLength: function(e, t, n) {
                if (a.default.lessThanLength(e, t))
                    return n
            },
            maxLength: function(e, t, n) {
                if (a.default.greaterThanLength(e, t))
                    return n
            },
            isMobile: function(e, t) {
                if (t = t || "手机号码格式错误",
                !a.default.isMobile(e))
                    return t
            },
            isEmail: function(e, t) {
                if (t = t || "邮箱地址格式错误",
                !a.default.isEmail(e))
                    return t
            },
            isIdcard: function(e, t) {
                if (t = t || "身份证格式错误",
                !a.default.isIdcard(e))
                    return t
            },
            isQq: function(e, t) {
                if (t = t || "qq号码格式错误",
                !a.default.isQq(e))
                    return t
            },
            isPostcode: function(e, t) {
                if (t = t || "邮政编码格式错误",
                !a.default.isPostcode(e))
                    return t
            },
            username: function(e, t, n) {
                if (t = t || "用户名格式错误",
                !a.default.username(e, n))
                    return t
            },
            password: function(e, t, n) {
                if (t = t || "密码必须是由数字/大写字母/小写字母/标点符号组成，四种都必有，8位以上",
                !a.default.password(e, n))
                    return t
            },
            authCode: function(e, t, n) {
                if (t = t || "验证码格式错误",
                !a.default.authCode(e, n))
                    return t
            }
        };
        i.prototype = {
            constructor: i,
            init: function(e) {
                var t = this;
                e && e.forEach(function(e) {
                    t.add(e.dom, e.rules)
                }, this)
            },
            add: function(e, t) {
                var n = this;
                t.forEach(function(t) {
                    n.cache.push(function() {
                        var n = t.strategy.split(":")
                          , i = t.errorMsg
                          , o = t.re ? t.re : null
                          , a = n.shift();
                        return n.unshift(e.value),
                        n.push(i),
                        o && n.push(o),
                        s[a].apply(e, n)
                    })
                }, this)
            },
            start: function() {
                var e = this.cache.length
                  , t = void 0
                  , n = void 0;
                for (n = 0; n < e; n++)
                    if (t = this.cache[n]())
                        return t;
                return !1
            }
        },
        e.exports = i
    },
    117: function(e, t, n) {
        "use strict";
        n(115);
        var i = n(8)()
          , o = n(118)
          , a = n(116)
          , s = n(22)
          , r = n(17)
          , c = new a
          , d = n(0)
          , l = (d("body"),
        {
            init: function() {
                this.initCoder(),
                this.getUIRef(),
                this.bindEvent()
            },
            initCoder: function() {
                i.conf({
                    freeze: !0,
                    title: "输入校验码",
                    content: o.fetch({}),
                    btns: ["取消", "登录"]
                })
            },
            getUIRef: function() {
                this.$phoneNum = i.$box.find("input[name=input-mobile]"),
                this.$getCodeBtn = i.$box.find("#J-get-code"),
                this.$phoneCode = i.$box.find("input[name=input-code]"),
                this.$errorMsg = i.$box.find(".J-error-msg")
            },
            bindEvent: function() {
                var e = this;
                c.init([{
                    dom: e.$phoneNum[0],
                    rules: [{
                        strategy: "isNotEmpty",
                        errorMsg: "手机号码不能为空"
                    }, {
                        strategy: "isMobile",
                        errorMsg: "手机格式错误"
                    }]
                }, {
                    dom: e.$phoneCode[0],
                    rules: [{
                        strategy: "isNotEmpty",
                        errorMsg: "短信验证码不能为空"
                    }]
                }]),
                i.$box.find(".dialog-body").on("click", "#J-get-code:not(.disabled)", function() {
                    var t = {
                        phoneNum: e.$phoneNum.val()
                    }
                      , n = c.start();
                    if (n && /手机/.test(n))
                        return void e.$errorMsg.html(n || "请输入手机号码").show();
                    e.getPhoneCode(t, function() {})
                })
            },
            open: function(e) {
                var t = this;
                t.opts = e,
                t.reset(),
                i.open({
                    onBtnClick: function(n, o) {
                        var a = c.start()
                          , s = t.$phoneNum.val()
                          , r = t.$phoneCode.val();
                        if (1 === o)
                            return void (void 0 === a ? (e.success({
                                phone: s,
                                code: r
                            }),
                            i.close()) : t.$errorMsg.html(a));
                        e.cancel(),
                        i.close()
                    }
                })
            },
            getPhoneCode: function(e, t, n) {
                var i = this;
                i.disableBtn(),
                r.getPhoneCode(e, function(e) {
                    e.msg && (i.$errorMsg.html(e.msg),
                    i.setCountDown()),
                    t && t(e)
                }, n)
            },
            setCountDown: function() {
                var e = this
                  , t = {
                    elem: e.$getCodeBtn,
                    startTime: 60,
                    timeStamp: {
                        day: "",
                        hour: "",
                        min: "",
                        sec: "s"
                    },
                    timeFormat: !1,
                    action: "defined",
                    halfwayTime: !1,
                    callback: !0,
                    message: "后重新获取",
                    callbackFunction: function() {
                        e.enableBtn()
                    }
                };
                new s(t)
            },
            disableBtn: function() {
                this.$getCodeBtn.attr("disabled", !0).removeClass("btn-purple").addClass("disabled")
            },
            enableBtn: function() {
                this.$getCodeBtn.removeAttr("disabled").removeClass("disabled").addClass("btn-purple").html("获取验证码")
            },
            reset: function() {
                this.$phoneNum.val(""),
                this.$phoneCode.val(""),
                this.$errorMsg.hide()
            }
        });
        l.init(),
        e.exports = l
    },
    118: function(e, t, n) {
        var i = n(1);
        e.exports = new i('<ul class="nav nav-list form form-horizontal form-check">\n    <li class="control-group">\n\t    <span><input class="phone-num" name="input-mobile" type="tel" placeholder="请输入手机号码" value=""></span>\n\t\t<button id="J-get-code" class="btn btn-purple get-code" type="button">获取验证码</button>\n  \t</li>\n  \t<li class="control-group">\n    \t<span><input name="input-code" type="text" class="phone-code" placeholder="请输入短信验证码" value=""></span>\n  \t</li>\n  \t<li class="control-text J-error-msg vip-red"></li>\n</ul>')
    },
    119: function(e, t, n) {
        var i = n(1);
        e.exports = new i('<input type="hidden" class="J-wakeup-enable" value="{$appWakeup.enable}">\n<input type="hidden" class="J-wakeup-show-popup" value="{$appWakeup.showPopup}">\n<input type="hidden" class="J-wakeup-show-ios-popup" value="{$appWakeup.showIosPopup}">\n<input type="hidden" class="J-wakeup-android-url" value="{$appWakeup.wakeupUrl.android}">\n<input type="hidden" class="J-wakeup-iphone-url" value="{$appWakeup.wakeupUrl.iphone}">\n<input type="hidden" class="J-wakeup-coolinghour-fail" value="{$appWakeup.coolingHour.fail*60*60*1000}">\n<input type="hidden" class="J-wakeup-coolinghour-success" value="{$appWakeup.coolingHour.success*60*60*1000}">')
    },
    12: function(e, t, n) {
        var i = n(38)
          , o = "object" == typeof self && self && self.Object === Object && self
          , a = i || o || Function("return this")();
        e.exports = a
    },
    123: function(e, t, n) {
        "use strict";
        var i = n(29)
          , o = n(6)
          , a = {
            wakeup: function(e, t, n) {
                var a = this
                  , s = navigator.userAgent.match(/OS ([\d]+)_\d[_\d]* like Mac OS X/i);
                "[object Object]" != Object.prototype.toString.call(e) && (e = {
                    url: e
                });
                var r = e.url;
                switch (e.type) {
                case 1:
                    i.isIOS() && i.isSafari() && s && s[1] >= 9 ? a._openByUniversalLink(r, t, n) : a._openByIframe(r, t, n);
                    break;
                case 2:
                    i.isIOS() && s && s[1] >= 9 ? (r = o.setQuery({
                        name: "download",
                        value: 1,
                        url: r
                    }),
                    a._openByUniversalLink(r, t, n)) : a._openByIframe(r, t, n);
                    break;
                default:
                    i.isIOS() && s && s[1] >= 9 ? a._openByUniversalLink(r, t, n) : a._openByIframe(r, t, n)
                }
            },
            _openByUniversalLink: function(e, t, n) {
                t && t(),
                e = e.replace("vipshop://", "//weixin.vip.com/deeplink/"),
                location.href = e
            },
            _openByIframe: function(e, t, n) {
                var i = document.createElement("iframe");
                i.setAttribute("src", e),
                i.setAttribute("style", "display:none"),
                document.body.appendChild(i),
                t && t();
                var o = Date.now();
                setTimeout(function() {
                    Date.now() - o < 1050 && n && n()
                }, 1e3)
            }
        };
        e.exports = a
    },
    129: function(e, t) {},
    13: function(e, t, n) {
        var i = n(12)
          , o = i.Symbol;
        e.exports = o
    },
    130: function(e, t) {},
    132: function(e, t, n) {
        "use strict";
        var i = n(2)
          , o = n(7)
          , a = {
            WX_COUPON_STATUS: i.wxMallHost + "/coupon/coupon/coupon-status",
            GET_BRAND_COUPON: "/ajaxapi-coupon.html",
            GET_NEWER_COUPON: "/ajaxapi-bindCoupon.html",
            GET_WX_COUPON: i.wxActHost + "/coupon/get",
            GET_OPERATE_COUPON: "/ajaxapi-coupon.html?action=bindCouponV2"
        }
          , s = {
            checkWxCouponStatus: function(e, t, n) {
                return !1
            },
            getBrandCoupon: function(e, t, n) {
                o({
                    url: a.GET_BRAND_COUPON,
                    cache: !1,
                    data: e,
                    dataType: "json",
                    success: function(e, n, i) {
                        t && t(e, i)
                    },
                    error: function(e, t, i) {
                        n && n(e, t, i),
                        window.console && window.console.log(arguments)
                    }
                })
            },
            getNewerCoupon: function(e, t, n) {
                o({
                    url: a.GET_NEWER_COUPON,
                    cache: !1,
                    data: e,
                    dataType: "json",
                    success: function(e, n, i) {
                        t && t(e, i)
                    },
                    error: function(e, t, i) {
                        n && n(e, t, i),
                        window.console && window.console.log(arguments)
                    }
                })
            },
            getWxCoupon: function(e, t, n) {
                o({
                    url: a.GET_WX_COUPON,
                    cache: !1,
                    data: e,
                    dataType: "jsonp",
                    jsonp: "jsonp",
                    success: function(e, n, i) {
                        t && t(e, i)
                    },
                    error: function(e, t, i) {
                        n && n(e, t, i),
                        window.console && window.console.log(arguments)
                    }
                })
            },
            getOperateCoupon: function(e, t, n) {
                o({
                    url: a.GET_OPERATE_COUPON,
                    cache: !1,
                    data: e,
                    dataType: "json",
                    success: function(e, n, i) {
                        t && t(e, i)
                    },
                    error: function(e, t, i) {
                        n && n(e, t, i),
                        window.console && window.console.log(arguments)
                    }
                })
            }
        };
        e.exports = s
    },
    134: function(e, t, n) {
        "use strict";
        var i = n(0)
          , o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(i)
          , a = (0,
        o.default)(window);
        e.exports = {
            aboveOfViewport: function(e, t) {
                return t = o.default.extend({}, t),
                (void 0 === t.container || t.container === window ? a.height() + a[0].scrollY : (0,
                o.default)(t.container).offset().top + (0,
                o.default)(t.container).height()) <= (0,
                o.default)(e).offset().top - (t.threshold ? t.threshold : 0)
            },
            belowOfViewport: function(e, t) {
                return t = o.default.extend({}, t),
                (void 0 === t.container || t.container === window ? a.height() + a[0].scrollY : (0,
                o.default)(t.container).offset().top + (0,
                o.default)(t.container).height()) <= (0,
                o.default)(e).offset().top - (t.threshold ? t.threshold : 0)
            },
            leftOfViewport: function(e, t) {
                return t = o.default.extend({}, t),
                (void 0 === t.container || t.container === window ? a[0].scrollX : (0,
                o.default)(t.container).offset().left) >= (0,
                o.default)(e).offset().left + (t.threshold ? t.threshold : 0) + (0,
                o.default)(e).width()
            },
            rightOfViewport: function(e, t) {
                return t = o.default.extend({}, t),
                (void 0 === t.container || t.container === window ? a.width() + a[0].scrollX : (0,
                o.default)(t.container).offset().left + (0,
                o.default)(t.container).width()) <= (0,
                o.default)(e).offset().left - (t.threshold ? t.threshold : 0)
            },
            inViewport: function(e, t) {
                return !(this.aboveOfViewport(e, t) || this.belowOfViewport(e, t) || this.leftOfViewport(e, t) || this.rightOfViewport(e, t))
            }
        }
    },
    135: function(e, t, n) {
        var i = n(1);
        e.exports = new i('<div class="u-product-remind">\n    <a href="//m.vip.com/product-{$brand_id}-{$goodsid}.html">\n        <div class="product-img" style="background-image: url({$image})"></div>\n        <div class="product-name">{$content}</div>\n        <div class="product-tip">有货啦，立即拥有它！</div>\n    </a>\n</div>')
    },
    154: function(e, t, n) {
        "use strict";
        var i = {
            cal: function(e, t) {
                var n = e ? new Date(parseInt(e)) : new Date
                  , i = new Date(parseInt(t))
                  , o = i - n;
                return "剩" + (o >= 864e5 ? Math.floor(o / 864e5) + "天" : 864e5 > o && o >= 36e5 ? Math.floor(o % 864e5 / 36e5) + "时" : Math.floor(o % 864e5 % 36e5 / 6e4) + "分")
            }
        };
        e.exports = i
    },
    155: function(e, t, n) {
        "use strict";
        var i = n(0)
          , o = i("body")
          , a = n(4);
        e.exports = {
            init: function() {
                var e = this;
                e.isBind || (o.on("click", ".J-mars-item", function() {
                    e.send(this)
                }),
                e.isBind = !0)
            },
            send: function(e) {
                var t = i(e)
                  , n = i("[mars_exposure_sead]")
                  , o = t.attr("mars_exposure_module").split("|")
                  , s = /specials/.test(o[1]) ? 1 : 0
                  , r = {}
                  , c = t.attr("href")
                  , d = "oper"
                  , l = "";
                if (!/mst/.test(o[0])) {
                    switch (-1 === c.indexOf("classify") && -1 === c.indexOf("category") || (d = "category"),
                    -1 === c.indexOf("suggest") && -1 === c.indexOf("searchlist") || (d = "search"),
                    o.length > 7 && (l = o[7]),
                    r.mars = '{"page":"' + (o[2] ? encodeURIComponent(o[2]) : "") + '","channel_id":"' + (o[3] ? o[3] : "") + '","module":"' + (o[4] ? encodeURIComponent(o[4]) : "") + '","tsift":"' + (o[5] ? o[5] : "") + '",',
                    o[1]) {
                    case "brands":
                    case "specials":
                        r.seed = "wap_brand_click",
                        r.mark = '"brand_id":"' + (o[6] ? o[6] : "") + '","brand_rank":"' + (n.index(e) + 1) + '","brand_type":"' + s + '","index":"' + l + '"}';
                        break;
                    case "operates":
                        r.seed = "wap_oper_click",
                        r.mark = '"opz_unid":"' + (o[6] ? o[6] : "") + '","opz_rank":"' + (n.index(e) + 1) + '","dest":"' + d + '","index":"' + l + '"}';
                        break;
                    case "adverts":
                        r.seed = "wap_adv_click",
                        r.mark = '"ad_unid":"' + (o[6] ? o[6] : "") + '","ad_rank":"' + (n.index(e) + 1) + '"}';
                        break;
                    default:
                        r.seed = "",
                        r.mark = ""
                    }
                    a("link", "click", r.seed || "", r.mars + r.mark || "")
                }
            }
        }
    },
    16: function(e, t, n) {
        "use strict";
        function i(e) {
            e.preventDefault(),
            s.go({
                usePop: !0,
                needReg: !1,
                onWinLogin: function(e) {
                    e.success && r.reload(!0)
                }
            })
        }
        function o(e) {
            e.preventDefault(),
            s.go({
                usePop: !0,
                needReg: !0,
                onWinLogin: function(e) {
                    e.success && r.reload(!0)
                }
            })
        }
        n(39);
        var a = n(0)
          , s = n(14)
          , r = n(18)
          , c = {
            init: function() {
                0 !== a("#J-footer").length && this._bindEvents()
            },
            _bindEvents: function() {
                a("body").on("click", ".J-footer-login", i),
                a("body").on("click", ".J-footer-register", o)
            }
        };
        e.exports = c
    },
    161: function(e, t, n) {
        "use strict";
        function i(e, t) {
            function n() {
                h = _.children,
                w = h.length,
                h.length < 2 && (t.continuous = !1),
                m.transitions && t.continuous && h.length < 3 && (_.appendChild(h[0].cloneNode(!0)),
                _.appendChild(_.children[1].cloneNode(!0)),
                h = _.children),
                v = new Array(h.length),
                g = e.getBoundingClientRect().width || e.offsetWidth,
                _.style.width = h.length * g + "px";
                for (var n = h.length; n--; ) {
                    var i = h[n];
                    i.style.width = g + "px",
                    i.setAttribute("data-index", n),
                    m.transitions && (i.style.left = n * -g + "px",
                    r(n, b > n ? -g : b < n ? g : 0, 0))
                }
                t.continuous && m.transitions && (r(a(b - 1), -g, 0),
                r(a(b + 1), g, 0)),
                m.transitions || (_.style.left = b * -g + "px"),
                e.style.visibility = "visible"
            }
            function i() {
                t.continuous ? s(b - 1) : b && s(b - 1)
            }
            function o() {
                t.continuous ? s(b + 1) : b < h.length - 1 && s(b + 1)
            }
            function a(e) {
                return (h.length + e % h.length) % h.length
            }
            function s(e, n) {
                if (b != e) {
                    if (m.transitions) {
                        var i = Math.abs(b - e) / (b - e);
                        if (t.continuous) {
                            var o = i;
                            i = -v[a(e)] / g,
                            i !== o && (e = -i * h.length + e)
                        }
                        for (var s = Math.abs(b - e) - 1; s--; )
                            r(a((e > b ? e : b) - s - 1), g * i, 0);
                        e = a(e),
                        r(b, g * i, n || x),
                        r(e, 0, n || x),
                        t.continuous && r(a(e - i), -g * i, 0)
                    } else
                        e = a(e),
                        d(b * -g, e * -g, n || x);
                    b = e,
                    f(t.callback && t.callback(b, h[b]))
                }
            }
            function r(e, t, n) {
                c(e, t, n),
                v[e] = t
            }
            function c(e, t, n) {
                var i = h[e]
                  , o = i && i.style;
                o && (o.webkitTransitionDuration = o.MozTransitionDuration = o.msTransitionDuration = o.OTransitionDuration = o.transitionDuration = n + "ms",
                o.webkitTransform = "translate(" + t + "px,0)translateZ(0)",
                o.msTransform = o.MozTransform = o.OTransform = "translateX(" + t + "px)")
            }
            function d(e, n, i) {
                if (!i)
                    return void (_.style.left = n + "px");
                var o = +new Date
                  , a = setInterval(function() {
                    var s = +new Date - o;
                    if (s > i)
                        return _.style.left = n + "px",
                        $ && l(),
                        t.transitionEnd && t.transitionEnd.call(event, b, h[b]),
                        void clearInterval(a);
                    _.style.left = (n - e) * (Math.floor(s / i * 100) / 100) + e + "px"
                }, 4)
            }
            function l() {
                T = setTimeout(o, $)
            }
            function u() {
                $ = 0,
                clearTimeout(T)
            }
            var p = function() {}
              , f = function(e) {
                setTimeout(e || p, 0)
            }
              , m = {
                addEventListener: !!window.addEventListener,
                touch: "ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch,
                transitions: function(e) {
                    var t = ["transitionProperty", "WebkitTransition", "MozTransition", "OTransition", "msTransition"];
                    for (var n in t)
                        if (void 0 !== e.style[t[n]])
                            return !0;
                    return !1
                }(document.createElement("swipe"))
            };
            if (e) {
                var h, v, g, w, _ = e.children[0];
                t = t || {};
                var b = parseInt(t.startSlide, 10) || 0
                  , x = t.speed || 300;
                t.continuous = void 0 === t.continuous || t.continuous;
                var T, y, $ = t.auto || 0, k = {}, S = {}, E = {
                    handleEvent: function(e) {
                        switch (e.type) {
                        case "touchstart":
                            this.start(e);
                            break;
                        case "touchmove":
                            this.move(e);
                            break;
                        case "touchend":
                            f(this.end(e));
                            break;
                        case "webkitTransitionEnd":
                        case "msTransitionEnd":
                        case "oTransitionEnd":
                        case "otransitionend":
                        case "transitionend":
                            f(this.transitionEnd(e));
                            break;
                        case "resize":
                            f(n)
                        }
                        t.stopPropagation && e.stopPropagation()
                    },
                    start: function(e) {
                        var t = e.touches[0];
                        k = {
                            x: t.pageX,
                            y: t.pageY,
                            time: +new Date
                        },
                        y = void 0,
                        S = {},
                        _.addEventListener("touchmove", this, !1),
                        _.addEventListener("touchend", this, !1)
                    },
                    move: function(e) {
                        if (!(e.touches.length > 1 || e.scale && 1 !== e.scale)) {
                            t.disableScroll && e.preventDefault();
                            var n = e.touches[0];
                            S = {
                                x: n.pageX - k.x,
                                y: n.pageY - k.y
                            },
                            void 0 === y && (y = !!(y || Math.abs(S.x) < Math.abs(S.y))),
                            y || (e.preventDefault(),
                            u(),
                            t.continuous ? (c(a(b - 1), S.x + v[a(b - 1)], 0),
                            c(b, S.x + v[b], 0),
                            c(a(b + 1), S.x + v[a(b + 1)], 0)) : (S.x = S.x / (!b && S.x > 0 || b == h.length - 1 && S.x < 0 ? Math.abs(S.x) / g + 1 : 1),
                            c(b - 1, S.x + v[b - 1], 0),
                            c(b, S.x + v[b], 0),
                            c(b + 1, S.x + v[b + 1], 0)))
                        }
                    },
                    end: function(e) {
                        var n = +new Date - k.time
                          , i = Number(n) < 250 && Math.abs(S.x) > 20 || Math.abs(S.x) > g / 2
                          , o = !b && S.x > 0 || b == h.length - 1 && S.x < 0;
                        t.continuous && (o = !1);
                        var s = S.x < 0;
                        y || (i && !o ? (s ? (t.continuous ? (r(a(b - 1), -g, 0),
                        r(a(b + 2), g, 0)) : r(b - 1, -g, 0),
                        r(b, v[b] - g, x),
                        r(a(b + 1), v[a(b + 1)] - g, x),
                        b = a(b + 1)) : (t.continuous ? (r(a(b + 1), g, 0),
                        r(a(b - 2), -g, 0)) : r(b + 1, g, 0),
                        r(b, v[b] + g, x),
                        r(a(b - 1), v[a(b - 1)] + g, x),
                        b = a(b - 1)),
                        t.callback && t.callback(b, h[b])) : t.continuous ? (r(a(b - 1), -g, x),
                        r(b, 0, x),
                        r(a(b + 1), g, x)) : (r(b - 1, -g, x),
                        r(b, 0, x),
                        r(b + 1, g, x))),
                        _.removeEventListener("touchmove", E, !1),
                        _.removeEventListener("touchend", E, !1)
                    },
                    transitionEnd: function(e) {
                        parseInt(e.target.getAttribute("data-index"), 10) == b && ($ && l(),
                        t.transitionEnd && t.transitionEnd.call(e, b, h[b]))
                    }
                };
                return n(),
                $ && l(),
                m.addEventListener ? (m.touch && _.addEventListener("touchstart", E, !1),
                m.transitions && (_.addEventListener("webkitTransitionEnd", E, !1),
                _.addEventListener("msTransitionEnd", E, !1),
                _.addEventListener("oTransitionEnd", E, !1),
                _.addEventListener("otransitionend", E, !1),
                _.addEventListener("transitionend", E, !1)),
                window.addEventListener("resize", E, !1)) : window.onresize = function() {
                    n()
                }
                ,
                {
                    setup: function() {
                        n()
                    },
                    slide: function(e, t) {
                        u(),
                        s(e, t)
                    },
                    prev: function() {
                        u(),
                        i()
                    },
                    next: function() {
                        u(),
                        o()
                    },
                    stop: function() {
                        u()
                    },
                    getPos: function() {
                        return b
                    },
                    getNumSlides: function() {
                        return w
                    },
                    kill: function() {
                        u(),
                        _.style.width = "",
                        _.style.left = "";
                        for (var e = h.length; e--; ) {
                            var t = h[e];
                            t.style.width = "",
                            t.style.left = "",
                            m.transitions && c(e, 0, 0)
                        }
                        m.addEventListener ? (_.removeEventListener("touchstart", E, !1),
                        _.removeEventListener("webkitTransitionEnd", E, !1),
                        _.removeEventListener("msTransitionEnd", E, !1),
                        _.removeEventListener("oTransitionEnd", E, !1),
                        _.removeEventListener("otransitionend", E, !1),
                        _.removeEventListener("transitionend", E, !1),
                        window.removeEventListener("resize", E, !1)) : window.onresize = null
                    }
                }
            }
        }
        e.exports = i
    },
    17: function(e, t, n) {
        "use strict";
        var i = n(6)
          , o = n(2)
          , a = n(7)
          , s = {
            GET_PRODUCT_LIST: o.rpcApi,
            GET_GOODS_LIST_RANK: o.rpcApi,
            GET_DROPLET_PRODUCTS_BY_IDS: o.rpcApi,
            GET_PRODUCT_LIST_ACTIVE_MSG: o.rpcApi,
            GET_PREHEAT_PRODUCT_LIST: o.rpcApi,
            GET_PRODUCT_DETAIL: o.rpcApi,
            GET_PREHEAT_COLLECT: "/ajaxapi-preheatingBrandCollect.html",
            PRODUCT_PREHEAT_COLLECT: "/ajaxapi-preheatingcollect.html",
            GET_PRODUCT_COMMENT: o.rpcApi,
            ADD_CART_MCHECKOUT: o.addCartApi,
            PRODUCT_SIZE_TIPS: o.rpcApi,
            GET_STOCK_REMIND: "/ajaxapi-remind.html",
            DELETE_STOCK_REMIND: "/ajaxapi-remind.html",
            GET_DETAIL_INFO: o.rpcApi,
            GET_PHONE_CODE: "/index.php?m=sso&act=sendVerifedCode&target=xiaomi",
            BIND_XIAOMI: "/index.php?m=sso&act=bindUser&target=xiaomi",
            GET_BEAUTY_LIST: o.rpcApi,
            ADD_PRODUCT_TO_BH: "/ajaxapi-addProductIdToBH.html",
            GET_CLASSIFY_CURRENT_NODE: o.rpcApi,
            GET_CLASSIFY_CATE: o.rpcApi,
            GET_BRAND_LIST: o.rpcApi,
            GET_RECOMMEND_LIST_ACTIVE_MSG: o.rpcApi,
            GET_SERVICE_TEXT: o.rpcApi
        }
          , r = {
            getProductList: function(e, t, n) {
                a({
                    url: s.GET_PRODUCT_LIST,
                    cache: !1,
                    data: e,
                    dataType: "json",
                    type: "POST",
                    jsonRpc: !0,
                    success: function(e, n, i) {
                        t && t(e, i)
                    },
                    error: function(e, t, i) {
                        n && n(e, t, i),
                        window.console && window.console.log(arguments)
                    }
                })
            },
            getGoodsListRank: function(e, t, n) {
                a({
                    url: s.GET_GOODS_LIST_RANK,
                    cache: !1,
                    data: e,
                    dataType: "json",
                    type: "POST",
                    jsonRpc: !0,
                    success: function(e, n, i) {
                        t && t(e, i)
                    },
                    error: function(e, t, i) {
                        n && n(e, t, i),
                        window.console && window.console.log(arguments)
                    }
                })
            },
            getDropletProductsByIds: function(e, t, n) {
                a({
                    url: s.GET_DROPLET_PRODUCTS_BY_IDS,
                    cache: !1,
                    data: e,
                    dataType: "json",
                    type: "POST",
                    jsonRpc: !0,
                    success: function(e, n, i) {
                        t && t(e, i)
                    },
                    error: function(e, t, i) {
                        n && n(e, t, i),
                        window.console && window.console.log(arguments)
                    }
                })
            },
            getProductListActiveMsg: function(e, t, n) {
                a({
                    url: s.GET_PRODUCT_LIST_ACTIVE_MSG,
                    cache: !1,
                    data: e,
                    dataType: "json",
                    type: "POST",
                    jsonRpc: !0,
                    success: function(e, n, i) {
                        t && t(e, i)
                    },
                    error: function(e, t, i) {
                        n && n(e, t, i),
                        window.console && window.console.log(arguments)
                    }
                })
            },
            getProductDetailActiveMsg: function(e, t, n) {
                a({
                    url: s.GET_PRODUCT_DETAIL,
                    cache: !1,
                    data: e,
                    dataType: "json",
                    type: "POST",
                    jsonRpc: !0,
                    success: function(e, n, i) {
                        t && t(e, i)
                    },
                    error: function(e, t, i) {
                        n && n(e, t, i),
                        window.console && window.console.log(arguments)
                    }
                })
            },
            getPreheatList: function(e, t, n) {
                a({
                    url: s.GET_PREHEAT_PRODUCT_LIST,
                    cache: !1,
                    data: e,
                    dataType: "json",
                    type: "POST",
                    jsonRpc: !0,
                    success: function(e, n, i) {
                        t && t(e, i)
                    },
                    error: function(e, t, i) {
                        n && n(e, t, i),
                        window.console && window.console.log(arguments)
                    }
                })
            },
            preHeatCollect: function(e, t, n) {
                a({
                    url: s.GET_PREHEAT_COLLECT,
                    cache: !1,
                    data: e,
                    dataType: "json",
                    type: "GET",
                    jsonRpc: !1,
                    success: function(e, n, i) {
                        t && t(e, i)
                    },
                    error: function(e, t, i) {
                        n && n(e, t, i),
                        window.console && window.console.log(arguments)
                    }
                })
            },
            getComment: function(e, t, n) {
                a({
                    url: s.GET_PRODUCT_COMMENT,
                    cache: !1,
                    data: e,
                    dataType: "json",
                    type: "POST",
                    jsonRpc: !0,
                    success: function(e, n, i) {
                        t && t(e, i)
                    },
                    error: function(e, t, i) {
                        n && n(e, t, i),
                        window.console && window.console.log(arguments)
                    }
                })
            },
            addCart: function(e, t, n) {
                var r = o.checkoutHost
                  , c = r + s.ADD_CART_MCHECKOUT;
                e && e.params && (e.params.size_id && (c = i.setQuery({
                    url: c,
                    name: "size_id",
                    value: e.params.size_id
                })),
                e.params.size_num && (c = i.setQuery({
                    url: c,
                    name: "size_num",
                    value: e.params.size_num
                })),
                e.params.brand_id && (c = i.setQuery({
                    url: c,
                    name: "brand_id",
                    value: e.params.brand_id
                })),
                e.params.product_id && (c = i.setQuery({
                    url: c,
                    name: "product_id",
                    value: e.params.product_id
                }))),
                a({
                    url: c,
                    cache: !1,
                    data: e,
                    type: e.method ? "POST" : "GET",
                    jsonRpc: !!e.method,
                    dataType: "json",
                    success: function(e, n, i) {
                        t && t(e, i)
                    },
                    error: function(e, t, i) {
                        n && n(e, t, i),
                        window.console && window.console.log(arguments)
                    }
                })
            },
            productPreHeatCollect: function(e, t, n) {
                a({
                    url: s.PRODUCT_PREHEAT_COLLECT,
                    cache: !1,
                    data: e,
                    dataType: "json",
                    type: "GET",
                    jsonRpc: !1,
                    success: function(e, n, i) {
                        t && t(e, i)
                    },
                    error: function(e, t, i) {
                        n && n(e, t, i),
                        window.console && window.console.log(arguments)
                    }
                })
            },
            getProductSize: function(e, t, n) {
                a({
                    url: s.PRODUCT_SIZE_TIPS,
                    cache: !1,
                    data: e,
                    dataType: "json",
                    type: "POST",
                    jsonRpc: !0,
                    success: function(e, n, i) {
                        t && t(e, i)
                    },
                    error: function(e, t, i) {
                        n && n(e, t, i),
                        window.console && window.console.log(arguments)
                    }
                })
            },
            getRemind: function(e, t, n) {
                a({
                    url: s.GET_STOCK_REMIND + "?s=" + Date.now(),
                    cache: !1,
                    data: e,
                    dataType: "json",
                    type: "GET",
                    jsonRpc: !1,
                    success: function(e, n, i) {
                        t && t(e, i)
                    },
                    error: function(e, t, i) {
                        n && n(e, t, i),
                        window.console && window.console.log(arguments)
                    }
                })
            },
            deleteRemind: function(e, t, n) {
                a({
                    url: s.DELETE_STOCK_REMIND + "?s=" + Date.now(),
                    cache: !1,
                    data: e,
                    dataType: "json",
                    type: "GET",
                    jsonRpc: !1,
                    success: function(e, n, i) {
                        t && t(e, i)
                    },
                    error: function(e, t, i) {
                        n && n(e, t, i),
                        window.console && window.console.log(arguments)
                    }
                })
            },
            getDetailInfo: function(e, t, n) {
                a({
                    url: s.GET_DETAIL_INFO,
                    cache: !1,
                    data: e,
                    dataType: "json",
                    type: "POST",
                    jsonRpc: !0,
                    success: function(e, n, i) {
                        t && t(e, i)
                    },
                    error: function(e, t, i) {
                        n && n(e, t, i),
                        window.console && window.console.log(arguments)
                    }
                })
            },
            getPhoneCode: function(e, t, n) {
                a({
                    url: s.GET_PHONE_CODE,
                    cache: !1,
                    data: {
                        mobile: e.phoneNum
                    },
                    dataType: "json",
                    type: "POST",
                    success: function(e, n, i) {
                        t && t(e, i)
                    },
                    error: function(e, t, i) {
                        n && n(e, t, i),
                        window.console && window.console.log(arguments)
                    }
                })
            },
            bindXiaomiUser: function(e, t, n) {
                a({
                    url: s.BIND_XIAOMI,
                    cache: !1,
                    data: {
                        mobile: e.mobile,
                        verify: e.verify
                    },
                    dataType: "json",
                    type: "POST",
                    success: function(e, n, i) {
                        t && t(e, i)
                    },
                    error: function(e, t, i) {
                        n && n(e, t, i),
                        window.console && window.console.log(arguments)
                    }
                })
            },
            getClassifyCurrentNode: function(e, t, n) {
                a({
                    url: s.GET_CLASSIFY_CURRENT_NODE,
                    cache: !1,
                    data: e,
                    dataType: "json",
                    type: "POST",
                    jsonRpc: !0,
                    success: function(e, n, i) {
                        t && t(e, i)
                    },
                    error: function(e, t, i) {
                        n && n(e, t, i),
                        window.console && window.console.log(arguments)
                    }
                })
            },
            getBeautyList: function(e, t, n) {
                a({
                    url: s.GET_BEAUTY_LIST,
                    cache: !1,
                    data: e,
                    dataType: "json",
                    type: "POST",
                    jsonRpc: !0,
                    success: function(e, n, i) {
                        t && t(e, i)
                    },
                    error: function(e, t, i) {
                        n && n(e, t, i),
                        window.console && window.console.log(arguments)
                    }
                })
            },
            getBrandList: function(e, t, n) {
                a({
                    url: s.GET_BRAND_LIST,
                    cache: !1,
                    data: e,
                    dataType: "json",
                    type: "POST",
                    jsonRpc: !0,
                    success: function(e, n, i) {
                        t && t(e, i)
                    },
                    error: function(e, t, i) {
                        n && n(e, t, i),
                        window.console && window.console.log(arguments)
                    }
                })
            },
            addProductIdToBH: function(e, t, n) {
                a({
                    url: s.ADD_PRODUCT_TO_BH,
                    cache: !1,
                    data: {
                        productId: e.pid
                    },
                    type: "GET",
                    success: function(e, n, i) {
                        t && t(e, i)
                    },
                    error: function(e, t, i) {
                        n && n(e, t, i),
                        window.console && window.console.log(arguments)
                    }
                })
            },
            getClassifyCate: function(e, t, n) {
                a({
                    url: s.GET_CLASSIFY_CATE,
                    cache: !1,
                    data: e,
                    dataType: "json",
                    type: "POST",
                    jsonRpc: !0,
                    success: function(e, n, i) {
                        t && t(e, i)
                    },
                    error: function(e, t, i) {
                        n && n(e, t, i),
                        window.console && window.console.log(arguments)
                    }
                })
            },
            getRecommendListActiveMsg: function(e, t, n) {
                a({
                    url: s.GET_RECOMMEND_LIST_ACTIVE_MSG,
                    cache: !1,
                    data: e,
                    dataType: "json",
                    type: "POST",
                    jsonRpc: !0,
                    success: function(e, n, i) {
                        t && t(e, i)
                    },
                    error: function(e, t, i) {
                        n && n(e, t, i),
                        window.console && window.console.log(arguments)
                    }
                })
            },
            getServiceText: function(e, t, n) {
                a({
                    url: s.GET_RECOMMEND_LIST_ACTIVE_MSG,
                    cache: !1,
                    data: e,
                    dataType: "json",
                    type: "POST",
                    jsonRpc: !0,
                    success: function(e, n, i) {
                        e && e.length && e[0] && e[0].result ? t && t(e[0].result, i) : window.console && window.console.log(arguments)
                    },
                    error: function(e, t, i) {
                        n && n(e, t, i),
                        window.console && window.console.log(arguments)
                    }
                })
            }
        };
        e.exports = r
    },
    176: function(e, t, n) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var o = n(0)
          , a = i(o)
          , s = n(10)
          , r = (i(s),
        n(89))
          , c = i(r)
          , d = n(77)
          , l = i(d);
        n(209);
        var u = (0,
        a.default)(window)
          , p = {
            init: function() {
                var e = this;
                e.initMenu(),
                e.bindEvent()
            },
            initMenu: function() {
                var e, t = (0,
                a.default)("#J-menu"), n = (0,
                a.default)("li.J-nav-current"), i = t.find("ul"), o = i.width(), s = u.width(), r = n.index();
                if (t.size()) {
                    var d = 0;
                    i.find("li").filter(function(e) {
                        return e <= r
                    }).map(function(e, t) {
                        d += (0,
                        a.default)(t).width()
                    }),
                    e = new c.default(t[0],{
                        scrollX: !0,
                        freeScroll: !1,
                        preventDefaultException: {
                            tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A|SPAN)$/
                        }
                    }),
                    d > s && e.scrollTo(-(o - s), 0)
                }
            },
            bindEvent: function() {
                (0,
                a.default)("body").on("click", "#J-menu a", function(e) {
                    e.preventDefault();
                    var t = (0,
                    a.default)(this)
                      , n = t.attr("href")
                      , i = n.replace(/\.html/, "");
                    n.indexOf("index.php") >= 0 && (i = "special"),
                    "index" != i && (0,
                    l.default)({
                        value: i
                    }),
                    location.href = n
                })
            }
        };
        e.exports = p
    },
    178: function(e, t, n) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function o() {
            (0,
            u.default)(window).resize()
        }
        function a(e) {
            var t = {
                method: "WarehouseRpc.getAreaList"
            }
              , n = function() {};
            f.default.getAreaList(t).then(e, n).catch(n)
        }
        function s(e) {
            if (x && x.length) {
                var t = {
                    areaList: e,
                    recmd: {
                        position: x.attr("data-warehouse"),
                        mars: x.attr("data-parent-code"),
                        name: x.attr("data-province")
                    }
                };
                return (0,
                _.default)(t)
            }
        }
        function r() {
            T ? T.open && T.open({
                hasCart: b > 0
            }) : a(function(e) {
                T = s(e),
                T.open && T.open({
                    hasCart: b > 0
                })
            })
        }
        function c(e) {
            b = e.cartNum
        }
        function d() {
            h.default.on("download-bar", "toggle", o),
            h.default.on("subscribe-bar", "toggle", o),
            h.default.on("pageHeader", "cart-change", c),
            (0,
            u.default)("body").on("click", ".J-warehouse-btn", r)
        }
        n(47),
        n(212);
        var l = n(0)
          , u = i(l)
          , p = n(48)
          , f = i(p)
          , m = n(3)
          , h = i(m)
          , v = n(93)
          , g = i(v)
          , w = n(95)
          , _ = i(w)
          , b = void 0
          , x = void 0
          , T = void 0;
        e.exports = {
            init: function() {
                d(),
                (0,
                g.default)((0,
                u.default)("#J-navbar-header")),
                x = (0,
                u.default)(".J-warehouse-btn")
            },
            showLoading: function(e) {
                e ? (0,
                u.default)("#J-index-loading").css("display", "inline-block") : (0,
                u.default)("#J-index-loading").css("display", "none")
            }
        }
    },
    19: function(e, t, n) {
        "use strict";
        n(50);
        var i = n(51)
          , o = n(3)
          , a = window
          , s = n(45)
          , r = n(0)
          , c = {
            init: function(e) {
                var t = r("body")
                  , n = r(i.fetch()).appendTo(t)
                  , c = r(a);
                e && e.class && n.addClass(e.class),
                t.on("click", ".J-gotop", function() {
                    return a.scrollTo(0, 0),
                    !1
                }),
                c.scroll(s(function() {
                    if (c.scrollTop() > 1280)
                        return void n.show();
                    n.hide()
                }, 1e3)),
                o.on("gotop-cmp", "changePosition", function(e) {
                    r(".J-gotop").css({
                        bottom: e.bottom
                    })
                })
            }
        };
        e.exports = c
    },
    199: function(e, t, n) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        n(33),
        n(210);
        var o = n(224)
          , a = i(o)
          , s = n(225)
          , r = i(s)
          , c = n(223)
          , d = i(c)
          , l = {
            init: function() {
                a.default.init(),
                r.default.init(),
                d.default.init()
            }
        };
        e.exports = l
    },
    200: function(e, t, n) {
        var i = n(1);
        e.exports = new i('{if $operate.items|@count neq 0}\n    {foreach from=$operate.items item=item key=sort}\n        {if $item.operateType == "operate"}\n            <div class="operate J-operate-item" data-id="{$item.code}">\n                {if $item.backgroundPic}\n                <div class="operate-bg">\n                    <img data-original="{$item.backgroundPic}">\n                </div>\n                {/if}\n                <div class="J-process-tip-item operate-inner clearfix">\n                    {foreach from=$item.block item=val key=index}\n                    <div style="float:left;width: {$val.size}%;text-align: center;">\n                        {foreach from=$val.child item=v key=i}\n                        <div data-operate="inner"\n                            data-endtime="{$v.timer.endTime}"\n                            data-eventafter="{$v.timer.eventAfter}"\n                            data-style="{$v.timer.style}"\n                            data-x="{$v.timer.col}"\n                            data-y="{$v.timer.row}"\n                            data-size="{$v.size}"\n                            style="float:left;width: {$v.size}%;text-align: center;"\n                            class="J-operate-inner">\n                            \x3c!--start  extra_data.status: 0 已用 1 已领过 2 已领完--\x3e\n                            <a href="{if ($v.data.extra_data.button.right_button)}javascript:;{else}{$v.data.targetParam}{/if}" \n                                {if ($v.data.extra_data.button.right_button)}data-href="{$v.data.targetParam}"{/if}\n                                class="J-mars-item {if ($v.data.extra_data.status == 0 || $v.data.extra_data.status == 1)}got-coupon{/if}{if ($v.data.extra_data.status == 2)}no-coupon{/if}"\n                                style="width: 100%;height: 100%;display: block;"\n                                mars_exposure_sead="wap_oper_expose"\n                                mars_exposure_module="wap|operates|{$operate.menu_name}|{$operate.menu_id}|今日上线|1|{$v.data.opz_unid}|special_{$sort+1}_{$i+1}"\n                                data-isuniversallink="{$v.data.isDeeplink}"\n                                data-rawurl="{$v.data.raw_url}">\n                                \x3c!--extra_data.coupon_info  判断是否是领券运营位--\x3e\n                                <img {if ($v.data.extra_data.coupon_info)} \n                                        data-left-button="{$v.data.extra_data.button.left_button}" \n                                        data-mid-button="{$v.data.extra_data.button.mid_button}" \n                                        data-right-button="{$v.data.extra_data.button.right_button}" \n                                        data-coupon-image="{$v.data.extra_data.coupon_image}" \n                                        data-coupon-info="{$v.data.extra_data.coupon_info}" \n                                        class="J-operate-coupon" \n                                     {/if} \n                                     {if $operate.openLazyloadingSwitch == 1}src="//ms2-m.vipstatic.com/static/base/img/loading-l-brand-af76d0cd94.png" \n                                        data-img-src="{$v.data.imageUrl}"\n                                     {else}\n                                        src="{$v.data.imageUrl}"\n                                     {/if} \n                                     data-id="{$v.data.opz_unid}" \n                                     style="width: 100%;height: auto;">\n                                <div data-countdown="true">\n                                    <div class="countdown-inner"></div>\n                                </div>\n                                \x3c!--start  extra_data.status: 0 已用 1 已领过 2 已领完--\x3e\n                                <div class="coupon-signet J-coupon-signet"></div>\n                                \x3c!--end  extra_data.status: 0 已用 1 已领过 2 已领完--\x3e\n                            </a>\n                        </div>\n                        {/foreach}\n                    </div>\n                    {/foreach}\n                </div>\n            </div>\n        {else if $item.operateType == \'slider\'}\n            {$sliderType = $item.type}\n            {$sliderTemplate = $item.template}\n            {$displayPart = $item.displayPart}\n            {$contents = $item.contents}\n            {if $sliderTemplate == \'medium\'}\n                {$sliderCls = \'medium\'}\n            {else}\n                {$sliderCls = \'small\'}\n            {/if}\n\n            {if $contents|@count neq 0}\n                {if $sliderType == \'single-product\'}\n                \x3c!--single product 模式--\x3e\n                <div class="operate-slider single-product J-operate-slider {$sliderCls}" data-type="single-product" data-id="{$item.code}">\n                    {if $item.title}<h2>{$item.title|default:\'\'}</h2>{/if}\n                    <div class="J-operate-container operate-container">\n                        <ul class="clearfix">\n                            {foreach $contents as $k => $content}\n                                {if !$content.isLast}\n                                <li>\n                                    <a href="{$content[\'targetParam\']}" class="href"\n                                        mars_sead="index_slideop_{$content[\'targetMethod\']}_{$content[\'oldTargetParam\']}_btn"\n                                        data-show-mars="index_slideop_{$content[\'targetMethod\']}_{$content[\'oldTargetParam\']}_show"\n                                        data-isuniversallink="{$content[\'isDeeplink\']}"\n                                        data-rawurl="{$content[\'raw_url\']}">\n                                        <div class="img border-radius">\n                                            <img data-img-src="{$content[\'pic\']}">\n                                            <div class="bg"></div>\n                                        </div>\n                                        <p class="title">\n                                            {if $displayPart == \'vip_price\'}\n                                                ¥ {$content[\'discountPrice\']}\n                                            {else}\n                                                {$content[\'productName\']}\n                                            {/if}\n                                        </p>\n                                    </a>\n                                </li>\n                                {else}\n                                <li class="more">\n                                    <a href="{$content[\'targetParam\']}" class="href"\n                                        mars_sead="index_slideop_{$content[\'targetMethod\']}_{$content[\'oldTargetParam\']}_btn"\n                                        data-show-mars="index_slideop_{$content[\'targetMethod\']}_{$content[\'oldTargetParam\']}_show"\n                                        data-isuniversallink="{$content[\'isDeeplink\']}"\n                                        data-rawurl="{$content[\'raw_url\']}">\n                                        <div class="img border-radius">\n                                            <div class="center">\n                                                <span>\n                                                    查看全部\n                                                </span>\n                                                <span>\n                                                    MORE\n                                                </span>\n                                            </div>\n                                        </div>\n                                    </a>\n                                </li>\n                                {/if}\n                            {/foreach}\n                        </ul>\n                    </div>\n                </div>\n                {else if $sliderType == \'picture\'}\n                \x3c!--单图模式--\x3e\n                <div class="operate-slider picture J-operate-slider {$sliderCls}" data-type="picture" data-id="{$item.code}">\n                    {if $item.title}<h2>{$item.title|default:\'\'}</h2>{/if}\n                    <div class="operate-container J-operate-container">\n                        <ul class="clearfix operate-single-ul">\n                            {foreach $contents as $k => $content}\n                            <li {if $k==($item.total - 1)}class="more"{/if}>\n                                <a href="{$content[\'targetParam\']}" class="href"\n                                    mars_sead="index_slideop_{$content[\'targetMethod\']}_{$content[\'oldTargetParam\']}_btn"\n                                    data-show-mars="index_slideop_{$content[\'targetMethod\']}_{$content[\'oldTargetParam\']}_show"\n                                    data-isuniversallink="{$content[\'isDeeplink\']}"\n                                    data-rawurl="{$content[\'raw_url\']}">\n                                    <img data-img-src="{$content[\'pic\']}" alt="{$content[\'productName\']}">\n                                    <div class="bg"></div>\n                                </a>\n                            </li>\n                            {/foreach}\n                        </ul>\n                    </div>\n                </div>\n                {/if}\n            {/if}\n        {/if}\n    {/foreach}\n{/if}\n')
    },
    209: function(e, t) {},
    210: function(e, t) {},
    212: function(e, t) {},
    22: function(e, t, n) {
        "use strict";
        function i(e, t) {
            var n = {
                startTime: 0,
                endTime: 0,
                nowTime: 0,
                milliSec: !1,
                interval: 1e3,
                container: null,
                zeroDigit: !0,
                display: !0,
                unitFormat: {
                    day: !1,
                    hour: !1,
                    min: !0,
                    sec: !0
                },
                unitClass: {
                    day: "",
                    hour: "",
                    min: "",
                    sec: ""
                },
                timeStamp: {
                    day: "天",
                    hour: "时",
                    min: "分",
                    sec: "秒"
                },
                timeFormat: !0,
                message: "",
                startTips: "",
                endTips: "",
                stopTips: "",
                block: $("<span></span>"),
                action: "",
                callback: !1,
                callbackFunction: null,
                lastTime: 300,
                lastTimeCallBack: null
            }
              , i = this
              , a = null
              , s = {};
            ("object" == o(arguments[0]) || "object" == o(arguments[1])) && (s = $.extend(s, "object" == o(arguments[0]) ? arguments[0] : arguments[1]));
            var r = $.extend(!0, {}, n, s);
            i.model = r.elem,
            i.init = function() {
                var e = this.setCountDown();
                null != r.container ? i.container = i.model.find(r.container) : i.container = i.model,
                e.startTime && e.startTime > 0 && function t() {
                    var n, o, s = {};
                    o = e.nowTime < e.startTime ? e.startTime - (e.nowTime = e.nowTime === Math.round((new Date).getTime() / 1e3) ? e.nowTime : Math.round((new Date).getTime() / 1e3)) : e.endTime - e.nowTime,
                    i.container.html("");
                    for (var c in r.unitFormat)
                        "day" == c && r.unitFormat[c] && (s.day = r.display && d(o)),
                        "hour" == c && r.unitFormat[c] && (s.hour = r.display && l(o)),
                        "min" == c && r.unitFormat[c] && (s.min = u(o)),
                        "sec" == c && r.unitFormat[c] && (s.sec = p(o)),
                        r.milliSec && "msec" == c && r.unitFormat[c] && (s.msec = f(o));
                    if (e.nowTime < e.startTime)
                        r.startTips && (n = r.startTips);
                    else {
                        if (!(e.endTime >= e.nowTime)) {
                            if (r.stopTips)
                                n = r.stopTips,
                                i.container.html(n);
                            else
                                switch (r.action) {
                                case "defined":
                                    r.callback && "function" == typeof r.callbackFunction && r.callbackFunction.call(i.container);
                                    break;
                                default:
                                    for (var c in s)
                                        s[c] = "00",
                                        r.block.clone().addClass(r.unitClass[c]).html(s[c]).appendTo(i.container),
                                        r.timeStamp && r.block.clone().text(r.timeStamp[c]).appendTo(i.container)
                                }
                            return clearTimeout(a),
                            !1
                        }
                        r.endTips && (n = r.endTips)
                    }
                    if (i.container.html(n),
                    r.timeFormat)
                        for (var c in s)
                            "day" == c && "00" == s[c] || "hour" == c && "00" == s[c] && "00" == s.day || (r.doubleBlock ? "msec" == c ? r.block.clone().addClass(r.unitClass[c]).html(s[c]).appendTo(i.container) : (s[c] += "",
                            r.block.clone().addClass(r.unitClass[c]).html(s[c].charAt(0)).appendTo(i.container),
                            r.block.clone().addClass(r.unitClass[c]).html(s[c].charAt(1)).appendTo(i.container)) : r.block.clone().addClass(r.unitClass[c]).html(s[c]).appendTo(i.container),
                            r.timeStamp && r.block.clone().text(r.timeStamp[c]).appendTo(i.container));
                    else
                        o = parseInt(o) != o && r.interval < 1e3 ? o.toFixed(1) : Math.floor(o),
                        r.block.clone().addClass(r.unitClass.sec).html(o).appendTo(i.container),
                        r.timeStamp && r.block.clone().text(r.timeStamp.sec).appendTo(i.container),
                        "" != r.message && r.block.clone().text(r.message).appendTo(i.container);
                    r.lastTimeCallBack && Math.floor(o) === r.lastTime && r.lastTimeCallBack(),
                    e.nowTime = (new Date).getTime() / 1e3,
                    a = setTimeout(t, r.interval)
                }()
            }
            ,
            i.setCountDown = function() {
                var e = {};
                return e.startTime = isNaN(r.startTime) ? Date.parse(r.startTime.replace(/-/g, "/")) / 1e3 : Math.round(r.startTime),
                e.endTime = isNaN(r.endTime) ? Date.parse(r.endTime.replace(/-/g, "/")) / 1e3 : Math.round(r.endTime),
                e.nowTime = 0 === r.nowTime ? Math.round((new Date).getTime() / 1e3) : Math.round(r.nowTime),
                e.startTime && !r.endTime && !r.nowTime && (e.endTime = e.startTime + e.nowTime),
                e
            }
            ,
            i.clearCountdown = function() {
                clearTimeout(a || 0)
            }
            ;
            var c = function(e, t) {
                return e && t < 10 ? t = "0" + t : t
            }
              , d = function(e) {
                var t = e / 86400;
                return c(r.zeroDigit, Math.floor(t))
            }
              , l = function(e) {
                var t = e / 3600;
                return t %= 24,
                c(r.zeroDigit, Math.floor(t))
            }
              , u = function(e) {
                var t = e / 60 % 60;
                return c(r.zeroDigit, Math.floor(t))
            }
              , p = function(e) {
                var t = e % 60;
                return c(r.zeroDigit, Math.floor(t))
            }
              , f = function(e) {
                var t = 1e3 * e / 100 % 10;
                return Math.floor(t)
            };
            return i.init()
        }
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        e.exports = i
    },
    223: function(e, t, n) {
        "use strict";
        var i = n(0)
          , o = i("body")
          , a = !1
          , s = n(132)
          , r = n(15)
          , c = n(6)
          , d = n(9)()
          , l = n(41)
          , u = n(14)
          , p = n(8)({
            className: "operate-coupon-pop",
            id: "J-operate-coupon-pop"
        })
          , f = n(4)
          , m = {
            getCoupon: function(e) {
                var t = this;
                a || (l.show(),
                a = !0,
                s.getOperateCoupon({
                    coupon_info: e.coupon_info
                }, function(n) {
                    a = !1,
                    l.hide(),
                    t.onCouponSuccess(n, e)
                }, t.showCouponError))
            },
            onCouponSuccess: function(e, t) {
                var n = this;
                if (e && e.ret) {
                    var i = e.message
                      , o = [t.mid_button || "知道了"];
                    switch (e.ret) {
                    case 1:
                        t.coupon_image && (i = '<img src="' + t.coupon_image + '" class="J-get-coupon-image">'),
                        t.target_param && t.left_button && t.right_button && (o = [t.left_button, t.right_button]),
                        n.showTips(i, o, t),
                        t.$parent.addClass("got-coupon");
                        break;
                    case 111:
                        n.goToLogin(t);
                        break;
                    case 100:
                        n.showTips(i, o, t);
                        break;
                    case 10001:
                    case 13330:
                        n.showTips(i, o, t);
                        break;
                    case 13331:
                        t.target_param && t.left_button && t.right_button && (o = [t.left_button, t.right_button]),
                        n.showTips(i, o, t);
                        break;
                    case 13332:
                        n.showTips(i, o, t),
                        t.$parent.addClass("no-coupon");
                        break;
                    case 12e3:
                        n.showTips(i, o, t);
                        break;
                    default:
                        d.open("现在领券人数太多啦<br>先休息一会儿吧！", 3e3)
                    }
                }
            },
            showTips: function(e, t, n) {
                var i = this;
                p.conf({
                    content: e,
                    btns: t,
                    onBtnClick: function(e, i) {
                        var o = t.length;
                        p.close(),
                        1 == o && f("button", "click", "mid_button", n.mid_button),
                        1 == i ? (f("button", "click", "right_button", JSON.stringify({
                            right_button: n.right_button,
                            target_param: n.target_param
                        })),
                        location.href = n.target_param) : 2 == o && f("button", "click", "left_button", n.left_button)
                    }
                }).open(),
                i.imgLoadError()
            },
            showCouponError: function() {
                a = !1,
                l.hide(),
                d.open("网络异常，暂未能领取该券", 3e3)
            },
            goToLogin: function(e) {
                var t = this;
                u.go({
                    usePop: !0,
                    onWinLogin: function(n) {
                        n.success && t.getCoupon(e)
                    },
                    onBeforeJumpLogin: function() {
                        r.setSession("isGetOperateCouponLogin", 1),
                        r.setSession("autoGetCouponData", JSON.stringify(e))
                    }
                })
            },
            imgLoadError: function() {
                i(".J-get-coupon-image").on("error", function() {
                    i(this).attr("src", "//ms2-m.vipstatic.com/static/base/img/loading-failure-6d52948c2e.png")
                })
            },
            bindEvent: function() {
                var e = this;
                o.on("click", ".J-operate-coupon", function(t) {
                    t.stopPropagation(),
                    t.preventDefault();
                    var n = i(this)
                      , o = n.data("coupon-info")
                      , a = n.data("left-button")
                      , s = n.data("mid-button")
                      , r = n.data("right-button")
                      , c = n.data("coupon-image")
                      , d = n.closest("a")
                      , l = d.data("href")
                      , u = {
                        coupon_info: o,
                        left_button: a,
                        mid_button: s,
                        right_button: r,
                        coupon_image: c,
                        target_param: l,
                        $parent: d
                    };
                    e.getCoupon(u)
                })
            },
            init: function() {
                var e = this;
                if (e.bindEvent(),
                "1" === r.getSession("isGetOperateCouponLogin") && "1" === c.getQuery("islogin")) {
                    var t = r.getSession("autoGetCouponData");
                    e.getCoupon(JSON.stringify(t))
                }
                r.removeSession("isGetOperateCouponLogin"),
                r.removeSession("autoGetCouponData")
            }
        };
        e.exports = m
    },
    224: function(e, t, n) {
        "use strict";
        var i = n(0)
          , o = n(10)
          , a = n(6)
          , s = n(29)
          , r = n(22)
          , c = n(293)
          , d = n(134)
          , l = n(77)
          , u = n(155)
          , p = {
            init: function() {
                f.init(),
                this.bindEvent(),
                this.lazyload()
            },
            lazyload: function() {
                var e, t = i(".J-operate-item"), n = !1;
                i(window).on("scroll", function() {
                    n || (e = t.find("img[data-img-src]"),
                    e.length || (n = !0),
                    e.length && e.forEach(function(e) {
                        d.inViewport(i(e), {
                            threshold: 300
                        }) && (i(e).attr("src", i(e).attr("data-img-src")).css("opacity", 1),
                        i(e).removeAttr("data-img-src"))
                    }))
                }),
                i(window).trigger("scroll")
            },
            bindEvent: function() {
                u.init(),
                i("#J-operate .J-process-tip-item").on("click", "a", function(e) {
                    e.preventDefault();
                    var t, n = i(this), r = "javascript:;" === n.attr("href") ? n.data("href") : n.attr("href");
                    if (l({
                        value: "cor"
                    }),
                    s.isWechat()) {
                        if (!a.hasQuery({
                            name: "ad_from",
                            url: r
                        }))
                            return void (document.location = r);
                        t = a.getQuery({
                            name: "ad_from",
                            url: r
                        }),
                        o.set("WAP[ad_from]", t, {
                            expires: 1,
                            path: "/",
                            domain: "vip.com"
                        }),
                        document.location = r
                    } else
                        location.href = r
                })
            }
        }
          , f = {
            init: function() {
                var e = i('[data-operate="inner"]');
                e.length && e.each(function(e, t) {
                    if (i(t).data("endtime")) {
                        var n = i(t)
                          , o = n.find('[data-countdown="true"]')
                          , a = o.find(".countdown-inner")
                          , s = n.data("style").toUpperCase()
                          , r = n.data("x")
                          , c = n.data("y")
                          , d = n.data("size")
                          , l = n.data("eventafter").toUpperCase()
                          , u = Math.floor(n.data("endtime") - Date.now() / 1e3)
                          , p = 1e3 * (u - 8639999)
                          , m = f.getStyleClass(s, r, c, d);
                        if (!m)
                            return void o.remove();
                        u <= 0 ? "VISIBLE" == l ? (o.addClass(m),
                        a.html(f.makeStaticTime(s))) : o.remove() : u > 8639999 ? (o.addClass(m),
                        a.html(f.makeStaticTime(s, !0)),
                        setTimeout(function() {
                            f.doCountDown(a, 8639999, s, l)
                        }, p)) : (o.addClass(m),
                        f.doCountDown(a, u, s, l))
                    }
                })
            },
            doCountDown: function(e, t, n, i) {
                var o = {
                    elem: e,
                    startTime: t,
                    halfwayTime: !1,
                    isDayToHour: !0,
                    unitFormat: {
                        day: !0,
                        hour: !0,
                        min: !0,
                        sec: !0
                    },
                    timeStamp: {
                        day: ":",
                        hour: ":",
                        min: ":",
                        sec: ""
                    },
                    unitClass: {
                        day: "numbers",
                        hour: "numbers",
                        min: "numbers",
                        sec: "numbers"
                    },
                    action: "defined",
                    callback: !0,
                    callbackFunction: function() {
                        "VISIBLE" == i && e.html(f.makeStaticTime(n))
                    }
                };
                "WHITE" == n || "BLACK" == n ? (o.unitFormat.msec = !0,
                o.timeStamp = {
                    day: "天",
                    hour: "时",
                    min: "分",
                    sec: "秒"
                },
                o.unitClass.msec = "millisecond",
                o.milliSec = !0,
                o.interval = 100,
                o.doubleBlock = !0,
                o.isDayToHour = !1) : "NORMAL" != n ? (o.unitFormat.msec = !0,
                o.unitFormat.day = !1,
                o.timeStamp = {
                    hour: "时",
                    min: "分",
                    sec: "秒"
                },
                o.unitClass.msec = "millisecond",
                o.milliSec = !0,
                o.interval = 100,
                o.doubleBlock = !0) : o.unitFormat.day = !1,
                !isNaN(o.startTime) && o.startTime > 0 && new r(o)
            },
            getPositionClass: function(e, t) {
                return t = t.toLowerCase(),
                "center" == t && (t = "vertical-center"),
                " countdown-" + e.toLowerCase() + " countdown-" + t
            },
            getStyleClass: function(e, t, n, i) {
                var o = "";
                if (!i || i < 40)
                    o = "";
                else if (i < 65)
                    o = "countdown-normal";
                else
                    switch (e) {
                    case "NORMAL":
                        o = "countdown-normal";
                        break;
                    case "WHITE":
                    case "WHITE_HOUR":
                        o = "countdown-custom countdown-white";
                        break;
                    case "BLACK":
                    case "BLACK_HOUR":
                        o = "countdown-custom countdown-black";
                        break;
                    default:
                        o = "countdown-default"
                    }
                return o.indexOf("countdown-normal") > -1 && (o += f.getPositionClass(t, n)),
                o
            },
            makeStaticTime: function(e, t) {
                return c.fetch({
                    s: e,
                    isMax: t
                })
            }
        };
        e.exports = p
    },
    225: function(e, t, n) {
        "use strict";
        function i(e) {
            var t = (e.find("li").width() + 1) * e.find("li").length
              , n = e.find("ul");
            t += parseInt(n.css("padding-left"), 10) + parseInt(n.css("padding-right"), 10) + 2,
            n.css("width", t)
        }
        var o = n(0)
          , a = (n(10),
        n(134))
          , s = n(77)
          , r = {
            _lazyload: function(e) {
                var t, n = !1;
                e.on("scroll", function() {
                    n || (t = e.find("img[data-img-src]"),
                    t.length || (n = !0),
                    t && t.length && t.forEach(function(t) {
                        a.inViewport(o(t), {
                            container: e,
                            threshold: 20
                        }) && (o(t).attr("src", o(t).attr("data-img-src")).css("opacity", 1),
                        o(t).removeAttr("data-img-src").siblings(".bg").remove(),
                        o(t).parent().removeClass("border-radius"))
                    }))
                }),
                e.trigger("scroll")
            },
            bindEvent: function() {
                o("div.J-operate-slider .J-operate-container").on("click", "a", function(e) {
                    e.preventDefault();
                    var t = o(this)
                      , n = t.attr("href");
                    s({
                        value: "cor"
                    }),
                    location.href = n
                })
            },
            init: function() {
                var e = this;
                o.each(o("div.J-operate-slider .J-operate-container"), function(t, n) {
                    i(o(n)),
                    e._lazyload(o(n))
                }),
                e.bindEvent()
            }
        };
        e.exports = r
    },
    23: function(e, t, n) {
        "use strict";
        var i = n(10)
          , o = n(48)
          , a = n(87)
          , s = n(88)
          , r = n(5)
          , c = n(52)
          , d = {
            change: function(e, t) {
                var n = {
                    m: "ajax",
                    act: "select_warehouse",
                    wh: e.warehouse,
                    p_area: e.area
                };
                o.changeWareHouse(n, function(e) {
                    c.changeWHSync(function() {
                        t && t(e)
                    })
                })
            },
            autoChange: function(e, t) {
                var n = this;
                a.location(function(i) {
                    var o = "";
                    try {
                        o = i.content.address_detail.province.replace(/省|市/, "")
                    } catch (e) {
                        window.console && window.console.log(e)
                    }
                    if (s[o]) {
                        var a = {
                            warehouse: s[o].position,
                            area: o,
                            address_detail: i.content.address_detail
                        };
                        n.change(a, function(t) {
                            e(a)
                        })
                    } else
                        t && t(arguments)
                }, function() {
                    t && t(arguments)
                })
            },
            getWarehouse: function() {
                return r.isWeixin() ? decodeURIComponent(i.get("WEIXIN_WAREHOUSE") || i.get("WAP[p_wh]") || "") : decodeURIComponent(i.get("WAP[p_wh]") || "")
            },
            getProvince: function() {
                return r.isWeixin() ? decodeURIComponent(i.get("WEIXIN_PROVINCE") || i.get("WAP[p_area]") || "") : decodeURIComponent(i.get("WAP[p_area]") || "")
            },
            getProvinceId: function() {
                return r.isWeixin() ? decodeURIComponent(i.get("WEIXIN_PROVINCEID") || i.get("m_vip_province") || "") : decodeURIComponent(i.get("m_vip_province") || "")
            },
            getConsumeer: function() {
                return r.isWeixin() ? decodeURIComponent(i.get("WEIXIN_wap_consumer") || i.get("wap_consumer") || "") : decodeURIComponent(i.get("wap_consumer") || "")
            },
            isNeverChange: function() {
                return !!i.get("WAP[first_view]") && (i.remove("WAP[first_view]", {
                    path: "/"
                }),
                !0)
            }
        };
        e.exports = d
    },
    24: function(e, t) {
        function n(e) {
            return null != e && "object" == typeof e
        }
        e.exports = n
    },
    25: function(e, t, n) {
        "use strict";
        n(53)
    },
    26: function(e, t, n) {
        function i(e) {
            return null == e ? void 0 === e ? c : r : d && d in Object(e) ? a(e) : s(e)
        }
        var o = n(13)
          , a = n(42)
          , s = n(43)
          , r = "[object Null]"
          , c = "[object Undefined]"
          , d = o ? o.toStringTag : void 0;
        e.exports = i
    },
    27: function(e, t, n) {
        "use strict";
        var i = n(109)
          , o = n(57)
          , a = n(5)
          , s = n(6)
          , r = {
            init: function(e, t) {
                var n = this;
                a.isWeixin() && (e = e || {},
                o.share({
                    img: e.img || "//ms2-m.vipstatic.com/static/base/img/default-wx-share-3f25d20336.png",
                    width: "310",
                    title: e.title || "唯品会超值热卖",
                    fTitle: e.fTitle || "唯品会超值热卖",
                    desc: e.desc || "唯品会超值热卖，早十晚八上新，国内外正品折扣，千万大牌抢不停",
                    url: e.url || location.href,
                    callback: function(i, o, a) {
                        t && t(),
                        n.addShareLog(i, e, a)
                    }
                }))
            },
            addShareLog: function(e, t, n) {
                if (e && e.errMsg && (e.errMsg.indexOf("confirm") >= 0 || -1 !== e.errMsg.indexOf("ok"))) {
                    var o = {
                        url: t.url || location.href,
                        type: n,
                        sign: t.sign || "",
                        recid: t.recid || 0,
                        pid: t.pid || 0,
                        bid: t.bid || 0,
                        mid: t.mid || 1
                    };
                    i.addShareLog(o)
                }
            },
            isFromShare: function() {
                return 1 === {
                    singlemessage: 1,
                    groupmessage: 1,
                    timeline: 1,
                    wechat: 1
                }[s.getQuery("from")]
            },
            newIsFromShare: function() {
                return !(!s.getQuery("from") && !s.getQuery("msns"))
            },
            isFromShareOrEnt: function() {
                return !(!s.getQuery("from") && "order" !== s.getQuery("ent") && "tms" !== s.getQuery("ent"))
            }
        };
        e.exports = r
    },
    28: function(e, t, n) {
        "use strict";
        n(65);
        var i = n(66)
          , o = n(0)
          , a = function(e) {
            var t, n, a, s;
            return e = e || o("body"),
            {
                show: function(r) {
                    var c = {
                        color: "#fff",
                        text: "100%正品保证",
                        position: "absolute"
                    };
                    o.extend(c, r),
                    c.text !== n && (n = c.text,
                    t = o(i.fetch({
                        text: c.text
                    }))),
                    c.color !== a && (a = c.color,
                    t.css("color", c.color)),
                    c.position !== s && (s = c.position,
                    t.css("position", c.position)),
                    e.append(t)
                },
                hide: function() {
                    t.remove()
                }
            }
        };
        e.exports = a
    },
    293: function(e, t, n) {
        var i = n(1);
        e.exports = new i('{if ($s == \'NORMAL\')}\n    <span class="numbers">{if $isMax}23{else}00{/if}</span>\n    <span>:</span>\n    <span class="numbers">{if $isMax}59{else}00{/if}</span>\n    <span>:</span>\n    <span class="numbers">{if $isMax}59{else}00{/if}</span>\n{else if ($s == \'WHITE\' || $s ==  \'BLACK\')}\n    <span class="numbers">{if $isMax}9{else}0{/if}</span>\n    <span class="numbers">{if $isMax}9{else}0{/if}</span>\n    <span>天</span>\n    <span class="numbers">{if $isMax}2{else}0{/if}</span>\n    <span class="numbers">{if $isMax}3{else}0{/if}</span>\n    <span>时</span>\n    <span class="numbers">{if $isMax}5{else}0{/if}</span>\n    <span class="numbers">{if $isMax}9{else}0{/if}</span>\n    <span>分</span>\n    <span class="numbers">{if $isMax}5{else}0{/if}</span>\n    <span class="numbers">{if $isMax}9{else}0{/if}</span>\n    <span>秒</span>\n    <span class="millisecond">{if $isMax}9{else}0{/if}</span>\n{else}\n    <span class="numbers">{if $isMax}2{else}0{/if}</span>\n    <span class="numbers">{if $isMax}3{else}0{/if}</span>\n    <span>时</span>\n    <span class="numbers">{if $isMax}5{else}0{/if}</span>\n    <span class="numbers">{if $isMax}9{else}0{/if}</span>\n    <span>分</span>\n    <span class="numbers">{if $isMax}5{else}0{/if}</span>\n    <span class="numbers">{if $isMax}9{else}0{/if}</span>\n    <span>秒</span>\n    <span class="millisecond">{if $isMax}9{else}0{/if}</span>\n{/if}')
    },
    295: function(e, t, n) {
        "use strict";
        function i() {
            var e = c("#J-slider")
              , t = c("#J-btns").find("i")
              , n = e.find(".J-content-item").length;
            return new l(e[0],{
                startSlide: 0,
                continuous: !0,
                auto: 4e3,
                callback: function(i, o) {
                    var a = void 0
                      , s = c(o).find("img")
                      , r = i;
                    2 === n && i >= n && (r = i - n),
                    s.length > 0 && (a = s.attr("data-original")),
                    a && s.attr("src", a),
                    t.eq(r).addClass("on").siblings().removeClass("on"),
                    e.find("a").removeClass("active").eq(i).addClass("active")
                }
            })
        }
        function o(e) {
            var t = parseInt(e.attr("data-height"), 10) / 2
              , n = parseInt(e.attr("data-width"), 10) / 2;
            return t * (window.wapParams.clientWidth / n)
        }
        function a(e) {
            var t = c(".J-operation-slider");
            t.show().css({
                display: "block",
                height: e
            }),
            t.find(".J-content-item a").css({
                display: "block",
                height: e
            })
        }
        var s = n(77)
          , r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(s);
        n(368);
        var c = n(0)
          , d = n(29)
          , l = n(161)
          , u = n(10)
          , p = n(6)
          , f = n(155)
          , m = {
            init: function() {
                var e = c("#J-slider .J-content-item").eq(0);
                0 !== e.length && (a(o(e)),
                i(),
                this.bindEvent())
            },
            bindEvent: function() {
                f.init(),
                c("#J-slider").on("click", "a", function(e) {
                    e.preventDefault();
                    var t = c(this)
                      , n = void 0
                      , i = t.attr("href");
                    if ((0,
                    r.default)({
                        value: "adv"
                    }),
                    d.isWechat()) {
                        if (!p.hasQuery({
                            name: "ad_from",
                            url: i
                        }))
                            return void (document.location = i);
                        n = p.getQuery({
                            name: "ad_from",
                            url: i
                        }),
                        u.set("WAP[ad_from]", n, {
                            expires: 1,
                            path: "/",
                            domain: "vip.com"
                        }),
                        document.location = i
                    } else
                        location.href = i
                })
            }
        };
        e.exports = m
    },
    298: function(e, t, n) {
        "use strict";
        function i(e) {
            e.each(function() {
                var e = d(this);
                e.html(v.cal(e.attr("data-now"), e.attr("data-to")))
            })
        }
        function o(e, t, n) {
            u.getBrandList(e, function(i, o) {
                i && i.length ? (i = i[0],
                i.error ? n() : i.result && i.result.items && i.result.items.brands && i.result.items.brands.length ? (t({
                    serverTime: new Date(o.getResponseHeader("Date")).getTime(),
                    brands: i.result.items.brands,
                    f: _,
                    isWeixin: p.isWeixin(),
                    tsift: i.result.items.tsift,
                    currentMenuId: s.attr("data-current-mid"),
                    currentMenuName: s.attr("data-current-mname"),
                    menu_mars: i.result.menu_mars
                }),
                a(e, i.result)) : t()) : n()
            }, function() {
                n()
            })
        }
        function a(e, t) {
            clearTimeout(c),
            c = setTimeout(function() {
                for (var n = t.items.brands, i = 0, o = n.length; i < o; i++) {
                    var a, s;
                    0 == n[i].special_field ? (a = "wap_" + t.menu_mars + "_brandpos_expose",
                    s = "wap|brands|" + t.menu_name + "|" + t.menu_id + "|今日上线|1|" + n[i].brand_id + "|" + e.params.np + "-" + (i + 1)) : n[i].special_field > 0 && n[i].special_field < 4 && (a = "wap_" + t.menu_mars + "_specialpos_expose",
                    s = "wap|special|" + t.menu_name + "|" + t.menu_id + "|今日上线|1|" + n[i].brand_id + "|" + e.params.np + "-" + (i + 1),
                    f("img", "exposure", a, s))
                }
                f("img", "exposure", a, s)
            }, 5e3)
        }
        n(371);
        var s, r, c, d = n(0), l = n(40), u = n(412), p = (n(10),
        n(5)), f = n(4), m = n(512), h = n(78), v = n(154), g = n(155), w = n(77), _ = l.get(), b = location.pathname.replace("/", "") || "index.html", x = {
            initBrandList: function() {
                r = h({
                    page: 2,
                    pageSize: 20,
                    container: s,
                    template: m,
                    dataRequestHandler: function(e, t, n, i) {
                        o({
                            method: "getBrandList",
                            params: {
                                page: b,
                                np: e,
                                ep: t
                            }
                        }, n, i)
                    },
                    onBeforeRequest: function(e) {
                        e.loadingDom.html("100% 正品保证")
                    },
                    onRequested: function(e) {
                        e.error || e.data ? e.loadingDom.html('<a href="javascript:void(0)" class="J-view-morebrand">点击</a>查看更多在售品牌') : (e.loadingDom.html("早10晚8，更多特卖，敬请期待！"),
                        this.dataRequestHandler = null)
                    },
                    onRended: function(e) {
                        i(d(".J-brand-leavetime", e.element))
                    }
                }),
                r.init()
            },
            bindEvent: function() {
                d("body").delegate(".J-view-morebrand", "click", function(e) {
                    d(window).trigger("scroll")
                }).on("click", ".J-u-brand a", function(e) {
                    e.preventDefault();
                    var t = d(this).attr("href");
                    w({
                        value: "brand"
                    }),
                    location.href = t
                }),
                g.init()
            },
            lazyLoad: function() {
                d("img[data-original]", s).lazyload({
                    threshold: 100
                })
            },
            init: function() {
                s = d("#J-list-view"),
                this.lazyLoad(),
                this.initBrandList(),
                this.bindEvent(),
                i(d(".J-first-brandlist .J-brand-leavetime"))
            }
        };
        e.exports = x
    },
    30: function(e, t, n) {
        function i(e) {
            return "symbol" == typeof e || a(e) && o(e) == s
        }
        var o = n(26)
          , a = n(24)
          , s = "[object Symbol]";
        e.exports = i
    },
    31: function(e, t, n) {
        "use strict";
        function i(e) {
            b(x, function() {
                if (p = JSON.parse(encodeCpsLink()),
                void 0 !== p.cps_link && "" !== p.cps_link) {
                    var t, n = p.cps_link;
                    "special" === y && (t = v.setQuery({
                        url: location.href,
                        name: "mst_page_type",
                        value: encodeURIComponent("guide")
                    })),
                    h.isWechat() && (t = v.setQuery({
                        url: t,
                        name: "from",
                        value: encodeURIComponent("wechat")
                    })),
                    n = v.setQuery({
                        url: n,
                        name: "desturl",
                        value: encodeURIComponent(t)
                    }),
                    p.cps_link = n
                }
                e && e()
            }, function() {
                e && e()
            })
        }
        function o() {
            $ = window.VIP && window.VIP.share && window.VIP.share.getId && window.VIP.share.getId() || 0,
            /order-paycompleted.html/.test(k) && C && ($ = C),
            (/order-detail.*/.test(k) || /user-order-detail-list.*/.test(k) && C) && ($ = C)
        }
        function a(e) {
            var t;
            t = "[object Array]" === Object.prototype.toString.call(e) ? e[Math.floor(Math.random() * e.length)] : e;
            for (var n in f)
                t = t.split("{" + n + "}").join(f[n] || "");
            return t
        }
        function s(e) {
            for (var t, n = 0, i = e.length; n < i; n++)
                if ("weixin" === e[n].channel) {
                    t = e[n];
                    break
                }
            t && (T = {
                img: a(t.share_image),
                title: a(t.share_title),
                fTitle: a(t.share_title),
                url: a(t.share_url),
                desc: a(t.share_content)
            })
        }
        function r(e) {
            if (S[y] && $) {
                var t = {
                    plat_type: "wap",
                    share_type: S[y],
                    id: $
                };
                "paySuccess" !== y && "order-detail" !== y || (t.extendInfo = JSON.stringify({
                    url_config: {
                        arg1: f.brand_name,
                        arg2: f.product_name,
                        arg3: f.group_price
                    }
                })),
                g.getMcp(t, function(t) {
                    1 === t.code && t.data && t.data.share_channels ? (s(t.data.share_channels),
                    e()) : e()
                }, function() {
                    e()
                })
            } else
                e()
        }
        function c() {
            switch (y) {
            case "brand":
            case "preheating-brand":
                E.url = p && p.cps_link || T.url,
                E.title = T.title || f.brand_name,
                E.fTitle = T.fTitle || f.brand_name,
                E.desc = T.desc || a("{brand_name}超低价折扣热卖！快来抢购吧"),
                E.img = f.img;
                break;
            case "product":
            case "preheating-product":
                E.url = p && p.cps_link || T.url,
                E.title = T.title || f.product_name,
                E.fTitle = T.fTitle || f.product_name,
                E.desc = T.desc || a("仅售{vip_price}元 ！{brand_name}{product_name}"),
                E.img = f.img;
                break;
            case "special":
                p && p.cps_link ? E.url = p.cps_link : T.url ? E.url = T.url : E.url = v.setQuery({
                    url: location.href,
                    name: "mst_page_type",
                    value: encodeURIComponent("guide")
                }),
                E.title = T.title || document.title,
                E.fTitle = T.fTitle || document.title,
                E.desc = T.desc || "全场超低价折扣热卖！买买买",
                E.img = T.img;
                break;
            case "paySuccess":
            case "order-detail":
                E.url = J,
                E.title = T.title || document.title,
                E.fTitle = T.fTitle || document.title,
                E.desc = T.desc || "全场超低价折扣热卖！买买买",
                E.img = T.img || f.img;
                break;
            default:
                E.url = p && p.cps_link
            }
            d(),
            _.init(E, function() {
                p && shareSuccsss(0),
                "paySuccess" === y ? w.emit("group-buy", "set-share-mars") : "order-detail" === y && w.emit("order-detail", "set-share-mars")
            })
        }
        function d() {
            "paySuccess" !== y && "order-detail" !== y || w.emit("group-buy", "show-btn")
        }
        function l() {
            r(function() {
                f.isWxk || I ? i(function() {
                    c()
                }) : c()
            })
        }
        function u() {
            f = {
                isWxk: m("#J-wxs-iswxk").val(),
                brand_name: m("#J-wxs-brandname").val(),
                product_name: m("#J-wxs-productname").val(),
                brand_id: m("#J-wxs-brandid").val(),
                product_id: m("#J-wxs-productid").val(),
                one_level_category_name: m("#J-wxs-onelcn").val(),
                two_level_category_name: m("#J-wxs-twolcn").val(),
                three_level_category_name: m("#J-wxs-threelcn").val(),
                vip_price: m("#J-wxs-vipprice").val(),
                market_price: m("#J-wxs-marketprice").val(),
                pms_activetips: m("#J-wxs-pmsactivetips").val(),
                agio: m("#J-wxs-agio").val(),
                mobile_special_price: m("#J-wxs-msprice").val(),
                pc_show_from: m("#J-wxs-pcshowfrom").val(),
                mobile_show_from: m("#J-wxs-mshowfrom").val(),
                pc_mobile_show_diff: m("#J-wxs-pcmshowdiff").val(),
                group_price: m("#J-group-price").val(),
                img: m("#J-wxs-img").val()
            }
        }
        var p, f, m = n(0), h = n(29), v = n(6), g = n(37), w = n(3), _ = n(27), b = n(54), x = "//ms.vipstatic.com/union/cps.js", T = {}, y = "", $ = "", k = location.pathname, S = {
            brand: "schedule",
            "preheating-brand": "schedule",
            product: "product",
            "preheating-product": "product",
            paySuccess: "subject",
            "order-detail": "subject",
            special: "subject"
        }, E = {
            img: "",
            title: "",
            fTitle: "",
            url: "",
            desc: ""
        }, C = "", J = "", I = !1, P = {
            init: function(e, t) {
                h.isWechat() && (y = e,
                t && t.resetConfig && (C = t.groupBuyShareId,
                J = t.groupBuyShareUrl,
                I = t.isGroupBuy),
                u(),
                setTimeout(function() {
                    o(),
                    l()
                }, 0))
            }
        };
        e.exports = P
    },
    33: function(e, t) {},
    331: function(e, t, n) {
        "use strict";
        var i = (n(54),
        window)
          , o = {
            initAdmaster: function() {
                if ("mlogin.vip.com" != location.hostname) {
                    var e = i._smq || [];
                    e.push(["_setAccount", "63e2363", new Date]),
                    e.push(["pageview"]),
                    i._smq = e;
                    var t = document.createElement("script");
                    t.type = "text/javascript",
                    t.async = !0,
                    t.src = "//ms.vipstatic.com/vtm/vtm_config_res/prod/1415348575740_js_core.js";
                    var n = document.getElementsByTagName("script")[0];
                    n.parentNode.insertBefore(t, n)
                }
            }
        };
        e.exports = o
    },
    332: function(e, t, n) {
        var i = n(1);
        e.exports = new i('{if $ads.items.topAdscount}\n<div class="u-adbanner J-operation-slider" style="display: none;">\n    <div class="u-adbanner-cont" id="J-slider">\n        <ul class="clearfix">\n            {foreach name=index_ads from=$ads.items.topAds item=ad key=index}\n            <li class="J-content-item" data-width="{$ad.width}" data-height="{$ad.height}">\n                <a href="{$ad.url}" class="J-mars-item {if $index eq 0}active{/if}"\n                    data-isuniversallink="{$ad.isDeeplink}"\n                    data-rawurl="{$ad.raw_url}"\n                    data-index="{$smarty.foreach.index_ads.index}"\n                    data-href="#"\n                    data-showtime="{$ad.showtime}"\n                    {if $ad.target eq 1}target="_blank"{/if}\n                    mars_exposure_sead="wap_adv_expose"\n                    mars_exposure_module="wap|adverts|{$menus.current.name}|{$menus.current.id}|全部|0|{$ad.ad_unid}">\n                    <img class="J-content-img" src="" data-original="{$ad.imgFullPath}" data-id="{$ad.ad_unid}">\n                </a>\n            </li>\n            {/foreach}\n        </ul>\n    </div>\n    <div class="u-imgcount" id="J-btns" {if $ads.items.topAdscount == 1}style="display:none"{/if}>\n        {foreach from=$ads.items.topAds item=ad name=ads}\n        <i class="J-btn-item{if $smarty.foreach.ads.iteration eq 1} on{/if}"></i>\n        {/foreach}\n    </div>\n</div>\n{/if}\n')
    },
    335: function(e, t, n) {
        var i = n(1);
        e.exports = new i('{$brands = $brandList.items.brands}\n{$currentMenuName = $brandList.menu_name}\n{$currentMenuId = $brandList.menu_id}\n{$menu_mars = $brandList.menu_mars}\n{$isWeixin = $brandList.isWeixin}\n{$tsift = $brandList.items.tsift}\n<div class="u-brand-wrap">\n    <div class="u-brand-list">\n        <div class="u-module-tit">今日特卖 · 每天早10点 晚8点上新</div>\n        <div id="J-list-view" data-current-mid="{$currentMenuId}" data-current-mname="{$currentMenuName}">\n            <div class="J-first-brandlist">\n                {foreach from=$brands item=item key=index}\n                {if $item.isOperation == 1}\n                \x3c!--运营位--\x3e\n                <div class="operate" data-id="{$item.code}">\n                    <div class="J-process-tip-item clearfix">\n                        {foreach from=$item.operationZones.block item=val}\n                        <div style="float:left;width:{$val.size}%;text-align: center;">\n                            {foreach from=$val.child item=v key=i}\n                            <div data-operate="inner" data-endtime="{$v.timer.endTime}" \n                                data-eventafter="{$v.timer.eventAfter}" data-style="{$v.timer.style}" \n                                data-x="{$v.timer.col}" data-y="{$v.timer.row}" data-size="{$v.size}" \n                                style="float:left;width:{$v.size}%;text-align:center;">\n                                <a href="{$v.data.targetParam}" class="J-mars-item" style="width: 100%;height: 100%;display: block;" \n                                    mars_exposure_sead="wap_oper_expose" mars_exposure_module="wap|operates|{$currentMenuName}|{$currentMenuId}|今日上线|{$tsift+1}|{$v.data.opz_unid}|usual_{$index+1}_{$i+1}" \n                                    data-isuniversallink="{$v.data.isDeeplink}" data-rawurl="{$v.data.raw_url}">\n                                    <img src="//ms2-m.vipstatic.com/static/base/img/loading-l-brand-af76d0cd94.png" data-original="{$v.data.imageUrl}" \n                                        data-id="{$v.data.opz_unid}" style="width: 100%;height: auto;">\n                                    <div data-countdown="true">\n                                        <div class="countdown-inner">\n                                        </div>\n                                    </div>\n                                </a>\n                            </div>\n                            {/foreach}\n                        </div>\n                        {/foreach}\n                    </div>\n                </div>\n                {else}\n                <div class="u-brand J-u-brand">\n                    <div class="p-relative">\n                        <a href="{$item.detailurl}" data-isuniversallink="{$item.isDeeplink}" \n                            data-rawurl="{$item.raw_url}" class="u-brand-pic J-mars-item" \n                            mars_sead="wap_{$menu_mars}_{if $item.special_field == 0}brandpos_{else if $item.special_field > 0 && $item.special_field < 4}specialpos_{/if}click" \n                            data_mars="1-{$index+1}" mars_exposure_sead="wap_brand_expose" \n                            mars_exposure_module="wap|{if $item.special_field == 0}brands{else if $item.special_field > 0 && $item.special_field < 4}specials{/if}|{$currentMenuName}|{$currentMenuId}|今日上线|{$tsift+1}|{$item.brand_id}|usual_{$index+1}_1">\n                            <img src="//ms2-m.vipstatic.com/static/base/img/loading-l-brand-af76d0cd94.png" data-original="{$item.mobile_image_one}" data-onerror="{$item.mobile_image_two}" \n                                data-brandid="{$item.brand_id}" class="brand-mar-star">\n                        </a>\n\n                        {if $item.banner_image_url}\n                        <div class="activity-mark {if $item.icon && $item.iconPosition == 1}left{/if}">\n                            <img data-original="{$item.banner_image_url}">\n                        </div>\n                        {/if}\n\n                        {if $item.iconPosition != 0 && $item.icon}\n                        <div class="corner-mark\n                            {if $item.iconPosition == 1}top-left\n                            {elseif $item.iconPosition == 2}top-right\n                            {elseif $item.iconPosition == 3}bottom-left\n                            {elseif $item.iconPosition == 4}bottom-right\n                            {else}hide{/if}">\n                            <img data-original="{$item.icon}">\n                        </div>\n                        {/if}\n\n                        {if $item.pms_activetips}\n                        <div class="u-brand-pms">\n                            {$item.pms_activetips}\n                        </div>\n                        {/if}\n                    </div>\n                    <div class="u-brand-msg clearfix">\n                        <p class="u-brand-name">\n                            {if $item.agio}<span class="u-brand-discount">{$item.agio}</span>{/if}{$item.brand_name}\n                        </p>\n                        <div class="J-brand-leavetime u-brand-time" data-now="{$serverTime}" data-to="{$item.sell_time_to * 1000}"></div>\n                    </div>\n                </div>\n                {/if}\n                {/foreach}\n            </div>\n        </div>\n    </div>\n</div>\n')
    },
    336: function(e, t, n) {
        var i = n(1);
        e.exports = new i('{if $menus.showMenu}\n<div class="main-menu">\n    <div class="nav-index" id="J-menu">\n\t    <ul class="equal-table clearfix">\n\t        {foreach from=$menus.items item=menu}\n\t        <li {if $menu.nav_current}class="J-nav-current nav-current"{/if}>\n\t            <a href="{$menu.tag}" mars_sead="{$menu.tracking}"> <span>{$menu.name}</span> </a>\n\t        </li>\n\t        {/foreach}\n\t    </ul>\n    </div>\n</div>\n{/if}\n')
    },
    338: function(e, t, n) {
        var i = n(1);
        e.exports = new i('{if $nav.showNav}\n    {if $nav.enableSearchAbtest}\n        {if $nav.showAppNav}\n            <div class="page-header">\n                <header class="app-header clearfix">\n                    <div class="app-header-location">当前收货地址：\n                        <a href="javascript:;" class="J-warehouse-btn" rel="area" mars_sead="home_topnav_rovince_btn"\n                        data-province="{$nav.recommendAddress.province}"\n                        data-parent-code="{$nav.recommendAddress.parent_code}"\n                        data-warehouse="{$nav.recommendAddress.warehouse}">\n                            <span class="J-warehouse-txt warehouse-txt">{$nav.recommendAddress.p_area}</span><span\n                                    class="icon-arrow-down"></span>\n                        </a>\n                    </div>\n                    <div id="J-index-loading" class="index-loading"></div>\n                </header>\n            </div>\n        {else}\n            <div class="page-header">\n                <header class="header normal-header">\n                    <div class="header-left">\n                        {if $nav.showLogo}\n                            <div class="header-logo">\n                                <a href="index.html" class="icon-new-logo" mars_sead="nav_home_btn"></a>\n                            </div>\n                        {/if}\n                        <div class="header-location">\n                            <a href="javascript:;" class="J-warehouse-btn" rel="area" mars_sead="home_topnav_rovince_btn"\n                            data-province="{$nav.recommendAddress.province}"\n                            data-parent-code="{$nav.recommendAddress.parent_code}"\n                            data-warehouse="{$nav.recommendAddress.warehouse}">\n                                <span>{$nav.recommendAddress.p_area}</span>\n                                <i class="icon-arrow-down"></i>\n                            </a>\n                        </div>\n                    </div>\n                    <div class="header-title">\n                        {if $nav.showSearchIcon}\n                            <a href="{if $nav.classifyUrl}{$nav.classifyUrl}{else}classify.html{/if}" \n                                mars_sead="brand-search_btn" \n                                class="header-search {if !$nav.searchTips.show_word}text-align-left{/if}">\n                                <i class="icon-search"></i>\n                                {if $nav.searchTips.show_word}\n                                    {$nav.searchTips.show_word}\n                                {/if}\n                            </a>\n                        {/if}\n                    </div>\n                    {if $nav.showUserIcon}\n                    <div class="header-right">\n                        <a href="//m.vip.com/user.html" mars_sead="index-user-service_btn">\n                            <i class="icon-member"></i>\n                        </a>\n                    </div>\n                    {/if}\n\n                    <div id="J-index-loading" class="index-loading"></div>\n                </header>\n            </div>\n        {/if}\n    {else}\n        {if $nav.showNav}\n            {if $nav.showAppNav}\n                <header class="e-channel-header clearfix">\n                    <div class="e-channel-location">当前收货地址：\n                        <a href="javascript:;" class="J-warehouse-btn" rel="area" mars_sead="home_topnav_rovince_btn"\n                        data-province="{$nav.recommendAddress.province}"\n                        data-parent-code="{$nav.recommendAddress.parent_code}"\n                        data-warehouse="{$nav.recommendAddress.warehouse}">\n                            <span class="J-warehouse-txt warehouse-txt">{$nav.recommendAddress.p_area}</span><span\n                                    class="u-icon-px icon-arrow-down" data-changestyle="i_down_arrow"></span>\n                        </a>\n                    </div>\n                    <div id="J-index-loading" class="index-loading"></div>\n                </header>\n            {else}\n                <div class="u-header-wrap">\n                    <div class="header-placeholder" id="J-header-placeholder"></div>\n                    <header class="u-header J-u-header">\n                        {if $nav.showUserIcon}\n                            <div class="u-hd-left">\n                                <a class="J-user-center-link" href="//m.vip.com/user.html" mars_sead="index-user-service_btn">\n                                <span class="u-icon-px icon-member">\n                                    {if $nav.showRedDot}\n                                        <i class="u-icon-px icon-heart-ed i-hd-reddot"></i>\n                                    {/if}\n                                </span>\n                                </a>\n                            </div>\n                        {/if}\n                        <div class="u-hd-logolocation {if !$nav.showLogo}u-hd-logolocation-2{/if}">\n                            {if $nav.showLogo}\n                                <div class="u-hd-logo">\n                                    <a href="index.html" class="u-icon-px icon-new-logo" mars_sead="nav_home_btn"></a>\n                                </div>\n                            {/if}\n                            <div class="u-hd-location">\n                                <a href="javascript:;" class="J-warehouse-btn" rel="area" mars_sead="home_topnav_rovince_btn"\n                                data-province="{$nav.recommendAddress.province}"\n                                data-parent-code="{$nav.recommendAddress.parent_code}"\n                                data-warehouse="{$nav.recommendAddress.warehouse}">\n                                    <span class="J-warehouse-txt warehouse-txt">{$nav.recommendAddress.p_area}</span><span\n                                            class="u-icon-px icon-arrow-down" data-changestyle="i_down_arrow"></span>\n                                </a>\n                            </div>\n                        </div>\n                        {if $nav.showSearchIcon}\n                            <div class="u-hd-right">\n                                <a class="J-search-link" href="{if $nav.classifyUrl}{$nav.classifyUrl}{else}classify.html{/if}" mars_sead="brand-search_btn"> <span\n                                            class="i-hd-search icon-icon-screen"></span> </a>\n                            </div>\n                        {/if}\n                        <div id="J-index-loading" class="index-loading"></div>\n                    </header>\n                </div>\n            {/if}\n        {/if}\n    {/if}\n{/if}\n')
    },
    34: function(e, t, n) {
        function i(e, t, n) {
            function i(t) {
                var n = w
                  , i = _;
                return w = _ = void 0,
                $ = t,
                x = e.apply(i, n)
            }
            function l(e) {
                return $ = e,
                T = setTimeout(f, t),
                k ? i(e) : x
            }
            function u(e) {
                var n = e - y
                  , i = e - $
                  , o = t - n;
                return S ? d(o, b - i) : o
            }
            function p(e) {
                var n = e - y
                  , i = e - $;
                return void 0 === y || n >= t || n < 0 || S && i >= b
            }
            function f() {
                var e = a();
                if (p(e))
                    return m(e);
                T = setTimeout(f, u(e))
            }
            function m(e) {
                return T = void 0,
                E && w ? i(e) : (w = _ = void 0,
                x)
            }
            function h() {
                void 0 !== T && clearTimeout(T),
                $ = 0,
                w = y = _ = T = void 0
            }
            function v() {
                return void 0 === T ? x : m(a())
            }
            function g() {
                var e = a()
                  , n = p(e);
                if (w = arguments,
                _ = this,
                y = e,
                n) {
                    if (void 0 === T)
                        return l(y);
                    if (S)
                        return T = setTimeout(f, t),
                        i(y)
                }
                return void 0 === T && (T = setTimeout(f, t)),
                x
            }
            var w, _, b, x, T, y, $ = 0, k = !1, S = !1, E = !0;
            if ("function" != typeof e)
                throw new TypeError(r);
            return t = s(t) || 0,
            o(n) && (k = !!n.leading,
            S = "maxWait"in n,
            b = S ? c(s(n.maxWait) || 0, t) : b,
            E = "trailing"in n ? !!n.trailing : E),
            g.cancel = h,
            g.flush = v,
            g
        }
        var o = n(11)
          , a = n(44)
          , s = n(35)
          , r = "Expected a function"
          , c = Math.max
          , d = Math.min;
        e.exports = i
    },
    35: function(e, t, n) {
        function i(e) {
            if ("number" == typeof e)
                return e;
            if (a(e))
                return s;
            if (o(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = o(t) ? t + "" : t
            }
            if ("string" != typeof e)
                return 0 === e ? e : +e;
            e = e.replace(r, "");
            var n = d.test(e);
            return n || l.test(e) ? u(e.slice(2), n ? 2 : 8) : c.test(e) ? s : +e
        }
        var o = n(11)
          , a = n(30)
          , s = NaN
          , r = /^\s+|\s+$/g
          , c = /^[-+]0x[0-9a-f]+$/i
          , d = /^0b[01]+$/i
          , l = /^0o[0-7]+$/i
          , u = parseInt;
        e.exports = i
    },
    368: function(e, t) {},
    37: function(e, t, n) {
        "use strict";
        var i = n(2)
          , o = n(7)
          , a = {
            GET_MCP: i.getMcp,
            GET_CPS_URL: i.rpcApi
        }
          , s = {
            getMcp: function(e, t, n) {
                o({
                    url: a.GET_MCP,
                    cache: !1,
                    data: e,
                    dataType: "jsonp",
                    jsonpCallback: "getMcpShareData",
                    success: function(e) {
                        t && t(e)
                    },
                    error: function(e) {
                        n && n(e),
                        window.console && window.console.log(arguments)
                    }
                })
            },
            getCpsUrl: function(e, t, n) {
                o({
                    url: a.GET_CPS_URL,
                    cache: !1,
                    data: e,
                    dataType: "json",
                    type: "POST",
                    jsonRpc: !0,
                    success: function(e, n, i) {
                        t && t(e, i)
                    },
                    error: function(e, t, i) {
                        n && n(e, t, i),
                        window.console && window.console.log(arguments)
                    }
                })
            }
        };
        e.exports = s
    },
    371: function(e, t) {},
    38: function(e, t, n) {
        (function(t) {
            var n = "object" == typeof t && t && t.Object === Object && t;
            e.exports = n
        }
        ).call(t, n(74))
    },
    39: function(e, t) {},
    4: function(e, t, n) {
        "use strict";
        var i = n(58)
          , o = function() {
            return i.sendMarRequest.apply(null, arguments)
        };
        e.exports = o
    },
    41: function(e, t, n) {
        "use strict";
        n(76);
        var i = n(79)
          , o = n(0)
          , a = o(i.fetch())
          , s = {
            show: function(e, t) {
                o(".J-global-loading").length ? o(".J-global-loading").show() : (e ? e.append(a) : o("body").append(a),
                a.show()),
                t && setTimeout(function() {
                    a.hide()
                }, t)
            },
            hide: function() {
                a.hide()
            }
        };
        e.exports = s
    },
    412: function(e, t, n) {
        "use strict";
        var i = n(2)
          , o = n(7)
          , a = {
            GET_BRAND_LIST: i.rpcApi,
            GET_RECOMMEND_BRAND: i.rpcApi
        }
          , s = {
            getBrandList: function(e, t, n) {
                o({
                    url: a.GET_BRAND_LIST,
                    cache: !1,
                    data: e,
                    dataType: "json",
                    type: "POST",
                    jsonRpc: !0,
                    success: function(e, n, i) {
                        t && t(e, i)
                    },
                    error: function(e, t, i) {
                        n && n(e, t, i),
                        window.console && window.console.log(arguments)
                    }
                })
            },
            getRecommendBrands: function(e, t, n) {
                o({
                    url: a.GET_RECOMMEND_BRAND,
                    cache: !1,
                    data: e,
                    dataType: "json",
                    type: "POST",
                    jsonRpc: !0,
                    success: function(e, n, i) {
                        t && t(e, i)
                    },
                    error: function(e, t, i) {
                        n && n(e, t, i),
                        window.console && window.console.log(arguments)
                    }
                })
            }
        };
        e.exports = s
    },
    415: function(e, t, n) {
        "use strict";
        var i = n(153)
          , o = n(15)
          , a = n(414)
          , s = o.getSession("isSubscribe")
          , r = {
            isSubscribe: function(e) {
                s ? e(1 == s) : i.getUserInfo({
                    type: "2"
                }, function(t) {
                    if (-33 == t.code)
                        a.gotoWxLogin(t);
                    else if (0 == t.code) {
                        var n = 1 == t.data.subscribe;
                        o.setSession("isSubscribe", t.data.subscribe),
                        e(n)
                    } else
                        e(!1)
                })
            },
            getOpenId: function(e) {
                i.getUserInfo({
                    type: "1"
                }, function(t) {
                    -33 === parseInt(t.code, 10) ? a.gotoWxLogin(t) : e && e(t)
                })
            },
            getUserInfo: function(e) {
                i.getUserInfo({
                    type: "2"
                }, function(t) {
                    if (t.code = parseInt(t.code, 10),
                    -33 === t.code)
                        a.gotoWxLogin(t);
                    else if (0 === t.code) {
                        var n = 1 == t.data.subscribe
                          , i = t.data.nickname;
                        o.setSession("isSubscribe", t.data.subscribe),
                        e({
                            isSubscribe: n,
                            nickName: i
                        })
                    } else
                        e({
                            isSubscribe: !1,
                            nickName: ""
                        })
                })
            }
        };
        e.exports = r
    },
    42: function(e, t, n) {
        function i(e) {
            var t = s.call(e, c)
              , n = e[c];
            try {
                e[c] = void 0;
                var i = !0
            } catch (e) {}
            var o = r.call(e);
            return i && (t ? e[c] = n : delete e[c]),
            o
        }
        var o = n(13)
          , a = Object.prototype
          , s = a.hasOwnProperty
          , r = a.toString
          , c = o ? o.toStringTag : void 0;
        e.exports = i
    },
    43: function(e, t) {
        function n(e) {
            return o.call(e)
        }
        var i = Object.prototype
          , o = i.toString;
        e.exports = n
    },
    44: function(e, t, n) {
        var i = n(12)
          , o = function() {
            return i.Date.now()
        };
        e.exports = o
    },
    45: function(e, t, n) {
        function i(e, t, n) {
            var i = !0
              , r = !0;
            if ("function" != typeof e)
                throw new TypeError(s);
            return a(n) && (i = "leading"in n ? !!n.leading : i,
            r = "trailing"in n ? !!n.trailing : r),
            o(e, t, {
                leading: i,
                maxWait: t,
                trailing: r
            })
        }
        var o = n(34)
          , a = n(11)
          , s = "Expected a function";
        e.exports = i
    },
    47: function(e, t) {},
    48: function(e, t, n) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var o = n(7)
          , a = i(o)
          , s = n(2)
          , r = i(s)
          , c = n(75)
          , d = {
            CHANGE_WAREHOUSE: "/index.php",
            AREA_LIST: r.default.rpcApi
        };
        e.exports = {
            changeWareHouse: function(e, t) {
                (0,
                a.default)({
                    url: d.CHANGE_WAREHOUSE,
                    cache: !1,
                    data: e,
                    type: "POST",
                    success: function(e) {
                        t && t(e)
                    },
                    error: function(e) {
                        window.console && window.console.log(e)
                    }
                })
            },
            getAreaList: function(e) {
                return new c.Promise(function(t, n) {
                    (0,
                    a.default)({
                        url: d.AREA_LIST,
                        cache: !1,
                        data: e,
                        dataType: "json",
                        type: "POST",
                        jsonRpc: !0,
                        success: function(e, i, o) {
                            e && e[0] && e[0].result ? t(e[0].result) : n(e.msg)
                        },
                        error: function(e, t, i) {
                            n(arguments)
                        }
                    })
                }
                )
            }
        }
    },
    49: function(e, t, n) {
        "use strict";
        n(84)
    },
    50: function(e, t) {},
    51: function(e, t, n) {
        var i = n(1);
        e.exports = new i('<a href="#top" class="backtop J-gotop none" mars_sead="home_foot_top_btn">\n    <i class="icon-up"></i>\n</a>')
    },
    512: function(e, t, n) {
        var i = n(1);
        e.exports = new i('{foreach from=$brands key=k item=item}\n{if $item.isOperation == 1}\n\x3c!--运营位--\x3e\n<div class="operate" data-id="{$item.code}">\n    <div class="J-process-tip-item clearfix">\n        {foreach from=$item.operationZones.block item=val}\n        <div style="float:left;width:{$val.size}%;text-align: center;">\n            {foreach from=$val.child item=v key=i}\n            <div data-operate="inner" data-endtime="{$v.timer.endTime}" data-eventafter="{$v.timer.eventAfter}" \n                data-style="{$v.timer.style}" data-x="{$v.timer.col}" data-y="{$v.timer.row}" \n                data-size="{$v.size}" style="float:left;width:{$v.size}%;text-align:center;">\n                <a href="{$v.data.targetParam}" class="J-mars-item" style="width: 100%;height: 100%;display: block;" \n                    mars_exposure_sead="wap_oper_expose" mars_exposure_module="wap|operates|{$currentMenuName}|{$currentMenuId}|今日上线|{$tsift+1}|{$v.data.opz_unid}|usual_{$k+1}_{$i+1}" \n                    data-isuniversallink="{$v.data.isDeeplink}" data-rawurl="{$v.data.raw_url}">\n                    <img src="//ms2-m.vipstatic.com/static/base/img/loading-l-brand-af76d0cd94.png" data-original="{$v.data.imageUrl}" data-id="{$v.data.opz_unid}" style="width: 100%;height: auto;">\n                    <div data-countdown="true">\n                        <div class="countdown-inner">\n                        </div>\n                    </div>\n                </a>\n            </div>\n            {/foreach}\n        </div>\n        {/foreach}\n    </div>\n</div>\n{else}\n<div class="u-brand J-u-brand">\n    <div class="p-relative">\n        <a href="{$item.detailurl}" data-isuniversallink="{$item.isDeeplink}" data-rawurl="{$item.raw_url}" \n            class="u-brand-pic J-mars-item" mars_sead="wap_{$menu_mars}_{if $item.special_field == 0}brandpos_{else if $item.special_field > 0 && $item.special_field < 4}specialpos_{/if}click" \n            data_mars="{$pageNumber}-{$k+1}" mars_exposure_sead="wap_brand_expose" mars_exposure_module="wap|{if $item.special_field == 0}brands{else if $item.special_field > 0 && $item.special_field < 4}specials{/if}|{$currentMenuName}|{$currentMenuId}|今日上线|{$tsift+1}|{$item.brand_id}|usual_{$k+1}_1">\n            <img src="//ms2-m.vipstatic.com/static/base/img/loading-l-brand-af76d0cd94.png" data-original="{$item.mobile_image_one}" data-onerror="{$item.mobile_image_two}" data-brandid="{$item.brand_id}" class="brand-mar-star">\n        </a>\n        {if $item.pms_activetips}\n        <div class="u-brand-pms">\n            {$item.pms_activetips}\n        </div>\n        {/if}\n\n        {if $item.banner_image_url}\n        <div class="activity-mark {if $item.icon && $item.iconPosition == 1}left{/if}">\n            <img data-original="{$item.banner_image_url}">\n        </div>\n        {/if}\n\n        {if $item.iconPosition != 0 && $item.icon}\n        <div class="corner-mark\n            {if $item.iconPosition == 1}top-left\n            {elseif $item.iconPosition == 2}top-right\n            {elseif $item.iconPosition == 3}bottom-left\n            {elseif $item.iconPosition == 4}bottom-right\n            {else}hide{/if}">\n            <img data-original="{$item.icon}">\n        </div>\n        {/if}\n    </div>\n    <div class="u-brand-msg clearfix">\n        <p class="u-brand-name">\n            {if $item.agio}<span class="u-brand-discount">{$item.agio}</span>{/if}{$item.brand_name}\n        </p>\n        <div class="J-brand-leavetime u-brand-time" data-now="{$serverTime}" data-to="{$item.sell_time_to * 1000}"></div>\n    </div>\n</div>\n{/if}\n{/foreach}\n')
    },
    52: function(e, t, n) {
        "use strict";
        function i(e, t) {
            var n = d(t);
            s.syncCookieGet({}, function(t, i) {
                if ("0" == t.code && t.data) {
                    for (var a in t.data)
                        n[a] && t.data[a] && r.set(a, t.data[a], {
                            path: "/",
                            expires: n[a].expires || void 0,
                            domain: n[a].domain
                        });
                    t.data.mars_cid && t.data.mars_pid && t.data.mars_sid ? e && e(t, i) : o(d("mars"), function() {
                        e && e(t, i)
                    })
                } else
                    e && e(t, i)
            }, function(t, n, i) {
                e && e(t, n, i)
            })
        }
        function o(e, t) {
            if (0 !== location.href.indexOf(c.globalHost))
                return void (t && t());
            var n = {};
            for (var i in e) {
                var o = r.get(i);
                o && (n[i] = o)
            }
            s.syncCookieSet(n, function(e, n) {
                t && t(e, n)
            }, function(e, n, i) {
                t && t(e, n, i)
            })
        }
        var a = n(0)
          , s = n(85)
          , r = n(10)
          , c = n(2)
          , d = function(e) {
            var t = {}
              , n = {
                mars_cid: {
                    key: "mars_cid",
                    expires: 732,
                    domain: "vipglobal.hk"
                },
                mars_pid: {
                    key: "mars_pid",
                    expires: 732,
                    domain: "vipglobal.hk"
                },
                mars_sid: {
                    key: "mars_sid",
                    expires: 0,
                    domain: "vipglobal.hk"
                },
                visit_id: {
                    key: "visit_id,",
                    expires: 1 / 48,
                    domain: "vipglobal.hk"
                },
                m_br_pos: {
                    key: "m_br_pos",
                    expires: 1,
                    domain: "vipglobal.hk"
                },
                m_pr_pos: {
                    key: "m_pr_pos",
                    expires: 1,
                    domain: "vipglobal.hk"
                }
            }
              , i = {
                WEIXIN_WAREHOUSE: {
                    key: "WEIXIN_WAREHOUSE",
                    expires: 7,
                    domain: "vipglobal.hk"
                },
                "WAP[p_wh]": {
                    key: "WAP[p_wh]",
                    expires: 365,
                    domain: "vipglobal.hk"
                },
                WEIXIN_PROVINCE: {
                    key: "WEIXIN_PROVINCE",
                    expires: 7,
                    domain: "vipglobal.hk"
                },
                "WAP[p_area]": {
                    key: "WAP[p_area]",
                    expires: 0,
                    domain: "vipglobal.hk"
                },
                WEIXIN_PROVINCEID: {
                    key: "WEIXIN_PROVINCEID",
                    expires: 7,
                    domain: "vipglobal.hk"
                },
                m_vip_province: {
                    key: "m_vip_province",
                    expires: 0,
                    domain: "vipglobal.hk"
                },
                warehouse: {
                    key: "warehouse",
                    expires: 0,
                    domain: "vipglobal.hk"
                }
            };
            return "wh" === e ? a.extend(t, i) : "mars" === e ? a.extend(t, n) : (a.extend(t, i),
            a.extend(t, n)),
            t
        }
          , l = {
            init: function(e) {
                0 === location.href.indexOf(c.globalHost) ? s.getRedirect({
                    page: location.pathname
                }, function(t, n, o) {
                    t.url ? location.href = t.url : 0 !== document.referrer.indexOf(c.globalHost) ? i(e) : e && e()
                }, function(t, n, o) {
                    0 !== document.referrer.indexOf(c.globalHost) ? i(e) : e && e()
                }) : e && e()
            },
            changeWHSync: function(e) {
                if (0 !== location.href.indexOf(c.globalHost))
                    return void (e && e());
                i(e, "wh")
            }
        };
        e.exports = l
    },
    53: function(e, t) {},
    55: function(e, t, n) {
        var i = n(1);
        e.exports = new i('{if $appDownload.showBottom}\n<div class="clearfix footer-download-wrapper">\n    <a href="//viva.vip.com/s/mdl" mars_sead="{$appDownload.bottomMarsSead}" class="footer-download">\n        <div class="download-text">\n            <span class="logo-bg">\n                <i class="icon-new-logo"></i>\n            </span>\n            <p>唯品会客户端，特卖抢不停</p>\n        </div>\n        <div class="download-btn">\n            <span>下载</span>\n        </div>\n    </a>\n</div>\n{/if}')
    },
    552: function(e, t) {},
    56: function(e, t, n) {
        var i = n(1);
        e.exports = new i('{if $footer.showCopyright}\n<div class="footer clearfix" id="J-footer">\n    <div class="footer-nav clearfix">\n        <a href="/index.html" mars_sead="footer-index_btn" class="vip-index">唯品会首页</a>\n        <a href="//viva.vip.com/act/m/staic-page-about?wapid=vivac_314" class="vip-about f-left">关于我们</a>\n        {if !$footer.user.isLogin}\n        <a href="https://mlogin.vip.com/user-login.html?f=shop_wap_m&amp;back_act=http%3A%2F%2Fm.vip.com%2F" class="J-footer-login" mars_sead="footer-mlogin_btn">登录</a>\n        <a href="https://mlogin.vip.com/user-register.html?f=shop_wap_m&amp;back_act=http%3A%2F%2Fm.vip.com%2F" class="register-btn J-footer-register" mars_sead="footer-mregister_btn">注册</a>\n        {else}\n        <a href="//m.vip.com/user.html" mars_sead="footer-users_btn">个人中心</a>\n        {/if}\n    </div>\n    <p class="copyright">Copyright © 2008-2017 m.vip.com, All Rights Reserved 粤ICP备08114786号</p>\n\n    <div class="psb">\n        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44010302000068">\n            <img src="//ms2-m.vipstatic.com/static/base/img/placeholder-small-d25b57bada.png"  data-original="//ms2-m.vipstatic.com/static/base/img/icon-psb-07345bf925.png" alt="粤公网安备" />\n            <p>粤公网安备 44010302000068号</p>\n        </a>\n    </div>\n</div>\n{/if}\n')
    },
    589: function(e, t, n) {
        "use strict";
        n(686);
        var i = n(0)
          , o = n(5)
          , a = n(15)
          , s = (n(10),
        n(4))
          , r = {
            _dom: {
                store: "",
                btn: ""
            },
            initState: function() {
                var e = this;
                e._dom.store = i(".J-store"),
                e._dom.btn = i(".J-store-btn"),
                e._dom.store.length
            },
            checkState: function() {
                var e = this;
                return !!e.isTimeOut() && (e.showTips(),
                a.setLocal("store_tip_time", (new Date).getTime()),
                !0)
            },
            isTimeOut: function() {
                var e = a.getLocal("store_tip_time");
                if (e) {
                    var t = new Date;
                    if (t.setTime(e),
                    t.setDate(t.getDate() - t.getDay()),
                    (new Date).getTime() - t.getTime() < 5184e5)
                        return !1
                }
                return !0
            },
            showTips: function() {
                var e = this;
                e._dom.store.css("display", "block"),
                o.isSafari() ? e._dom.store.find(".J-icon-plus").css("display", "inline-block") : (e._dom.store.find(".J-icon-list").css("display", "inline-block"),
                e._dom.store.find("#J-text-msg").text("收藏")),
                e.setMars(),
                setTimeout(function() {
                    e._dom.store.hide()
                }, 5e3)
            },
            setMars: function() {
                s("fav_show", "click", "WAP_M_index_collect_expose")
            },
            bindEvent: function() {
                var e = this;
                e._dom.store.find(".J-close").on("click", function() {
                    e._dom.store.hide()
                }),
                i(document).on("ready", function() {
                    var t = document.title
                      , n = -1 != document.referrer.indexOf("vip.com");
                    if (1 == e._dom.btn.val() && !n && !history.state && !o.isWeixin() && e.isTimeOut()) {
                        var i = location.href.replace(/#.*$/, "") + "#!hash";
                        history.pushState({
                            path: i
                        }, t, i)
                    }
                }),
                i(window).on("hashchange", function(t) {
                    -1 != document.referrer.indexOf("vip.com") ? "#!hash" == window.location.hash && window.history.forward() : e.checkState()
                })
            },
            init: function() {
                var e = this;
                e.initState(),
                e.bindEvent()
            }
        };
        e.exports = r
    },
    59: function(e, t, n) {
        "use strict";
        n(100);
        var i = n(0)
          , o = n(22)
          , a = n(94)
          , s = n(3)
          , r = {
            pageType: null,
            init: function(e) {
                this.pageType = e,
                this.getUIRef(),
                this.bindEvent(),
                this.showCartInfo()
            },
            getUIRef: function() {
                this.$cartCmp = i("#J-cart-cmp > div"),
                this.$cartTime = i("#J-cart-time"),
                this.$cartNum = i(".J-cart-num")
            },
            bindEvent: function() {
                var e = this;
                s.emit("pageHeader", "cart-change", {
                    cartNum: parseInt(i("#J-cart-flow-icon").attr("data-show-cart"), 10)
                }),
                s.on("cart-cmp", "updateCart", function(t) {
                    e.showCartInfo(t)
                })
            },
            showCartInfo: function(e) {
                e = e || {};
                var t = e.expire || this.$cartCmp.data("clear-time")
                  , n = this.$cartCmp.data("show-cart")
                  , r = this;
                if (i(".J-resident-function-entry").length && r.$cartCmp.addClass("preheatProductDetail" == r.pageType ? "add-bottom2" : "add-bottom"),
                i(".J-resident-function-entry").length || "preheatProductDetail" != r.pageType || r.$cartCmp.addClass("add-bottom"),
                s.on("entry", "update-pos", function(e) {
                    var t = r.$cartCmp.css("bottom");
                    r.$cartCmp.css("bottom", e),
                    setTimeout(function() {
                        i(".J-resident-function-entry").find(".J-u-spot, .u-bg").animate({
                            bottom: t
                        }, 300, "ease-out")
                    }, 1e3),
                    setTimeout(function() {
                        r.$cartCmp.css("visibility", "visible")
                    }, 0)
                }),
                n || e.goodsCount) {
                    this.$cartCmp.addClass("show-cart");
                    var c = {
                        elem: this.$cartTime,
                        startTime: t,
                        unitFormat: {
                            min: !0,
                            sec: !0
                        },
                        timeStamp: {
                            min: ":",
                            sec: ""
                        },
                        action: "defined",
                        callback: !0,
                        callbackFunction: function() {
                            r.$cartCmp.removeClass("show-cart")
                        }
                    };
                    e.goodsCount && this.$cartNum.html(e.goodsCount),
                    r.counter && r.counter.clearCountdown(),
                    r.counter = new o(c),
                    a.init({
                        startTime: t
                    })
                }
            }
        };
        e.exports = r
    },
    590: function(e, t, n) {
        "use strict";
        function i() {
            var e = a(".J-popup-adv-win").data("popup-ad-id")
              , t = o.getLocal(r)
              , n = !1;
            if (t) {
                var i = t.split(";");
                for (var s in i)
                    if (i[s] == e) {
                        n = !0;
                        break
                    }
                n || (50 == i.length && i.shift(),
                i.push(e),
                o.setLocal(r, i.join(";")))
            } else
                o.setLocal(r, e);
            return n
        }
        n(687);
        var o = n(15)
          , a = n(0)
          , s = a("body")
          , r = (a("#J-foot-adv-win"),
        n(10),
        "foot_adv_win")
          , c = {
            init: function() {
                var e = a(".J-popup-adv-win");
                e.length > 0 && !i() && (e.css("display", "block"),
                s.on("click", ".close-btn", function() {
                    a(this).closest(".advertise-bottom").hide()
                }))
            }
        };
        e.exports = c
    },
    593: function(e, t, n) {
        "use strict";
        function i() {
            o("#J-index-shadow-overall").on("touchmove", function(e) {
                return e.stopPropagation(),
                e.preventDefault(),
                !1
            }).css("position", "fixed"),
            o("#J-index-shadow-btn").on("touchmove", function(e) {
                return e.stopPropagation(),
                e.preventDefault(),
                !1
            }).css("position", "fixed")
        }
        n(690);
        var o = n(0)
          , a = o("body")
          , s = (o(window),
        n(10))
          , r = n(4)
          , c = {
            init: function() {
                o("#J-index-shadow-overall").length > 0 && (a.on("click.newAppWin", "#J-index-shadow-close", function() {
                    o(this).closest("#J-new-app-win").hide(),
                    s.set("shadeGuideApp", 1, {
                        expires: 365
                    })
                }),
                a.on("click", "#J-index-shadow-btn", function() {
                    r("button", "click", "home_new_client_download_btn")
                }).on("click", "#J-index-shadow-close", function() {
                    r("button", "click", "home_new_client_download_close_btn")
                }),
                r("button", "click", "home_new_client_download_page"),
                i())
            }
        };
        e.exports = c
    },
    60: function(e, t) {},
    61: function(e, t, n) {
        var i = n(1);
        e.exports = new i('<div class="J-list-page list-view-page" data-page="{$pageNumber}">{$list}</div>')
    },
    62: function(e, t, n) {
        var i = n(1);
        e.exports = new i('<div class="J-listview-loading listview-loading">100% 正品保证</div>')
    },
    622: function(e, t, n) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function o(e) {
            e.isSubscribe ? ((0,
            h.default)(".J-subscribe").removeClass("none"),
            (0,
            h.default)(".J-nickname").text(e.nickName)) : (0,
            h.default)(".J-not-subscribe").removeClass("none"),
            a()
        }
        function a() {
            _.default.emit("subscribe-bar", "toggle")
        }
        function s() {
            (0,
            h.default)("body").delegate("#J-close-btn", "click", function() {
                J.addClass("none")
            }),
            (0,
            h.default)("body").delegate("#J-subscribe-btn", "click", function() {
                J.removeClass("none")
            })
        }
        function r() {
            C.length > 0 && (I = (0,
            k.default)(c, 300),
            (0,
            h.default)(window).on("scroll", I))
        }
        function c() {
            (0,
            h.default)(window).scrollTop() > 150 && (C.addClass("none"),
            (0,
            h.default)(window).off("scroll", I))
        }
        function d(e) {
            var t = location.pathname
              , n = void 0
              , i = "";
            return "/" === t ? "index" : (e.forEach(function(e) {
                return !!(n = t.match(e)) && ("/index.html" === e ? (i = "index",
                !1) : (i = n[0],
                !1))
            }),
            i)
        }
        function l(e) {
            var t = y.default.getLocal(e + "-lastes-timer")
              , n = !0;
            return t && (n = new Date - new Date(parseInt(t, 10)) > 864e5),
            n
        }
        function u() {
            g.default.getUserInfo(function(e) {
                if (e.isSubscribe) {
                    var t = (new Date).getTime();
                    y.default.setLocal(E + "-lastes-timer", t),
                    o({
                        isSubscribe: !0,
                        nickName: e.nickName
                    }),
                    r()
                } else
                    o({
                        isSubscribe: !1
                    })
            })
        }
        function p() {
            C = (0,
            h.default)(".J-subscribe-bar-new"),
            J = (0,
            h.default)("#J-showqrcode-wrap")
        }
        function f() {
            var e = void 0;
            E = d(S),
            e = l(E),
            p(),
            C.length && "" !== E && e && (0,
            x.default)().then(function(e) {
                e ? u() : _.default.on("subscribe-bar", "check-subscribe-status", function() {
                    u()
                })
            })
        }
        n(720);
        var m = n(0)
          , h = i(m)
          , v = n(415)
          , g = i(v)
          , w = n(3)
          , _ = i(w)
          , b = n(536)
          , x = i(b)
          , T = n(15)
          , y = i(T)
          , $ = n(45)
          , k = i($)
          , S = ["/index.html"]
          , E = ""
          , C = void 0
          , J = void 0
          , I = void 0
          , P = {
            init: function() {
                f(),
                s()
            }
        };
        e.exports = P
    },
    642: function(e, t, n) {
        var i = n(1);
        e.exports = new i('<div class="u-store J-store">\n    <img class="store-logo" src="//ms2-m.vipstatic.com/static/base/img/store-logo-7d1135731b.png">\n    请按"<i class="icon-plus J-icon-plus"></i><i class="icon-list J-icon-list"></i>"添加唯品会到<span id="J-text-msg">主屏幕</span>\n    <i class="icon-close J-close" mars_sead="WAP_M_index_collect_close"></i>\n</div>\n<input type="hidden" name="text" class="J-store-btn" value="{$favoriteTips.enable}" />')
    },
    643: function(e, t, n) {
        var i = n(1);
        e.exports = new i('{if $popupAd.enable == 1 && $popupAd.cookie != 1 && $popupAd.imgFullPath}\n<div class="J-popup-adv-win advertise-bottom cart-cmp-common {if $popupAd.type==0}cart-cmp-middle{/if} {if $popupAd.type==2}cart-cmp-animate{/if}" data-popup-ad-id="{$popupAd.id}">\n    <div class="body">\n        <div class="message">\n            <div>\n                <a href="{$popupAd.url}" {if $popupAd.target == 1}target="_self"{/if} mars_sead="ads_page-3_btn" rel="nofollow"> \n                \t<img src="{$popupAd.imgFullPath}"> \n                </a>\n            </div>\n            <a href="javascript:void(0)" class="close-btn" mars_sead="ads_close-{$popupAd.type}_btn"><span>×</span></a>\n        </div>\n    </div>\n</div>\n{/if}')
    },
    644: function(e, t, n) {
        var i = n(1);
        e.exports = new i('{if $fullAd.cookie != 1 && $fullAd.enable}\n<div class="new-app-win">\n    <div id="J-index-shadow-overall" class="index-shadow-overall">\n        <div style="width: 100%;position: relative;overflow:hidden">\n            <div>\n                <img src="{$fullAd.imgFullPath}">\n            </div>\n            <div class="index-shadow-close iconfont icon-vip-close" id="J-index-shadow-close"></div>\n        </div>\n    </div>\n    \n    <div id="J-index-shadow-btn" class="index-shadow-btn">\n    \t<a href="{$fullAd.appDiscount.url}">\n    \t\t<img src="{$fullAd.appDiscount.imgFullPath}">\n    \t</a>\n    </div>\n</div>\n{/if}')
    },
    65: function(e, t) {},
    653: function(e, t, n) {
        var i = n(1);
        e.exports = new i('<div class="u-store J-store">\n    <img class="store-logo" src="//ms2-m.vipstatic.com/static/base/img/store-logo-7d1135731b.png">\n    请按"<i class="icon-plus J-icon-plus"></i><i class="icon-list J-icon-list"></i>"添加唯品会到<span id="J-text-msg">主屏幕</span>\n    <i class="icon-close J-close" mars_sead="WAP_M_index_collect_close"></i>\n</div>')
    },
    654: function(e, t, n) {
        var i = n(1);
        e.exports = new i('{if $weixinFollow.isWeixin && $weixinFollow.showWeixinFollow}\n<div class="J-subscribe-bar-new J-subscribe subscribe-bar-new none" id="J-subscribe">\n    <p class="txt">\n        <span>"亲爱的<i class="J-nickname"></i>，欢迎回来~"</span>\n    </p>\n</div>\n\n<div class="J-subscribe-bar-new J-not-subscribe subscribe-bar-new  none">\n    <div class="subscribe-nav">\n        <p class="vip-logo">\n            <i class="icon-new-logo"></i>\n        </p>\n        <p class="txt">\n            <span>关注唯品会官方服务号，最新优惠、物流消息第一时间送达</span>\n        </p>\n        <a class="subscribe-btn" id="J-subscribe-btn">立即关注</a>\n    </div>\n</div>\n<section class="showqrcode-wrap none" id="J-showqrcode-wrap">\n    <div class="showqrcode">\n        <p class="close-btn icon-close" id="J-close-btn"></p>\n        <p class="code">\n            <img src="//ms2-m.vipstatic.com/static/base/img/showqrcode-6b2f7acc07.png" alt="">\n        </p>\n        <p class="tips">\n            <span class="text">长按识别二维码</span>\n            <span class="text">关注唯品会官方账号服务号</span>\n        </p>\n    </div>\n</section>\n{/if}\n')
    },
    66: function(e, t, n) {
        var i = n(1);
        e.exports = new i('<div class="animate-loading">\n    <span class="base-line"></span>\n    <div class="bounce1"></div>\n    <div class="bounce2"></div>\n    <div class="bounce3"></div>\n    {$text}\n</div>')
    },
    67: function(e, t, n) {
        "use strict";
        function i(e) {
            var t = {
                method: "WarehouseRpc.getAreaList"
            }
              , n = function() {
                r.open("网络异常，请刷新页面重试")
            };
            o.getAreaList(t).then(e, n).catch(n)
        }
        var o = n(48)
          , a = n(5)
          , s = n(23)
          , r = n(9)()
          , c = n(18)
          , d = n(95)
          , l = void 0
          , u = void 0
          , p = void 0
          , f = {
            init: function() {
                function e(e) {
                    u = s.getWarehouse(),
                    u ? u !== l ? c.reload() : r.close() : t()
                }
                function t() {
                    r.close(),
                    p ? p.open && p.open() : i(function(e) {
                        p = d({
                            areaList: e
                        }),
                        p.open && p.open()
                    })
                }
                a.isSupportedCookie() && s.isNeverChange() && (l = s.getWarehouse(),
                r.open("正在切换分仓...", 1e4),
                s.autoChange(e, t))
            }
        };
        e.exports = f
    },
    68: function(e, t, n) {
        "use strict";
        function i(e) {
            e.wareHouse = f.getWarehouse(),
            e.pageId = "2000",
            e.sessionUser = {
                id: m.get("m_vipruid") || "",
                name: ""
            }
        }
        function o(e) {
            var t = l("#J-vtm-channelid").val()
              , n = l("#J-vtm-menuname").val();
            e.wareHouse = f.getWarehouse(),
            e.pageId = "2001",
            e.sessionUser = {
                id: m.get("m_vipruid") || "",
                name: ""
            },
            e.pageData = {
                channel: {
                    id: t,
                    name: n
                }
            }
        }
        function a(e) {
            e.wareHouse = f.getWarehouse(),
            e.pageId = "2004",
            e.SessionUser = function() {
                this.id = m.get("m_vipruid") || "",
                this.name = ""
            }
            ,
            e.sessionUser = new e.SessionUser,
            e.Goods = function() {
                this.id = l("#J-vtm-product-id").val(),
                this.name = l("#J-vtm-product-name").val(),
                this.previewImgUrl = l("#J-product-images img").data("original"),
                this.price = l("#J-vtm-market-price").val(),
                this.aigo = l("#J-vtm-agio").val(),
                this.currentPrice = l("#J-vtm-sale-price").val(),
                this.stockStatus = "",
                this.stockNumber = "",
                this.favoriteNumber = "",
                this.status = "",
                this.url = location.href,
                this.promotionTip = "",
                this.underShelfTime = parseInt(l("#J-vtm-sell-time-to").val()),
                this.imgUrls = [l("#J-product-images img").data("original")],
                e.Brand = function() {
                    this.id = l("#J-vtm-brand-id").val(),
                    this.name = l("#J-vtm-product-name").val(),
                    this.logoImgUrl = ""
                }
                ,
                this.brand = new e.Brand,
                e.GoodsCategory = function() {
                    this.id = l("#J-vtm-category-id").val(),
                    this.name = l("#J-vtm-brand-name").val()
                }
                ,
                this.category = new e.GoodsCategory
            }
            ,
            e.Detail = function(t) {
                this.goods = new e.Goods,
                this.goodsCount = t,
                this.goodsId = l("#J-vtm-product-id").val(),
                this.goodsPrice = Math.floor(5e3 * Math.random())
            }
            ,
            e.addCart = function(t) {
                e.pageData.details = e.pageData.details || [],
                e.pageData.details.push(new e.Detail(t))
            }
            ,
            e.pageData = {},
            e.pageData.goods = new e.Goods
        }
        function s(e) {
            var t = l("#J-vtm-brandtitle").val();
            e.wareHouse = f.getWarehouse(),
            e.pageId = "2002",
            e.sessionUser = {
                id: m.get("m_vipruid") || "",
                name: ""
            },
            e.pageData = {},
            e.pageData.brand = {
                id: parseInt(location.pathname.match(/-([\d]+)/)[1]),
                name: t,
                logoImgUrl: ""
            }
        }
        function r(e) {
            e.wareHouse = f.getWarehouse(),
            e.pageId = "2003",
            e.SessionUser = function() {
                this.id = m.get("m_vipruid") || "",
                this.name = ""
            }
            ,
            e.sessionUser = new e.SessionUser,
            e.GoodsCategory = function() {
                this.id = l("#J-vtm-categoryid").val(),
                this.name = l("#J-vtm-classifytitle").val()
            }
            ,
            e.pageData = {},
            e.pageData.goodsCategory = new e.GoodsCategory
        }
        function c(e, t) {
            switch (e) {
            case "index":
                i(t);
                break;
            case "channel":
                o(t);
                break;
            case "list":
                s(t);
                break;
            case "detail":
                a(t);
                break;
            case "classify-list":
                r(t);
                break;
            default:
                i(t)
            }
        }
        function d(e) {
            var t = l("#J-vtm-enable").val()
              , n = u.vtmJs;
            t && !v && p(n, function() {
                h.VTM = function(t) {
                    return c(e, t),
                    void 0 !== t.event && t.event.trigger("VTMComplete"),
                    t
                }(h.VTM || {}),
                v = !0
            })
        }
        var l = n(0)
          , u = n(2)
          , p = n(54)
          , f = n(23)
          , m = n(10)
          , h = window
          , v = !1
          , g = {
            init: function(e) {
                d(e)
            }
        };
        e.exports = g
    },
    686: function(e, t) {},
    687: function(e, t) {},
    69: function(e, t, n) {
        var i = n(1);
        e.exports = new i('<input type="hidden" id="J-default-warehouse" value="{$recommendAddress.warehouse}" />\n<input type="hidden" id="J-default-area" value="{$recommendAddress.province}" />')
    },
    690: function(e, t) {},
    70: function(e, t, n) {
        var i = n(1);
        e.exports = new i('<div id="J-cart-flow-icon" class="u-shopbag" data-show-cart="{$cart.sku_count|default:0}" data-clear-time="{$cart.clear_time|default:0}">\n    <a href="{if $cart.isWeixin}https://wxcheckout.vip.com/checkout.html{else}{if $cart.close_site_switch}https://wxcheckout.vip.com/cart.html{else}https://mcheckout.vip.com/cart.html{/if}{/if}" mars_sead="floating-cart_btn">\n    \t<span class="icon-cart i-flow-carticon"></span> \n    \t<span class="u-flow-cartnum J-cart-num">{$cart.sku_count|default:0}</span> \n    \t<span class="u-flow-carttime" id="J-cart-time"></span>\n    </a>\n</div>')
    },
    71: function(e, t, n) {
        var i = n(1);
        e.exports = new i('{if $vtm.isWeixin}\n<input type="hidden" id="J-vtm-isweixin" value="{$vtm.isWeixin}" />\n{/if}\n{if $vtm.enable}\n<input type="hidden" id="J-vtm-enable" value="{$vtm.enable}" />\n{/if}\n{if $vtm.channel_id}\n<input type="hidden" id="J-vtm-channelid" value="{$vtm.channel_id}" />\n{/if}\n{if $vtm.menu_name}\n<input type="hidden" id="J-vtm-menuname" value="{$vtm.menu_name}" />\n{/if}\n{if $vtm.f}\n<input type="hidden" id="J-vtm-f" value="{$vtm.f}" />\n{/if}\n{if $vtm.hash}\n<input type="hidden" id="J-vtm-hash" value="{$vtm.hash}" />\n{/if}\n{if $vtm.brand_title}\n<input type="hidden" id="J-vtm-brandtitle" value="{$vtm.brand_title}" />\n{/if}\n{if $vtm.product}\n    <input type="hidden" id="J-vtm-product-id" value="{$vtm.product.productId}" />\n    <input type="hidden" id="J-vtm-product-name" value="{$vtm.product.product_name}" />\n    <input type="hidden" id="J-vtm-agio" value="{$vtm.product.agio}" />\n    <input type="hidden" id="J-vtm-sale-price" value="{$vtm.product.salePrice}" />\n    <input type="hidden" id="J-vtm-market-price" value="{$vtm.product.marketPrice}" />\n    <input type="hidden" id="J-vtm-sell-time-to" value="{$vtm.product.sellTimeTo*1000}" />\n    <input type="hidden" id="J-vtm-brand-id" value="{$vtm.product.brandId}" />\n    <input type="hidden" id="J-vtm-brand-name" value="{$vtm.product.brand_name}" />\n    <input type="hidden" id="J-vtm-category-id" value="{$vtm.product.categoryId}" />\n{/if}\n{if $vtm.category_id}\n<input type="hidden" id="J-vtm-categoryid" value="{$vtm.category_id}" />\n{/if}\n{if $vtm.classify_title}\n<input type="hidden" id="J-vtm-classifytitle" value="{$vtm.classify_title}" />\n{/if}\n')
    },
    72: function(e, t, n) {
        var i = n(1);
        e.exports = new i('{*mcp模板需要用到的参数*}\n{if $wxShare.isWxk}\n<input type="hidden" id="J-wxs-iswxk" value="{$wxShare.isWxk}" />{/if}\n{if $wxShare.brand_name}\n<input type="hidden" id="J-wxs-brandname" value="{$wxShare.brand_name}" />{/if}\n{if $wxShare.product_name}\n<input type="hidden" id="J-wxs-productname" value="{$wxShare.product_name}" />{/if}\n{if $wxShare.brand_id}\n<input type="hidden" id="J-wxs-brandid" value="{$wxShare.brand_id}" />{/if}\n{if $wxShare.product_id}\n<input type="hidden" id="J-wxs-productid" value="{$wxShare.product_id}" />{/if}\n{if $wxShare.one_level_category_name}\n<input type="hidden" id="J-wxs-onelcn" value="{$wxShare.one_level_category_name}" />{/if}\n{if $wxShare.two_level_category_name}\n<input type="hidden" id="J-wxs-twolcn" value="{$wxShare.two_level_category_name}" />{/if}\n{if $wxShare.three_level_category_name}\n<input type="hidden" id="J-wxs-threelcn" value="{$wxShare.three_level_category_name}" />{/if}\n{if $wxShare.vip_price}\n<input type="hidden" id="J-wxs-vipprice" value="{$wxShare.vip_price}" />{/if}\n{if $wxShare.market_price}\n<input type="hidden" id="J-wxs-marketprice" value="{$wxShare.market_price}" />{/if}\n{if $wxShare.pms_activetips}\n<input type="hidden" id="J-wxs-pmsactivetips" value="{$wxShare.pms_activetips}" />{/if}\n{if $wxShare.agio}\n<input type="hidden" id="J-wxs-agio" value="{$wxShare.agio|strip_tags}" />{/if}\n{if $wxShare.mobile_special_price}\n<input type="hidden" id="J-wxs-msprice" value="{$wxShare.mobile_special_price}" />{/if}\n{if $wxShare.pc_show_from}\n<input type="hidden" id="J-wxs-pcshowfrom" value="{$wxShare.pc_show_from}" />{/if}\n{if $wxShare.mobile_show_from}\n<input type="hidden" id="J-wxs-mshowfrom" value="{$wxShare.mobile_show_from}" />{/if}\n{if $wxShare.pc_mobile_show_diff}\n<input type="hidden" id="J-wxs-pcmshowdiff" value="{$wxShare.pc_mobile_show_diff}" />{/if}\n{if $wxShare.group_price}\n<input type="hidden" id="J-group-price" value="{$wxShare.group_price}">{/if}\n\n{*非mcp使用的服务端下发的分享信息*}\n{if $wxShare.img}\n<input type="hidden" id="J-wxs-img" value="{$wxShare.img}" />{/if}\n')
    },
    720: function(e, t) {},
    73: function(e, t, n) {
        "use strict";
        function i(e) {
            if (!(this instanceof i))
                return new i(e);
            var t, n, l = e && e.id || "J-popup" + d++, u = this.$popup = r("#" + l), p = {
                mask: !0
            };
            return r.extend(p, e),
            u.length ? t = this : (n = r(s.fetch({
                popupId: l
            })),
            p.zIndex && n.css("z-index", p.zIndex),
            p.className && n.addClass(p.className),
            u = this.$popup = n.appendTo(r("body")),
            this.$box = u,
            this.isOpen = !1,
            c = "fixed" === u.css("position"),
            p.mask && (this.mask = a()),
            this.mask && this.mask.associate(this),
            o(u, this),
            t = this),
            t
        }
        function o(e, t) {
            e.on("touchmove", ".size-box", function(e) {
                e.stopPropagation()
            }),
            e.on("close", t.close.bind(t))
        }
        n(131);
        var a = n(112)
          , s = n(98)
          , r = n(0)
          , c = !0
          , d = (new Date).getTime()
          , l = i.prototype;
        r.extend(l, {
            setContent: function(e) {
                return this.$popup.html(e),
                this
            },
            addClass: function(e) {
                this.$popup.addClass(e)
            },
            setSize: function(e) {
                return e && this.$popup.css("width", e),
                this
            },
            conf: function(e) {
                var t = this;
                return e.content && this.setContent(e.content),
                t.setSize(e.width),
                this.mask && e.freeze && this.mask.freeze(e.freeze),
                this.mask && e.scrollLock && this.mask.scrollLock(e.scrollLock),
                this
            },
            open: function() {
                return arguments.length && this.conf.apply(this, arguments),
                this.mask && this.mask.zIndex(this.$popup.css("z-index") ? parseInt(this.$popup.css("z-index"), 10) - 1 : null).open(),
                this.$popup.fadeIn(),
                this.isOpen = !0,
                this
            },
            close: function() {
                return this.$popup.fadeOut(),
                this.mask && this.mask.close(),
                this.isOpen = !1,
                this
            }
        }),
        e.exports = i
    },
    76: function(e, t) {},
    77: function(e, t, n) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function o(e) {
            e.value && !s.default.isWeixin() && c.default.set(e.name || "mar_ref", e.value, {
                expires: 365,
                domain: "vip.com"
            })
        }
        var a = n(5)
          , s = i(a)
          , r = n(10)
          , c = i(r);
        e.exports = o
    },
    772: function(e, t, n) {
        "use strict";
        n(20),
        n(552),
        n(49),
        n(25);
        var i = n(622)
          , o = n(82)
          , a = n(178)
          , s = n(176)
          , r = n(295)
          , c = n(199)
          , d = n(298)
          , l = n(59)
          , u = n(19)
          , p = n(593)
          , f = n(590)
          , m = n(21)
          , h = n(31)
          , v = n(331)
          , g = n(28)
          , w = n(67)
          , _ = n(68)
          , b = n(32)
          , x = n(107)
          , T = n(16)
          , y = n(106)
          , $ = n(589)
          , k = location.search.replace("?", "")
          , S = {
            "J-subscribe-bar": {
                tmpl: n(654),
                method: {
                    getWeixinFollow: {
                        params: {
                            page: "index.html",
                            query: k
                        },
                        property: "weixinFollow"
                    }
                }
            },
            "J-download-bar": {
                tmpl: n(108),
                method: {
                    getAppDownload: {
                        params: {
                            page: "index.html",
                            query: k
                        },
                        property: "appDownload"
                    }
                }
            },
            "J-page-header": {
                tmpl: n(338),
                method: {
                    getNav: {
                        params: {
                            page: "index.html",
                            query: k
                        },
                        property: "nav"
                    }
                }
            },
            "J-main-menu": {
                tmpl: n(336),
                method: {
                    getMenu: {
                        params: {
                            page: "index.html",
                            query: k
                        },
                        property: "menus"
                    }
                }
            },
            "J-adv-slider": {
                tmpl: n(332),
                method: {
                    getAd: {
                        params: {
                            page: "index.html",
                            query: k
                        },
                        property: "ads"
                    }
                }
            },
            "J-operate": {
                tmpl: n(200),
                method: {
                    getOperate: {
                        params: {
                            page: "index.html",
                            query: k
                        },
                        property: "operate"
                    }
                }
            },
            "J-brand-list": {
                tmpl: n(335),
                method: {
                    getBrandList: {
                        params: {
                            page: "index.html",
                            query: k,
                            ep: 20,
                            np: 1
                        },
                        property: "brandList"
                    }
                }
            },
            "J-cart-cmp": {
                tmpl: n(70),
                method: {
                    getCartInfo: {
                        params: {
                            page: "index.html",
                            query: k
                        },
                        property: "cart"
                    }
                }
            },
            "J-new-app-win": {
                tmpl: n(644),
                method: {
                    getFullAdAppDownload: {
                        params: {
                            page: "index.html",
                            query: k
                        },
                        property: "fullAd"
                    }
                }
            },
            "J-foot-adv-win": {
                tmpl: n(643),
                method: {
                    getPopupAd: {
                        params: {
                            page: "index.html",
                            query: k
                        },
                        property: "popupAd"
                    }
                }
            },
            "J-autochange-warehouse": {
                tmpl: n(69),
                method: {
                    getRecommendAddress: {
                        params: {
                            page: "index.html",
                            query: k
                        },
                        property: "recommendAddress"
                    }
                }
            },
            "J-foot-toolbar": {
                tmpl: n(83),
                method: {
                    getFooterToolbar: {
                        params: {
                            page: "index.html",
                            query: k
                        },
                        property: "footerToolbar"
                    }
                }
            },
            "J-foot-download": {
                tmpl: n(55),
                method: {
                    getAppDownload: {
                        params: {
                            page: "index.html",
                            query: k
                        },
                        property: "appDownload"
                    }
                }
            },
            "J-page-footer": {
                tmpl: n(56),
                method: {
                    getFooter: {
                        params: {
                            page: "index.html",
                            query: k
                        },
                        property: "footer"
                    }
                }
            },
            "J-vtm": {
                tmpl: n(71),
                method: {
                    getVTM: {
                        params: {
                            page: "index.html",
                            query: k
                        },
                        property: "vtm"
                    }
                }
            },
            "J-wx-share": {
                tmpl: n(72),
                method: {
                    getWxShare: {
                        params: {
                            page: "index.html",
                            query: k
                        },
                        property: "wxShare"
                    }
                }
            },
            "J-store-tip": {
                tmpl: n(653),
                method: {}
            },
            "J-favorite-tips": {
                tmpl: n(642),
                method: {
                    "IndexRpc.getFavoriteTips": {
                        params: {
                            page: "index.html",
                            query: k
                        },
                        property: "favoriteTips"
                    }
                }
            },
            "J-app-wakeup": {
                tmpl: n(119),
                method: {
                    getAppWakeup: {
                        params: {
                            page: "index.html",
                            query: k
                        },
                        property: "appWakeup"
                    }
                }
            }
        };
        m.init({
            cache: {
                onBeforeLoad: function() {},
                onLoad: function() {},
                onBeforeRefreshCache: function() {
                    g = g(),
                    g.show({
                        text: ""
                    })
                },
                onRefreshCache: function() {
                    g.hide()
                },
                cacheConfig: S
            },
            callback: function() {
                y.init(),
                b.init(),
                w.init(),
                i.init(),
                s.init(),
                r.init(),
                c.init(),
                u.init(),
                a.init(),
                l.init(),
                h.init("index"),
                d.init(),
                p.init(),
                f.init(),
                o.init(),
                v.initAdmaster(),
                _.init("index"),
                x.init(),
                T.init(),
                $.init()
            }
        })
    },
    78: function(e, t, n) {
        "use strict";
        n(60);
        var i = n(0)
          , o = n(62)
          , a = n(61)
          , s = n(5)
          , r = function(e) {
            function t() {
                v = i(o.fetch()),
                g = {},
                w = null,
                _ = !1,
                x = document.documentElement.clientHeight,
                T = {
                    page: 1,
                    pageSize: 20,
                    threshold: .5,
                    template: "",
                    container: null,
                    dataRequestHandler: function(e, t, n) {},
                    dataFormatHandler: function(e) {},
                    onRended: function() {},
                    onClearout: function() {},
                    onRequested: function() {},
                    onBeforeRequest: function() {},
                    onRendedFromCache: function() {}
                },
                i.extend(T, e),
                T.page -= 1,
                i(window).on("scroll", function(e) {
                    l()
                }),
                i(window).on("resize", function() {
                    x = document.documentElement.clientHeight
                }),
                d(),
                _ = !0,
                r(function() {
                    l()
                }),
                y = parseInt(T.container.css("min-height")),
                !isNaN(y) && y <= 0 && T.container.css("min-height", "1px")
            }
            function n(e) {
                v = i(o.fetch()),
                g = {},
                w = null,
                i.extend(T, e),
                T.page -= 1,
                d(),
                _ = !0,
                r(function() {
                    l()
                })
            }
            function r(e) {
                T.dataRequestHandler && (T.onBeforeRequest && T.onBeforeRequest({
                    loadingDom: v
                }),
                v && v.removeClass("no-background"),
                T.dataRequestHandler && T.dataRequestHandler(T.page + 1, T.pageSize, function(t) {
                    _ = !1,
                    v.addClass("no-background"),
                    t && (w = t,
                    T.page += 1,
                    w.pageNumber = T.page,
                    e()),
                    T.onRequested({
                        loadingDom: v,
                        data: t
                    })
                }, function() {
                    _ = !1,
                    v.addClass("no-background"),
                    T.onRequested({
                        loadingDom: v,
                        data: null,
                        error: !0
                    })
                }))
            }
            function c(e, t) {
                var n = 0;
                if (e)
                    for (; null !== e.offsetParent && (n += e.offsetTop,
                    e.offsetParent !== t); )
                        e = e.offsetParent;
                return n
            }
            function d() {
                i(".J-listview-loading").length ? v = i(".J-listview-loading") : v.insertAfter(T.container)
            }
            function l() {
                clearTimeout(b),
                b = setTimeout(function() {
                    if (T.container.height()) {
                        if ($)
                            v[0].getBoundingClientRect().top - x <= x * T.threshold && (_ || (_ = !0,
                            p()));
                        else {
                            c(v[0], document.body) - x * T.threshold <= x + window.scrollY && (_ || (_ = !0,
                            p()))
                        }
                        h()
                    }
                }, 0)
            }
            function u(e) {
                var t;
                T.dataFormatHandler(e),
                t = i(a.fetch({
                    pageNumber: T.page,
                    list: T.template.fetch(e)
                })),
                T.container.append(t),
                i("img[data-original]", t).lazyload({
                    threshold: 100
                }),
                T.onRended({
                    loadingDom: v,
                    page: T.page,
                    pageSize: T.pageSize,
                    data: e,
                    element: t
                })
            }
            function p() {
                w && (u(w),
                w = null),
                _ = !0,
                r(function() {
                    l()
                })
            }
            function f() {
                var e, t, n = i(".J-list-page", T.container);
                n.each(function() {
                    var n = i(this)
                      , o = n.attr("data-page")
                      , a = n.height();
                    "true" !== n.attr("clearout") && (g[o] = n.html()),
                    t = n[0].getBoundingClientRect(),
                    e = t.top,
                    e + 2 * a > 0 && e - a < x ? "true" === n.attr("clearout") && (n.removeAttr("clearout").html(g[o]),
                    i("img[data-original]", n).lazyload({
                        threshold: 100
                    }),
                    T.onRendedFromCache && T.onRendedFromCache(i(this))) : n.attr("clearout", "true").css("height", a).html("")
                }),
                T.onClearout()
            }
            function m() {
                var e = i(".J-list-page", T.container)
                  , t = c(e[0], document.body)
                  , n = window.scrollY;
                e.each(function() {
                    var e = i(this)
                      , o = e.attr("data-page")
                      , a = e.height();
                    "true" !== e.attr("clearout") && (g[o] = e.html()),
                    n - 2 * a < t && n + 2 * a > t ? "true" === e.attr("clearout") && (e.removeAttr("clearout").html(g[o]),
                    i("img[data-original]", e).lazyload({
                        threshold: 100
                    }),
                    T.onRendedFromCache && T.onRendedFromCache(i(this))) : e.attr("clearout", "true").css("height", a).html(""),
                    t += a
                }),
                T.onClearout()
            }
            function h() {
                $ ? f() : m()
            }
            var v, g, w, _, b, x, T, y, $ = s.isSupportedGBCR();
            return {
                init: t,
                reset: function(e) {
                    n(e)
                }
            }
        };
        e.exports = r
    },
    79: function(e, t, n) {
        var i = n(1);
        e.exports = new i('<div class="J-global-loading global-loading"></div>')
    },
    82: function(e, t, n) {
        "use strict";
        function i() {
            r = d(".J-download-bar"),
            c = d(".J-download-close"),
            r && r.length && (l.isWeixin() ? p.isFromShare() && (r.css("display", "block!important"),
            a(),
            f.emit("download-bar", "toggle")) : (s(),
            o()))
        }
        function o() {
            c.click(function() {
                var e = u.get("WAP[clientClose2]");
                e = e ? parseInt(e, 10) + 1 : 1,
                u.set("WAP[clientClose2]", e, {
                    expires: 365
                }),
                r.css("display", "none!important"),
                f.emit("download-bar", "toggle")
            })
        }
        function a() {
            m("a", "scroll", h)
        }
        function s() {
            if (r.length) {
                var e = r.parent();
                setTimeout(function() {
                    r.height() || (e.css("display", "block!important"),
                    a(),
                    e.find("*").css("display", "block!important"),
                    f.emit("download-bar", "toggle"))
                }, 500)
            }
        }
        n(114);
        var r, c, d = n(0), l = n(5), u = n(10), p = n(27), f = n(3), m = n(4), h = "recommend_download_banner_expose", v = {
            init: function() {
                i()
            }
        };
        e.exports = v
    },
    83: function(e, t, n) {
        var i = n(1);
        e.exports = new i('{if $footerToolbar.showToolbar}\n<div class="u-footer-bar">\n    <ul class="u-order-list clearfix">\n        <li>\n            <a href="//m.vip.com/brand-date.html" mars_sead="index-coming_btn"> <span class="u-icon icon-clock"></span>\n            <p>\n                即将上线\n            </p> </a>\n        </li>\n        <li>\n            <a href="http://t.vip.com" mars_sead="tuan_btn"> <span class="u-icon icon-tuan"></span>\n            <p>\n                唯品团购\n            </p> </a>\n        </li>\n        <li>\n            <a href="//m.vip.com/service-insurance.html" mars_sead="service-insurance_btn"> <span class="u-icon icon-quality"></span>\n            <p>\n                正品保证\n            </p> </a>\n        </li>\n        <li>\n            <a href="//m.vip.com/vipservice.html" mars_sead="custommer_seevice_btn"> <span class="u-icon icon-service"></span>\n            <p>\n                唯品客服\n            </p> </a>\n        </li>\n    </ul>\n</div>\n{/if}\n')
    },
    84: function(e, t) {},
    85: function(e, t, n) {
        "use strict";
        var i = (n(2),
        n(7))
          , o = {
            COOKIE_SET: "/vipglobal-cookie-set.html",
            COOKIE_GET: "/vipglobal-cookie-get.html",
            GET_REDIRECT: "/vipglobal-redirect-check.html"
        }
          , a = {
            syncCookieSet: function(e, t, n) {
                i({
                    url: o.COOKIE_SET,
                    cache: !1,
                    data: e,
                    dataType: "json",
                    success: function(e, n, i) {
                        t && t(e, i)
                    },
                    error: function(e, t, i) {
                        n && n(e, t, i),
                        window.console && window.console.log(arguments)
                    }
                })
            },
            syncCookieGet: function(e, t, n) {
                i({
                    url: o.COOKIE_GET,
                    cache: !1,
                    data: e,
                    dataType: "json",
                    success: function(e, n, i) {
                        t && t(e, i)
                    },
                    error: function(e, t, i) {
                        n && n(e, t, i),
                        window.console && window.console.log(arguments)
                    }
                })
            },
            getRedirect: function(e, t, n) {
                i({
                    url: o.GET_REDIRECT,
                    cache: !1,
                    data: e,
                    dataType: "json",
                    success: function(e, n, i) {
                        t && t(e, i)
                    },
                    error: function(e, t, i) {
                        n && n(e, t, i),
                        window.console && window.console.log(arguments)
                    }
                })
            }
        };
        e.exports = a
    },
    86: function(e, t, n) {
        "use strict";
        var i = n(7)
          , o = n(2)
          , a = {
            IP_LOCATION: o.lbsApi,
            ADDRESS: o.addressApi
        }
          , s = {
            ipLocation: function(e, t, n) {
                i({
                    url: a.IP_LOCATION,
                    cache: !1,
                    data: e,
                    type: "GET",
                    dataType: "jsonp",
                    success: function(e) {
                        t && t(e)
                    },
                    error: function(e, t, i) {
                        window.console && window.console.log(e),
                        n && n(e, t, i)
                    }
                })
            },
            getAddress: function(e, t, n) {
                i({
                    url: a.ADDRESS,
                    cache: !0,
                    data: e,
                    type: "GET",
                    dataType: "jsonp",
                    success: function(e) {
                        t && t(e)
                    },
                    error: function(e, t, i) {
                        window.console && window.console.log(e),
                        n && n(e, t, i)
                    }
                })
            }
        };
        e.exports = s
    },
    87: function(e, t, n) {
        "use strict";
        function i() {
            var e = a.ak.length
              , t = Math.floor(Math.random() * e);
            return a.ak[t]
        }
        function o(e) {
            if (e.content && e.content.address_detail)
                switch (e.content.address_detail.province) {
                case "内蒙古自治区":
                    e.content.address_detail.province = "内蒙古";
                    break;
                case "广西壮族自治区":
                    e.content.address_detail.province = "广西";
                    break;
                case "西藏自治区":
                    e.content.address_detail.province = "西藏";
                    break;
                case "宁夏回族自治区":
                    e.content.address_detail.province = "宁夏";
                    break;
                case "新疆维吾尔自治区":
                    e.content.address_detail.province = "新疆"
                }
            return e
        }
        var a = n(2)
          , s = n(86)
          , r = {
            location: function(e, t) {
                var n = {
                    ak: i()
                };
                s.ipLocation(n, function(n) {
                    n = o(n),
                    0 == n.status ? e(n) : t(n)
                }, function(e, n, i) {
                    t(e, n, i)
                })
            }
        };
        e.exports = r
    },
    88: function(e, t, n) {
        "use strict";
        var i = {
            "北京": {
                position: "VIP_BJ",
                mars: "101101"
            },
            "天津": {
                position: "VIP_BJ",
                mars: "101102"
            },
            "河北": {
                position: "VIP_BJ",
                mars: "101103"
            },
            "山西": {
                position: "VIP_BJ",
                mars: "101104"
            },
            "内蒙古": {
                position: "VIP_BJ",
                mars: "101105"
            },
            "广东": {
                position: "VIP_NH",
                mars: "104104"
            },
            "广西": {
                position: "VIP_NH",
                mars: "104105"
            },
            "河南": {
                position: "VIP_HZ",
                mars: "104101"
            },
            "湖北": {
                position: "VIP_HZ",
                mars: "104102"
            },
            "湖南": {
                position: "VIP_HZ",
                mars: "104103"
            },
            "海南": {
                position: "VIP_NH",
                mars: "104106"
            },
            "上海": {
                position: "VIP_SH",
                mars: "103101"
            },
            "江苏": {
                position: "VIP_SH",
                mars: "103102"
            },
            "浙江": {
                position: "VIP_SH",
                mars: "103103"
            },
            "安徽": {
                position: "VIP_SH",
                mars: "103104"
            },
            "福建": {
                position: "VIP_NH",
                mars: "103105"
            },
            "江西": {
                position: "VIP_HZ",
                mars: "103106"
            },
            "山东": {
                position: "VIP_SH",
                mars: "103107"
            },
            "重庆": {
                position: "VIP_CD",
                mars: "105100"
            },
            "四川": {
                position: "VIP_CD",
                mars: "105101"
            },
            "贵州": {
                position: "VIP_CD",
                mars: "105102"
            },
            "云南": {
                position: "VIP_NH",
                mars: "105103"
            },
            "西藏": {
                position: "VIP_CD",
                mars: "105104"
            },
            "辽宁": {
                position: "VIP_BJ",
                mars: "102101"
            },
            "吉林": {
                position: "VIP_BJ",
                mars: "102102"
            },
            "黑龙江": {
                position: "VIP_BJ",
                mars: "102103"
            },
            "陕西": {
                position: "VIP_CD",
                mars: "106101"
            },
            "甘肃": {
                position: "VIP_CD",
                mars: "106102"
            },
            "青海": {
                position: "VIP_CD",
                mars: "106103"
            },
            "宁夏": {
                position: "VIP_CD",
                mars: "106104"
            },
            "新疆": {
                position: "VIP_CD",
                mars: "106105"
            }
        };
        e.exports = i
    },
    89: function(e, t, n) {
        "use strict";
        !function(t, n, i) {
            function o(e, t) {
                this.wrapper = "string" == typeof e ? n.querySelector(e) : e,
                this.scroller = this.wrapper.children[0],
                this.scrollerStyle = this.scroller.style,
                this.options = {
                    startX: 0,
                    startY: 0,
                    scrollY: !0,
                    directionLockThreshold: 5,
                    momentum: !0,
                    bounce: !0,
                    bounceTime: 600,
                    bounceEasing: "",
                    preventDefault: !0,
                    preventDefaultException: {
                        tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
                    },
                    HWCompositing: !0,
                    useTransition: !0,
                    useTransform: !0
                };
                for (var i in t)
                    this.options[i] = t[i];
                this.translateZ = this.options.HWCompositing && s.hasPerspective ? " translateZ(0)" : "",
                this.options.useTransition = s.hasTransition && this.options.useTransition,
                this.options.useTransform = s.hasTransform && this.options.useTransform,
                this.options.eventPassthrough = !0 === this.options.eventPassthrough ? "vertical" : this.options.eventPassthrough,
                this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault,
                this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY,
                this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX,
                this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough,
                this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold,
                this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? s.ease[this.options.bounceEasing] || s.ease.circular : this.options.bounceEasing,
                this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling,
                !0 === this.options.tap && (this.options.tap = "tap"),
                this.x = 0,
                this.y = 0,
                this.directionX = 0,
                this.directionY = 0,
                this._events = {},
                this._init(),
                this.refresh(),
                this.scrollTo(this.options.startX, this.options.startY),
                this.enable()
            }
            var a = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
                t.setTimeout(e, 1e3 / 60)
            }
              , s = function() {
                function e(e) {
                    return !1 !== s && ("" === s ? e : s + e.charAt(0).toUpperCase() + e.substr(1))
                }
                var o = {}
                  , a = n.createElement("div").style
                  , s = function() {
                    for (var e = ["t", "webkitT", "MozT", "msT", "OT"], t = 0, n = e.length; t < n; t++)
                        if (e[t] + "ransform"in a)
                            return e[t].substr(0, e[t].length - 1);
                    return !1
                }();
                o.getTime = Date.now || function() {
                    return (new Date).getTime()
                }
                ,
                o.extend = function(e, t) {
                    for (var n in t)
                        e[n] = t[n]
                }
                ,
                o.addEvent = function(e, t, n, i) {
                    e.addEventListener(t, n, !!i)
                }
                ,
                o.removeEvent = function(e, t, n, i) {
                    e.removeEventListener(t, n, !!i)
                }
                ,
                o.prefixPointerEvent = function(e) {
                    return t.MSPointerEvent ? "MSPointer" + e.charAt(9).toUpperCase() + e.substr(10) : e
                }
                ,
                o.momentum = function(e, t, n, o, a, s) {
                    var r, c, d = e - t, l = i.abs(d) / n;
                    return s = void 0 === s ? 6e-4 : s,
                    r = e + l * l / (2 * s) * (d < 0 ? -1 : 1),
                    c = l / s,
                    r < o ? (r = a ? o - a / 2.5 * (l / 8) : o,
                    d = i.abs(r - e),
                    c = d / l) : r > 0 && (r = a ? a / 2.5 * (l / 8) : 0,
                    d = i.abs(e) + r,
                    c = d / l),
                    {
                        destination: i.round(r),
                        duration: c
                    }
                }
                ;
                var r = e("transform");
                return o.extend(o, {
                    hasTransform: !1 !== r,
                    hasPerspective: e("perspective")in a,
                    hasTouch: "ontouchstart"in t,
                    hasPointer: t.PointerEvent || t.MSPointerEvent,
                    hasTransition: e("transition")in a
                }),
                o.isBadAndroid = /Android /.test(t.navigator.appVersion) && !/Chrome\/\d/.test(t.navigator.appVersion),
                o.extend(o.style = {}, {
                    transform: r,
                    transitionTimingFunction: e("transitionTimingFunction"),
                    transitionDuration: e("transitionDuration"),
                    transitionDelay: e("transitionDelay"),
                    transformOrigin: e("transformOrigin")
                }),
                o.hasClass = function(e, t) {
                    return new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
                }
                ,
                o.addClass = function(e, t) {
                    if (!o.hasClass(e, t)) {
                        var n = e.className.split(" ");
                        n.push(t),
                        e.className = n.join(" ")
                    }
                }
                ,
                o.removeClass = function(e, t) {
                    if (o.hasClass(e, t)) {
                        var n = new RegExp("(^|\\s)" + t + "(\\s|$)","g");
                        e.className = e.className.replace(n, " ")
                    }
                }
                ,
                o.offset = function(e) {
                    for (var t = -e.offsetLeft, n = -e.offsetTop; e = e.offsetParent; )
                        t -= e.offsetLeft,
                        n -= e.offsetTop;
                    return {
                        left: t,
                        top: n
                    }
                }
                ,
                o.preventDefaultException = function(e, t) {
                    for (var n in t)
                        if (t[n].test(e[n]))
                            return !0;
                    return !1
                }
                ,
                o.extend(o.eventType = {}, {
                    touchstart: 1,
                    touchmove: 1,
                    touchend: 1,
                    mousedown: 2,
                    mousemove: 2,
                    mouseup: 2,
                    pointerdown: 3,
                    pointermove: 3,
                    pointerup: 3,
                    MSPointerDown: 3,
                    MSPointerMove: 3,
                    MSPointerUp: 3
                }),
                o.extend(o.ease = {}, {
                    quadratic: {
                        style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        fn: function(e) {
                            return e * (2 - e)
                        }
                    },
                    circular: {
                        style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                        fn: function(e) {
                            return i.sqrt(1 - --e * e)
                        }
                    },
                    back: {
                        style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                        fn: function(e) {
                            return (e -= 1) * e * (5 * e + 4) + 1
                        }
                    },
                    bounce: {
                        style: "",
                        fn: function(e) {
                            return (e /= 1) < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                        }
                    },
                    elastic: {
                        style: "",
                        fn: function(e) {
                            return 0 === e ? 0 : 1 == e ? 1 : .4 * i.pow(2, -10 * e) * i.sin((e - .055) * (2 * i.PI) / .22) + 1
                        }
                    }
                }),
                o.tap = function(e, t) {
                    var i = n.createEvent("Event");
                    i.initEvent(t, !0, !0),
                    i.pageX = e.pageX,
                    i.pageY = e.pageY,
                    e.target.dispatchEvent(i)
                }
                ,
                o.click = function(e) {
                    var t, i = e.target;
                    /(SELECT|INPUT|TEXTAREA)/i.test(i.tagName) || (t = n.createEvent("MouseEvents"),
                    t.initMouseEvent("click", !0, !0, e.view, 1, i.screenX, i.screenY, i.clientX, i.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null),
                    t._constructed = !0,
                    i.dispatchEvent(t))
                }
                ,
                o
            }();
            o.prototype = {
                version: "5.1.3",
                _init: function() {
                    this._initEvents()
                },
                destroy: function() {
                    this._initEvents(!0),
                    this._execEvent("destroy")
                },
                _transitionEnd: function(e) {
                    e.target == this.scroller && this.isInTransition && (this._transitionTime(),
                    this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1,
                    this._execEvent("scrollEnd")))
                },
                _start: function(e) {
                    if ((1 == s.eventType[e.type] || 0 === e.button) && this.enabled && (!this.initiated || s.eventType[e.type] === this.initiated)) {
                        !this.options.preventDefault || s.isBadAndroid || s.preventDefaultException(e.target, this.options.preventDefaultException) || e.preventDefault();
                        var t, n = e.touches ? e.touches[0] : e;
                        this.initiated = s.eventType[e.type],
                        this.moved = !1,
                        this.distX = 0,
                        this.distY = 0,
                        this.directionX = 0,
                        this.directionY = 0,
                        this.directionLocked = 0,
                        this._transitionTime(),
                        this.startTime = s.getTime(),
                        this.options.useTransition && this.isInTransition ? (this.isInTransition = !1,
                        t = this.getComputedPosition(),
                        this._translate(i.round(t.x), i.round(t.y)),
                        this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1,
                        this._execEvent("scrollEnd")),
                        this.startX = this.x,
                        this.startY = this.y,
                        this.absStartX = this.x,
                        this.absStartY = this.y,
                        this.pointX = n.pageX,
                        this.pointY = n.pageY,
                        this._execEvent("beforeScrollStart")
                    }
                },
                _move: function(e) {
                    if (this.enabled && s.eventType[e.type] === this.initiated) {
                        this.options.preventDefault && e.preventDefault();
                        var t, n, o, a, r = e.touches ? e.touches[0] : e, c = r.pageX - this.pointX, d = r.pageY - this.pointY, l = s.getTime();
                        if (this.pointX = r.pageX,
                        this.pointY = r.pageY,
                        this.distX += c,
                        this.distY += d,
                        o = i.abs(this.distX),
                        a = i.abs(this.distY),
                        !(l - this.endTime > 300 && o < 10 && a < 10)) {
                            if (this.directionLocked || this.options.freeScroll || (o > a + this.options.directionLockThreshold ? this.directionLocked = "h" : a >= o + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"),
                            "h" == this.directionLocked) {
                                if ("vertical" == this.options.eventPassthrough)
                                    e.preventDefault();
                                else if ("horizontal" == this.options.eventPassthrough)
                                    return void (this.initiated = !1);
                                d = 0
                            } else if ("v" == this.directionLocked) {
                                if ("horizontal" == this.options.eventPassthrough)
                                    e.preventDefault();
                                else if ("vertical" == this.options.eventPassthrough)
                                    return void (this.initiated = !1);
                                c = 0
                            }
                            c = this.hasHorizontalScroll ? c : 0,
                            d = this.hasVerticalScroll ? d : 0,
                            t = this.x + c,
                            n = this.y + d,
                            (t > 0 || t < this.maxScrollX) && (t = this.options.bounce ? this.x + c / 3 : t > 0 ? 0 : this.maxScrollX),
                            (n > 0 || n < this.maxScrollY) && (n = this.options.bounce ? this.y + d / 3 : n > 0 ? 0 : this.maxScrollY),
                            this.directionX = c > 0 ? -1 : c < 0 ? 1 : 0,
                            this.directionY = d > 0 ? -1 : d < 0 ? 1 : 0,
                            this.moved || this._execEvent("scrollStart"),
                            this.moved = !0,
                            this._translate(t, n),
                            l - this.startTime > 300 && (this.startTime = l,
                            this.startX = this.x,
                            this.startY = this.y)
                        }
                    }
                },
                _end: function(e) {
                    if (this.enabled && s.eventType[e.type] === this.initiated && !this.isInTransition) {
                        this.options.preventDefault && !s.preventDefaultException(e.target, this.options.preventDefaultException) && e.preventDefault();
                        var t, n, o = (e.changedTouches && e.changedTouches[0],
                        s.getTime() - this.startTime), a = i.round(this.x), r = i.round(this.y), c = i.abs(a - this.startX), d = i.abs(r - this.startY), l = 0, u = "";
                        if (this.isInTransition = 0,
                        this.initiated = 0,
                        this.endTime = s.getTime(),
                        !this.resetPosition(this.options.bounceTime)) {
                            if (this.scrollTo(a, r),
                            !this.moved)
                                return this.options.tap && s.tap(e, this.options.tap),
                                this.options.click && s.click(e),
                                void this._execEvent("scrollCancel");
                            if (this._events.flick && o < 200 && c < 100 && d < 100)
                                return void this._execEvent("flick");
                            if (this.options.momentum && o < 300 && (t = this.hasHorizontalScroll ? s.momentum(this.x, this.startX, o, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                                destination: a,
                                duration: 0
                            },
                            n = this.hasVerticalScroll ? s.momentum(this.y, this.startY, o, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                                destination: r,
                                duration: 0
                            },
                            a = t.destination,
                            r = n.destination,
                            l = i.max(t.duration, n.duration),
                            this.isInTransition = 1),
                            a != this.x || r != this.y)
                                return (a > 0 || a < this.maxScrollX || r > 0 || r < this.maxScrollY) && (u = s.ease.quadratic),
                                void this.scrollTo(a, r, l, u);
                            this._execEvent("scrollEnd")
                        }
                    }
                },
                _resize: function() {
                    var e = this;
                    clearTimeout(this.resizeTimeout),
                    this.resizeTimeout = setTimeout(function() {
                        e.refresh()
                    }, this.options.resizePolling)
                },
                resetPosition: function(e) {
                    var t = this.x
                      , n = this.y;
                    return e = e || 0,
                    !this.hasHorizontalScroll || this.x > 0 ? t = 0 : this.x < this.maxScrollX && (t = this.maxScrollX),
                    !this.hasVerticalScroll || this.y > 0 ? n = 0 : this.y < this.maxScrollY && (n = this.maxScrollY),
                    (t != this.x || n != this.y) && (this.scrollTo(t, n, e, this.options.bounceEasing),
                    !0)
                },
                disable: function() {
                    this.enabled = !1
                },
                enable: function() {
                    this.enabled = !0
                },
                refresh: function() {
                    this.wrapper.offsetHeight;
                    this.wrapperWidth = this.wrapper.clientWidth,
                    this.wrapperHeight = this.wrapper.clientHeight,
                    this.scrollerWidth = this.scroller.offsetWidth,
                    this.scrollerHeight = this.scroller.offsetHeight,
                    this.maxScrollX = this.wrapperWidth - this.scrollerWidth,
                    this.maxScrollY = this.wrapperHeight - this.scrollerHeight,
                    this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0,
                    this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0,
                    this.hasHorizontalScroll || (this.maxScrollX = 0,
                    this.scrollerWidth = this.wrapperWidth),
                    this.hasVerticalScroll || (this.maxScrollY = 0,
                    this.scrollerHeight = this.wrapperHeight),
                    this.endTime = 0,
                    this.directionX = 0,
                    this.directionY = 0,
                    this.wrapperOffset = s.offset(this.wrapper),
                    this._execEvent("refresh"),
                    this.resetPosition()
                },
                on: function(e, t) {
                    this._events[e] || (this._events[e] = []),
                    this._events[e].push(t)
                },
                off: function(e, t) {
                    if (this._events[e]) {
                        var n = this._events[e].indexOf(t);
                        n > -1 && this._events[e].splice(n, 1)
                    }
                },
                _execEvent: function(e) {
                    if (this._events[e]) {
                        var t = 0
                          , n = this._events[e].length;
                        if (n)
                            for (; t < n; t++)
                                this._events[e][t].apply(this, [].slice.call(arguments, 1))
                    }
                },
                scrollBy: function(e, t, n, i) {
                    e = this.x + e,
                    t = this.y + t,
                    n = n || 0,
                    this.scrollTo(e, t, n, i)
                },
                scrollTo: function(e, t, n, i) {
                    i = i || s.ease.circular,
                    this.isInTransition = this.options.useTransition && n > 0;
                    var o = this.options.useTransition && i.style;
                    n ? o ? (o && (this._transitionTimingFunction(i.style),
                    this._transitionTime(n)),
                    this.isInTransition = !0,
                    this._translate(e, t)) : this._animate(e, t, n, i.fn) : this._translate(e, t)
                },
                scrollToElement: function(e, t, n, o, a) {
                    if (e = e.nodeType ? e : this.scroller.querySelector(e)) {
                        var r = s.offset(e);
                        r.left -= this.wrapperOffset.left,
                        r.top -= this.wrapperOffset.top,
                        !0 === n && (n = i.round(e.offsetWidth / 2 - this.wrapper.offsetWidth / 2)),
                        !0 === o && (o = i.round(e.offsetHeight / 2 - this.wrapper.offsetHeight / 2)),
                        r.left -= n || 0,
                        r.top -= o || 0,
                        r.left = r.left > 0 ? 0 : r.left < this.maxScrollX ? this.maxScrollX : r.left,
                        r.top = r.top > 0 ? 0 : r.top < this.maxScrollY ? this.maxScrollY : r.top,
                        t = void 0 === t || null === t || "auto" === t ? i.max(i.abs(this.x - r.left), i.abs(this.y - r.top)) : t,
                        this.scrollTo(r.left, r.top, t, a)
                    }
                },
                _transitionTime: function(e) {
                    e = e || 0,
                    this.scrollerStyle[s.style.transitionDuration] = e + "ms",
                    !e && s.isBadAndroid && (this.scrollerStyle[s.style.transitionDuration] = "0.001s")
                },
                _transitionTimingFunction: function(e) {
                    this.scrollerStyle[s.style.transitionTimingFunction] = e
                },
                _translate: function(e, t) {
                    this.options.useTransform ? this.scrollerStyle[s.style.transform] = "translate(" + e + "px," + t + "px)" + this.translateZ : (e = i.round(e),
                    t = i.round(t),
                    this.scrollerStyle.left = e + "px",
                    this.scrollerStyle.top = t + "px"),
                    this.x = e,
                    this.y = t
                },
                _initEvents: function(e) {
                    var n = e ? s.removeEvent : s.addEvent
                      , i = this.options.bindToWrapper ? this.wrapper : t;
                    n(t, "orientationchange", this),
                    n(t, "resize", this),
                    this.options.click && n(this.wrapper, "click", this, !0),
                    this.options.disableMouse || (n(this.wrapper, "mousedown", this),
                    n(i, "mousemove", this),
                    n(i, "mousecancel", this),
                    n(i, "mouseup", this)),
                    s.hasPointer && !this.options.disablePointer && (n(this.wrapper, s.prefixPointerEvent("pointerdown"), this),
                    n(i, s.prefixPointerEvent("pointermove"), this),
                    n(i, s.prefixPointerEvent("pointercancel"), this),
                    n(i, s.prefixPointerEvent("pointerup"), this)),
                    s.hasTouch && !this.options.disableTouch && (n(this.wrapper, "touchstart", this),
                    n(i, "touchmove", this),
                    n(i, "touchcancel", this),
                    n(i, "touchend", this)),
                    n(this.scroller, "transitionend", this),
                    n(this.scroller, "webkitTransitionEnd", this),
                    n(this.scroller, "oTransitionEnd", this),
                    n(this.scroller, "MSTransitionEnd", this)
                },
                getComputedPosition: function() {
                    var e, n, i = t.getComputedStyle(this.scroller, null);
                    return this.options.useTransform ? (i = i[s.style.transform].split(")")[0].split(", "),
                    e = +(i[12] || i[4]),
                    n = +(i[13] || i[5])) : (e = +i.left.replace(/[^-\d.]/g, ""),
                    n = +i.top.replace(/[^-\d.]/g, "")),
                    {
                        x: e,
                        y: n
                    }
                },
                _animate: function(e, t, n, i) {
                    function o() {
                        var p, f, m, h = s.getTime();
                        if (h >= u)
                            return r.isAnimating = !1,
                            r._translate(e, t),
                            void (r.resetPosition(r.options.bounceTime) || r._execEvent("scrollEnd"));
                        h = (h - l) / n,
                        m = i(h),
                        p = (e - c) * m + c,
                        f = (t - d) * m + d,
                        r._translate(p, f),
                        r.isAnimating && a(o)
                    }
                    var r = this
                      , c = this.x
                      , d = this.y
                      , l = s.getTime()
                      , u = l + n;
                    this.isAnimating = !0,
                    o()
                },
                handleEvent: function(e) {
                    switch (e.type) {
                    case "touchstart":
                    case "pointerdown":
                    case "MSPointerDown":
                    case "mousedown":
                        this._start(e);
                        break;
                    case "touchmove":
                    case "pointermove":
                    case "MSPointerMove":
                    case "mousemove":
                        this._move(e);
                        break;
                    case "touchend":
                    case "pointerup":
                    case "MSPointerUp":
                    case "mouseup":
                    case "touchcancel":
                    case "pointercancel":
                    case "MSPointerCancel":
                    case "mousecancel":
                        this._end(e);
                        break;
                    case "orientationchange":
                    case "resize":
                        this._resize();
                        break;
                    case "transitionend":
                    case "webkitTransitionEnd":
                    case "oTransitionEnd":
                    case "MSTransitionEnd":
                        this._transitionEnd(e);
                        break;
                    case "wheel":
                    case "DOMMouseScroll":
                    case "mousewheel":
                        this._wheel(e);
                        break;
                    case "keydown":
                        this._key(e);
                        break;
                    case "click":
                        e._constructed || (e.preventDefault(),
                        e.stopPropagation())
                    }
                }
            },
            o.utils = s,
            void 0 !== e && e.exports ? e.exports = o : t.IScroll = o
        }(window, document, Math)
    },
    91: function(e, t, n) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function o() {
            var e = this;
            m.$body.on("click", ".J-captcha-refresh", function() {
                e.refresh("", f)
            }),
            m.$body.on("click", ".J-captcha-input", function(e) {
                e.target.focus()
            })
        }
        n(92);
        var a = n(0)
          , s = i(a)
          , r = n(2)
          , c = i(r)
          , d = n(8)
          , l = i(d)
          , u = n(96)
          , p = i(u)
          , f = void 0
          , m = new l.default
          , h = {
            init: function() {
                o.call(this)
            },
            open: function(e) {
                var t = this;
                !function() {
                    var e = (0,
                    s.default)("body").scrollTop();
                    m.$box.addClass("dialog-captcha"),
                    (0,
                    s.default)("html, body").addClass("fixed-input"),
                    t.scrollTop = e
                }(),
                m.open({
                    freeze: !0,
                    content: p.default.fetch({}),
                    btns: ["取消", "确定"],
                    onBtnClick: function(n, i) {
                        var o = m.$body.find(".J-captcha-input").val()
                          , a = {
                            captcha: o,
                            index: i,
                            e: n
                        };
                        if (1 === i && e.success) {
                            if (!o)
                                return void t.showErrorMsg("请输入验证码");
                            e.success(a)
                        } else {
                            if (1 === i && !o)
                                return;
                            0 === i && e.cancel && e.cancel(a)
                        }
                        t.empty()
                    }
                }),
                f = e.apiURL,
                this.refresh(e.img, e.apiURL)
            },
            refresh: function(e, t) {
                t = t || "captcha.html",
                e || (e = c.default.checkoutHost + "/" + t + "?" + Math.random()),
                m.$body.find(".J-captcha-img").attr("src", e).show(),
                this && this.empty && "function" == typeof this.empty && this.empty()
            },
            empty: function() {
                m.$body.find(".J-captcha-input").val("")
            },
            close: function() {
                var e = this;
                f = "",
                function() {
                    (0,
                    s.default)("html, body").removeClass("fixed-input"),
                    (0,
                    s.default)("body").scrollTop(e.scrollTop)
                }(),
                m.close()
            },
            showErrorMsg: function(e) {
                var t = m.$body.find(".J-error-msg");
                e = e || "验证码输入错误",
                t.html(e).fadeIn()
            }
        };
        h.init(),
        e.exports = h
    },
    92: function(e, t) {},
    93: function(e, t, n) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var o = n(0)
          , a = (i(o),
        n(103));
        i(a);
        e.exports = function(e, t) {
            e.scrollToFixed(t)
        }
    },
    94: function(e, t, n) {
        "use strict";
        var i = n(8)()
          , o = window
          , a = n(0)
          , s = n(97)
          , r = {
            tipTime: 300
        };
        e.exports = {
            init: function(e) {
                this.config = a.extend(r, e),
                this.clear(),
                this.countDown(function() {
                    this.showDialog()
                })
            },
            showDialog: function() {
                i.open({
                    content: s.fetch(),
                    btns: ["取消", "去购物车"],
                    onBtnClick: function(e, t) {
                        i.close(),
                        1 === t && (o.location.href = "https://mcheckout.vip.com/cart.html")
                    }
                })
            },
            countDown: function(e) {
                var t = this;
                t.timer = setTimeout(function() {
                    --t.config.startTime === t.config.tipTime ? e && e.call(t) : t.countDown()
                }, 1e3)
            },
            clear: function() {
                clearTimeout(this.timer)
            }
        }
    },
    95: function(e, t, n) {
        "use strict";
        n(101);
        var i = n(0)
          , o = n(23)
          , a = n(9)()
          , s = n(8)
          , r = n(18)
          , c = n(104)
          , d = n(73)({
            className: "warehouse-win-pop",
            id: "J-warehouse-win-pop"
        })
          , l = void 0
          , u = !1;
        e.exports = function(e) {
            function t(e) {
                f = !0,
                e.addClass("active"),
                a.open("正在切换分仓...", 1e4),
                setTimeout(function() {
                    e.removeClass("active"),
                    f = !1
                }, 1e4),
                o.change({
                    warehouse: e.attr("data-position"),
                    area: e.html()
                }, function() {
                    r.reload()
                })
            }
            function n(e) {
                l || (l = s({
                    id: "J-wh-confirm",
                    zIndex: parseInt(i("#J-warehouse-win-pop").css("z-index"), 10) + 100
                })),
                l.conf({
                    title: "更换收货地址？",
                    content: "购物车商品将会被清空",
                    btns: ["取消", "更换"],
                    onBtnClick: function(n, i) {
                        1 == i ? (l.close(),
                        t(e)) : (e.removeClass("active"),
                        l.close())
                    }
                }),
                l.open()
            }
            function p(e) {
                var a = i(e.target);
                "1" !== a.attr("data-whlink") || f || (o.getWarehouse() !== a.attr("data-position") && u && (n(a),
                a.addClass("active")),
                t(a))
            }
            e = i.extend({}, e);
            var f = !1
              , m = c.fetch({
                recmd: e.recmd || {},
                data: e.areaList
            })
              , h = i(m)
              , v = {
                open: function(e) {
                    u = !!e && e.hasCart,
                    d.open()
                },
                close: function() {
                    d.close()
                }
            };
            return d.setContent(h),
            function() {
                i(".J-close-wh", h.parent()).click(v.close),
                i(".J-modal-body", h).click(p)
            }(),
            v
        }
    },
    96: function(e, t, n) {
        var i = n(1);
        e.exports = new i('<div class="captcha-box">\n    <h1>输入校验码</h1>\n    <ul class="nav nav-list form form-horizontal">\n        <li class="control-group control-captcha error">\n            <span>\n                <input type="text" class="captcha-input J-captcha-input" name="captcha" placeholder="请输入验证码" value="">\n            </span>\n            <span class="captch-input-box">\n                <img id="J-captcha" class="captcha-img J-captcha-img hide" alt="captcha" src="#" />\n            </span>\n            <a href="javascript:void(0)" class="btn-refresh J-captcha-refresh captch-refresh">&nbsp;换一张</a>\n        </li>\n        <li class="control-text validform-tips J-error-msg vip-red none"></li>\n    </ul>\n</div>')
    },
    97: function(e, t, n) {
        var i = n(1);
        e.exports = new i('<div class="cart-cmp-text"><span class="vip-red">5分钟</span> 后购物车商品将被清空，去购物车结算？</div>')
    },
    98: function(e, t, n) {
        var i = n(1);
        e.exports = new i('<div id="{$popupId}" class="popup"></div>')
    }
}, [772]);
