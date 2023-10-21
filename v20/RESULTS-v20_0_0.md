## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|588,639,959|96|
|Using dot notation|592,568,568|92|
|Using define property (writable)|2,591,364|98|
|Using define property initialized (writable)|3,398,661|92|
|Using define property (getter)|1,388,167|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Aug 27 2023 00:42:48 GMT+0000 (Coordinated Universal Time)
</details>


## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|709,575,930|96|
|Using dot notation|716,064,300|98|
|Using define property (writable)|3,111,145|99|
|Using define property initialized (writable)|4,081,437|95|
|Using define property (getter)|1,666,706|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:27:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":709575929.8054338,"samples":6},{"name":"Using dot notation","opsSec":716064300.2458105,"samples":6},{"name":"Using define property (writable)","opsSec":3111144.9726446625,"samples":5},{"name":"Using define property initialized (writable)","opsSec":4081436.66787821,"samples":4},{"name":"Using define property (getter)","opsSec":1666706.1812953327,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.016ms
new Array(length)|10|0.003ms
array.push|100|0.04ms
new Array(length)|100|0.049ms
array.push|1,000|0.079ms
new Array(length)|1,000|0.043ms
array.push|10,000|0.616ms
new Array(length)|10,000|0.542ms
array.push|1,000,000|46.593ms
new Array(length)|1,000,000|8.209ms
array.push|100,000,000|2,432.434ms
new Array(length)|100,000,000|5,823.307ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.02ms
array.push|100|0.034ms
new Array(length)|100|0.014ms
array.push|1,000|0.054ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.455ms
new Array(length)|10,000|0.302ms
array.push|1,000,000|35.214ms
new Array(length)|1,000,000|5.105ms
array.push|100,000,000|2,417.336ms
new Array(length)|100,000,000|6,546.281ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|304|77|
|Array.from|15|41|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:30:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":304.2970804499283,"samples":4},{"name":"Array.from","opsSec":14.613438053068842,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,246|82|
|new Blob (1024)|398|64|
|text (128)|3,507|79|
|text (1024)|426|82|
|arrayBuffer (128)|3,521|80|
|arrayBuffer (1024)|442|85|
|slice (0, 64)|52,334|63|
|slice (0, 512)|18,489|59|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:32:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":3245.5430957540166,"samples":3},{"name":"new Blob (1024)","opsSec":398.1902151854018,"samples":2},{"name":"text (128)","opsSec":3506.7505462332706,"samples":4},{"name":"text (1024)","opsSec":426.4939596815052,"samples":3},{"name":"arrayBuffer (128)","opsSec":3520.7790283863415,"samples":3},{"name":"arrayBuffer (1024)","opsSec":441.6120496289598,"samples":3},{"name":"slice (0, 64)","opsSec":52333.65106858017,"samples":3},{"name":"slice (0, 512)","opsSec":18488.862022245543,"samples":5}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|145,670|57|
|[True conditional] Using constructor name|118,935|87|
|[True conditional] Check if property is valid then instanceof |119,033|89|
|[False conditional] Using instanceof only|742,377,701|90|
|[False conditional] Using constructor name|745,457,866|85|
|[False conditional] Check if property is valid then instanceof |759,322,751|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:34:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":145669.79778268866,"samples":5},{"name":"[True conditional] Using constructor name","opsSec":118934.73304080135,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":119033.0511036691,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":742377701.0152013,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":745457865.8147584,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":759322751.1060547,"samples":8}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,926|94|
|crypto.verify('RSA-SHA256')|4,957|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:36:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":4925.943440685559,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":4957.20428772011,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,082,514|95|
|fromUnixToISOString(new Date())|1,693,677|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:37:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1082513.821679732,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1693676.7084238026,"samples":7}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,861|85|
|Intl.DateTimeFormat().format(new Date())|8,496|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|10,367|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,006|71|
|Reusing Intl.DateTimeFormat()|501,396|97|
|Date.toLocaleDateString()|523,421|99|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,517|83|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:40:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":7861.1039752781835,"samples":6},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8496.47469132082,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":10367.312532799635,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":8006.360094441306,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":501396.0285387245,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":523421.1830258163,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":9517.471174649498,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|714,398|94|
|Using brackets {}|720,143|98|
|Using '' + |725,573|92|
|Using date.toString()|794,636|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:43:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":714398.0069168536,"samples":4},{"name":"Using brackets {}","opsSec":720142.8843629536,"samples":6},{"name":"Using '' + ","opsSec":725572.6844236251,"samples":5},{"name":"Using date.toString()","opsSec":794636.2560163364,"samples":6}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,680,086|95|
|Using delete property (proto: null)|14,180,588|94|
|Using delete property (cached proto: null)|2,766,076|91|
|Using undefined assignment|598,179,134|93|
|Using undefined assignment (proto: null)|14,905,941|91|
|Using undefined property (cached proto: null)|599,415,127|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:46:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2680085.768911378,"samples":4},{"name":"Using delete property (proto: null)","opsSec":14180587.55056651,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2766075.714674383,"samples":5},{"name":"Using undefined assignment","opsSec":598179133.9061767,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":14905940.955454985,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":599415126.7463826,"samples":6}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|150,058|51|
|NodeError|117,441|94|
|NodeError Range|117,703|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:48:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Error","opsSec":150057.97413124103,"samples":3},{"name":"NodeError","opsSec":117440.82918306321,"samples":3},{"name":"NodeError Range","opsSec":117702.67486601435,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,146,205|90|
|Function returning explicitly undefined|1,141,134|96|
|Function returning implicitly undefined|1,157,457|91|
|Function returning string|1,143,783|96|
|Function returning integer|1,167,805|94|
|Function returning float|1,153,147|95|
|Function returning functions|1,130,644|95|
|Function returning arrow functions|1,129,671|96|
|Function returning empty object|1,156,223|93|
|Function returning empty array|1,174,723|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:52:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1146205.0231708447,"samples":4},{"name":"Function returning explicitly undefined","opsSec":1141133.769956881,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1157457.3145061822,"samples":5},{"name":"Function returning string","opsSec":1143783.2125700763,"samples":6},{"name":"Function returning integer","opsSec":1167805.253584906,"samples":6},{"name":"Function returning float","opsSec":1153146.8331424703,"samples":5},{"name":"Function returning functions","opsSec":1130643.9839868143,"samples":5},{"name":"Function returning arrow functions","opsSec":1129670.5453115313,"samples":6},{"name":"Function returning empty object","opsSec":1156222.5199732946,"samples":6},{"name":"Function returning empty array","opsSec":1174723.371126073,"samples":6}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|590,890,745|94|
|using Array.includes (first item)|599,054,223|97|
|Using raw comparison|599,342,701|97|
|Using raw comparison (first item)|599,606,194|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:55:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":590890744.8952146,"samples":9},{"name":"using Array.includes (first item)","opsSec":599054222.5028611,"samples":8},{"name":"Using raw comparison","opsSec":599342701.0488621,"samples":6},{"name":"Using raw comparison (first item)","opsSec":599606193.5937462,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|60,994,711|96|
|Using Object.getOwnPropertyNames()|61,874,273|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:58:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using Object.keys()","opsSec":60994711.40529692,"samples":6},{"name":"Using Object.getOwnPropertyNames()","opsSec":61874272.907482766,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|594,726,721|96|
|Length = 10_000 - Array.at|600,551,342|98|
|Length = 1_000_000 - Array.at|599,687,836|96|
|Length = 100 - Array[length - 1]|598,538,731|99|
|Length = 10_000 - Array[length - 1]|598,238,992|97|
|Length = 1_000_000 - Array[length - 1]|595,366,612|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:01:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":594726720.8303853,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":600551341.89811,"samples":8},{"name":"Length = 1_000_000 - Array.at","opsSec":599687836.452827,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":598538731.3701419,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":598238991.7510219,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":595366612.2985417,"samples":7}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|50,350,432|87|
|Object.create({})|1,613,527|80|
|Cached Empty.prototype|750,452,337|92|
|Empty.prototype|1,528,925|78|
|Empty class|1,058,619|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:03:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":50350431.67739145,"samples":8},{"name":"Object.create({})","opsSec":1613526.7041785999,"samples":3},{"name":"Cached Empty.prototype","opsSec":750452337.0765913,"samples":6},{"name":"Empty.prototype","opsSec":1528925.0358748713,"samples":3},{"name":"Empty class","opsSec":1058618.972849253,"samples":4}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|558,953,809|90|
|Using optional chain (obj.field?.field2) (undefined)|593,285,493|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|592,559,151|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|590,784,947|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:05:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":558953808.5839281,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":593285492.9841253,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":592559151.4127845,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":590784946.7373401,"samples":7}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|596,658,059|94|
|Using parseInt(x, 10) - big number (10 len)|600,404,772|95|
|Using + - small number (2 len)|598,982,907|93|
|Using + - big number (10 len)|599,960,329|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:07:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":596658058.8931874,"samples":7},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":600404772.4364338,"samples":6},{"name":"Using + - small number (2 len)","opsSec":598982906.5426883,"samples":7},{"name":"Using + - big number (10 len)","opsSec":599960329.0487723,"samples":6}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|767,915|72|
|Using ? operator to avoid rejection|872,835|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:10:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":767914.5508713372,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":872834.7571453903,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|705,946,238|97|
|Raw usage underscore usage|711,371,030|96|
|Manipulating private properties using #|702,246,960|94|
|Manipulating private properties using underscore(_)|702,515,726|96|
|Manipulating private properties using Symbol|702,742,999|95|
|Manipulating private properties using PrivateSymbol|32,272,112|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:15:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Raw usage private field","opsSec":705946238.3996183,"samples":7},{"name":"Raw usage underscore usage","opsSec":711371030.1414776,"samples":11},{"name":"Manipulating private properties using #","opsSec":702246960.2183269,"samples":8},{"name":"Manipulating private properties using underscore(_)","opsSec":702515725.969517,"samples":6},{"name":"Manipulating private properties using Symbol","opsSec":702742999.4460471,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":32272112.129433263,"samples":7}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,814,346|95|
|Adding property in the object creation - small object|5,842,648|98|
|Adding property after the function creation - small class|204,517|85|
|Adding property in the function creation - small class|208,429|84|
|Adding property after the class creation - small class|168,854|81|
|Adding property in the class creation - small class|166,508|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:17:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5814345.77960689,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5842648.344450931,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":204516.84287888077,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":208429.1350304664,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":168853.65087613455,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":166507.89904165512,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|597,721,147|98|
|Getter|68,337,863|96|
|Method|598,061,350|96|
|DefineProperty (getter)|598,807,769|97|
|DefineProperty (getter & enumerable=false)|68,392,511|98|
|DefineProperty (getter & configurable=false)|597,399,176|99|
|DefineProperty (getter & enumerable=false & configurable=false)|61,795,896|91|
|DefineProperty (writable)|597,476,702|96|
|DefineProperty (writable & enumerable=false)|598,743,398|95|
|DefineProperty (writable & enumerable=false & configurable=false)|179,894,392|32|
|DefineProperties (getter)|68,249,914|97|
|DefineProperties (getter & enumerable=false)|68,172,657|96|
|DefineProperties (getter & enumerable=false & configurable=false)|68,413,493|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:21:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":597721146.7622209,"samples":6},{"name":"Getter","opsSec":68337862.58695109,"samples":6},{"name":"Method","opsSec":598061349.8495392,"samples":7},{"name":"DefineProperty (getter)","opsSec":598807768.6854368,"samples":9},{"name":"DefineProperty (getter & enumerable=false)","opsSec":68392511.09328263,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":597399176.4362254,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":61795896.06141269,"samples":5},{"name":"DefineProperty (writable)","opsSec":597476702.2761172,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":598743397.532756,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":179894392.4702201,"samples":7},{"name":"DefineProperties (getter)","opsSec":68249913.61999902,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":68172656.50255169,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":68413493.0540717,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|479,549,636|93|
|Setter|8,162,315|94|
|Method|480,925,589|95|
|DefineProperty (setter)|481,384,632|98|
|DefineProperty (setter & enumerable=false)|8,308,862|93|
|DefineProperty (setter & configurable=false)|8,306,827|97|
|DefineProperty (setter & enumerable=false & configurable=false)|8,316,907|98|
|DefineProperty (writable)|483,114,504|97|
|DefineProperty (writable & enumerable=false)|484,314,558|96|
|DefineProperty (writable & enumerable=false & configurable=false)|483,714,983|97|
|DefineProperties (setter)|521,556,846|73|
|DefineProperties (setter & enumerable=false)|8,315,714|96|
|DefineProperties (setter & enumerable=false & configurable=false)|7,462,250|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:27:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":479549635.88956606,"samples":5},{"name":"Setter","opsSec":8162314.780124082,"samples":5},{"name":"Method","opsSec":480925588.9750447,"samples":7},{"name":"DefineProperty (setter)","opsSec":481384631.63604635,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":8308861.525685197,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":8306826.837357643,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":8316906.516797279,"samples":8},{"name":"DefineProperty (writable)","opsSec":483114504.1703881,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":484314558.3213598,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":483714983.4113202,"samples":8},{"name":"DefineProperties (setter)","opsSec":521556845.56981146,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":8315713.700526846,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":7462250.477824795,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,830,527|92|
|Using replaceAll()|1,550,428|91|
|Using replaceAll(//g)|1,674,743|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:30:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using replace(//g)","opsSec":1830526.8724434783,"samples":6},{"name":"Using replaceAll()","opsSec":1550428.4319635606,"samples":4},{"name":"Using replaceAll(//g)","opsSec":1674743.449196181,"samples":4}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|20,567,132|93|
|{ ...object, __proto__: null }|20,867,304|92|
|{ ...object, newProp: true }|601,149|84|
|structuredClone|182,917|97|
|JSON.parse + JSON.stringify|147,633|96|
|loop + object.keys starting with {}|370,489|94|
|loop + object.keys starting with { __proto__: null }|492,120|93|
|loop + object.keys starting with { randomProp: true }|377,902|93|
|object.keys + reduce(FN, {})|365,875|95|
|object.keys + reduce(FN, { __proto__: null })|493,487|96|
|object.keys + reduce(FN, { newProp: true })|379,079|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:32:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":20567132.216218166,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":20867303.672608715,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":601148.8556594953,"samples":3},{"name":"structuredClone","opsSec":182916.8925366023,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":147633.14409526985,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":370489.24516725104,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":492120.47466014366,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":377901.57100323826,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":365874.7388809437,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":493487.1070454872,"samples":7},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":379078.6634657649,"samples":6}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|165,893|84|
|Sort using first char|822,541|81|
|Sort using localeCompare|775,131|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:38:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Sort using default","opsSec":165893.22531978285,"samples":4},{"name":"Sort using first char","opsSec":822541.4887391302,"samples":6},{"name":"Sort using localeCompare","opsSec":775130.6471299805,"samples":8}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,320|94|
|{...smallObject} - Total keys: 2|70,597,354|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|785|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,689|97|
|{ ...bigObject, ...anotherBigObject }|814|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,999,571|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|19,793,757|98|
|{ ...smallObject, ...anotherSmallObject }|14,697,363|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:45:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1320.0493306568335,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":70597354.09740353,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":784.8419644751314,"samples":2},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3688.542564720888,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":814.2682036972594,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7999570.82873022,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":19793757.176898394,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":14697362.577226818,"samples":7}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,396|80|
|streams.web.Readable reading 1e3 * "some data"|372|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:47:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1396.4759551365573,"samples":3},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":371.9418865137751,"samples":2}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,203|94|
|streams.web.WritableStream writing 1e3 * "some data"|775|50|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:49:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4202.534246787694,"samples":8},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":774.7683939951687,"samples":3}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|580,743,812|93|
|Using backtick (`)|597,370,445|95|
|Using array.join|5,742,596|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:57:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using + sign","opsSec":580743811.8169199,"samples":6},{"name":"Using backtick (`)","opsSec":597370444.7374444,"samples":6},{"name":"Using array.join","opsSec":5742596.337165756,"samples":6}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|704,867,895|95|
|Using indexof|716,661,892|93|
|Using RegExp.test|11,175,434|87|
|Using RegExp.text with cached regex pattern|11,816,446|96|
|Using new RegExp.test|3,313,268|96|
|Using new RegExp.test with cached regex pattern|4,012,640|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:00:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using includes","opsSec":704867894.6692827,"samples":5},{"name":"Using indexof","opsSec":716661891.7412158,"samples":8},{"name":"Using RegExp.test","opsSec":11175433.734687818,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":11816446.49157919,"samples":7},{"name":"Using new RegExp.test","opsSec":3313268.2960559768,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4012640.245081775,"samples":5}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|590,898,363|98|
|Using this|593,478,723|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:06:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using super","opsSec":590898362.6602161,"samples":6},{"name":"Using this","opsSec":593478722.9950508,"samples":7}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|8,799,275|97|
|Date.now()|17,143,600|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 10 2023 22:04:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":"[{\"timeStamp\":1696975488185,\"currentTarget\":{\"0\":{\"name\":\"new Date().getTime()\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":1,\"stats\":{\"moe\":1.1183415034855198e-9,\"rme\":0.9840594090680074,\"sem\":5.705823997375101e-10,\"deviation\":5.619584919222319e-9,\"mean\":1.1364573044880386e-7,\"sample\":[1.1246750433657071e-7,1.1337532689378263e-7,1.1627358698236314e-7,1.1811587449039791e-7,1.1328067078163936e-7,1.1175295194991591e-7,1.1188899479611513e-7,1.6291959293469168e-7,1.1585291540825402e-7,1.1669624193221741e-7,1.1265285421197686e-7,1.1102629899004129e-7,1.112957387139096e-7,1.1402780028000598e-7,1.111979985735544e-7,1.1318755558294958e-7,1.1389439899972704e-7,1.1111148949097026e-7,1.112153910838345e-7,1.1628217427290898e-7,1.1024064665533728e-7,1.1368153281265135e-7,1.122874353917002e-7,1.1327098503993168e-7,1.137944597557432e-7,1.1213840484639295e-7,1.1070886641601141e-7,1.1540494545166374e-7,1.1262225607340032e-7,1.1470844816807403e-7,1.1573316221856317e-7,1.1368571309072017e-7,1.1096752194701019e-7,1.1113239968653418e-7,1.1414424931099156e-7,1.1305063221477692e-7,1.110205733959091e-7,1.1117906955243067e-7,1.1173137916156698e-7,1.1103180005107028e-7,1.1111787327527759e-7,1.1076433930033723e-7,1.1110378272239784e-7,1.102906162773292e-7,1.1273980575685267e-7,1.1132655698297952e-7,1.1592401755760815e-7,1.1339249927356937e-7,1.1182273551761485e-7,1.1027938962216803e-7,1.1112711655469362e-7,1.1071480993933203e-7,1.213870378360292e-7,1.1099789995509338e-7,1.1074761158414709e-7,1.107953776999005e-7,1.111814909878576e-7,1.1224913268585617e-7,1.107291184214002e-7,1.1045417323389306e-7,1.1446674268506371e-7,1.1265285421197686e-7,1.1131643098028511e-7,1.1168845371536247e-7,1.1100120411379865e-7,1.1057150498815698e-7,1.1407982371950092e-7,1.1051452641125659e-7,1.1735159462529388e-7,1.1455869559474857e-7,1.2694964955225458e-7,1.1523672172864074e-7,1.1530100203400575e-7,1.1488031725206703e-7,1.1341573404714316e-7,1.1265383379267229e-7,1.1415562125227836e-7,1.1374506247303401e-7,1.1253429853216987e-7,1.1445853181766151e-7,1.1467250746242374e-7,1.1317556287367152e-7,1.1090703228874076e-7,1.1306196893518478e-7,1.1282179996301807e-7,1.1312581118086802e-7,1.1279758340744394e-7,1.1289510561861072e-7,1.1401979413396261e-7,1.154524584173498e-7,1.1559995245181344e-7,1.1459523945795067e-7,1.1469209907633246e-7,1.1308508703959708e-7,1.134447912722662e-7,1.1350401077758896e-7,1.1405721851913815e-7],\"variance\":3.157973466435092e-17},\"times\":{\"cycle\":0.05162652784536082,\"elapsed\":5.619,\"period\":1.1364573044880386e-7,\"timeStamp\":1696975482566},\"running\":false,\"count\":454276,\"cycles\":9,\"hz\":8799274.693830129},\"1\":{\"name\":\"Date.now()\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":2,\"stats\":{\"moe\":9.790165526213708e-11,\"rme\":0.16783867950005718,\"sem\":4.994982411333524e-11,\"deviation\":4.816986593220297e-10,\"mean\":5.833080643493964e-8,\"sample\":[5.885940660783211e-8,5.8562922290874245e-8,5.91960236945033e-8,5.871713077957162e-8,5.866038541592324e-8,5.856769602011556e-8,5.838545583350131e-8,5.840795984048704e-8,5.852221779259829e-8,5.88703370298093e-8,5.865844306338327e-8,5.921659311295502e-8,5.912205228221844e-8,5.853753098961027e-8,5.791883451604207e-8,5.792081007100343e-8,5.8092958230425635e-8,5.804660652475204e-8,5.8107440195546774e-8,5.8192295337342366e-8,5.794878180484699e-8,5.787060339259377e-8,5.789466794237219e-8,5.820404034821695e-8,5.819494461388608e-8,5.812355921841161e-8,5.8073820519285834e-8,5.8408062274693476e-8,5.832320598153911e-8,5.866861706843331e-8,5.802868610390552e-8,5.827565486408786e-8,5.813564848556023e-8,5.80707106992317e-8,5.772748949672956e-8,6.012302383658074e-8,5.826563804273614e-8,5.8321939486885445e-8,5.797917767653497e-8,5.819367696787364e-8,5.937072025550954e-8,5.948861939417804e-8,5.848980874779371e-8,5.89477087384677e-8,5.820806895257438e-8,5.7966743001753517e-8,5.8063228018546086e-8,5.7705382256870446e-8,5.811204563065101e-8,5.7851375701033574e-8,5.782823338963478e-8,5.784400700486679e-8,5.85055835143845e-8,5.8401844937302756e-8,5.82765759511087e-8,5.78562125592518e-8,5.820024086425595e-8,5.935817044485049e-8,5.817617631447753e-8,5.7923911303925326e-8,5.806656695899666e-8,5.8510649492999166e-8,5.846482426235322e-8,5.835981919061781e-8,5.834796019522439e-8,5.9433699580559997e-8,5.8689802069912804e-8,5.8316412964760366e-8,5.76479283025863e-8,5.793289305373737e-8,5.838641672970356e-8,5.800393189022024e-8,5.772219209500091e-8,5.807715830837763e-8,5.842487211282395e-8,5.831088644263528e-8,5.773313000337348e-8,5.771793321888827e-8,5.83113469861457e-8,5.815936647634706e-8,5.8297760952588195e-8,5.78403226567834e-8,5.8331035221216315e-8,5.971118049966668e-8,5.928229475014939e-8,5.800669515128279e-8,5.813979337715405e-8,5.8183429874766705e-8,5.806495505671018e-8,5.782765771024675e-8,5.8217396110019235e-8,5.8071057258223294e-8,5.820392406098057e-8],\"variance\":2.320335983926408e-19},\"times\":{\"cycle\":0.05066258029019604,\"elapsed\":5.359,\"period\":5.833080643493964e-8,\"timeStamp\":1696975488199},\"running\":false,\"count\":868539,\"cycles\":5,\"hz\":17143599.773738235},\"options\":{},\"events\":{\"start\":[null],\"cycle\":[null,null],\"complete\":[null,null]},\"length\":2,\"running\":false},\"type\":\"cycle\",\"target\":{\"name\":\"new Date().getTime()\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":1,\"stats\":{\"moe\":1.1183415034855198e-9,\"rme\":0.9840594090680074,\"sem\":5.705823997375101e-10,\"deviation\":5.619584919222319e-9,\"mean\":1.1364573044880386e-7,\"sample\":[1.1246750433657071e-7,1.1337532689378263e-7,1.1627358698236314e-7,1.1811587449039791e-7,1.1328067078163936e-7,1.1175295194991591e-7,1.1188899479611513e-7,1.6291959293469168e-7,1.1585291540825402e-7,1.1669624193221741e-7,1.1265285421197686e-7,1.1102629899004129e-7,1.112957387139096e-7,1.1402780028000598e-7,1.111979985735544e-7,1.1318755558294958e-7,1.1389439899972704e-7,1.1111148949097026e-7,1.112153910838345e-7,1.1628217427290898e-7,1.1024064665533728e-7,1.1368153281265135e-7,1.122874353917002e-7,1.1327098503993168e-7,1.137944597557432e-7,1.1213840484639295e-7,1.1070886641601141e-7,1.1540494545166374e-7,1.1262225607340032e-7,1.1470844816807403e-7,1.1573316221856317e-7,1.1368571309072017e-7,1.1096752194701019e-7,1.1113239968653418e-7,1.1414424931099156e-7,1.1305063221477692e-7,1.110205733959091e-7,1.1117906955243067e-7,1.1173137916156698e-7,1.1103180005107028e-7,1.1111787327527759e-7,1.1076433930033723e-7,1.1110378272239784e-7,1.102906162773292e-7,1.1273980575685267e-7,1.1132655698297952e-7,1.1592401755760815e-7,1.1339249927356937e-7,1.1182273551761485e-7,1.1027938962216803e-7,1.1112711655469362e-7,1.1071480993933203e-7,1.213870378360292e-7,1.1099789995509338e-7,1.1074761158414709e-7,1.107953776999005e-7,1.111814909878576e-7,1.1224913268585617e-7,1.107291184214002e-7,1.1045417323389306e-7,1.1446674268506371e-7,1.1265285421197686e-7,1.1131643098028511e-7,1.1168845371536247e-7,1.1100120411379865e-7,1.1057150498815698e-7,1.1407982371950092e-7,1.1051452641125659e-7,1.1735159462529388e-7,1.1455869559474857e-7,1.2694964955225458e-7,1.1523672172864074e-7,1.1530100203400575e-7,1.1488031725206703e-7,1.1341573404714316e-7,1.1265383379267229e-7,1.1415562125227836e-7,1.1374506247303401e-7,1.1253429853216987e-7,1.1445853181766151e-7,1.1467250746242374e-7,1.1317556287367152e-7,1.1090703228874076e-7,1.1306196893518478e-7,1.1282179996301807e-7,1.1312581118086802e-7,1.1279758340744394e-7,1.1289510561861072e-7,1.1401979413396261e-7,1.154524584173498e-7,1.1559995245181344e-7,1.1459523945795067e-7,1.1469209907633246e-7,1.1308508703959708e-7,1.134447912722662e-7,1.1350401077758896e-7,1.1405721851913815e-7],\"variance\":3.157973466435092e-17},\"times\":{\"cycle\":0.05162652784536082,\"elapsed\":5.619,\"period\":1.1364573044880386e-7,\"timeStamp\":1696975482566},\"running\":false,\"count\":454276,\"cycles\":9,\"hz\":8799274.693830129},\"aborted\":false},{\"timeStamp\":1696975493558,\"currentTarget\":{\"0\":{\"name\":\"new Date().getTime()\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":1,\"stats\":{\"moe\":1.1183415034855198e-9,\"rme\":0.9840594090680074,\"sem\":5.705823997375101e-10,\"deviation\":5.619584919222319e-9,\"mean\":1.1364573044880386e-7,\"sample\":[1.1246750433657071e-7,1.1337532689378263e-7,1.1627358698236314e-7,1.1811587449039791e-7,1.1328067078163936e-7,1.1175295194991591e-7,1.1188899479611513e-7,1.6291959293469168e-7,1.1585291540825402e-7,1.1669624193221741e-7,1.1265285421197686e-7,1.1102629899004129e-7,1.112957387139096e-7,1.1402780028000598e-7,1.111979985735544e-7,1.1318755558294958e-7,1.1389439899972704e-7,1.1111148949097026e-7,1.112153910838345e-7,1.1628217427290898e-7,1.1024064665533728e-7,1.1368153281265135e-7,1.122874353917002e-7,1.1327098503993168e-7,1.137944597557432e-7,1.1213840484639295e-7,1.1070886641601141e-7,1.1540494545166374e-7,1.1262225607340032e-7,1.1470844816807403e-7,1.1573316221856317e-7,1.1368571309072017e-7,1.1096752194701019e-7,1.1113239968653418e-7,1.1414424931099156e-7,1.1305063221477692e-7,1.110205733959091e-7,1.1117906955243067e-7,1.1173137916156698e-7,1.1103180005107028e-7,1.1111787327527759e-7,1.1076433930033723e-7,1.1110378272239784e-7,1.102906162773292e-7,1.1273980575685267e-7,1.1132655698297952e-7,1.1592401755760815e-7,1.1339249927356937e-7,1.1182273551761485e-7,1.1027938962216803e-7,1.1112711655469362e-7,1.1071480993933203e-7,1.213870378360292e-7,1.1099789995509338e-7,1.1074761158414709e-7,1.107953776999005e-7,1.111814909878576e-7,1.1224913268585617e-7,1.107291184214002e-7,1.1045417323389306e-7,1.1446674268506371e-7,1.1265285421197686e-7,1.1131643098028511e-7,1.1168845371536247e-7,1.1100120411379865e-7,1.1057150498815698e-7,1.1407982371950092e-7,1.1051452641125659e-7,1.1735159462529388e-7,1.1455869559474857e-7,1.2694964955225458e-7,1.1523672172864074e-7,1.1530100203400575e-7,1.1488031725206703e-7,1.1341573404714316e-7,1.1265383379267229e-7,1.1415562125227836e-7,1.1374506247303401e-7,1.1253429853216987e-7,1.1445853181766151e-7,1.1467250746242374e-7,1.1317556287367152e-7,1.1090703228874076e-7,1.1306196893518478e-7,1.1282179996301807e-7,1.1312581118086802e-7,1.1279758340744394e-7,1.1289510561861072e-7,1.1401979413396261e-7,1.154524584173498e-7,1.1559995245181344e-7,1.1459523945795067e-7,1.1469209907633246e-7,1.1308508703959708e-7,1.134447912722662e-7,1.1350401077758896e-7,1.1405721851913815e-7],\"variance\":3.157973466435092e-17},\"times\":{\"cycle\":0.05162652784536082,\"elapsed\":5.619,\"period\":1.1364573044880386e-7,\"timeStamp\":1696975482566},\"running\":false,\"count\":454276,\"cycles\":9,\"hz\":8799274.693830129},\"1\":{\"name\":\"Date.now()\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":2,\"stats\":{\"moe\":9.790165526213708e-11,\"rme\":0.16783867950005718,\"sem\":4.994982411333524e-11,\"deviation\":4.816986593220297e-10,\"mean\":5.833080643493964e-8,\"sample\":[5.885940660783211e-8,5.8562922290874245e-8,5.91960236945033e-8,5.871713077957162e-8,5.866038541592324e-8,5.856769602011556e-8,5.838545583350131e-8,5.840795984048704e-8,5.852221779259829e-8,5.88703370298093e-8,5.865844306338327e-8,5.921659311295502e-8,5.912205228221844e-8,5.853753098961027e-8,5.791883451604207e-8,5.792081007100343e-8,5.8092958230425635e-8,5.804660652475204e-8,5.8107440195546774e-8,5.8192295337342366e-8,5.794878180484699e-8,5.787060339259377e-8,5.789466794237219e-8,5.820404034821695e-8,5.819494461388608e-8,5.812355921841161e-8,5.8073820519285834e-8,5.8408062274693476e-8,5.832320598153911e-8,5.866861706843331e-8,5.802868610390552e-8,5.827565486408786e-8,5.813564848556023e-8,5.80707106992317e-8,5.772748949672956e-8,6.012302383658074e-8,5.826563804273614e-8,5.8321939486885445e-8,5.797917767653497e-8,5.819367696787364e-8,5.937072025550954e-8,5.948861939417804e-8,5.848980874779371e-8,5.89477087384677e-8,5.820806895257438e-8,5.7966743001753517e-8,5.8063228018546086e-8,5.7705382256870446e-8,5.811204563065101e-8,5.7851375701033574e-8,5.782823338963478e-8,5.784400700486679e-8,5.85055835143845e-8,5.8401844937302756e-8,5.82765759511087e-8,5.78562125592518e-8,5.820024086425595e-8,5.935817044485049e-8,5.817617631447753e-8,5.7923911303925326e-8,5.806656695899666e-8,5.8510649492999166e-8,5.846482426235322e-8,5.835981919061781e-8,5.834796019522439e-8,5.9433699580559997e-8,5.8689802069912804e-8,5.8316412964760366e-8,5.76479283025863e-8,5.793289305373737e-8,5.838641672970356e-8,5.800393189022024e-8,5.772219209500091e-8,5.807715830837763e-8,5.842487211282395e-8,5.831088644263528e-8,5.773313000337348e-8,5.771793321888827e-8,5.83113469861457e-8,5.815936647634706e-8,5.8297760952588195e-8,5.78403226567834e-8,5.8331035221216315e-8,5.971118049966668e-8,5.928229475014939e-8,5.800669515128279e-8,5.813979337715405e-8,5.8183429874766705e-8,5.806495505671018e-8,5.782765771024675e-8,5.8217396110019235e-8,5.8071057258223294e-8,5.820392406098057e-8],\"variance\":2.320335983926408e-19},\"times\":{\"cycle\":0.05066258029019604,\"elapsed\":5.359,\"period\":5.833080643493964e-8,\"timeStamp\":1696975488199},\"running\":false,\"count\":868539,\"cycles\":5,\"hz\":17143599.773738235},\"options\":{},\"events\":{\"start\":[null],\"cycle\":[null,null],\"complete\":[null,null]},\"length\":2,\"running\":false},\"type\":\"cycle\",\"target\":{\"name\":\"Date.now()\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":2,\"stats\":{\"moe\":9.790165526213708e-11,\"rme\":0.16783867950005718,\"sem\":4.994982411333524e-11,\"deviation\":4.816986593220297e-10,\"mean\":5.833080643493964e-8,\"sample\":[5.885940660783211e-8,5.8562922290874245e-8,5.91960236945033e-8,5.871713077957162e-8,5.866038541592324e-8,5.856769602011556e-8,5.838545583350131e-8,5.840795984048704e-8,5.852221779259829e-8,5.88703370298093e-8,5.865844306338327e-8,5.921659311295502e-8,5.912205228221844e-8,5.853753098961027e-8,5.791883451604207e-8,5.792081007100343e-8,5.8092958230425635e-8,5.804660652475204e-8,5.8107440195546774e-8,5.8192295337342366e-8,5.794878180484699e-8,5.787060339259377e-8,5.789466794237219e-8,5.820404034821695e-8,5.819494461388608e-8,5.812355921841161e-8,5.8073820519285834e-8,5.8408062274693476e-8,5.832320598153911e-8,5.866861706843331e-8,5.802868610390552e-8,5.827565486408786e-8,5.813564848556023e-8,5.80707106992317e-8,5.772748949672956e-8,6.012302383658074e-8,5.826563804273614e-8,5.8321939486885445e-8,5.797917767653497e-8,5.819367696787364e-8,5.937072025550954e-8,5.948861939417804e-8,5.848980874779371e-8,5.89477087384677e-8,5.820806895257438e-8,5.7966743001753517e-8,5.8063228018546086e-8,5.7705382256870446e-8,5.811204563065101e-8,5.7851375701033574e-8,5.782823338963478e-8,5.784400700486679e-8,5.85055835143845e-8,5.8401844937302756e-8,5.82765759511087e-8,5.78562125592518e-8,5.820024086425595e-8,5.935817044485049e-8,5.817617631447753e-8,5.7923911303925326e-8,5.806656695899666e-8,5.8510649492999166e-8,5.846482426235322e-8,5.835981919061781e-8,5.834796019522439e-8,5.9433699580559997e-8,5.8689802069912804e-8,5.8316412964760366e-8,5.76479283025863e-8,5.793289305373737e-8,5.838641672970356e-8,5.800393189022024e-8,5.772219209500091e-8,5.807715830837763e-8,5.842487211282395e-8,5.831088644263528e-8,5.773313000337348e-8,5.771793321888827e-8,5.83113469861457e-8,5.815936647634706e-8,5.8297760952588195e-8,5.78403226567834e-8,5.8331035221216315e-8,5.971118049966668e-8,5.928229475014939e-8,5.800669515128279e-8,5.813979337715405e-8,5.8183429874766705e-8,5.806495505671018e-8,5.782765771024675e-8,5.8217396110019235e-8,5.8071057258223294e-8,5.820392406098057e-8],\"variance\":2.320335983926408e-19},\"times\":{\"cycle\":0.05066258029019604,\"elapsed\":5.359,\"period\":5.833080643493964e-8,\"timeStamp\":1696975488199},\"running\":false,\"count\":868539,\"cycles\":5,\"hz\":17143599.773738235},\"aborted\":false}]"}-->
