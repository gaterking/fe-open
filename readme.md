# 项目介绍
 fee-open是一个用于H5唤醒移动APP的库，通过一些配置，自动识别H5执行的机型、浏览器环境，调用适配的方式唤醒原生APP，目前支持一下几种调用方式：


| 调用方式|系统|浏览器|优先级(1最大)
|:----------|:----------:|:----------:|-----------|
| schema      | ALL | ALL| 3 |
| intent      | Android | chrome | 2 |
| universal link | IOS >= 9 | Safari| 1 |
| deep link|||/|


#目录结构

>dist 编译后的压缩代码 
>src 
>>index.js	--入口，包括唤醒地址生成、url默认参数加载、按钮事件  
>>feopen.js	--唤醒库，包括环境检测、调用方式  
>> business  与具体业务系统强相关的js目录，业务系统应该直接调用的js，需要按需调用统计、加载相关参数、统一的schema，并对外开放极少量的接口  
>>>feopen.web.duobao.js  

 
# 安装方式
1. npm install fee-open
2. umd方式引用npm包
3. 或直接umd引用dist对应的js

# 使用方式
## CommonJS/ES Module/AMD
```javascript
var feOpenWeb = require('fee-open');
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
feedown_web.download(...);
```

# [Document](/wiki/Home)  
# 唤醒知识
android + chrome: schema/intent 都能够手动唤醒：

1.设置url href,手动点击后唤醒 

2.javascript设置location唤醒，但需要从别的url跳转进来才能触发生效