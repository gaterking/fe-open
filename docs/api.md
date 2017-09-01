## Modules

<dl>
<dt><a href="#module_init">init</a> ⇒ <code><a href="#feOpenWeb">feOpenWeb</a></code></dt>
<dd><p>初始化feOpenWeb，new feOpenWeb</p></dd>
<dt><a href="#module_feOpen">feOpen</a> ⇒ <code><a href="#feOpen">feOpen</a></code></dt>
<dd><p>feOpen</p></dd>
</dl>

## Classes

<dl>
<dt><a href="#feOpenWeb">feOpenWeb</a></dt>
<dd></dd>
<dt><a href="#feOpen">feOpen</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#wakeupCallback">wakeupCallback</a> : <code>function</code></dt>
<dd><p>唤醒回调函数</p></dd>
</dl>

<a name="module_init"></a>

## init ⇒ [<code>feOpenWeb</code>](#feOpenWeb)
<p>初始化feOpenWeb，new feOpenWeb</p>

**See**: [feOpenWeb](#feOpenWeb)  
<a name="module_feOpen"></a>

## feOpen ⇒ [<code>feOpen</code>](#feOpen)
<p>feOpen</p>

**See**: [feOpen](#feOpen)  
<a name="feOpenWeb"></a>

## feOpenWeb
**Kind**: global class  
**Implements**: [<code>feOpen</code>](#feOpen)  
<a name="new_feOpenWeb_new"></a>

### new feOpenWeb(schema, intentData, universalUrl, downloadUrl, appFlag, callback)
<p>应用于业务的fee-open库,通过url参数或配置初始化fee-open库
.feOpen, .feOpen-download，监听.feOpen, .feOpen-download的click事件，手动进行open和download操作</p>


| Param | Type | Description |
| --- | --- | --- |
| schema | <code>Object</code> | <p>schema定义</p> |
| schema.protocal | <code>string</code> | <p>schema协议，例如duobaohkg://</p> |
| schema.value | <code>string</code> | <p>schema值</p> |
| intentData | <code>Object</code> | <p>android intent定义，自动格式成intent link，与Android intent格式一直，例如intent://send/+XXXXXXXXXXX#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end</p> |
| intentData.host | <code>string</code> | <p>HOST/URI-path</p> |
| intentData.schema | <code>string</code> | <p>-</p> |
| intentData.package | <code>string</code> | <p>-</p> |
| intentData.action | <code>string</code> | <p>-</p> |
| intentData.category | <code>string</code> | <p>-</p> |
| intentData.component | <code>string</code> | <p>-</p> |
| intentData.fallbackUrl | <code>string</code> | <p>-</p> |
| universalUrl | <code>string</code> | <p>unitersal地址</p> |
| downloadUrl | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <p>下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面</p> |
| appFlag | <code>string</code> \| <code>function</code> | <p>app UA判断标识</p> |
| callback | <code>object</code> | <p>回调对象</p> |
| callback.onStart | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onEnd | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onSuccess | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onFail | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onWeChat | [<code>wakeupCallback</code>](#wakeupCallback) | <p>当前环境是微信</p> |

<a name="feOpen"></a>

## feOpen
**Kind**: global class  

* [feOpen](#feOpen)
    * [new feOpen()](#new_feOpen_new)
    * [.config](#feOpen+config)
    * [.download(url)](#feOpen+download)
    * [.open(urls)](#feOpen+open)
    * [.start(open)](#feOpen+start)

<a name="new_feOpen_new"></a>

### new feOpen()
<p>feOpen 唤醒库核心基类，对各个移动端环境进行兼容性处理</p>

<a name="feOpen+config"></a>

### feOpen.config
<p>配置，初始化后根据参数自动生成</p>

**Kind**: instance property of [<code>feOpen</code>](#feOpen)  
**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| isApp | <code>boolean</code> | <p>是否内嵌在APP，如果为true，会自动忽略open操作</p> |
| autoOpen | <code>boolean</code> | <p>是否尝试自动打开</p> |
| schema | <code>string</code> | <p>完整的唤醒schema</p> |
| downloadUrl | <code>string</code> \| <code>Array</code> | <p>下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面</p> |
| callback | <code>object</code> | <p>回调对象</p> |
| callback.onStart | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onEnd | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onSuccess | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onFail | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onWeChat | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |

<a name="feOpen+download"></a>

### feOpen.download(url)
<p>启动下载APP</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | <p>下载地址</p> |

<a name="feOpen+open"></a>

### feOpen.open(urls)
<p>手动执行唤醒</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| urls | <code>object</code> | <p>唤醒参数，指定后本次唤醒替换初始化配置</p> |
| urls.universalUrl | <code>string</code> |  |
| urls.intent | <code>string</code> |  |
| urls.schema | <code>string</code> |  |

<a name="feOpen+start"></a>

### feOpen.start(open)
<p>start
执行open库，在初始化之后调用</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| open | <code>boolean</code> | <p>是否自动打开，如果未配置，则自动读取url参数的auto属性</p> |

<a name="wakeupCallback"></a>

## wakeupCallback : <code>function</code>
<p>唤醒回调函数</p>

**Kind**: global typedef  
## Modules

<dl>
<dt><a href="#module_init">init</a> ⇒ <code><a href="#feOpenWeb">feOpenWeb</a></code></dt>
<dd><p>初始化feOpenWeb，new feOpenWeb</p></dd>
<dt><a href="#module_feOpen">feOpen</a> ⇒ <code><a href="#feOpen">feOpen</a></code></dt>
<dd><p>feOpen</p></dd>
</dl>

## Classes

<dl>
<dt><a href="#feOpenWeb">feOpenWeb</a></dt>
<dd></dd>
<dt><a href="#feOpen">feOpen</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#wakeupCallback">wakeupCallback</a> : <code>function</code></dt>
<dd><p>唤醒回调函数</p></dd>
</dl>

<a name="module_init"></a>

## init ⇒ [<code>feOpenWeb</code>](#feOpenWeb)
<p>初始化feOpenWeb，new feOpenWeb</p>

**See**: [feOpenWeb](#feOpenWeb)  
<a name="module_feOpen"></a>

## feOpen ⇒ [<code>feOpen</code>](#feOpen)
<p>feOpen</p>

**See**: [feOpen](#feOpen)  
<a name="feOpenWeb"></a>

## feOpenWeb
**Kind**: global class  
**Implements**: [<code>feOpen</code>](#feOpen)  
<a name="new_feOpenWeb_new"></a>

### new feOpenWeb(schema, intentData, universalUrl, downloadUrl, appFlag, callback)
<p>应用于业务的fee-open库,通过url参数或配置初始化fee-open库
.feOpen, .feOpen-download，监听.feOpen, .feOpen-download的click事件，手动进行open和download操作</p>


| Param | Type | Description |
| --- | --- | --- |
| schema | <code>Object</code> | <p>schema定义</p> |
| schema.protocal | <code>string</code> | <p>schema协议，例如duobaohkg://</p> |
| schema.value | <code>string</code> | <p>schema值</p> |
| intentData | <code>Object</code> | <p>android intent定义，自动格式成intent link，与Android intent格式一直，例如intent://send/+XXXXXXXXXXX#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end</p> |
| intentData.host | <code>string</code> | <p>HOST/URI-path</p> |
| intentData.schema | <code>string</code> | <p>-</p> |
| intentData.package | <code>string</code> | <p>-</p> |
| intentData.action | <code>string</code> | <p>-</p> |
| intentData.category | <code>string</code> | <p>-</p> |
| intentData.component | <code>string</code> | <p>-</p> |
| intentData.fallbackUrl | <code>string</code> | <p>-</p> |
| universalUrl | <code>string</code> | <p>unitersal地址</p> |
| downloadUrl | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <p>下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面</p> |
| appFlag | <code>string</code> \| <code>function</code> | <p>app UA判断标识</p> |
| callback | <code>object</code> | <p>回调对象</p> |
| callback.onStart | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onEnd | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onSuccess | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onFail | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onWeChat | [<code>wakeupCallback</code>](#wakeupCallback) | <p>当前环境是微信</p> |

<a name="feOpen"></a>

## feOpen
**Kind**: global class  

* [feOpen](#feOpen)
    * [new feOpen()](#new_feOpen_new)
    * [.config](#feOpen+config)
    * [.download(url)](#feOpen+download)
    * [.open(urls)](#feOpen+open)
    * [.start(open)](#feOpen+start)

<a name="new_feOpen_new"></a>

### new feOpen()
<p>feOpen 唤醒库核心基类，对各个移动端环境进行兼容性处理</p>

<a name="feOpen+config"></a>

### feOpen.config
<p>配置，初始化后根据参数自动生成</p>

**Kind**: instance property of [<code>feOpen</code>](#feOpen)  
**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| isApp | <code>boolean</code> | <p>是否内嵌在APP，如果为true，会自动忽略open操作</p> |
| autoOpen | <code>boolean</code> | <p>是否尝试自动打开</p> |
| schema | <code>string</code> | <p>完整的唤醒schema</p> |
| downloadUrl | <code>string</code> \| <code>Array</code> | <p>下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面</p> |
| callback | <code>object</code> | <p>回调对象</p> |
| callback.onStart | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onEnd | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onSuccess | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onFail | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onWeChat | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |

<a name="feOpen+download"></a>

### feOpen.download(url)
<p>启动下载APP</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | <p>下载地址</p> |

<a name="feOpen+open"></a>

### feOpen.open(urls)
<p>手动执行唤醒</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| urls | <code>object</code> | <p>唤醒参数，指定后本次唤醒替换初始化配置</p> |
| urls.universalUrl | <code>string</code> |  |
| urls.intent | <code>string</code> |  |
| urls.schema | <code>string</code> |  |

<a name="feOpen+start"></a>

### feOpen.start(open)
<p>start
执行open库，在初始化之后调用</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| open | <code>boolean</code> | <p>是否自动打开，如果未配置，则自动读取url参数的auto属性</p> |

<a name="wakeupCallback"></a>

## wakeupCallback : <code>function</code>
<p>唤醒回调函数</p>

**Kind**: global typedef  
## Modules

<dl>
<dt><a href="#module_init">init</a> ⇒ <code><a href="#feOpenWeb">feOpenWeb</a></code></dt>
<dd><p>初始化feOpenWeb，new feOpenWeb</p></dd>
<dt><a href="#module_feOpen">feOpen</a> ⇒ <code><a href="#feOpen">feOpen</a></code></dt>
<dd><p>feOpen</p></dd>
</dl>

## Classes

<dl>
<dt><a href="#feOpenWeb">feOpenWeb</a></dt>
<dd></dd>
<dt><a href="#feOpen">feOpen</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#wakeupCallback">wakeupCallback</a> : <code>function</code></dt>
<dd><p>唤醒回调函数</p></dd>
</dl>

<a name="module_init"></a>

## init ⇒ [<code>feOpenWeb</code>](#feOpenWeb)
<p>初始化feOpenWeb，new feOpenWeb</p>

**See**: [feOpenWeb](#feOpenWeb)  
<a name="module_feOpen"></a>

## feOpen ⇒ [<code>feOpen</code>](#feOpen)
<p>feOpen</p>

**See**: [feOpen](#feOpen)  
<a name="feOpenWeb"></a>

## feOpenWeb
**Kind**: global class  
**Implements**: [<code>feOpen</code>](#feOpen)  
<a name="new_feOpenWeb_new"></a>

### new feOpenWeb(schema, intentData, universalUrl, downloadUrl, appFlag, callback)
<p>应用于业务的fee-open库,通过url参数或配置初始化fee-open库
.feOpen, .feOpen-download，监听.feOpen, .feOpen-download的click事件，手动进行open和download操作</p>


| Param | Type | Description |
| --- | --- | --- |
| schema | <code>Object</code> | <p>schema定义</p> |
| schema.protocal | <code>string</code> | <p>schema协议，例如duobaohkg://</p> |
| schema.value | <code>string</code> | <p>schema值</p> |
| intentData | <code>Object</code> | <p>android intent定义，自动格式成intent link，与Android intent格式一直，例如intent://send/+XXXXXXXXXXX#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end</p> |
| intentData.host | <code>string</code> | <p>HOST/URI-path</p> |
| intentData.schema | <code>string</code> | <p>-</p> |
| intentData.package | <code>string</code> | <p>-</p> |
| intentData.action | <code>string</code> | <p>-</p> |
| intentData.category | <code>string</code> | <p>-</p> |
| intentData.component | <code>string</code> | <p>-</p> |
| intentData.fallbackUrl | <code>string</code> | <p>-</p> |
| universalUrl | <code>string</code> | <p>unitersal地址</p> |
| downloadUrl | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <p>下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面</p> |
| appFlag | <code>string</code> \| <code>function</code> | <p>app UA判断标识</p> |
| callback | <code>object</code> | <p>回调对象</p> |
| callback.onStart | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onEnd | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onSuccess | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onFail | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onWeChat | [<code>wakeupCallback</code>](#wakeupCallback) | <p>当前环境是微信</p> |

<a name="feOpen"></a>

## feOpen
**Kind**: global class  

* [feOpen](#feOpen)
    * [new feOpen()](#new_feOpen_new)
    * [.config](#feOpen+config)
    * [.download(url)](#feOpen+download)
    * [.open(urls)](#feOpen+open)
    * [.start(open)](#feOpen+start)

<a name="new_feOpen_new"></a>

### new feOpen()
<p>feOpen 唤醒库核心基类，对各个移动端环境进行兼容性处理</p>

<a name="feOpen+config"></a>

### feOpen.config
<p>配置，初始化后根据参数自动生成</p>

**Kind**: instance property of [<code>feOpen</code>](#feOpen)  
**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| isApp | <code>boolean</code> | <p>是否内嵌在APP，如果为true，会自动忽略open操作</p> |
| autoOpen | <code>boolean</code> | <p>是否尝试自动打开</p> |
| schema | <code>string</code> | <p>完整的唤醒schema</p> |
| downloadUrl | <code>string</code> \| <code>Array</code> | <p>下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面</p> |
| callback | <code>object</code> | <p>回调对象</p> |
| callback.onStart | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onEnd | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onSuccess | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onFail | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onWeChat | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |

<a name="feOpen+download"></a>

### feOpen.download(url)
<p>启动下载APP</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | <p>下载地址</p> |

<a name="feOpen+open"></a>

### feOpen.open(urls)
<p>手动执行唤醒</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| urls | <code>object</code> | <p>唤醒参数，指定后本次唤醒替换初始化配置</p> |
| urls.universalUrl | <code>string</code> |  |
| urls.intent | <code>string</code> |  |
| urls.schema | <code>string</code> |  |

<a name="feOpen+start"></a>

### feOpen.start(open)
<p>start
执行open库，在初始化之后调用</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| open | <code>boolean</code> | <p>是否自动打开，如果未配置，则自动读取url参数的auto属性</p> |

<a name="wakeupCallback"></a>

## wakeupCallback : <code>function</code>
<p>唤醒回调函数</p>

**Kind**: global typedef  
## Modules

<dl>
<dt><a href="#module_init">init</a> ⇒ <code><a href="#feOpenWeb">feOpenWeb</a></code></dt>
<dd><p>初始化feOpenWeb，new feOpenWeb</p></dd>
<dt><a href="#module_feOpen">feOpen</a> ⇒ <code><a href="#feOpen">feOpen</a></code></dt>
<dd><p>feOpen</p></dd>
</dl>

## Classes

<dl>
<dt><a href="#feOpenWeb">feOpenWeb</a></dt>
<dd></dd>
<dt><a href="#feOpen">feOpen</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#wakeupCallback">wakeupCallback</a> : <code>function</code></dt>
<dd><p>唤醒回调函数</p></dd>
</dl>

<a name="module_init"></a>

## init ⇒ [<code>feOpenWeb</code>](#feOpenWeb)
<p>初始化feOpenWeb，new feOpenWeb</p>

**See**: [feOpenWeb](#feOpenWeb)  
<a name="module_feOpen"></a>

## feOpen ⇒ [<code>feOpen</code>](#feOpen)
<p>feOpen</p>

**See**: [feOpen](#feOpen)  
<a name="feOpenWeb"></a>

## feOpenWeb
**Kind**: global class  
**Implements**: [<code>feOpen</code>](#feOpen)  
<a name="new_feOpenWeb_new"></a>

### new feOpenWeb(schema, intentData, universalUrl, downloadUrl, appFlag, callback)
<p>应用于业务的fee-open库,通过url参数或配置初始化fee-open库
.feOpen, .feOpen-download，监听.feOpen, .feOpen-download的click事件，手动进行open和download操作</p>


| Param | Type | Description |
| --- | --- | --- |
| schema | <code>Object</code> | <p>schema定义</p> |
| schema.protocal | <code>string</code> | <p>schema协议，例如duobaohkg://</p> |
| schema.value | <code>string</code> | <p>schema值</p> |
| intentData | <code>Object</code> | <p>android intent定义，自动格式成intent link，与Android intent格式一直，例如intent://send/+XXXXXXXXXXX#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end</p> |
| intentData.host | <code>string</code> | <p>HOST/URI-path</p> |
| intentData.schema | <code>string</code> | <p>-</p> |
| intentData.package | <code>string</code> | <p>-</p> |
| intentData.action | <code>string</code> | <p>-</p> |
| intentData.category | <code>string</code> | <p>-</p> |
| intentData.component | <code>string</code> | <p>-</p> |
| intentData.fallbackUrl | <code>string</code> | <p>-</p> |
| universalUrl | <code>string</code> | <p>unitersal地址</p> |
| downloadUrl | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <p>下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面</p> |
| appFlag | <code>string</code> \| <code>function</code> | <p>app UA判断标识</p> |
| callback | <code>object</code> | <p>回调对象</p> |
| callback.onStart | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onEnd | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onSuccess | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onFail | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onWeChat | [<code>wakeupCallback</code>](#wakeupCallback) | <p>当前环境是微信</p> |

<a name="feOpen"></a>

## feOpen
**Kind**: global class  

* [feOpen](#feOpen)
    * [new feOpen()](#new_feOpen_new)
    * [.config](#feOpen+config)
    * [.download(url)](#feOpen+download)
    * [.open(urls)](#feOpen+open)
    * [.start(open)](#feOpen+start)

<a name="new_feOpen_new"></a>

### new feOpen()
<p>feOpen 唤醒库核心基类，对各个移动端环境进行兼容性处理</p>

<a name="feOpen+config"></a>

### feOpen.config
<p>配置，初始化后根据参数自动生成</p>

**Kind**: instance property of [<code>feOpen</code>](#feOpen)  
**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| isApp | <code>boolean</code> | <p>是否内嵌在APP，如果为true，会自动忽略open操作</p> |
| autoOpen | <code>boolean</code> | <p>是否尝试自动打开</p> |
| schema | <code>string</code> | <p>完整的唤醒schema</p> |
| downloadUrl | <code>string</code> \| <code>Array</code> | <p>下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面</p> |
| callback | <code>object</code> | <p>回调对象</p> |
| callback.onStart | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onEnd | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onSuccess | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onFail | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onWeChat | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |

<a name="feOpen+download"></a>

### feOpen.download(url)
<p>启动下载APP</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | <p>下载地址</p> |

<a name="feOpen+open"></a>

### feOpen.open(urls)
<p>手动执行唤醒</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| urls | <code>object</code> | <p>唤醒参数，指定后本次唤醒替换初始化配置</p> |
| urls.universalUrl | <code>string</code> |  |
| urls.intent | <code>string</code> |  |
| urls.schema | <code>string</code> |  |

<a name="feOpen+start"></a>

### feOpen.start(open)
<p>start
执行open库，在初始化之后调用</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| open | <code>boolean</code> | <p>是否自动打开，如果未配置，则自动读取url参数的auto属性</p> |

<a name="wakeupCallback"></a>

## wakeupCallback : <code>function</code>
<p>唤醒回调函数</p>

**Kind**: global typedef  
## Modules

<dl>
<dt><a href="#module_init">init</a> ⇒ <code><a href="#feOpenWeb">feOpenWeb</a></code></dt>
<dd><p>初始化feOpenWeb，new feOpenWeb</p></dd>
<dt><a href="#module_feOpen">feOpen</a> ⇒ <code><a href="#feOpen">feOpen</a></code></dt>
<dd><p>feOpen</p></dd>
</dl>

## Classes

<dl>
<dt><a href="#feOpenWeb">feOpenWeb</a></dt>
<dd></dd>
<dt><a href="#feOpen">feOpen</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#wakeupCallback">wakeupCallback</a> : <code>function</code></dt>
<dd><p>唤醒回调函数</p></dd>
</dl>

<a name="module_init"></a>

## init ⇒ [<code>feOpenWeb</code>](#feOpenWeb)
<p>初始化feOpenWeb，new feOpenWeb</p>

**See**: [feOpenWeb](#feOpenWeb)  
<a name="module_feOpen"></a>

## feOpen ⇒ [<code>feOpen</code>](#feOpen)
<p>feOpen</p>

**See**: [feOpen](#feOpen)  
<a name="feOpenWeb"></a>

## feOpenWeb
**Kind**: global class  
**Implements**: [<code>feOpen</code>](#feOpen)  
<a name="new_feOpenWeb_new"></a>

### new feOpenWeb(schema, intentData, universalUrl, downloadUrl, appFlag, callback)
<p>应用于业务的fee-open库,通过url参数或配置初始化fee-open库
.feOpen, .feOpen-download，监听.feOpen, .feOpen-download的click事件，手动进行open和download操作</p>


| Param | Type | Description |
| --- | --- | --- |
| schema | <code>Object</code> | <p>schema定义</p> |
| schema.protocal | <code>string</code> | <p>schema协议，例如duobaohkg://</p> |
| schema.value | <code>string</code> | <p>schema值</p> |
| intentData | <code>Object</code> | <p>android intent定义，自动格式成intent link，与Android intent格式一直，例如intent://send/+XXXXXXXXXXX#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end</p> |
| intentData.host | <code>string</code> | <p>HOST/URI-path</p> |
| intentData.schema | <code>string</code> | <p>-</p> |
| intentData.package | <code>string</code> | <p>-</p> |
| intentData.action | <code>string</code> | <p>-</p> |
| intentData.category | <code>string</code> | <p>-</p> |
| intentData.component | <code>string</code> | <p>-</p> |
| intentData.fallbackUrl | <code>string</code> | <p>-</p> |
| universalUrl | <code>string</code> | <p>unitersal地址</p> |
| downloadUrl | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <p>下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面</p> |
| appFlag | <code>string</code> \| <code>function</code> | <p>app UA判断标识</p> |
| callback | <code>object</code> | <p>回调对象</p> |
| callback.onStart | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onEnd | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onSuccess | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onFail | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onWeChat | [<code>wakeupCallback</code>](#wakeupCallback) | <p>当前环境是微信</p> |

<a name="feOpen"></a>

## feOpen
**Kind**: global class  

* [feOpen](#feOpen)
    * [new feOpen()](#new_feOpen_new)
    * [.config](#feOpen+config)
    * [.download(url)](#feOpen+download)
    * [.open(urls)](#feOpen+open)
    * [.start(open)](#feOpen+start)

<a name="new_feOpen_new"></a>

### new feOpen()
<p>feOpen 唤醒库核心基类，对各个移动端环境进行兼容性处理</p>

<a name="feOpen+config"></a>

### feOpen.config
<p>配置，初始化后根据参数自动生成</p>

**Kind**: instance property of [<code>feOpen</code>](#feOpen)  
**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| isApp | <code>boolean</code> | <p>是否内嵌在APP，如果为true，会自动忽略open操作</p> |
| autoOpen | <code>boolean</code> | <p>是否尝试自动打开</p> |
| schema | <code>string</code> | <p>完整的唤醒schema</p> |
| downloadUrl | <code>string</code> \| <code>Array</code> | <p>下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面</p> |
| callback | <code>object</code> | <p>回调对象</p> |
| callback.onStart | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onEnd | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onSuccess | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onFail | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onWeChat | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |

<a name="feOpen+download"></a>

### feOpen.download(url)
<p>启动下载APP</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | <p>下载地址</p> |

<a name="feOpen+open"></a>

### feOpen.open(urls)
<p>手动执行唤醒</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| urls | <code>object</code> | <p>唤醒参数，指定后本次唤醒替换初始化配置</p> |
| urls.universalUrl | <code>string</code> |  |
| urls.intent | <code>string</code> |  |
| urls.schema | <code>string</code> |  |

<a name="feOpen+start"></a>

### feOpen.start(open)
<p>start
执行open库，在初始化之后调用</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| open | <code>boolean</code> | <p>是否自动打开，如果未配置，则自动读取url参数的auto属性</p> |

<a name="wakeupCallback"></a>

## wakeupCallback : <code>function</code>
<p>唤醒回调函数</p>

**Kind**: global typedef  
## Modules

<dl>
<dt><a href="#module_init">init</a> ⇒ <code><a href="#feOpenWeb">feOpenWeb</a></code></dt>
<dd><p>初始化feOpenWeb，new feOpenWeb</p></dd>
<dt><a href="#module_feOpen">feOpen</a> ⇒ <code><a href="#feOpen">feOpen</a></code></dt>
<dd><p>feOpen</p></dd>
</dl>

## Classes

<dl>
<dt><a href="#feOpenWeb">feOpenWeb</a></dt>
<dd></dd>
<dt><a href="#feOpen">feOpen</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#wakeupCallback">wakeupCallback</a> : <code>function</code></dt>
<dd><p>唤醒回调函数</p></dd>
</dl>

<a name="module_init"></a>

## init ⇒ [<code>feOpenWeb</code>](#feOpenWeb)
<p>初始化feOpenWeb，new feOpenWeb</p>

**See**: [feOpenWeb](#feOpenWeb)  
<a name="module_feOpen"></a>

## feOpen ⇒ [<code>feOpen</code>](#feOpen)
<p>feOpen</p>

**See**: [feOpen](#feOpen)  
<a name="feOpenWeb"></a>

## feOpenWeb
**Kind**: global class  
**Implements**: [<code>feOpen</code>](#feOpen)  
<a name="new_feOpenWeb_new"></a>

### new feOpenWeb(schema, intentData, universalUrl, downloadUrl, appFlag, callback)
<p>应用于业务的fee-open库,通过url参数或配置初始化fee-open库
.feOpen, .feOpen-download，监听.feOpen, .feOpen-download的click事件，手动进行open和download操作</p>


| Param | Type | Description |
| --- | --- | --- |
| schema | <code>Object</code> | <p>schema定义</p> |
| schema.protocal | <code>string</code> | <p>schema协议，例如duobaohkg://</p> |
| schema.value | <code>string</code> | <p>schema值</p> |
| intentData | <code>Object</code> | <p>android intent定义，自动格式成intent link，与Android intent格式一直，例如intent://send/+XXXXXXXXXXX#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end</p> |
| intentData.host | <code>string</code> | <p>HOST/URI-path</p> |
| intentData.schema | <code>string</code> | <p>-</p> |
| intentData.package | <code>string</code> | <p>-</p> |
| intentData.action | <code>string</code> | <p>-</p> |
| intentData.category | <code>string</code> | <p>-</p> |
| intentData.component | <code>string</code> | <p>-</p> |
| intentData.fallbackUrl | <code>string</code> | <p>-</p> |
| universalUrl | <code>string</code> | <p>unitersal地址</p> |
| downloadUrl | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <p>下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面</p> |
| appFlag | <code>string</code> \| <code>function</code> | <p>app UA判断标识</p> |
| callback | <code>object</code> | <p>回调对象</p> |
| callback.onStart | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onEnd | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onSuccess | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onFail | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onWeChat | [<code>wakeupCallback</code>](#wakeupCallback) | <p>当前环境是微信</p> |

<a name="feOpen"></a>

## feOpen
**Kind**: global class  

* [feOpen](#feOpen)
    * [new feOpen()](#new_feOpen_new)
    * [.config](#feOpen+config)
    * [.download(url)](#feOpen+download)
    * [.open(urls)](#feOpen+open)
    * [.start(open)](#feOpen+start)

<a name="new_feOpen_new"></a>

### new feOpen()
<p>feOpen 唤醒库核心基类，对各个移动端环境进行兼容性处理</p>

<a name="feOpen+config"></a>

### feOpen.config
<p>配置，初始化后根据参数自动生成</p>

**Kind**: instance property of [<code>feOpen</code>](#feOpen)  
**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| isApp | <code>boolean</code> | <p>是否内嵌在APP，如果为true，会自动忽略open操作</p> |
| autoOpen | <code>boolean</code> | <p>是否尝试自动打开</p> |
| schema | <code>string</code> | <p>完整的唤醒schema</p> |
| downloadUrl | <code>string</code> \| <code>Array</code> | <p>下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面</p> |
| callback | <code>object</code> | <p>回调对象</p> |
| callback.onStart | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onEnd | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onSuccess | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onFail | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onWeChat | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |

<a name="feOpen+download"></a>

### feOpen.download(url)
<p>启动下载APP</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | <p>下载地址</p> |

<a name="feOpen+open"></a>

### feOpen.open(urls)
<p>手动执行唤醒</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| urls | <code>object</code> | <p>唤醒参数，指定后本次唤醒替换初始化配置</p> |
| urls.universalUrl | <code>string</code> |  |
| urls.intent | <code>string</code> |  |
| urls.schema | <code>string</code> |  |

<a name="feOpen+start"></a>

### feOpen.start(open)
<p>start
执行open库，在初始化之后调用</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| open | <code>boolean</code> | <p>是否自动打开，如果未配置，则自动读取url参数的auto属性</p> |

<a name="wakeupCallback"></a>

## wakeupCallback : <code>function</code>
<p>唤醒回调函数</p>

**Kind**: global typedef  
## Modules

<dl>
<dt><a href="#module_init">init</a> ⇒ <code><a href="#feOpenWeb">feOpenWeb</a></code></dt>
<dd><p>初始化feOpenWeb，new feOpenWeb</p></dd>
<dt><a href="#module_feOpen">feOpen</a> ⇒ <code><a href="#feOpen">feOpen</a></code></dt>
<dd><p>feOpen</p></dd>
</dl>

## Classes

<dl>
<dt><a href="#feOpenWeb">feOpenWeb</a></dt>
<dd></dd>
<dt><a href="#feOpen">feOpen</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#wakeupCallback">wakeupCallback</a> : <code>function</code></dt>
<dd><p>唤醒回调函数</p></dd>
</dl>

<a name="module_init"></a>

## init ⇒ [<code>feOpenWeb</code>](#feOpenWeb)
<p>初始化feOpenWeb，new feOpenWeb</p>

**See**: [feOpenWeb](#feOpenWeb)  
<a name="module_feOpen"></a>

## feOpen ⇒ [<code>feOpen</code>](#feOpen)
<p>feOpen</p>

**See**: [feOpen](#feOpen)  
<a name="feOpenWeb"></a>

## feOpenWeb
**Kind**: global class  
**Implements**: [<code>feOpen</code>](#feOpen)  
<a name="new_feOpenWeb_new"></a>

### new feOpenWeb(schema, intentData, universalUrl, downloadUrl, appFlag, callback)
<p>应用于业务的fee-open库,通过url参数或配置初始化fee-open库
.feOpen, .feOpen-download，监听.feOpen, .feOpen-download的click事件，手动进行open和download操作</p>


| Param | Type | Description |
| --- | --- | --- |
| schema | <code>Object</code> | <p>schema定义</p> |
| schema.protocal | <code>string</code> | <p>schema协议，例如duobaohkg://</p> |
| schema.value | <code>string</code> | <p>schema值</p> |
| intentData | <code>Object</code> | <p>android intent定义，自动格式成intent link，与Android intent格式一直，例如intent://send/+XXXXXXXXXXX#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end</p> |
| intentData.host | <code>string</code> | <p>HOST/URI-path</p> |
| intentData.schema | <code>string</code> | <p>-</p> |
| intentData.package | <code>string</code> | <p>-</p> |
| intentData.action | <code>string</code> | <p>-</p> |
| intentData.category | <code>string</code> | <p>-</p> |
| intentData.component | <code>string</code> | <p>-</p> |
| intentData.fallbackUrl | <code>string</code> | <p>-</p> |
| universalUrl | <code>string</code> | <p>unitersal地址</p> |
| downloadUrl | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <p>下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面</p> |
| appFlag | <code>string</code> \| <code>function</code> | <p>app UA判断标识</p> |
| callback | <code>object</code> | <p>回调对象</p> |
| callback.onStart | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onEnd | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onSuccess | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onFail | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onWeChat | [<code>wakeupCallback</code>](#wakeupCallback) | <p>当前环境是微信</p> |

<a name="feOpen"></a>

## feOpen
**Kind**: global class  

* [feOpen](#feOpen)
    * [new feOpen()](#new_feOpen_new)
    * [.config](#feOpen+config)
    * [.download(url)](#feOpen+download)
    * [.open(urls)](#feOpen+open)
    * [.start(open)](#feOpen+start)

<a name="new_feOpen_new"></a>

### new feOpen()
<p>feOpen 唤醒库核心基类，对各个移动端环境进行兼容性处理</p>

<a name="feOpen+config"></a>

### feOpen.config
<p>配置，初始化后根据参数自动生成</p>

**Kind**: instance property of [<code>feOpen</code>](#feOpen)  
**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| isApp | <code>boolean</code> | <p>是否内嵌在APP，如果为true，会自动忽略open操作</p> |
| autoOpen | <code>boolean</code> | <p>是否尝试自动打开</p> |
| schema | <code>string</code> | <p>完整的唤醒schema</p> |
| downloadUrl | <code>string</code> \| <code>Array</code> | <p>下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面</p> |
| callback | <code>object</code> | <p>回调对象</p> |
| callback.onStart | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onEnd | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onSuccess | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onFail | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onWeChat | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |

<a name="feOpen+download"></a>

### feOpen.download(url)
<p>启动下载APP</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | <p>下载地址</p> |

<a name="feOpen+open"></a>

### feOpen.open(urls)
<p>手动执行唤醒</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| urls | <code>object</code> | <p>唤醒参数，指定后本次唤醒替换初始化配置</p> |
| urls.universalUrl | <code>string</code> |  |
| urls.intent | <code>string</code> |  |
| urls.schema | <code>string</code> |  |

<a name="feOpen+start"></a>

### feOpen.start(open)
<p>start
执行open库，在初始化之后调用</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| open | <code>boolean</code> | <p>是否自动打开，如果未配置，则自动读取url参数的auto属性</p> |

<a name="wakeupCallback"></a>

## wakeupCallback : <code>function</code>
<p>唤醒回调函数</p>

**Kind**: global typedef  
## Modules

<dl>
<dt><a href="#module_init">init</a> ⇒ <code><a href="#feOpenWeb">feOpenWeb</a></code></dt>
<dd><p>初始化feOpenWeb，new feOpenWeb</p></dd>
<dt><a href="#module_feOpen">feOpen</a> ⇒ <code><a href="#feOpen">feOpen</a></code></dt>
<dd><p>feOpen</p></dd>
</dl>

## Classes

<dl>
<dt><a href="#feOpenWeb">feOpenWeb</a></dt>
<dd></dd>
<dt><a href="#feOpen">feOpen</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#wakeupCallback">wakeupCallback</a> : <code>function</code></dt>
<dd><p>唤醒回调函数</p></dd>
</dl>

<a name="module_init"></a>

## init ⇒ [<code>feOpenWeb</code>](#feOpenWeb)
<p>初始化feOpenWeb，new feOpenWeb</p>

**See**: [feOpenWeb](#feOpenWeb)  
<a name="module_feOpen"></a>

## feOpen ⇒ [<code>feOpen</code>](#feOpen)
<p>feOpen</p>

**See**: [feOpen](#feOpen)  
<a name="feOpenWeb"></a>

## feOpenWeb
**Kind**: global class  
**Implements**: [<code>feOpen</code>](#feOpen)  
<a name="new_feOpenWeb_new"></a>

### new feOpenWeb(schema, intentData, universalUrl, downloadUrl, appFlag, callback)
<p>应用于业务的fee-open库,通过url参数或配置初始化fee-open库
.feOpen, .feOpen-download，监听.feOpen, .feOpen-download的click事件，手动进行open和download操作</p>


| Param | Type | Description |
| --- | --- | --- |
| schema | <code>Object</code> | <p>schema定义</p> |
| schema.protocal | <code>string</code> | <p>schema协议，例如duobaohkg://</p> |
| schema.value | <code>string</code> | <p>schema值</p> |
| intentData | <code>Object</code> | <p>android intent定义，自动格式成intent link，与Android intent格式一直，例如intent://send/+XXXXXXXXXXX#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end</p> |
| intentData.host | <code>string</code> | <p>HOST/URI-path</p> |
| intentData.schema | <code>string</code> | <p>-</p> |
| intentData.package | <code>string</code> | <p>-</p> |
| intentData.action | <code>string</code> | <p>-</p> |
| intentData.category | <code>string</code> | <p>-</p> |
| intentData.component | <code>string</code> | <p>-</p> |
| intentData.fallbackUrl | <code>string</code> | <p>-</p> |
| universalUrl | <code>string</code> | <p>unitersal地址</p> |
| downloadUrl | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <p>下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面</p> |
| appFlag | <code>string</code> \| <code>function</code> | <p>app UA判断标识</p> |
| callback | <code>object</code> | <p>回调对象</p> |
| callback.onStart | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onEnd | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onSuccess | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onFail | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onWeChat | [<code>wakeupCallback</code>](#wakeupCallback) | <p>当前环境是微信</p> |

<a name="feOpen"></a>

## feOpen
**Kind**: global class  

* [feOpen](#feOpen)
    * [new feOpen()](#new_feOpen_new)
    * [.config](#feOpen+config)
    * [.download(url)](#feOpen+download)
    * [.open(urls)](#feOpen+open)
    * [.start(open)](#feOpen+start)

<a name="new_feOpen_new"></a>

### new feOpen()
<p>feOpen 唤醒库核心基类，对各个移动端环境进行兼容性处理</p>

<a name="feOpen+config"></a>

### feOpen.config
<p>配置，初始化后根据参数自动生成</p>

**Kind**: instance property of [<code>feOpen</code>](#feOpen)  
**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| isApp | <code>boolean</code> | <p>是否内嵌在APP，如果为true，会自动忽略open操作</p> |
| autoOpen | <code>boolean</code> | <p>是否尝试自动打开</p> |
| schema | <code>string</code> | <p>完整的唤醒schema</p> |
| downloadUrl | <code>string</code> \| <code>Array</code> | <p>下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面</p> |
| callback | <code>object</code> | <p>回调对象</p> |
| callback.onStart | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onEnd | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onSuccess | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onFail | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onWeChat | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |

<a name="feOpen+download"></a>

### feOpen.download(url)
<p>启动下载APP</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | <p>下载地址</p> |

<a name="feOpen+open"></a>

### feOpen.open(urls)
<p>手动执行唤醒</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| urls | <code>object</code> | <p>唤醒参数，指定后本次唤醒替换初始化配置</p> |
| urls.universalUrl | <code>string</code> |  |
| urls.intent | <code>string</code> |  |
| urls.schema | <code>string</code> |  |

<a name="feOpen+start"></a>

### feOpen.start(open)
<p>start
执行open库，在初始化之后调用</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| open | <code>boolean</code> | <p>是否自动打开，如果未配置，则自动读取url参数的auto属性</p> |

<a name="wakeupCallback"></a>

## wakeupCallback : <code>function</code>
<p>唤醒回调函数</p>

**Kind**: global typedef  
## Modules

<dl>
<dt><a href="#module_init">init</a> ⇒ <code><a href="#feOpenWeb">feOpenWeb</a></code></dt>
<dd><p>初始化feOpenWeb，new feOpenWeb</p></dd>
<dt><a href="#module_feOpen">feOpen</a> ⇒ <code><a href="#feOpen">feOpen</a></code></dt>
<dd><p>feOpen</p></dd>
</dl>

## Classes

<dl>
<dt><a href="#feOpenWeb">feOpenWeb</a></dt>
<dd></dd>
<dt><a href="#feOpen">feOpen</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#wakeupCallback">wakeupCallback</a> : <code>function</code></dt>
<dd><p>唤醒回调函数</p></dd>
</dl>

<a name="module_init"></a>

## init ⇒ [<code>feOpenWeb</code>](#feOpenWeb)
<p>初始化feOpenWeb，new feOpenWeb</p>

**See**: [feOpenWeb](#feOpenWeb)  
<a name="module_feOpen"></a>

## feOpen ⇒ [<code>feOpen</code>](#feOpen)
<p>feOpen</p>

**See**: [feOpen](#feOpen)  
<a name="feOpenWeb"></a>

## feOpenWeb
**Kind**: global class  
**Implements**: [<code>feOpen</code>](#feOpen)  
<a name="new_feOpenWeb_new"></a>

### new feOpenWeb(schema, intentData, universalUrl, downloadUrl, appFlag, callback)
<p>应用于业务的fee-open库,通过url参数或配置初始化fee-open库
.feOpen, .feOpen-download，监听.feOpen, .feOpen-download的click事件，手动进行open和download操作</p>


| Param | Type | Description |
| --- | --- | --- |
| schema | <code>Object</code> | <p>schema定义</p> |
| schema.protocal | <code>string</code> | <p>schema协议，例如duobaohkg://</p> |
| schema.value | <code>string</code> | <p>schema值</p> |
| intentData | <code>Object</code> | <p>android intent定义，自动格式成intent link，与Android intent格式一直，例如intent://send/+XXXXXXXXXXX#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end</p> |
| intentData.host | <code>string</code> | <p>HOST/URI-path</p> |
| intentData.schema | <code>string</code> | <p>-</p> |
| intentData.package | <code>string</code> | <p>-</p> |
| intentData.action | <code>string</code> | <p>-</p> |
| intentData.category | <code>string</code> | <p>-</p> |
| intentData.component | <code>string</code> | <p>-</p> |
| intentData.fallbackUrl | <code>string</code> | <p>-</p> |
| universalUrl | <code>string</code> | <p>unitersal地址</p> |
| downloadUrl | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <p>下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面</p> |
| appFlag | <code>string</code> \| <code>function</code> | <p>app UA判断标识</p> |
| callback | <code>object</code> | <p>回调对象</p> |
| callback.onStart | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onEnd | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onSuccess | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onFail | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onWeChat | [<code>wakeupCallback</code>](#wakeupCallback) | <p>当前环境是微信</p> |

<a name="feOpen"></a>

## feOpen
**Kind**: global class  

* [feOpen](#feOpen)
    * [new feOpen()](#new_feOpen_new)
    * [.config](#feOpen+config)
    * [.download(url)](#feOpen+download)
    * [.open(urls)](#feOpen+open)
    * [.start(open)](#feOpen+start)

<a name="new_feOpen_new"></a>

### new feOpen()
<p>feOpen 唤醒库核心基类，对各个移动端环境进行兼容性处理</p>

<a name="feOpen+config"></a>

### feOpen.config
<p>配置，初始化后根据参数自动生成</p>

**Kind**: instance property of [<code>feOpen</code>](#feOpen)  
**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| isApp | <code>boolean</code> | <p>是否内嵌在APP，如果为true，会自动忽略open操作</p> |
| autoOpen | <code>boolean</code> | <p>是否尝试自动打开</p> |
| schema | <code>string</code> | <p>完整的唤醒schema</p> |
| downloadUrl | <code>string</code> \| <code>Array</code> | <p>下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面</p> |
| callback | <code>object</code> | <p>回调对象</p> |
| callback.onStart | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onEnd | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onSuccess | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onFail | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onWeChat | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |

<a name="feOpen+download"></a>

### feOpen.download(url)
<p>启动下载APP</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | <p>下载地址</p> |

<a name="feOpen+open"></a>

### feOpen.open(urls)
<p>手动执行唤醒</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| urls | <code>object</code> | <p>唤醒参数，指定后本次唤醒替换初始化配置</p> |
| urls.universalUrl | <code>string</code> |  |
| urls.intent | <code>string</code> |  |
| urls.schema | <code>string</code> |  |

<a name="feOpen+start"></a>

### feOpen.start(open)
<p>start
执行open库，在初始化之后调用</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| open | <code>boolean</code> | <p>是否自动打开，如果未配置，则自动读取url参数的auto属性</p> |

<a name="wakeupCallback"></a>

## wakeupCallback : <code>function</code>
<p>唤醒回调函数</p>

**Kind**: global typedef  
## Modules

<dl>
<dt><a href="#module_init">init</a> ⇒ <code><a href="#feOpenWeb">feOpenWeb</a></code></dt>
<dd><p>初始化feOpenWeb，new feOpenWeb</p></dd>
<dt><a href="#module_feOpen">feOpen</a> ⇒ <code><a href="#feOpen">feOpen</a></code></dt>
<dd><p>feOpen</p></dd>
</dl>

## Classes

<dl>
<dt><a href="#feOpenWeb">feOpenWeb</a></dt>
<dd></dd>
<dt><a href="#feOpen">feOpen</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#wakeupCallback">wakeupCallback</a> : <code>function</code></dt>
<dd><p>唤醒回调函数</p></dd>
</dl>

<a name="module_init"></a>

## init ⇒ [<code>feOpenWeb</code>](#feOpenWeb)
<p>初始化feOpenWeb，new feOpenWeb</p>

**See**: [feOpenWeb](#feOpenWeb)  
<a name="module_feOpen"></a>

## feOpen ⇒ [<code>feOpen</code>](#feOpen)
<p>feOpen</p>

**See**: [feOpen](#feOpen)  
<a name="feOpenWeb"></a>

## feOpenWeb
**Kind**: global class  
**Implements**: [<code>feOpen</code>](#feOpen)  
<a name="new_feOpenWeb_new"></a>

### new feOpenWeb(schema, intentData, universalUrl, downloadUrl, appFlag, callback)
<p>应用于业务的fee-open库,通过url参数或配置初始化fee-open库
.feOpen, .feOpen-download，监听.feOpen, .feOpen-download的click事件，手动进行open和download操作</p>


| Param | Type | Description |
| --- | --- | --- |
| schema | <code>Object</code> | <p>schema定义</p> |
| schema.protocal | <code>string</code> | <p>schema协议，例如duobaohkg://</p> |
| schema.value | <code>string</code> | <p>schema值</p> |
| intentData | <code>Object</code> | <p>android intent定义，自动格式成intent link，与Android intent格式一直，例如intent://send/+XXXXXXXXXXX#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end</p> |
| intentData.host | <code>string</code> | <p>HOST/URI-path</p> |
| intentData.schema | <code>string</code> | <p>-</p> |
| intentData.package | <code>string</code> | <p>-</p> |
| intentData.action | <code>string</code> | <p>-</p> |
| intentData.category | <code>string</code> | <p>-</p> |
| intentData.component | <code>string</code> | <p>-</p> |
| intentData.fallbackUrl | <code>string</code> | <p>-</p> |
| universalUrl | <code>string</code> | <p>unitersal地址</p> |
| downloadUrl | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <p>下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面</p> |
| appFlag | <code>string</code> \| <code>function</code> | <p>app UA判断标识</p> |
| callback | <code>object</code> | <p>回调对象</p> |
| callback.onStart | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onEnd | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onSuccess | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onFail | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onWeChat | [<code>wakeupCallback</code>](#wakeupCallback) | <p>当前环境是微信</p> |

<a name="feOpen"></a>

## feOpen
**Kind**: global class  

* [feOpen](#feOpen)
    * [new feOpen()](#new_feOpen_new)
    * [.config](#feOpen+config)
    * [.download(url)](#feOpen+download)
    * [.open(urls)](#feOpen+open)
    * [.start(open)](#feOpen+start)

<a name="new_feOpen_new"></a>

### new feOpen()
<p>feOpen 唤醒库核心基类，对各个移动端环境进行兼容性处理</p>

<a name="feOpen+config"></a>

### feOpen.config
<p>配置，初始化后根据参数自动生成</p>

**Kind**: instance property of [<code>feOpen</code>](#feOpen)  
**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| isApp | <code>boolean</code> | <p>是否内嵌在APP，如果为true，会自动忽略open操作</p> |
| autoOpen | <code>boolean</code> | <p>是否尝试自动打开</p> |
| schema | <code>string</code> | <p>完整的唤醒schema</p> |
| downloadUrl | <code>string</code> \| <code>Array</code> | <p>下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面</p> |
| callback | <code>object</code> | <p>回调对象</p> |
| callback.onStart | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onEnd | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onSuccess | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onFail | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onWeChat | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |

<a name="feOpen+download"></a>

### feOpen.download(url)
<p>启动下载APP</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | <p>下载地址</p> |

<a name="feOpen+open"></a>

### feOpen.open(urls)
<p>手动执行唤醒</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| urls | <code>object</code> | <p>唤醒参数，指定后本次唤醒替换初始化配置</p> |
| urls.universalUrl | <code>string</code> |  |
| urls.intent | <code>string</code> |  |
| urls.schema | <code>string</code> |  |

<a name="feOpen+start"></a>

### feOpen.start(open)
<p>start
执行open库，在初始化之后调用</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| open | <code>boolean</code> | <p>是否自动打开，如果未配置，则自动读取url参数的auto属性</p> |

<a name="wakeupCallback"></a>

## wakeupCallback : <code>function</code>
<p>唤醒回调函数</p>

**Kind**: global typedef  
## Modules

<dl>
<dt><a href="#module_init">init</a> ⇒ <code><a href="#feOpenWeb">feOpenWeb</a></code></dt>
<dd><p>初始化feOpenWeb，new feOpenWeb</p></dd>
<dt><a href="#module_feOpen">feOpen</a> ⇒ <code><a href="#feOpen">feOpen</a></code></dt>
<dd><p>feOpen</p></dd>
</dl>

## Classes

<dl>
<dt><a href="#feOpenWeb">feOpenWeb</a></dt>
<dd></dd>
<dt><a href="#feOpen">feOpen</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#wakeupCallback">wakeupCallback</a> : <code>function</code></dt>
<dd><p>唤醒回调函数</p></dd>
</dl>

<a name="module_init"></a>

## init ⇒ [<code>feOpenWeb</code>](#feOpenWeb)
<p>初始化feOpenWeb，new feOpenWeb</p>

**See**: [feOpenWeb](#feOpenWeb)  
<a name="module_feOpen"></a>

## feOpen ⇒ [<code>feOpen</code>](#feOpen)
<p>feOpen</p>

**See**: [feOpen](#feOpen)  
<a name="feOpenWeb"></a>

## feOpenWeb
**Kind**: global class  
**Implements**: [<code>feOpen</code>](#feOpen)  
<a name="new_feOpenWeb_new"></a>

### new feOpenWeb(schema, intentData, universalUrl, downloadUrl, appFlag, callback)
<p>应用于业务的fee-open库,通过url参数或配置初始化fee-open库
.feOpen, .feOpen-download，监听.feOpen, .feOpen-download的click事件，手动进行open和download操作</p>


| Param | Type | Description |
| --- | --- | --- |
| schema | <code>Object</code> | <p>schema定义</p> |
| schema.protocal | <code>string</code> | <p>schema协议，例如duobaohkg://</p> |
| schema.value | <code>string</code> | <p>schema值</p> |
| intentData | <code>Object</code> | <p>android intent定义，自动格式成intent link，与Android intent格式一直，例如intent://send/+XXXXXXXXXXX#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end</p> |
| intentData.host | <code>string</code> | <p>HOST/URI-path</p> |
| intentData.schema | <code>string</code> | <p>-</p> |
| intentData.package | <code>string</code> | <p>-</p> |
| intentData.action | <code>string</code> | <p>-</p> |
| intentData.category | <code>string</code> | <p>-</p> |
| intentData.component | <code>string</code> | <p>-</p> |
| intentData.fallbackUrl | <code>string</code> | <p>-</p> |
| universalUrl | <code>string</code> | <p>unitersal地址</p> |
| downloadUrl | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <p>下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面</p> |
| appFlag | <code>string</code> \| <code>function</code> | <p>app UA判断标识</p> |
| callback | <code>object</code> | <p>回调对象</p> |
| callback.onStart | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onEnd | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onSuccess | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onFail | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onWeChat | [<code>wakeupCallback</code>](#wakeupCallback) | <p>当前环境是微信</p> |

<a name="feOpen"></a>

## feOpen
**Kind**: global class  

* [feOpen](#feOpen)
    * [new feOpen()](#new_feOpen_new)
    * [.config](#feOpen+config)
    * [.download(url)](#feOpen+download)
    * [.open(urls)](#feOpen+open)
    * [.start(open)](#feOpen+start)

<a name="new_feOpen_new"></a>

### new feOpen()
<p>feOpen 唤醒库核心基类，对各个移动端环境进行兼容性处理</p>

<a name="feOpen+config"></a>

### feOpen.config
<p>配置，初始化后根据参数自动生成</p>

**Kind**: instance property of [<code>feOpen</code>](#feOpen)  
**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| isApp | <code>boolean</code> | <p>是否内嵌在APP，如果为true，会自动忽略open操作</p> |
| autoOpen | <code>boolean</code> | <p>是否尝试自动打开</p> |
| schema | <code>string</code> | <p>完整的唤醒schema</p> |
| downloadUrl | <code>string</code> \| <code>Array</code> | <p>下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面</p> |
| callback | <code>object</code> | <p>回调对象</p> |
| callback.onStart | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onEnd | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onSuccess | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onFail | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onWeChat | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |

<a name="feOpen+download"></a>

### feOpen.download(url)
<p>启动下载APP</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | <p>下载地址</p> |

<a name="feOpen+open"></a>

### feOpen.open(urls)
<p>手动执行唤醒</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| urls | <code>object</code> | <p>唤醒参数，指定后本次唤醒替换初始化配置</p> |
| urls.universalUrl | <code>string</code> |  |
| urls.intent | <code>string</code> |  |
| urls.schema | <code>string</code> |  |

<a name="feOpen+start"></a>

### feOpen.start(open)
<p>start
执行open库，在初始化之后调用</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| open | <code>boolean</code> | <p>是否自动打开，如果未配置，则自动读取url参数的auto属性</p> |

<a name="wakeupCallback"></a>

## wakeupCallback : <code>function</code>
<p>唤醒回调函数</p>

**Kind**: global typedef  
## Modules

<dl>
<dt><a href="#module_init">init</a> ⇒ <code><a href="#feOpenWeb">feOpenWeb</a></code></dt>
<dd><p>初始化feOpenWeb，new feOpenWeb</p></dd>
<dt><a href="#module_feOpen">feOpen</a> ⇒ <code><a href="#feOpen">feOpen</a></code></dt>
<dd><p>feOpen</p></dd>
</dl>

## Classes

<dl>
<dt><a href="#feOpenWeb">feOpenWeb</a></dt>
<dd></dd>
<dt><a href="#feOpen">feOpen</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#wakeupCallback">wakeupCallback</a> : <code>function</code></dt>
<dd><p>唤醒回调函数</p></dd>
</dl>

<a name="module_init"></a>

## init ⇒ [<code>feOpenWeb</code>](#feOpenWeb)
<p>初始化feOpenWeb，new feOpenWeb</p>

**See**: [feOpenWeb](#feOpenWeb)  
<a name="module_feOpen"></a>

## feOpen ⇒ [<code>feOpen</code>](#feOpen)
<p>feOpen</p>

**See**: [feOpen](#feOpen)  
<a name="feOpenWeb"></a>

## feOpenWeb
**Kind**: global class  
**Implements**: [<code>feOpen</code>](#feOpen)  
<a name="new_feOpenWeb_new"></a>

### new feOpenWeb(schema, intentData, universalUrl, downloadUrl, appFlag, callback)
<p>应用于业务的fee-open库,通过url参数或配置初始化fee-open库
.feOpen, .feOpen-download，监听.feOpen, .feOpen-download的click事件，手动进行open和download操作</p>


| Param | Type | Description |
| --- | --- | --- |
| schema | <code>Object</code> | <p>schema定义</p> |
| schema.protocal | <code>string</code> | <p>schema协议，例如duobaohkg://</p> |
| schema.value | <code>string</code> | <p>schema值</p> |
| intentData | <code>Object</code> | <p>android intent定义，自动格式成intent link，与Android intent格式一直，例如intent://send/+XXXXXXXXXXX#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end</p> |
| intentData.host | <code>string</code> | <p>HOST/URI-path</p> |
| intentData.schema | <code>string</code> | <p>-</p> |
| intentData.package | <code>string</code> | <p>-</p> |
| intentData.action | <code>string</code> | <p>-</p> |
| intentData.category | <code>string</code> | <p>-</p> |
| intentData.component | <code>string</code> | <p>-</p> |
| intentData.fallbackUrl | <code>string</code> | <p>-</p> |
| universalUrl | <code>string</code> | <p>unitersal地址</p> |
| downloadUrl | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <p>下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面</p> |
| appFlag | <code>string</code> \| <code>function</code> | <p>app UA判断标识</p> |
| callback | <code>object</code> | <p>回调对象</p> |
| callback.onStart | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onEnd | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onSuccess | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onFail | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onWeChat | [<code>wakeupCallback</code>](#wakeupCallback) | <p>当前环境是微信</p> |

<a name="feOpen"></a>

## feOpen
**Kind**: global class  

* [feOpen](#feOpen)
    * [new feOpen()](#new_feOpen_new)
    * [.config](#feOpen+config)
    * [.download(url)](#feOpen+download)
    * [.open(urls)](#feOpen+open)
    * [.start(open)](#feOpen+start)

<a name="new_feOpen_new"></a>

### new feOpen()
<p>feOpen 唤醒库核心基类，对各个移动端环境进行兼容性处理</p>

<a name="feOpen+config"></a>

### feOpen.config
<p>配置，初始化后根据参数自动生成</p>

**Kind**: instance property of [<code>feOpen</code>](#feOpen)  
**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| isApp | <code>boolean</code> | <p>是否内嵌在APP，如果为true，会自动忽略open操作</p> |
| autoOpen | <code>boolean</code> | <p>是否尝试自动打开</p> |
| schema | <code>string</code> | <p>完整的唤醒schema</p> |
| downloadUrl | <code>string</code> \| <code>Array</code> | <p>下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面</p> |
| callback | <code>object</code> | <p>回调对象</p> |
| callback.onStart | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onEnd | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onSuccess | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onFail | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onWeChat | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |

<a name="feOpen+download"></a>

### feOpen.download(url)
<p>启动下载APP</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | <p>下载地址</p> |

<a name="feOpen+open"></a>

### feOpen.open(urls)
<p>手动执行唤醒</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| urls | <code>object</code> | <p>唤醒参数，指定后本次唤醒替换初始化配置</p> |
| urls.universalUrl | <code>string</code> |  |
| urls.intent | <code>string</code> |  |
| urls.schema | <code>string</code> |  |

<a name="feOpen+start"></a>

### feOpen.start(open)
<p>start
执行open库，在初始化之后调用</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| open | <code>boolean</code> | <p>是否自动打开，如果未配置，则自动读取url参数的auto属性</p> |

<a name="wakeupCallback"></a>

## wakeupCallback : <code>function</code>
<p>唤醒回调函数</p>

**Kind**: global typedef  
## Modules

<dl>
<dt><a href="#module_init">init</a> ⇒ <code><a href="#feOpenWeb">feOpenWeb</a></code></dt>
<dd><p>初始化feOpenWeb，new feOpenWeb</p></dd>
<dt><a href="#module_feOpen">feOpen</a> ⇒ <code><a href="#feOpen">feOpen</a></code></dt>
<dd><p>feOpen</p></dd>
</dl>

## Classes

<dl>
<dt><a href="#feOpenWeb">feOpenWeb</a></dt>
<dd></dd>
<dt><a href="#feOpen">feOpen</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#wakeupCallback">wakeupCallback</a> : <code>function</code></dt>
<dd><p>唤醒回调函数</p></dd>
</dl>

<a name="module_init"></a>

## init ⇒ [<code>feOpenWeb</code>](#feOpenWeb)
<p>初始化feOpenWeb，new feOpenWeb</p>

**See**: [feOpenWeb](#feOpenWeb)  
<a name="module_feOpen"></a>

## feOpen ⇒ [<code>feOpen</code>](#feOpen)
<p>feOpen</p>

**See**: [feOpen](#feOpen)  
<a name="feOpenWeb"></a>

## feOpenWeb
**Kind**: global class  
**Implements**: [<code>feOpen</code>](#feOpen)  
<a name="new_feOpenWeb_new"></a>

### new feOpenWeb(schema, intentData, universalUrl, downloadUrl, appFlag, callback)
<p>应用于业务的fee-open库,通过url参数或配置初始化fee-open库
.feOpen, .feOpen-download，监听.feOpen, .feOpen-download的click事件，手动进行open和download操作</p>


| Param | Type | Description |
| --- | --- | --- |
| schema | <code>Object</code> | <p>schema定义</p> |
| schema.protocal | <code>string</code> | <p>schema协议，例如duobaohkg://</p> |
| schema.value | <code>string</code> | <p>schema值</p> |
| intentData | <code>Object</code> | <p>android intent定义，自动格式成intent link，与Android intent格式一直，例如intent://send/+XXXXXXXXXXX#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end</p> |
| intentData.host | <code>string</code> | <p>HOST/URI-path</p> |
| intentData.schema | <code>string</code> | <p>-</p> |
| intentData.package | <code>string</code> | <p>-</p> |
| intentData.action | <code>string</code> | <p>-</p> |
| intentData.category | <code>string</code> | <p>-</p> |
| intentData.component | <code>string</code> | <p>-</p> |
| intentData.fallbackUrl | <code>string</code> | <p>-</p> |
| universalUrl | <code>string</code> | <p>unitersal地址</p> |
| downloadUrl | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <p>下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面</p> |
| appFlag | <code>string</code> \| <code>function</code> | <p>app UA判断标识</p> |
| callback | <code>object</code> | <p>回调对象</p> |
| callback.onStart | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onEnd | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onSuccess | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onFail | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onWeChat | [<code>wakeupCallback</code>](#wakeupCallback) | <p>当前环境是微信</p> |

<a name="feOpen"></a>

## feOpen
**Kind**: global class  

* [feOpen](#feOpen)
    * [new feOpen()](#new_feOpen_new)
    * [.config](#feOpen+config)
    * [.download(url)](#feOpen+download)
    * [.open(urls)](#feOpen+open)
    * [.start(open)](#feOpen+start)

<a name="new_feOpen_new"></a>

### new feOpen()
<p>feOpen 唤醒库核心基类，对各个移动端环境进行兼容性处理</p>

<a name="feOpen+config"></a>

### feOpen.config
<p>配置，初始化后根据参数自动生成</p>

**Kind**: instance property of [<code>feOpen</code>](#feOpen)  
**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| isApp | <code>boolean</code> | <p>是否内嵌在APP，如果为true，会自动忽略open操作</p> |
| autoOpen | <code>boolean</code> | <p>是否尝试自动打开</p> |
| schema | <code>string</code> | <p>完整的唤醒schema</p> |
| downloadUrl | <code>string</code> \| <code>Array</code> | <p>下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面</p> |
| callback | <code>object</code> | <p>回调对象</p> |
| callback.onStart | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onEnd | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onSuccess | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onFail | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onWeChat | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |

<a name="feOpen+download"></a>

### feOpen.download(url)
<p>启动下载APP</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | <p>下载地址</p> |

<a name="feOpen+open"></a>

### feOpen.open(urls)
<p>手动执行唤醒</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| urls | <code>object</code> | <p>唤醒参数，指定后本次唤醒替换初始化配置</p> |
| urls.universalUrl | <code>string</code> |  |
| urls.intent | <code>string</code> |  |
| urls.schema | <code>string</code> |  |

<a name="feOpen+start"></a>

### feOpen.start(open)
<p>start
执行open库，在初始化之后调用</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| open | <code>boolean</code> | <p>是否自动打开，如果未配置，则自动读取url参数的auto属性</p> |

<a name="wakeupCallback"></a>

## wakeupCallback : <code>function</code>
<p>唤醒回调函数</p>

**Kind**: global typedef  
## Modules

<dl>
<dt><a href="#module_init">init</a> ⇒ <code><a href="#feOpenWeb">feOpenWeb</a></code></dt>
<dd><p>初始化feOpenWeb，new feOpenWeb</p></dd>
<dt><a href="#module_feOpen">feOpen</a> ⇒ <code><a href="#feOpen">feOpen</a></code></dt>
<dd><p>feOpen</p></dd>
</dl>

## Classes

<dl>
<dt><a href="#feOpenWeb">feOpenWeb</a></dt>
<dd></dd>
<dt><a href="#feOpen">feOpen</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#wakeupCallback">wakeupCallback</a> : <code>function</code></dt>
<dd><p>唤醒回调函数</p></dd>
</dl>

<a name="module_init"></a>

## init ⇒ [<code>feOpenWeb</code>](#feOpenWeb)
<p>初始化feOpenWeb，new feOpenWeb</p>

**See**: [feOpenWeb](#feOpenWeb)  
<a name="module_feOpen"></a>

## feOpen ⇒ [<code>feOpen</code>](#feOpen)
<p>feOpen</p>

**See**: [feOpen](#feOpen)  
<a name="feOpenWeb"></a>

## feOpenWeb
**Kind**: global class  
**Implements**: [<code>feOpen</code>](#feOpen)  
<a name="new_feOpenWeb_new"></a>

### new feOpenWeb(schema, intentData, universalUrl, downloadUrl, appFlag, callback)
<p>应用于业务的fee-open库,通过url参数或配置初始化fee-open库
.feOpen, .feOpen-download，监听.feOpen, .feOpen-download的click事件，手动进行open和download操作</p>


| Param | Type | Description |
| --- | --- | --- |
| schema | <code>Object</code> | <p>schema定义</p> |
| schema.protocal | <code>string</code> | <p>schema协议，例如duobaohkg://</p> |
| schema.value | <code>string</code> | <p>schema值</p> |
| intentData | <code>Object</code> | <p>android intent定义，自动格式成intent link，与Android intent格式一直，例如intent://send/+XXXXXXXXXXX#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end</p> |
| intentData.host | <code>string</code> | <p>HOST/URI-path</p> |
| intentData.schema | <code>string</code> | <p>-</p> |
| intentData.package | <code>string</code> | <p>-</p> |
| intentData.action | <code>string</code> | <p>-</p> |
| intentData.category | <code>string</code> | <p>-</p> |
| intentData.component | <code>string</code> | <p>-</p> |
| intentData.fallbackUrl | <code>string</code> | <p>-</p> |
| universalUrl | <code>string</code> | <p>unitersal地址</p> |
| downloadUrl | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <p>下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面</p> |
| appFlag | <code>string</code> \| <code>function</code> | <p>app UA判断标识</p> |
| callback | <code>object</code> | <p>回调对象</p> |
| callback.onStart | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onEnd | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onSuccess | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onFail | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onWeChat | [<code>wakeupCallback</code>](#wakeupCallback) | <p>当前环境是微信</p> |

<a name="feOpen"></a>

## feOpen
**Kind**: global class  

* [feOpen](#feOpen)
    * [new feOpen()](#new_feOpen_new)
    * [.config](#feOpen+config)
    * [.download(url)](#feOpen+download)
    * [.open(urls)](#feOpen+open)
    * [.start(open)](#feOpen+start)

<a name="new_feOpen_new"></a>

### new feOpen()
<p>feOpen 唤醒库核心基类，对各个移动端环境进行兼容性处理</p>

<a name="feOpen+config"></a>

### feOpen.config
<p>配置，初始化后根据参数自动生成</p>

**Kind**: instance property of [<code>feOpen</code>](#feOpen)  
**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| isApp | <code>boolean</code> | <p>是否内嵌在APP，如果为true，会自动忽略open操作</p> |
| autoOpen | <code>boolean</code> | <p>是否尝试自动打开</p> |
| schema | <code>string</code> | <p>完整的唤醒schema</p> |
| downloadUrl | <code>string</code> \| <code>Array</code> | <p>下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面</p> |
| callback | <code>object</code> | <p>回调对象</p> |
| callback.onStart | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onEnd | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onSuccess | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onFail | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onWeChat | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |

<a name="feOpen+download"></a>

### feOpen.download(url)
<p>启动下载APP</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | <p>下载地址</p> |

<a name="feOpen+open"></a>

### feOpen.open(urls)
<p>手动执行唤醒</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| urls | <code>object</code> | <p>唤醒参数，指定后本次唤醒替换初始化配置</p> |
| urls.universalUrl | <code>string</code> |  |
| urls.intent | <code>string</code> |  |
| urls.schema | <code>string</code> |  |

<a name="feOpen+start"></a>

### feOpen.start(open)
<p>start
执行open库，在初始化之后调用</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| open | <code>boolean</code> | <p>是否自动打开，如果未配置，则自动读取url参数的auto属性</p> |

<a name="wakeupCallback"></a>

## wakeupCallback : <code>function</code>
<p>唤醒回调函数</p>

**Kind**: global typedef  
## Modules

<dl>
<dt><a href="#module_init">init</a> ⇒ <code><a href="#feOpenWeb">feOpenWeb</a></code></dt>
<dd><p>初始化feOpenWeb，new feOpenWeb</p></dd>
<dt><a href="#module_feOpen">feOpen</a> ⇒ <code><a href="#feOpen">feOpen</a></code></dt>
<dd><p>feOpen</p></dd>
</dl>

## Classes

<dl>
<dt><a href="#feOpenWeb">feOpenWeb</a></dt>
<dd></dd>
<dt><a href="#feOpen">feOpen</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#wakeupCallback">wakeupCallback</a> : <code>function</code></dt>
<dd><p>唤醒回调函数</p></dd>
</dl>

<a name="module_init"></a>

## init ⇒ [<code>feOpenWeb</code>](#feOpenWeb)
<p>初始化feOpenWeb，new feOpenWeb</p>

**See**: [feOpenWeb](#feOpenWeb)  
<a name="module_feOpen"></a>

## feOpen ⇒ [<code>feOpen</code>](#feOpen)
<p>feOpen</p>

**See**: [feOpen](#feOpen)  
<a name="feOpenWeb"></a>

## feOpenWeb
**Kind**: global class  
**Implements**: [<code>feOpen</code>](#feOpen)  
<a name="new_feOpenWeb_new"></a>

### new feOpenWeb(schema, intentData, universalUrl, downloadUrl, appFlag, callback)
<p>应用于业务的fee-open库,通过url参数或配置初始化fee-open库
.feOpen, .feOpen-download，监听.feOpen, .feOpen-download的click事件，手动进行open和download操作</p>


| Param | Type | Description |
| --- | --- | --- |
| schema | <code>Object</code> | <p>schema定义</p> |
| schema.protocal | <code>string</code> | <p>schema协议，例如duobaohkg://</p> |
| schema.value | <code>string</code> | <p>schema值</p> |
| intentData | <code>Object</code> | <p>android intent定义，自动格式成intent link，与Android intent格式一直，例如intent://send/+XXXXXXXXXXX#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end</p> |
| intentData.host | <code>string</code> | <p>HOST/URI-path</p> |
| intentData.schema | <code>string</code> | <p>-</p> |
| intentData.package | <code>string</code> | <p>-</p> |
| intentData.action | <code>string</code> | <p>-</p> |
| intentData.category | <code>string</code> | <p>-</p> |
| intentData.component | <code>string</code> | <p>-</p> |
| intentData.fallbackUrl | <code>string</code> | <p>-</p> |
| universalUrl | <code>string</code> | <p>unitersal地址</p> |
| downloadUrl | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <p>下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面</p> |
| appFlag | <code>string</code> \| <code>function</code> | <p>app UA判断标识</p> |
| callback | <code>object</code> | <p>回调对象</p> |
| callback.onStart | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onEnd | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onSuccess | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onFail | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onWeChat | [<code>wakeupCallback</code>](#wakeupCallback) | <p>当前环境是微信</p> |

<a name="feOpen"></a>

## feOpen
**Kind**: global class  

* [feOpen](#feOpen)
    * [new feOpen()](#new_feOpen_new)
    * [.config](#feOpen+config)
    * [.download(url)](#feOpen+download)
    * [.open(urls)](#feOpen+open)
    * [.start(open)](#feOpen+start)

<a name="new_feOpen_new"></a>

### new feOpen()
<p>feOpen 唤醒库核心基类，对各个移动端环境进行兼容性处理</p>

<a name="feOpen+config"></a>

### feOpen.config
<p>配置，初始化后根据参数自动生成</p>

**Kind**: instance property of [<code>feOpen</code>](#feOpen)  
**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| isApp | <code>boolean</code> | <p>是否内嵌在APP，如果为true，会自动忽略open操作</p> |
| autoOpen | <code>boolean</code> | <p>是否尝试自动打开</p> |
| schema | <code>string</code> | <p>完整的唤醒schema</p> |
| downloadUrl | <code>string</code> \| <code>Array</code> | <p>下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面</p> |
| callback | <code>object</code> | <p>回调对象</p> |
| callback.onStart | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onEnd | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onSuccess | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onFail | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onWeChat | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |

<a name="feOpen+download"></a>

### feOpen.download(url)
<p>启动下载APP</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | <p>下载地址</p> |

<a name="feOpen+open"></a>

### feOpen.open(urls)
<p>手动执行唤醒</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| urls | <code>object</code> | <p>唤醒参数，指定后本次唤醒替换初始化配置</p> |
| urls.universalUrl | <code>string</code> |  |
| urls.intent | <code>string</code> |  |
| urls.schema | <code>string</code> |  |

<a name="feOpen+start"></a>

### feOpen.start(open)
<p>start
执行open库，在初始化之后调用</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| open | <code>boolean</code> | <p>是否自动打开，如果未配置，则自动读取url参数的auto属性</p> |

<a name="wakeupCallback"></a>

## wakeupCallback : <code>function</code>
<p>唤醒回调函数</p>

**Kind**: global typedef  
## Modules

<dl>
<dt><a href="#module_init">init</a> ⇒ <code><a href="#feOpenWeb">feOpenWeb</a></code></dt>
<dd><p>初始化feOpenWeb，new feOpenWeb</p></dd>
<dt><a href="#module_feOpen">feOpen</a> ⇒ <code><a href="#feOpen">feOpen</a></code></dt>
<dd><p>feOpen</p></dd>
</dl>

## Classes

<dl>
<dt><a href="#feOpenWeb">feOpenWeb</a></dt>
<dd></dd>
<dt><a href="#feOpen">feOpen</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#wakeupCallback">wakeupCallback</a> : <code>function</code></dt>
<dd><p>唤醒回调函数</p></dd>
</dl>

<a name="module_init"></a>

## init ⇒ [<code>feOpenWeb</code>](#feOpenWeb)
<p>初始化feOpenWeb，new feOpenWeb</p>

**See**: [feOpenWeb](#feOpenWeb)  
<a name="module_feOpen"></a>

## feOpen ⇒ [<code>feOpen</code>](#feOpen)
<p>feOpen</p>

**See**: [feOpen](#feOpen)  
<a name="feOpenWeb"></a>

## feOpenWeb
**Kind**: global class  
**Implements**: [<code>feOpen</code>](#feOpen)  
<a name="new_feOpenWeb_new"></a>

### new feOpenWeb(schema, intentData, universalUrl, downloadUrl, appFlag, callback)
<p>应用于业务的fee-open库,通过url参数或配置初始化fee-open库
.feOpen, .feOpen-download，监听.feOpen, .feOpen-download的click事件，手动进行open和download操作</p>


| Param | Type | Description |
| --- | --- | --- |
| schema | <code>Object</code> | <p>schema定义</p> |
| schema.protocal | <code>string</code> | <p>schema协议，例如duobaohkg://</p> |
| schema.value | <code>string</code> | <p>schema值</p> |
| intentData | <code>Object</code> | <p>android intent定义，自动格式成intent link，与Android intent格式一直，例如intent://send/+XXXXXXXXXXX#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end</p> |
| intentData.host | <code>string</code> | <p>HOST/URI-path</p> |
| intentData.schema | <code>string</code> | <p>-</p> |
| intentData.package | <code>string</code> | <p>-</p> |
| intentData.action | <code>string</code> | <p>-</p> |
| intentData.category | <code>string</code> | <p>-</p> |
| intentData.component | <code>string</code> | <p>-</p> |
| intentData.fallbackUrl | <code>string</code> | <p>-</p> |
| universalUrl | <code>string</code> | <p>unitersal地址</p> |
| downloadUrl | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <p>下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面</p> |
| appFlag | <code>string</code> \| <code>function</code> | <p>app UA判断标识</p> |
| callback | <code>object</code> | <p>回调对象</p> |
| callback.onStart | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onEnd | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onSuccess | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onFail | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onWeChat | [<code>wakeupCallback</code>](#wakeupCallback) | <p>当前环境是微信</p> |

<a name="feOpen"></a>

## feOpen
**Kind**: global class  

* [feOpen](#feOpen)
    * [new feOpen()](#new_feOpen_new)
    * [.config](#feOpen+config)
    * [.download(url)](#feOpen+download)
    * [.open(urls)](#feOpen+open)
    * [.start(open)](#feOpen+start)

<a name="new_feOpen_new"></a>

### new feOpen()
<p>feOpen 唤醒库核心基类，对各个移动端环境进行兼容性处理</p>

<a name="feOpen+config"></a>

### feOpen.config
<p>配置，初始化后根据参数自动生成</p>

**Kind**: instance property of [<code>feOpen</code>](#feOpen)  
**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| isApp | <code>boolean</code> | <p>是否内嵌在APP，如果为true，会自动忽略open操作</p> |
| autoOpen | <code>boolean</code> | <p>是否尝试自动打开</p> |
| schema | <code>string</code> | <p>完整的唤醒schema</p> |
| downloadUrl | <code>string</code> \| <code>Array</code> | <p>下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面</p> |
| callback | <code>object</code> | <p>回调对象</p> |
| callback.onStart | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onEnd | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onSuccess | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onFail | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onWeChat | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |

<a name="feOpen+download"></a>

### feOpen.download(url)
<p>启动下载APP</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | <p>下载地址</p> |

<a name="feOpen+open"></a>

### feOpen.open(urls)
<p>手动执行唤醒</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| urls | <code>object</code> | <p>唤醒参数，指定后本次唤醒替换初始化配置</p> |
| urls.universalUrl | <code>string</code> |  |
| urls.intent | <code>string</code> |  |
| urls.schema | <code>string</code> |  |

<a name="feOpen+start"></a>

### feOpen.start(open)
<p>start
执行open库，在初始化之后调用</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| open | <code>boolean</code> | <p>是否自动打开，如果未配置，则自动读取url参数的auto属性</p> |

<a name="wakeupCallback"></a>

## wakeupCallback : <code>function</code>
<p>唤醒回调函数</p>

**Kind**: global typedef  
## Modules

<dl>
<dt><a href="#module_init">init</a> ⇒ <code><a href="#feOpenWeb">feOpenWeb</a></code></dt>
<dd><p>初始化feOpenWeb，new feOpenWeb</p></dd>
<dt><a href="#module_feOpen">feOpen</a> ⇒ <code><a href="#feOpen">feOpen</a></code></dt>
<dd><p>feOpen</p></dd>
</dl>

## Classes

<dl>
<dt><a href="#feOpenWeb">feOpenWeb</a></dt>
<dd></dd>
<dt><a href="#feOpen">feOpen</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#wakeupCallback">wakeupCallback</a> : <code>function</code></dt>
<dd><p>唤醒回调函数</p></dd>
</dl>

<a name="module_init"></a>

## init ⇒ [<code>feOpenWeb</code>](#feOpenWeb)
<p>初始化feOpenWeb，new feOpenWeb</p>

**See**: [feOpenWeb](#feOpenWeb)  
<a name="module_feOpen"></a>

## feOpen ⇒ [<code>feOpen</code>](#feOpen)
<p>feOpen</p>

**See**: [feOpen](#feOpen)  
<a name="feOpenWeb"></a>

## feOpenWeb
**Kind**: global class  
**Implements**: [<code>feOpen</code>](#feOpen)  
<a name="new_feOpenWeb_new"></a>

### new feOpenWeb(schema, intentData, deepLink，, downloadUrl, appFlag, callback)
<p>应用于业务的fee-open库,通过url参数或配置初始化fee-open库
.feOpen, .feOpen-download，监听.feOpen, .feOpen-download的click事件，手动进行open和download操作</p>


| Param | Type | Description |
| --- | --- | --- |
| schema | <code>Object</code> | <p>schema定义</p> |
| schema.protocal | <code>string</code> | <p>schema协议，例如duobaohkg://</p> |
| schema.value | <code>string</code> | <p>schema值</p> |
| intentData | <code>Object</code> | <p>android intent定义，自动格式成intent link，与Android intent格式一直，例如intent://send/+XXXXXXXXXXX#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end</p> |
| intentData.host | <code>string</code> | <p>HOST/URI-path</p> |
| intentData.schema | <code>string</code> | <p>-</p> |
| intentData.package | <code>string</code> | <p>-</p> |
| intentData.action | <code>string</code> | <p>-</p> |
| intentData.category | <code>string</code> | <p>-</p> |
| intentData.component | <code>string</code> | <p>-</p> |
| intentData.fallbackUrl | <code>string</code> | <p>-</p> |
| deepLink， | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <p>deepLink，{string | string[]} - string,IOS/Android 使用相同的deeplink，Array [0]=IOS Universal,[1]=Android APP Link，如果某项为空，则该平台不使用deep link</p> |
| downloadUrl | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <p>下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面</p> |
| appFlag | <code>string</code> \| <code>function</code> | <p>app UA判断标识</p> |
| callback | <code>object</code> | <p>回调对象</p> |
| callback.onStart | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onEnd | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onSuccess | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onFail | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onWeChat | [<code>wakeupCallback</code>](#wakeupCallback) | <p>当前环境是微信</p> |

<a name="feOpen"></a>

## feOpen
**Kind**: global class  

* [feOpen](#feOpen)
    * [new feOpen()](#new_feOpen_new)
    * [.config](#feOpen+config)
    * [.download(url)](#feOpen+download)
    * [.open(urls)](#feOpen+open)
    * [.start(open)](#feOpen+start)

<a name="new_feOpen_new"></a>

### new feOpen()
<p>feOpen 唤醒库核心基类，对各个移动端环境进行兼容性处理</p>

<a name="feOpen+config"></a>

### feOpen.config
<p>配置，初始化后根据参数自动生成</p>

**Kind**: instance property of [<code>feOpen</code>](#feOpen)  
**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| isApp | <code>boolean</code> | <p>是否内嵌在APP，如果为true，会自动忽略open操作</p> |
| autoOpen | <code>boolean</code> | <p>是否尝试自动打开</p> |
| schema | <code>string</code> | <p>完整的唤醒schema</p> |
| downloadUrl | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <p>下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面</p> |
| callback | <code>object</code> | <p>回调对象</p> |
| callback.onStart | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onEnd | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onSuccess | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onFail | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onWeChat | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |

<a name="feOpen+download"></a>

### feOpen.download(url)
<p>启动下载APP</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | <p>下载地址</p> |

<a name="feOpen+open"></a>

### feOpen.open(urls)
<p>手动执行唤醒</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| urls | <code>object</code> | <p>唤醒参数，指定后本次唤醒替换初始化配置</p> |
| urls.universalUrl | <code>string</code> | <p>IOS 9 Universal Url</p> |
| urls.appLink | <code>string</code> | <p>Android 6 app link</p> |
| urls.intent | <code>string</code> |  |
| urls.schema | <code>string</code> |  |

<a name="feOpen+start"></a>

### feOpen.start(open)
<p>start
执行open库，在初始化之后调用</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| open | <code>boolean</code> | <p>是否自动打开，如果未配置，则自动读取url参数的auto属性</p> |

<a name="wakeupCallback"></a>

## wakeupCallback : <code>function</code>
<p>唤醒回调函数</p>

**Kind**: global typedef  
## Modules

<dl>
<dt><a href="#module_init">init</a> ⇒ <code><a href="#feOpenWeb">feOpenWeb</a></code></dt>
<dd><p>初始化feOpenWeb，new feOpenWeb</p></dd>
<dt><a href="#module_feOpen">feOpen</a> ⇒ <code><a href="#feOpen">feOpen</a></code></dt>
<dd><p>feOpen</p></dd>
</dl>

## Classes

<dl>
<dt><a href="#feOpenWeb">feOpenWeb</a></dt>
<dd></dd>
<dt><a href="#feOpen">feOpen</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#wakeupCallback">wakeupCallback</a> : <code>function</code></dt>
<dd><p>唤醒回调函数</p></dd>
</dl>

<a name="module_init"></a>

## init ⇒ [<code>feOpenWeb</code>](#feOpenWeb)
<p>初始化feOpenWeb，new feOpenWeb</p>

**See**: [feOpenWeb](#feOpenWeb)  
<a name="module_feOpen"></a>

## feOpen ⇒ [<code>feOpen</code>](#feOpen)
<p>feOpen</p>

**See**: [feOpen](#feOpen)  
<a name="feOpenWeb"></a>

## feOpenWeb
**Kind**: global class  
**Implements**: [<code>feOpen</code>](#feOpen)  
<a name="new_feOpenWeb_new"></a>

### new feOpenWeb(schema, intentData, deepLink，, downloadUrl, appFlag, callback)
<p>应用于业务的fee-open库,通过url参数或配置初始化fee-open库
.feOpen, .feOpen-download，监听.feOpen, .feOpen-download的click事件，手动进行open和download操作</p>


| Param | Type | Description |
| --- | --- | --- |
| schema | <code>Object</code> | <p>schema定义</p> |
| schema.protocal | <code>string</code> | <p>schema协议，例如duobaohkg://</p> |
| schema.value | <code>string</code> | <p>schema值</p> |
| intentData | <code>Object</code> | <p>android intent定义，自动格式成intent link，与Android intent格式一直，例如intent://send/+XXXXXXXXXXX#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end</p> |
| intentData.host | <code>string</code> | <p>HOST/URI-path</p> |
| intentData.schema | <code>string</code> | <p>-</p> |
| intentData.package | <code>string</code> | <p>-</p> |
| intentData.action | <code>string</code> | <p>-</p> |
| intentData.category | <code>string</code> | <p>-</p> |
| intentData.component | <code>string</code> | <p>-</p> |
| intentData.fallbackUrl | <code>string</code> | <p>-</p> |
| deepLink， | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <p>deepLink，{string | string[]} - string,IOS/Android 使用相同的deeplink，Array [0]=IOS Universal,[1]=Android APP Link，如果某项为空，则该平台不使用deep link</p> |
| downloadUrl | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <p>下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面</p> |
| appFlag | <code>string</code> \| <code>function</code> | <p>app UA判断标识</p> |
| callback | <code>object</code> | <p>回调对象</p> |
| callback.onStart | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onEnd | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onSuccess | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onFail | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onWeChat | [<code>wakeupCallback</code>](#wakeupCallback) | <p>当前环境是微信</p> |

<a name="feOpen"></a>

## feOpen
**Kind**: global class  

* [feOpen](#feOpen)
    * [new feOpen()](#new_feOpen_new)
    * [.config](#feOpen+config)
    * [.download(url)](#feOpen+download)
    * [.open(urls)](#feOpen+open)
    * [.start(open)](#feOpen+start)

<a name="new_feOpen_new"></a>

### new feOpen()
<p>feOpen 唤醒库核心基类，对各个移动端环境进行兼容性处理</p>

<a name="feOpen+config"></a>

### feOpen.config
<p>配置，初始化后根据参数自动生成</p>

**Kind**: instance property of [<code>feOpen</code>](#feOpen)  
**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| isApp | <code>boolean</code> | <p>是否内嵌在APP，如果为true，会自动忽略open操作</p> |
| autoOpen | <code>boolean</code> | <p>是否尝试自动打开</p> |
| schema | <code>string</code> | <p>完整的唤醒schema</p> |
| downloadUrl | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <p>下载地址，如果是数组，[IOS地址, Android地址]，如果是字符串，则为统一下载页面</p> |
| callback | <code>object</code> | <p>回调对象</p> |
| callback.onStart | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onEnd | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onSuccess | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onFail | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |
| callback.onWeChat | [<code>wakeupCallback</code>](#wakeupCallback) | <p>-</p> |

<a name="feOpen+download"></a>

### feOpen.download(url)
<p>启动下载APP</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | <p>下载地址</p> |

<a name="feOpen+open"></a>

### feOpen.open(urls)
<p>手动执行唤醒</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| urls | <code>object</code> | <p>唤醒参数，指定后本次唤醒替换初始化配置</p> |
| urls.universalUrl | <code>string</code> | <p>IOS 9 Universal Url</p> |
| urls.appLink | <code>string</code> | <p>Android 6 app link</p> |
| urls.intent | <code>string</code> |  |
| urls.schema | <code>string</code> |  |

<a name="feOpen+start"></a>

### feOpen.start(open)
<p>start
执行open库，在初始化之后调用</p>

**Kind**: instance method of [<code>feOpen</code>](#feOpen)  

| Param | Type | Description |
| --- | --- | --- |
| open | <code>boolean</code> | <p>是否自动打开，如果未配置，则自动读取url参数的auto属性</p> |

<a name="wakeupCallback"></a>

## wakeupCallback : <code>function</code>
<p>唤醒回调函数</p>

**Kind**: global typedef  
