# 项目介绍
 fe-open是一个用于H5唤醒移动APP的库，通过一些配置，自动识别H5执行的机型、浏览器环境，调用适配的方式唤醒原生APP，目前支持一下几种调用方式：


| 调用方式|系统|浏览器|优先级(1最大)
|:----------|:----------:|:----------:|-----------|
| schema | ALL | ALL| 3 |
| intent | Android | Chrome | 2 |
| universal link | IOS >= 9 | Safari| 1 |
| app link| Android >= 6| ALL |1|
intent在不同机型的浏览器存在兼容性问题，例如在MIUI、Samsung无法触发browser_fallback_url

自动唤醒：唤醒失败后不做任何操作，保持在当前页面
~~universal link/deep link~~
intent
schema

手动唤醒：点击按钮触发时间唤醒，唤醒失败后跳转到下载页面，如果是WeChat、Weibo，弹出提示框
universal link/deep link （IOS9支持手动点击使用universal唤醒，但不允许进入时自动唤醒）
intent
schema

#目录结构

>dist 编译后的压缩代码 
>src 
>>index.js	--入口，包括唤醒地址生成、url默认参数加载、按钮事件  
>>feopen.js	--唤醒库，包括环境检测、调用方式  
>> business  与具体业务系统强相关的js目录，业务系统应该直接调用的js，需要按需调用统计、加载相关参数、统一的schema，并对外开放极少量的接口  
>>>feopen.web.duobao.js 
>>>feopen.web.404.js

 
# 安装方式
1. npm install fe-open
2. umd方式引用npm包
3. 或直接umd引用dist对应的js

# 使用方式
## CommonJS/ES Module/AMD
```javascript
var feOpenWeb = require('fe-open');
feOpenWeb.init({
            protocal: 'duobaohkg://',
            value: schema
        }, {
            host: '//duobao',
            package: 'com.henkuaigou.kuaiduobao',
            schema: schema,
            fallbackUrl: ''
        }, 
        'https://app.duobao.com',
        'https://download.duobao.com', 
        'duobaohkg', 
        {
            onStart: function() {
                //console.log('start:' + Date());
            },
            onEnd: function() {
                //console.log('end:' + Date());
            },
            onSuccess: function() {
                //console.log('success:' + Date());
            },
            onFail: function() {
                //console.log('fail:' + Date());
            },
            onWeChat:function(){
                console.log('wechat show download');
            }
        });
feOpenWeb.start(true);
```

## script src方式
```html
<script src="dist/feopen_web.min.js"></script>
```
```javascript
feopen_web.init(...);
feopen_web.start();
```
# 接口方法
```javascript
//手动尝试打开APP
feopen_web.open(...);
//手动下载APP
feopen_web.download(...);
```

# 业务库
目录：/src/business/ 针对各业务系统的脚本，封装了APP的open参数
引用方式：CommonJS/ES Module/AMD/Script
使用方法：参考 /sample 的案例

# [Document](https://git.mail.netease.com/frontend-library/fe-open/wikis/home)
自动唤醒：
1. .start(true)
2. URL query string方式,?auto=1/?auto=true
按钮事件监听
默认监听.feopen(打开)和.feopen-download(下载) 

# 唤醒知识
universal link
在IOS safari中，iframe src已经不再支持，如果使用location方式，会自动跳转，如果没有安装，则会跳到该URL，需要能够有效打开，否则会404或500

android + chrome: schema/intent 都能够手动唤醒：

1.设置url href,手动点击后唤醒 

2.javascript设置location唤醒，但需要从别的url跳转进来才能触发生效

universal link
微信：除非白名单，否则全屏蔽
微博：直接输入link无效，从中转页面往universal link页跳转，可以唤醒
UC、百度：扫码、直接输入link无效，从中转页面往universal link页跳转，可以唤醒
safari：摄像头扫码跳转有效，其它同UC