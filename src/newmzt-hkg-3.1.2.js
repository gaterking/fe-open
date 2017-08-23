	/**
	 * 1元夺宝落地页 newmzt 组件
	 * @author Circus
	 * @version 1.0.1 2016-04-08
	**/
    /**
     * 1元夺宝落地页 newmzt 组件
     * @author Circus
     * @version 1.0.2 2016-06-29
     * 修复微信打开跳到后端接口bug
    **/
    /**
     * 1元夺宝落地页 newmzt 组件
     * @author Circus
     * * @version 1.0.3 2016-07-04
     * 修复微信打开跳到中转页bug
     */
    /**
     * 1元夺宝落地页 newmzt 组件
     * @author Circus
     * @version 1.0.3 2016-07-04
     * 透传wprexix
     */

    /**
     * 重新改造
     * @author Circus S Lin
     * version 3.0.0 2017-04-25
     */

    /**
    * @method fGetUrlParam  获取url参数
    * @param {sName} 查找url的名称
    */

    /**
     * ios9以上改用location,安卓及ios9以下用schema
     * @author Circus S Lin
     * version 3.0.2 2017-07-14
     */

    /**
     * 透传scheme
     * @author  Circus S Lin
     * version 3.0.5. 2017-07-14
     */
    
    /**
     * 优先接受同步变量的schema
     * @author  Circus S Lin
     * version 3.1.1 2017-08-15
     */
    
    /**
     * 增加Yjjsbridge_protocal
     * @author  Circus S Lin
     * version 3.1.1 2017-08-15
     */
