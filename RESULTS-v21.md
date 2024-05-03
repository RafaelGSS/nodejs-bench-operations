## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|911,276,527|95|
|Using dot notation|911,621,739|99|
|Using define property (writable)|4,637,360|97|
|Using define property initialized (writable)|6,771,919|94|
|Using define property (getter)|2,675,824|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:20:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":911276527.1248406,"samples":6},{"name":"Using dot notation","opsSec":911621738.5536375,"samples":10},{"name":"Using define property (writable)","opsSec":4637359.525829851,"samples":6},{"name":"Using define property initialized (writable)","opsSec":6771918.923551921,"samples":5},{"name":"Using define property (getter)","opsSec":2675824.2833474968,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.001ms
array.push|100|0.079ms
new Array(length)|100|0.01ms
array.push|1,000|0.031ms
new Array(length)|1,000|0.015ms
array.push|10,000|0.263ms
new Array(length)|10,000|0.148ms
array.push|1,000,000|29.219ms
new Array(length)|1,000,000|8.429ms
array.push|100,000,000|1,988.437ms
new Array(length)|100,000,000|4,194.6ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.017ms
new Array(length)|100|0.012ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.308ms
new Array(length)|10,000|0.201ms
array.push|1,000,000|19.981ms
new Array(length)|1,000,000|7.233ms
array.push|100,000,000|2,063.521ms
new Array(length)|100,000,000|4,869.362ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|218|84|
|Array.from|23|43|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:33:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":217.51504743556623,"samples":2},{"name":"Array.from","opsSec":23.458366596410656,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|911,751,941|98|
|[async] async function|18,802,937|88|
|[async] function|340,866|38|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:41:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"function","opsSec":911751940.5422845,"samples":6},{"name":"[async] async function","opsSec":18802936.579410058,"samples":7},{"name":"[async] function","opsSec":340866.39330481016,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|6,045|90|
|new Blob (1024)|767|77|
|text (128)|6,447|88|
|text (1024)|813|88|
|arrayBuffer (128)|6,446|90|
|arrayBuffer (1024)|816|90|
|slice (0, 64)|202,761|58|
|slice (0, 512)|27,697|56|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:52:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":6044.6659276934115,"samples":5},{"name":"new Blob (1024)","opsSec":766.588770581704,"samples":2},{"name":"text (128)","opsSec":6447.481139966268,"samples":6},{"name":"text (1024)","opsSec":812.6987539342531,"samples":2},{"name":"arrayBuffer (128)","opsSec":6445.982107741202,"samples":5},{"name":"arrayBuffer (1024)","opsSec":815.9479908326671,"samples":2},{"name":"slice (0, 64)","opsSec":202760.58162225556,"samples":3},{"name":"slice (0, 512)","opsSec":27697.440103380963,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|271,391|54|
|[True conditional] Using constructor name|226,751|96|
|[True conditional] Check if property is valid then instanceof |229,988|96|
|[False conditional] Using instanceof only|911,782,711|99|
|[False conditional] Using constructor name|913,514,734|95|
|[False conditional] Check if property is valid then instanceof |912,785,640|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:05:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":271391.46327653615,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":226751.42220827684,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":229987.70785463302,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":911782711.1473707,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":913514734.125303,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":912785640.2397583,"samples":7}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,417|92|
|crypto.verify('RSA-SHA256')|7,405|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:11:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7417.287479254887,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":7405.2229410456575,"samples":3}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,762|80|
|Intl.DateTimeFormat().format(new Date())|18,022|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|17,764|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,702|80|
|Reusing Intl.DateTimeFormat()|760,059|86|
|Date.toLocaleDateString()|895,802|97|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,795|84|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:34:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17761.556230266116,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":18022.190238890733,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":17764.494935234354,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18701.961362642913,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":760059.0476413654,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":895801.8336038354,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21795.282111332435,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,186,706|94|
|Using brackets {}|1,218,290|97|
|Using '' + |1,211,039|98|
|Using date.toString()|1,354,385|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:44:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1186705.566558863,"samples":3},{"name":"Using brackets {}","opsSec":1218289.7190281125,"samples":5},{"name":"Using '' + ","opsSec":1211039.2103370784,"samples":4},{"name":"Using date.toString()","opsSec":1354385.0818145059,"samples":6}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,434,108|95|
|Using delete property (proto: null)|22,907,948|98|
|Using delete property (cached proto: null)|4,483,988|96|
|Using undefined assignment|909,598,299|97|
|Using undefined assignment (proto: null)|26,190,449|99|
|Using undefined property (cached proto: null)|908,165,205|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:54:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":4434107.95574427,"samples":4},{"name":"Using delete property (proto: null)","opsSec":22907948.113128122,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":4483988.276137414,"samples":4},{"name":"Using undefined assignment","opsSec":909598298.5294715,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":26190448.73689006,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":908165204.8772006,"samples":6}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|261,248|49|
|NodeError|220,252|96|
|NodeError Range|220,477|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:02:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":261247.72191621602,"samples":3},{"name":"NodeError","opsSec":220252.2101926288,"samples":3},{"name":"NodeError Range","opsSec":220477.452514734,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|2,001,859|95|
|Function returning explicitly undefined|2,006,667|95|
|Function returning implicitly undefined|2,065,058|96|
|Function returning string|1,995,468|94|
|Function returning integer|2,070,823|97|
|Function returning float|2,048,575|98|
|Function returning functions|1,981,317|95|
|Function returning arrow functions|2,010,496|97|
|Function returning empty object|2,036,019|93|
|Function returning empty array|2,005,332|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:15:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":2001859.4908785587,"samples":6},{"name":"Function returning explicitly undefined","opsSec":2006666.991948874,"samples":5},{"name":"Function returning implicitly undefined","opsSec":2065057.9120174488,"samples":6},{"name":"Function returning string","opsSec":1995468.3424151621,"samples":6},{"name":"Function returning integer","opsSec":2070823.2069681855,"samples":6},{"name":"Function returning float","opsSec":2048575.201362693,"samples":4},{"name":"Function returning functions","opsSec":1981316.9450522526,"samples":5},{"name":"Function returning arrow functions","opsSec":2010496.4586103875,"samples":6},{"name":"Function returning empty object","opsSec":2036018.5652705512,"samples":6},{"name":"Function returning empty array","opsSec":2005331.6576590745,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|908,878,486|97|
|using Array.includes (first item)|910,490,275|97|
|Using raw comparison|912,494,510|99|
|Using raw comparison (first item)|911,469,927|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:25:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":908878485.5330005,"samples":6},{"name":"using Array.includes (first item)","opsSec":910490275.4530396,"samples":6},{"name":"Using raw comparison","opsSec":912494510.4756975,"samples":7},{"name":"Using raw comparison (first item)","opsSec":911469926.8815029,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|101,024,500|94|
|Using Object.getOwnPropertyNames()|99,062,009|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:31:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":101024499.91516002,"samples":8},{"name":"Using Object.getOwnPropertyNames()","opsSec":99062009.21239303,"samples":7}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|964,826,270|96|
|Length = 10_000 - Array.at|966,874,352|96|
|Length = 1_000_000 - Array.at|967,291,989|98|
|Length = 100 - Array[length - 1]|909,852,337|96|
|Length = 10_000 - Array[length - 1]|910,511,896|97|
|Length = 1_000_000 - Array[length - 1]|910,115,323|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:42:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":964826270.2622097,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":966874352.2000805,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":967291989.3666257,"samples":8},{"name":"Length = 100 - Array[length - 1]","opsSec":909852336.9924241,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":910511895.5040598,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":910115322.8304778,"samples":6}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|91,860,349|96|
|Object.create({})|2,924,902|84|
|Cached Empty.prototype|910,577,842|97|
|Empty.prototype|2,715,279|91|
|Empty class|1,730,037|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:51:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":91860348.98275596,"samples":5},{"name":"Object.create({})","opsSec":2924902.1091555287,"samples":3},{"name":"Cached Empty.prototype","opsSec":910577842.0354116,"samples":7},{"name":"Empty.prototype","opsSec":2715278.8162586843,"samples":3},{"name":"Empty class","opsSec":1730036.9936099562,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|910,630,468|94|
|Using optional chain (obj.field?.field2) (undefined)|911,660,012|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|911,718,644|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|883,654,802|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:00:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":910630467.6779568,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":911660012.3299183,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":911718643.8651503,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":883654801.6261408,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|911,393,550|96|
|Using parseInt(x, 10) - big number (10 len)|912,194,564|98|
|Using + - small number (2 len)|912,241,958|97|
|Using + - big number (10 len)|911,091,167|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:08:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":911393550.4215589,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":912194563.739854,"samples":6},{"name":"Using + - small number (2 len)","opsSec":912241957.8979269,"samples":7},{"name":"Using + - big number (10 len)","opsSec":911091167.4315401,"samples":6}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,497,488|84|
|Using ? operator to avoid rejection|1,573,074|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:15:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":1497488.3425161343,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":1573074.3002123644,"samples":5}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|907,692,199|98|
|Raw usage underscore usage|907,917,373|96|
|Manipulating private properties using #|899,332,468|99|
|Manipulating private properties using underscore(_)|900,111,246|97|
|Manipulating private properties using Symbol|899,590,555|97|
|Manipulating private properties using PrivateSymbol|55,476,602|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:25:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":907692199.4531345,"samples":7},{"name":"Raw usage underscore usage","opsSec":907917372.6048611,"samples":6},{"name":"Manipulating private properties using #","opsSec":899332467.6372743,"samples":7},{"name":"Manipulating private properties using underscore(_)","opsSec":900111245.509731,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":899590554.7760267,"samples":8},{"name":"Manipulating private properties using PrivateSymbol","opsSec":55476602.33878414,"samples":5}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,734,874|94|
|Adding property in the object creation - small object|5,738,829|97|
|Adding property after the function creation - small class|297,086|89|
|Adding property in the function creation - small class|301,261|92|
|Adding property after the class creation - small class|299,706|89|
|Adding property in the class creation - small class|298,145|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:36:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5734873.865728777,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":5738828.588568682,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":297085.7415783444,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":301261.2544932141,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":299705.9021107599,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":298145.3256726959,"samples":4}]}-->
