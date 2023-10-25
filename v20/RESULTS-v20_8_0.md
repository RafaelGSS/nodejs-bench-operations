## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|651,309,795|88|
|Using dot notation|640,792,002|89|
|Using define property (writable)|2,833,555|90|
|Using define property initialized (writable)|3,749,802|90|
|Using define property (getter)|1,536,244|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":651309795.3406146,"samples":9},{"name":"Using dot notation","opsSec":640792001.9753667,"samples":6},{"name":"Using define property (writable)","opsSec":2833555.2229388016,"samples":8},{"name":"Using define property initialized (writable)","opsSec":3749801.586644322,"samples":4},{"name":"Using define property (getter)","opsSec":1536243.647203398,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.024ms
new Array(length)|10|0.006ms
array.push|100|0.051ms
new Array(length)|100|0.013ms
array.push|1,000|0.077ms
new Array(length)|1,000|0.037ms
array.push|10,000|0.559ms
new Array(length)|10,000|0.53ms
array.push|1,000,000|41.108ms
new Array(length)|1,000,000|9.797ms
array.push|100,000,000|2,132.599ms
new Array(length)|100,000,000|4,982.726ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.022ms
array.push|100|0.065ms
new Array(length)|100|0.014ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.39ms
new Array(length)|10,000|0.265ms
array.push|1,000,000|34.32ms
new Array(length)|1,000,000|9.516ms
array.push|100,000,000|2,684.771ms
new Array(length)|100,000,000|5,732.528ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|263|58|
|Array.from|15|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:38:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":262.6051770753079,"samples":2},{"name":"Array.from","opsSec":14.579205421910864,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,387|86|
|new Blob (1024)|423|72|
|text (128)|3,636|85|
|text (1024)|454|87|
|arrayBuffer (128)|3,647|88|
|arrayBuffer (1024)|453|88|
|slice (0, 64)|50,216|68|
|slice (0, 512)|15,668|68|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"new Blob (128)","opsSec":3386.7700185706135,"samples":3},{"name":"new Blob (1024)","opsSec":422.8459296324513,"samples":2},{"name":"text (128)","opsSec":3636.4541805841286,"samples":4},{"name":"text (1024)","opsSec":453.5804617181817,"samples":3},{"name":"arrayBuffer (128)","opsSec":3646.541696079915,"samples":3},{"name":"arrayBuffer (1024)","opsSec":453.2088073322884,"samples":2},{"name":"slice (0, 64)","opsSec":50215.63539907446,"samples":3},{"name":"slice (0, 512)","opsSec":15667.672878726415,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|178,898|59|
|[True conditional] Using constructor name|145,136|91|
|[True conditional] Check if property is valid then instanceof |148,825|98|
|[False conditional] Using instanceof only|716,499,211|97|
|[False conditional] Using constructor name|716,907,804|95|
|[False conditional] Check if property is valid then instanceof |718,231,997|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":178898.026352466,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":145135.8493637828,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":148825.13364590824,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":716499210.6605294,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":716907803.9234965,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":718231997.4219474,"samples":9}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,865|91|
|crypto.verify('RSA-SHA256')|3,953|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:45:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":3864.913473233615,"samples":5},{"name":"crypto.verify('RSA-SHA256')","opsSec":3953.2232411965097,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|803,305|92|
|fromUnixToISOString(new Date())|1,357,057|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":803305.1361582576,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1357057.4485603785,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,328|86|
|Intl.DateTimeFormat().format(new Date())|10,883|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,373|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,295|96|
|Reusing Intl.DateTimeFormat()|528,092|88|
|Date.toLocaleDateString()|608,502|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,386|88|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:49:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":12328.174886313074,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":10883.065742652376,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":12373.172426669045,"samples":8},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":15295.118322951455,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":528092.0123634248,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":608502.0031385712,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":14385.974942111146,"samples":10},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|687,464|95|
|Using brackets {}|692,322|93|
|Using '' + |696,055|96|
|Using date.toString()|761,767|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:51:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using String()","opsSec":687464.2952055156,"samples":5},{"name":"Using brackets {}","opsSec":692322.2634516906,"samples":6},{"name":"Using '' + ","opsSec":696054.8297882231,"samples":5},{"name":"Using date.toString()","opsSec":761767.3345935626,"samples":8}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,191,890|89|
|Using delete property (proto: null)|10,183,384|96|
|Using delete property (cached proto: null)|2,246,467|92|
|Using undefined assignment|589,355,623|95|
|Using undefined assignment (proto: null)|11,337,851|94|
|Using undefined property (cached proto: null)|585,141,137|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:54:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using delete property","opsSec":2191890.1804444212,"samples":5},{"name":"Using delete property (proto: null)","opsSec":10183383.955204532,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2246467.208105072,"samples":5},{"name":"Using undefined assignment","opsSec":589355622.5874732,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":11337851.442385795,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":585141137.1207792,"samples":6}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|176,923|60|
|NodeError|141,959|89|
|NodeError Range|145,326|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:55:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Error","opsSec":176922.84557312357,"samples":3},{"name":"NodeError","opsSec":141958.60421616366,"samples":3},{"name":"NodeError Range","opsSec":145326.3884922059,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,010,959|77|
|Function returning explicitly undefined|1,131,852|82|
|Function returning implicitly undefined|1,202,509|83|
|Function returning string|1,056,078|83|
|Function returning integer|1,101,463|86|
|Function returning float|1,090,177|85|
|Function returning functions|1,071,342|85|
|Function returning arrow functions|1,121,532|87|
|Function returning empty object|1,142,280|86|
|Function returning empty array|1,112,998|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:58:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1010959.3514157808,"samples":3},{"name":"Function returning explicitly undefined","opsSec":1131852.367041331,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1202508.5072437522,"samples":4},{"name":"Function returning string","opsSec":1056078.1520831063,"samples":5},{"name":"Function returning integer","opsSec":1101463.430089361,"samples":7},{"name":"Function returning float","opsSec":1090176.9228720183,"samples":5},{"name":"Function returning functions","opsSec":1071341.8649447905,"samples":4},{"name":"Function returning arrow functions","opsSec":1121531.9366269219,"samples":6},{"name":"Function returning empty object","opsSec":1142280.4439075452,"samples":5},{"name":"Function returning empty array","opsSec":1112997.904639185,"samples":7}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|689,460,680|83|
|using Array.includes (first item)|702,474,103|89|
|Using raw comparison|693,458,620|90|
|Using raw comparison (first item)|692,822,608|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:01:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"using Array.includes","opsSec":689460680.4619726,"samples":6},{"name":"using Array.includes (first item)","opsSec":702474102.8987685,"samples":9},{"name":"Using raw comparison","opsSec":693458620.1638358,"samples":5},{"name":"Using raw comparison (first item)","opsSec":692822608.1122094,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|66,743,377|93|
|Using Object.getOwnPropertyNames()|68,634,643|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:03:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using Object.keys()","opsSec":66743377.45125567,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":68634642.93394184,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|578,989,701|91|
|Length = 10_000 - Array.at|600,549,773|94|
|Length = 1_000_000 - Array.at|598,914,358|90|
|Length = 100 - Array[length - 1]|602,131,609|93|
|Length = 10_000 - Array[length - 1]|596,730,527|94|
|Length = 1_000_000 - Array[length - 1]|602,276,213|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:07:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":578989701.3780521,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":600549772.8738027,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":598914358.3443836,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":602131608.9920862,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":596730527.0902689,"samples":8},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":602276213.4305481,"samples":8}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|39,917,144|83|
|Object.create({})|1,259,866|72|
|Cached Empty.prototype|694,254,438|88|
|Empty.prototype|1,146,999|71|
|Empty class|836,984|78|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:09:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":39917143.84048923,"samples":5},{"name":"Object.create({})","opsSec":1259865.6250909918,"samples":4},{"name":"Cached Empty.prototype","opsSec":694254437.9935118,"samples":6},{"name":"Empty.prototype","opsSec":1146998.5844060676,"samples":3},{"name":"Empty class","opsSec":836983.7235142897,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|654,759,073|85|
|Using optional chain (obj.field?.field2) (undefined)|672,321,704|85|
|Using and operator (obj.field && obj.field.field2) (Valid)|685,466,027|88|
|Using and operator (obj.field && obj.field.field2) (undefined)|677,053,880|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:13:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":654759073.3916065,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":672321703.6480286,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":685466027.2383442,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":677053879.7487365,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|743,774,027|85|
|Using parseInt(x, 10) - big number (10 len)|766,117,088|88|
|Using + - small number (2 len)|780,768,953|88|
|Using + - big number (10 len)|766,540,912|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:15:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":743774027.1354599,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":766117087.6752459,"samples":6},{"name":"Using + - small number (2 len)","opsSec":780768953.053184,"samples":6},{"name":"Using + - big number (10 len)","opsSec":766540912.0837622,"samples":7}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|662,286|72|
|Using ? operator to avoid rejection|764,560|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:19:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":662285.6632279755,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":764559.7067718015,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|558,403,286|87|
|Raw usage underscore usage|585,401,832|95|
|Manipulating private properties using #|561,708,924|92|
|Manipulating private properties using underscore(_)|572,075,626|96|
|Manipulating private properties using Symbol|558,731,708|92|
|Manipulating private properties using PrivateSymbol|25,665,337|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:22:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Raw usage private field","opsSec":558403286.205328,"samples":9},{"name":"Raw usage underscore usage","opsSec":585401831.7279086,"samples":8},{"name":"Manipulating private properties using #","opsSec":561708923.5210302,"samples":8},{"name":"Manipulating private properties using underscore(_)","opsSec":572075625.6289256,"samples":8},{"name":"Manipulating private properties using Symbol","opsSec":558731708.324338,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":25665337.05458232,"samples":7}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,901,376|94|
|Adding property in the object creation - small object|5,910,162|92|
|Adding property after the function creation - small class|187,055|88|
|Adding property in the function creation - small class|188,608|87|
|Adding property after the class creation - small class|157,386|84|
|Adding property in the class creation - small class|158,668|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:27:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5901375.892412326,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5910162.154834447,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":187054.6634845065,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":188608.0345867609,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":157386.35829446194,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":158668.19191794744,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|681,528,615|89|
|Getter|50,860,424|88|
|Method|697,892,646|91|
|DefineProperty (getter)|694,959,131|88|
|DefineProperty (getter & enumerable=false)|48,966,876|87|
|DefineProperty (getter & configurable=false)|691,874,498|90|
|DefineProperty (getter & enumerable=false & configurable=false)|51,385,666|87|
|DefineProperty (writable)|724,783,450|89|
|DefineProperty (writable & enumerable=false)|710,689,196|87|
|DefineProperty (writable & enumerable=false & configurable=false)|169,832,718|21|
|DefineProperties (getter)|30,572,924|84|
|DefineProperties (getter & enumerable=false)|31,604,200|83|
|DefineProperties (getter & enumerable=false & configurable=false)|51,444,590|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:32:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Getter (class)","opsSec":681528615.1547203,"samples":6},{"name":"Getter","opsSec":50860424.02456426,"samples":6},{"name":"Method","opsSec":697892646.2797625,"samples":7},{"name":"DefineProperty (getter)","opsSec":694959130.6038502,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":48966876.34703692,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":691874497.852425,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":51385665.81995732,"samples":6},{"name":"DefineProperty (writable)","opsSec":724783450.393159,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":710689196.2749329,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":169832717.54717663,"samples":7},{"name":"DefineProperties (getter)","opsSec":30572924.06638441,"samples":4},{"name":"DefineProperties (getter & enumerable=false)","opsSec":31604200.184535675,"samples":8},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":51444590.07547817,"samples":4}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|588,583,583|98|
|Setter|9,191,028|97|
|Method|589,819,628|99|
|DefineProperty (setter)|590,079,231|96|
|DefineProperty (setter & enumerable=false)|9,118,954|96|
|DefineProperty (setter & configurable=false)|9,136,167|98|
|DefineProperty (setter & enumerable=false & configurable=false)|9,093,547|98|
|DefineProperty (writable)|591,955,307|97|
|DefineProperty (writable & enumerable=false)|490,987,720|84|
|DefineProperty (writable & enumerable=false & configurable=false)|83,215,810|82|
|DefineProperties (setter)|81,793,770|86|
|DefineProperties (setter & enumerable=false)|9,207,862|100|
|DefineProperties (setter & enumerable=false & configurable=false)|9,060,565|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:36:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":588583582.6824358,"samples":5},{"name":"Setter","opsSec":9191027.635076981,"samples":5},{"name":"Method","opsSec":589819627.5497978,"samples":6},{"name":"DefineProperty (setter)","opsSec":590079230.8764385,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":9118954.46546731,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":9136167.059435714,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":9093546.90865357,"samples":5},{"name":"DefineProperty (writable)","opsSec":591955307.1771848,"samples":10},{"name":"DefineProperty (writable & enumerable=false)","opsSec":490987720.3791294,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":83215810.3262072,"samples":5},{"name":"DefineProperties (setter)","opsSec":81793769.55052915,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":9207861.748307897,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":9060565.284511006,"samples":4}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,247,658|94|
|Using replaceAll()|2,073,252|96|
|Using replaceAll(//g)|1,972,821|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:39:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":2247657.7098216037,"samples":5},{"name":"Using replaceAll()","opsSec":2073252.0538909072,"samples":5},{"name":"Using replaceAll(//g)","opsSec":1972821.4983761872,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|21,033,315|91|
|{ ...object, __proto__: null }|21,575,314|95|
|{ ...object, newProp: true }|670,233|87|
|structuredClone|195,732|98|
|JSON.parse + JSON.stringify|149,282|99|
|loop + object.keys starting with {}|1,178,356|95|
|loop + object.keys starting with { __proto__: null }|633,168|97|
|loop + object.keys starting with { randomProp: true }|459,559|96|
|object.keys + reduce(FN, {})|1,179,700|94|
|object.keys + reduce(FN, { __proto__: null })|631,578|97|
|object.keys + reduce(FN, { newProp: true })|461,430|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:44:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":21033315.32639696,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":21575313.58953759,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":670233.4769169971,"samples":3},{"name":"structuredClone","opsSec":195731.81816226625,"samples":9},{"name":"JSON.parse + JSON.stringify","opsSec":149282.1411295576,"samples":6},{"name":"loop + object.keys starting with {}","opsSec":1178355.756018545,"samples":6},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":633167.6180761819,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":459558.9942811731,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":1179700.3647325337,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":631578.3053954088,"samples":4},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":461429.62523016764,"samples":4}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|158,871|82|
|Sort using first char|837,075|85|
|Sort using localeCompare|759,937|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:47:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Sort using default","opsSec":158870.88791290115,"samples":4},{"name":"Sort using first char","opsSec":837074.7653886247,"samples":3},{"name":"Sort using localeCompare","opsSec":759937.0626719953,"samples":4}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,236|93|
|{...smallObject} - Total keys: 2|66,311,802|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,296|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,623|97|
|{ ...bigObject, ...anotherBigObject }|774|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,013,513|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|19,747,790|96|
|{ ...smallObject, ...anotherSmallObject }|14,421,967|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:51:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1235.845880337325,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":66311802.4282125,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1295.9969903124033,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3623.129658995993,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":774.2764421139493,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8013513.100709564,"samples":4},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":19747790.45053105,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":14421967.467749545,"samples":4}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,629|85|
|streams.web.Readable reading 1e3 * "some data"|1,681|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:54:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1628.9942094355597,"samples":4},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1680.8677734876455,"samples":6}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,446|92|
|streams.web.WritableStream writing 1e3 * "some data"|1,074|49|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:00:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4446.495670804208,"samples":4},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1073.543510210909,"samples":3}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|818,375,537|82|
|Using backtick (`)|781,810,290|81|
|Using array.join|6,292,394|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:05:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using + sign","opsSec":818375536.7959677,"samples":6},{"name":"Using backtick (`)","opsSec":781810289.7119752,"samples":5},{"name":"Using array.join","opsSec":6292393.788861485,"samples":5}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|691,277,613|87|
|Using indexof|713,268,612|88|
|Using RegExp.test|10,027,092|84|
|Using RegExp.text with cached regex pattern|10,360,473|88|
|Using new RegExp.test|2,823,527|88|
|Using new RegExp.test with cached regex pattern|3,257,157|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:07:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":691277612.8157433,"samples":7},{"name":"Using indexof","opsSec":713268611.7884619,"samples":6},{"name":"Using RegExp.test","opsSec":10027092.126427772,"samples":4},{"name":"Using RegExp.text with cached regex pattern","opsSec":10360473.476450091,"samples":4},{"name":"Using new RegExp.test","opsSec":2823526.8567089466,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3257157.0945213535,"samples":4}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|707,395,268|95|
|Using this|714,040,323|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:13:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using super","opsSec":707395268.1054711,"samples":6},{"name":"Using this","opsSec":714040323.1392138,"samples":6}]}-->