(function (g) {
    'use strict';

    window.MZT = {
        YyJsBridgeProtocal: 'duobaohkg://',
        /**
         * [getUrlParam 获取url参数]
         * @type {[type]}
         */
        getUrlParam: fGetUrlParam,
        /**
         * [setRootFontSize 设置根单位]
         * @type {[type]}
         */
        setRootFontSize: fSetRootFontSize,
        /**
         * [counter 倒计时]
         * @type {[type]}
         */
        counter: fCounter,
        /**
         * [setHref 设a标签跳转]
         * @type {[type]}
         */
        setHref: fSetHref,
        /**
         * [statisticPuv 搜狗统计]
         * @type {[type]}
         */
        statisticPuv: fStatisticPuv,
        /**
         * [setCookie 设置cookie]
         * @type {[type]}
         */
        setCookie: fSetCookie,
        /**
         * [pop 弹出遮罩]
         * @type {[type]}
         */
        pop: fPop,
        /**
         * [dataCollection 统计设备参数]
         * @type {[type]}
         */
        dataCollection: fDataCollection,
        /**
         * [getXhr 请求]
         * @type {[type]}
         */
        getXhr: fGetXhr,
        /**
         * [getData 获取ua]
         * @type {[type]}
         */
        getData: fGetData,
        /**
         * [useCountly 配置countly]
         * @type {[type]}
         */
        useCountly: fUseCountly,
        /**
         * [weixinPop 微信遮罩]
         * @type {[type]}
         */
        weixinPop: fWeixinPop,
        /**
         * [launchCountly 启动countly]
         * @type {[type]}
         */
        launchCountly: fLaunchCountly,
        /**
         * [fLaunchSingRequest 加载singRequest]
         * @type {[type]}
         */
        launchSingRequest: fLaunchSingRequest,
        /**
         * [fJumpToScheme 自动打开app]
         * @type {[type]}
         */
        jumpToScheme: fJumpToScheme,
        /**
         * [setDefaultValue 设置默认值]
         * @type {[type]}
         */
        setDefaultValue: fSetDefaultValue,
        /**
         * [start 初始化]
         * @type {[type]}
         */
        start: fStart,
        /**
         * [getOpenUrl 获得隐藏iframe或location要打开的地址]
         * @type {[type]}
         */
        getOpenUrl: fGetOpenUrl,
        /**
         * [jumpToLocation location打开app]
         * @type {[type]}
         */
        jumpToLocation: fJumpToLocation,
        /**
         * [addSchema 透传schema]
         * @type {[type]}
         */
        addSchema: fAddSchema

    }

    var self = window.MZT;



    function fGetUrlParam(sName) {
        var reg = new RegExp("(^|&)" + sName + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return decodeURIComponent(r[2]);
        } else {
            return '';
        }
    }
    /**
    * @method fSetRootFontSize  设置根节点
    * @param {null}
    */
    function fSetRootFontSize(){
        var ww = window.document.documentElement.getBoundingClientRect().width;
        var root;

        if(ww<320) root=50;
        else if(320<=ww && ww<640)  root=ww*100/640;
        else  root=100;

        document.getElementsByTagName("html")[0].style.fontSize = root + 'px';
    }
    /**
    * @method fCounter  倒计时
    * @param {null}
    */
    function fCounter(){

        var _e={},_p={};

        _p.init = function(){
          var targets = document.querySelectorAll(".mzt-counter time");
          for(var c=0; c<targets.length; c++){
            // var deadline = +new Date(targets[c].getAttribute("datetime"));
            // var deadline = new Date(1.8e7);
              var delta = 1.8e5;
              var count = function(){

                  delta = delta - 10;

              // var delta = Math.max(deadline-Date.now(), 0);

              var time = {
                // dd : parseInt((delta/8.64e7)),
                // hh : parseInt((delta%8.64e7)/3.6e6),
                mm : parseInt((delta%3.6e6)/6e4),
                ss : parseInt((delta%6e4)/1e3),
                ms : parseInt((delta%1e3))
              }
              var tstr = "<span>"+parseInt(time.mm/10)+"</span>"
                       + "<span>"+(time.mm%10)+"</span>"
                       + "<b>:</b>"
                       + "<span>"+parseInt(time.ss/10)+"</span>"
                       + "<span>"+(time.ss%10)+"</span>"
                       + "<b>:</b>"
                       + "<span>"+parseInt(time.ms/100)+"</span>"
                       + "<span>"+((time.ms/10)%10)+"</span>"
                       + "<b></b>";

              targets[0].innerHTML = tstr;

              if(delta<=0) {
                clearInterval(timer);


              }
            }
            var timer = setInterval(count, 10);
            count();
          }
        }

        _p.init();
        return _e;
    };
    /**
    * @method fSetHref  如果有wprefix=1，透传到按钮
    * @param {null}
    */
    function fSetHref(value) {

        var wPrefix = fGetUrlParam("wprefix") || undefined;

        var oDownload = document.getElementsByTagName('a');

        if( oDownload ) {
            for (var i = 0; i < oDownload.length; i++) {

                var href = oDownload.item(i).getAttribute('href');

                if(href) {
                    var expc = /(https\:\/\/)(\w+)\.\d\d\w+\.\w+\/\w+\/\w+\?\w+\=/g;
                    if(!!!href.match(expc)){
                        //没有下载链接
                    }else{
                        //有下载链接
                        oDownload.item(i).setAttribute('href',value);
                        // if( href.indexOf('?') != -1 ) {
                        //     href = href + '&wprefix=' + wPrefix;
                        //     oDownload.item(i).setAttribute('href',href);
                        // }

                    };
                }
            }
        }
    }
    /**
    * @method pv1  统计各部分pv，uv, 为统计搜狗，重新开启
    * @param {String|hash} hash 哈希，字符串
    */
    function fStatisticPuv(hash){

        // var hash1 = hash;
        // var oDownload = document.querySelector('.appDownloadLink');
        // var sFrom = fGetUrlParam("from") || 'oneduobaoshipei';
        var sUrl = "https://wap.sogou.com/bill_cpc?v=1&p=WJ80$xz$iK0euO9kUzJPyYnkloGpkD4eib7QGCXDusOHafsRe@Qv4H75EocwL2cTmv8PM7$L1fZB3yUGqF8VPY6VxvXiiguOSFO20x8VMWXiIWQJxqLGfP6OJyqQMs$pWoBueXrJMbXfhFuB$g6O$7BmzUgimbBlbK4VMzgI9eAb8h8dhh4Ve7qYJGSo3Gg5eBkPepq6zpekbuxuYuZG6AkFYryl1tOj05ivEVeGptUkOSItalqOuvOjjozQBAupP7BuioOJzQbIi6YpYpx6Yk09e$YQiAlHfvqj0lBvyOeGPNOj3wcpuq7x6k5vOSjz3vCNA9p3kcmOIRAC9G0AipwIa7c1l9Ohtbp6JAWgjR9BpYn9kWeG6Rj9uyeADkjB$tqIyAZpnI6VlligQL9=&q=WJe0lllllylx&keyword=sqappdownurl";



        // oDownload.onclick = function() {

            var oImg = document.createElement("img");
            oImg.src = sUrl;
            oImg.style.width = "1px";
            oImg.style.height = "1px";
            oImg.style.visibility = "hidden";
            document.body.appendChild(oImg);


            function imgLoad(img, callback) {
                var timer = setInterval(function() {
                    if (img.complete) {
                        callback(img);
                        clearInterval(timer);
                    }
                }, 50)
            }

            imgLoad(oImg, function() {
                // window.location.href = 'https://1.163.com/client?from=' + sFrom;
            })

        // }
    }
    /**
    * @method fPop 微信微博弹层
    * @param {}
    */
    function fSetCookie(name, value) {
        var exp = new Date();
        //cookie设置时间7天
        exp.setTime(exp.getTime() + 7 * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + escape(value) + ";path=/;expires=" + exp.toGMTString();
    }
    /**
    * @method fPop 微信微博弹层
    * @param {}
    */
    function fPop(){
        var app = document.createElement('div');

        var pophtml =   '<style type="text/css">'
                    +    '.can img{max-width: 640px;width:100%}body{margin: 0;padding:0;text-align:center;}'
                    +    '.but{max-width: 640px;width: 70%;margin: 30px 0 25px;position: fixed;bottom: 0%;left: 50%;margin-left: -35%;}'
                    +    '.can2{margin-top: 6%;display:none;}'
                    +    '.can2 img{max-width: 640px;width:85%}'
                    +    '.can3 { display: none;}'
                    +    '.can3 img { width: 100%;}'
                    +    '.can4 { display: none;}'
                    +    '.can4 img { width: 100%;}'
                    +    '.can2,.can3.can4.can {font-size: 0;}'
                    +    '#a { color: #000;}'
                    +    '</style>'
                    + '<div class="can2" id="can2">'
                    + '    <img src="https://mimg.fastduobao.com/act/g/161205_introduce/1506041511/img/fit/f5.jpg" alt=""/><br/>'
                    + '    <img src="https://mimg.fastduobao.com/act/g/161205_introduce/1506041511/img/fit/f6.jpg" alt=""/><br/>'
                    + '    <img src="https://mimg.fastduobao.com/act/g/161205_introduce/1506041511/img/fit/f7.jpg" alt=""/><br/>'
                    + '</div>'
                    + '<div class="can3" id="can3">'
                    + '    <img src="https://mimg.fastduobao.com/act/g/161205_introduce/1506041511/img/fit/f52_weibo.jpg" alt=""/><br/>'
                    + '    <img src="https://mimg.fastduobao.com/act/g/161205_introduce/1506041511/img/fit/f6.jpg" alt=""/><br/>'
                    + '    <img src="https://mimg.fastduobao.com/act/g/161205_introduce/1506041511/img/fit/f7.jpg" alt=""/><br/>'
                    + '</div>'
                    + '<div class="can4" id="can4">'
                    + '    <img src="https://mimg.fastduobao.com/act/g/161205_introduce/1506041511/img/f5_4.jpg" alt=""/><br/>'
                    + '    <img src="https://mimg.fastduobao.com/act/g/161205_introduce/1506041511/img/fit/f6.jpg" alt=""/><br/>'
                    + '   <img src="https://mimg.fastduobao.com/act/g/161205_introduce/1506041511/img/fit/f7.jpg" alt=""/><br/>'
                    + '</div>';

        document.body.append(app);

        app.innerHTML = pophtml;

        var ua = navigator.userAgent.toLowerCase(),
            can = document.getElementById("mzt-frame"),
            can2 = document.getElementById("can2"),
            btn = document.getElementById("appDownloadLink"),
            can3 = document.getElementById('can3');

        if (ua.match(/MicroMessenger/i) == "micromessenger") {

            // fSetHref('javascript:void(0)');

            btn.onclick = function(){
                document.body.style.background = "#f6f6f6";
                can.style.display = "none";
                btn.style.display = "none";
                can2.style.display = "block";
            }
        }else if(ua.match(/weibo/i) == "weibo"){
            btn.href = '#';
            btn.onclick = function() {
                document.body.style.background = "#f6f6f6";
                can.style.display = "none";
                btn.style.display = "none";
                can3.style.display = "block";
            }
        }else{
            // convertUrl();
            // fSetHref('https://1.163.com/client?from=' + G.from);
        }

        /**
        @根据前缀w_变成app_,现在from由后端给出，可以作废
        **/
        function convertUrl(){
            var val;
            if(location.search){
                var reg = /[<>'"]*/g;
                val = location.search.slice(6).replace(reg,'');

                var prefix = val.split('_')[0],
                    postfix = val.split('_')[1];

                if(prefix == 'w') {
                    val = 'app_' + postfix;
                }

            }else{
                val = "app_wappage";
            }

        }

    }
    /**
    * @method dataCollection 落地页数据收集需求
    * @param {fSuc} 成功回调
    */
    function fDataCollection(sfrom,fSuc) {

        var u = navigator.userAgent,
            width = window.document.documentElement.getBoundingClientRect().width,
            height = window.screen.height,
            source = sfrom,
            prefix = source.split('_')[0],
            postfix = source.split('_')[1];



        var oParam = {
            "userAgent": u,
            "width": width,
            "height": height,
            "source": source
        }
        var cinfo = JSON.stringify(oParam);
        // document.getElementById('cinfoText').value = cinfo;
        // document.getElementById("formid").submit();
        fGetXhr("https://www.fastduobao.com/oness/uploadClickUserInfo.do","jsonp",cinfo,function(){
            fSuc && fSuc.call(this);
        })
    }
    /**
     * update 2016-6-29 by Circus S Lin
     * [sendInfo 发起ajax请求]
     * @return {[type]} [description]
     */
    function fGetXhr(url,type,value,fSuc) {
        var self = this;
        var config = {
            "url" : url,
            "type": type,
            "param":{
                "cinfo": value
            },
            "callback" : function(oRes){
                fSuc && fSuc.call(self,oRes);
            }
        };

        var sendCode = window.Sing.Request(config);

        sendCode.start();
    }
    /**
     * [fGetData 判断ua]
     * @return {[type]} [description]
     */
    function fGetData(){

        var browser = {
            versions:function(){
                var u = navigator.userAgent, app = navigator.appVersion,i = u.indexOf(' OS') + 4;

                return {//移动终端浏览器版本信息
                    trident: u.indexOf('Trident') > -1, //IE内核
                    presto: u.indexOf('Presto') > -1, //opera内核
                    webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                    mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                    iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
                    iPad: u.indexOf('iPad') > -1, //是否iPad
                    webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
                    weixin: u.toLowerCase().indexOf('micromessenger') != -1,
                    uc : u.indexOf("ucbrowser") != -1,
                    ucweb: u.indexOf("ucweb") !=-1,
                    duobaoApp: app.indexOf('Duobao') != -1,    //判断是否是内嵌版的字段
                    duobaoAppVersion: app.match(/Duobao\/[0-9]\.[0-9]\.[0-9]/g) || false,    //夺宝的版本号
                    app:app,
                    yixin: u.toLowerCase().indexOf('yixin') != -1,    //判断是否是易欣
                    weiboApp: app.indexOf('Weibo') != -1,       //判断是否是微博内嵌app
                    iphoneOSVersion : u.substring(i,u.indexOf(' ',i)).replace(/_/g,'.'),
                    chrome: u.toLowerCase().indexOf('chrome') > -1

                };
            }(),
            language:(navigator.browserLanguage || navigator.language).toLowerCase()
        }
        var self = browser.versions;

            if(browser.versions.mobile || browser.versions.ios || browser.versions.android ||
                browser.versions.iPhone || browser.versions.iPad){

                self.MEDIA="mobile";
                self.app = browser.versions.app;
                //判断是否微信浏览器
                if(browser.versions.weixin)
                    self.weixin = true;
                else
                    self.weixin = false;

                if(browser.versions.yixin)
                    self.yixin = true;
                else
                    self.yixin = false;
                //判断app版本号
                if(browser.versions.duobaoApp)
                    self.duobaoAppVersion  = browser.versions.duobaoAppVersion;
                else
                    self.duobaoAppVersion = false;

                //判断是否是ios设备
                if(browser.versions.ios || browser.versions.iPhone || browser.versions.iPad )
                    self.ios = true;
                else
                    self.ios = false;

                if(browser.versions.android )
                    self.android = true;
                else
                    self.android = false;

                if (browser.versions.weiboApp)
                    self.weiboApp = true;
                else
                    self.weiboApp = false;


            }else {
                self.MEDIA = "pc";
                self.weixin = false;
                self.duobaoAppVersion = false;
            }


        return browser;

    }
    /**
     * [配置countly]
     * @return {[type]} [description]
     */
    function fUseCountly(Countly) {
        'use strict';

        var template_no = fGetUrlParam('template') || '1',
            from = fGetUrlParam('from') || '',
            kw = fGetUrlParam('kw'),
            ua = '';

        var url = window.location.href;

        (fGetData().versions.ios) ? ua = 'ios' : ua = 'android';

        (!kw == '') ? from = from + '#' + kw : from;


        var Countly = Countly || {};
        Countly.q = Countly.q || [];

        Countly.app_key = "70639cbb4203f32164de26a2ef8fe1c4de1be94e";
        Countly.url = "https://countly.fastduobao.com/countly";
        Countly.interval = 5000;
        Countly.cid = '0'; //用户cid, 用于过滤

        // 发送初始事件
        Countly.q.push(['track_sessions']);
        Countly.q.push(['track_pageview']);
        Countly.q.push(['track_links']);
        // PV
        Countly.q.push(['add_event',{
            "key": "appDownloadPage_t" + template_no,
            "segmentation": {
                "ver": ua + '#' + from
            }
        }]);

        //启动countly
        Countly.init();

    }
    /**
     * [weixinPop 微信点击添加浮层，不做跳转]
     * @return {[type]} [description]
     */
    function fWeixinPop() {
            var oDownload = document.getElementsByTagName('a');

            if(oDownload) {
                for (var i = 0; i < oDownload.length; i++) {

                    var href = oDownload.item(i).getAttribute('href');

                    if(href) {
                        var expc = /(https\:\/\/)\d\.\d+\.\w+\/\w+\?\w+\=/g;
                        if(!!!href.match(expc)){
                            //没有下载链接
                        }else{
                            //有下载链接
                            oDownload.item(i).setAttribute('href','javascript:void(0)');
                            oDownload.item(i).onclick = function(){
                                clickFunction();
                            }

                        };
                    }
                }
            }
            //预加载
            var img1 = document.createElement('img');
            var img2 = document.createElement('img');
            var img3 = document.createElement('img');

            img1.src = 'https://mimg.fastduobao.com/act/g/161205_introduce/1506041511/img/fit/f5.jpg';
            img2.src = 'https://mimg.fastduobao.com/act/g/161205_introduce/1506041511/img/fit/f6.jpg';
            img3.src = 'https://mimg.fastduobao.com/act/g/161205_introduce/1506041511/img/fit/f7.jpg';

            function clickFunction() {
                var div = document.createElement('div');
                div.class = 'can2';
                div.id = 'can2';
                div.style.position = 'fixed';
                div.style.background = "#f6f6f6";
                div.style.padding = '35px 0 25px';
                div.style.height = '100%';
                div.style.top = '0';
                div.style.fontSize = '0';
                div.style.zIndex = '1000';

                var img1 = document.createElement('img');
                var img2 = document.createElement('img');
                var img3 = document.createElement('img');

                img1.src = 'https://mimg.fastduobao.com/act/g/161205_introduce/1506041511/img/fit/f5.jpg';
                img2.src = 'https://mimg.fastduobao.com/act/g/161205_introduce/1506041511/img/fit/f6.jpg';
                img3.src = 'https://mimg.fastduobao.com/act/g/161205_introduce/1506041511/img/fit/f7.jpg';
                img1.style.maxWidth = '640px';
                img1.style.width = '85%';
                img1.style.margin = '0 auto';
                img1.style.display = 'block';
                img2.style.maxWidth = '640px';
                img2.style.width = '85%';
                img2.style.margin = '0 auto';
                img2.style.display = 'block';
                img3.style.maxWidth = '640px';
                img3.style.width = '85%';
                img3.style.margin = '0 auto';
                img3.style.display = 'block';

                div.appendChild(img1);
                div.appendChild(img2);
                div.appendChild(img3);

                document.body.appendChild(div);

            }
    }
    /**
     * [加载counlty，解决嵌套函数上下文改变]
     * @return {[type]} [description]
     */

    function fLaunchCountly() {
        //加载countly
        var cly = document.createElement('script');
        cly.type = 'text/javascript';
        cly.async = true;
        cly.src = 'https://mimg.fastduobao.com/act/lib/countly/countly.min.js';
        cly.onload = function() {
            self.useCountly.call(window,Countly);
        }
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(cly, s);

    }

    function fLaunchSingRequest() {
        var sing = document.createElement('script');
        sing.type = 'text/javascript';
        sing.async = true;
        sing.src = 'https://mimg.fastduobao.com/act/g/161205_introduce/1507160910/js/singRequest.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(sing,s);
    }

    function fJumpToScheme(tlink) {

        var ifr = document.createElement('iframe');

        ifr.src = tlink.length > 0 ? tlink : self.getOpenUrl();

        ifr.style.display = 'none';

        document.body.appendChild(ifr);
    }

    function fJumpToLocation(tlink) {
        var self = this;

        setTimeout(function(){

            window.location.href = tlink.length > 0 ? tlink : self.getOpenUrl();

        },500);
    }

    function fGetOpenUrl() {
        var schema = self.getUrlParam('schema');

        //在iframe 中打开APP
        if(schema) {
            var openUrl = MZT.YyJsBridgeProtocal + schema ;
        }else{
            var openUrl = MZT.YyJsBridgeProtocal + 'https://webview?url=www.fastduobao.com';

        }
        return openUrl;
    }




    function fSetDefaultValue(b) {
        var a;
        if( typeof b == 'boolean' ) {
            a = b || false;
        }else {
            a = true;
        }

        return a;
    }

    function fAddSchema() {

        var schema = self.getUrlParam('schema');

        var appDownloadLink = document.getElementById('appDownloadLink');

        var href = appDownloadLink.getAttribute('href');


        if(schema) {
            var reg = new RegExp("(^|&)" + 'schema' + "=([^&]*)(&|$)");

            var newurl = '&schema=' + encodeURIComponent(schema);

            href = href.substr(1).replace(reg,newurl);

            appDownloadLink.setAttribute('href',href);
        }


    }
    function fStart(oConf) {

        var oConf = oConf || {};

        var needTongji,needSingRequest,needSetFontSize,needDataCollection,jumpScheme;

        needTongji = self.setDefaultValue(oConf.needTongji);
        needSingRequest = self.setDefaultValue(oConf.needSingRequest);
        needSetFontSize = self.setDefaultValue(oConf.needSetFontSize);
        needDataCollection = self.setDefaultValue(oConf.needDataCollection);
        jumpScheme = self.setDefaultValue(oConf.jumpScheme);

        

        var tlink = oConf.tlink;   //duobaohkg://parser?content=xxx&schema=xx

        //有同步变量就不配置schema
        if( tlink.length > 0 ) {
            var isAddSchema = false;
        }else {
        //没有同步变量，从url拿
            var isAddSchema = oConf.isAddSchema || true; //默认true
        }
        
    
        if( needSingRequest ) {
            self.launchSingRequest();
        }

        if( needTongji ) {
            self.launchCountly();
        }


        if( needSetFontSize ) {
             self.setRootFontSize();
        }


        if( isAddSchema ) {
            self.addSchema();
        }


        if( jumpScheme ) {

            if( self.getData().versions.ios ) {
                var ver = self.getData().versions.iphoneOSVersion;

                if( ver.indexOf('.') != -1 ){
                    if( parseInt(ver.split('.')[0]) >= 9 ) {
                        //ios9以上
                        self.jumpToLocation(tlink);
                    }else {
                        //ios9以下
                        self.jumpToScheme(tlink);
                    }
                }else {
                    self.jumpToLocation(tlink);
                }
               
            }else {
                //chorme浏览器改变href
                if(self.getData().versions.chrome) {

                    isAddSchema = false;


                    var appDownloadLink = document.getElementById('appDownloadLink');
                    var href = appDownloadLink.href;


                    var chormeHref = 'intent://duobao/#Intent;scheme='+ ( tlink.length > 0 ? tlink : self.getOpenUrl() ) +';package=com.henkuaigou.kuaiduobao;S.browser_fallback_url='+ encodeURIComponent(href) +';end';

                    appDownloadLink.setAttribute('href',chormeHref);


                }
                // //普通安卓浏览器
                self.jumpToLocation(tlink);

            }


        }

        if( needDataCollection ) {
            window.onload = function() {
                var sfrom = self.getUrlParam('from');
                self.dataCollection(sfrom);
            }
        }



        //微信点击添加浮层，不做跳转
        if(navigator.userAgent.toLowerCase().indexOf('micromessenger') != -1) {
            self.pop();
            self.setHref('javascript:void(0)');
        }

    }

})();