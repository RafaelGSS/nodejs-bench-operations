## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|753,140,350|88|
|Using dot notation|614,948,566|86|
|Using define property (writable)|2,575,965|90|
|Using define property initialized (writable)|3,126,758|87|
|Using define property (getter)|1,331,850|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:19:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Directly in the object","opsSec":753140349.7514814,"samples":6},{"name":"Using dot notation","opsSec":614948566.1799047,"samples":5},{"name":"Using define property (writable)","opsSec":2575964.549702672,"samples":6},{"name":"Using define property initialized (writable)","opsSec":3126757.718347091,"samples":6},{"name":"Using define property (getter)","opsSec":1331849.7039262773,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.012ms
new Array(length)|10|0.003ms
array.push|100|0.028ms
new Array(length)|100|0.027ms
array.push|1,000|0.061ms
new Array(length)|1,000|0.028ms
array.push|10,000|0.483ms
new Array(length)|10,000|0.27ms
array.push|1,000,000|33.173ms
new Array(length)|1,000,000|21.591ms
array.push|100,000,000|2,023.147ms
new Array(length)|100,000,000|5,149.504ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.02ms
array.push|100|0.019ms
new Array(length)|100|0.013ms
array.push|1,000|0.084ms
new Array(length)|1,000|0.04ms
array.push|10,000|0.775ms
new Array(length)|10,000|5.451ms
array.push|1,000,000|337.789ms
new Array(length)|1,000,000|5.371ms
array.push|100,000,000|2,901.097ms
new Array(length)|100,000,000|6,129.742ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|314|84|
|Array.from|14|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:57:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":313.92116729989,"samples":2},{"name":"Array.from","opsSec":14.362766501289522,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,416|82|
|new Blob (1024)|459|67|
|text (128)|22,973|79|
|text (1024)|7,283|75|
|arrayBuffer (128)|27,032|81|
|arrayBuffer (1024)|8,394|84|
|slice (0, 64)|44,844|75|
|slice (0, 512)|12,499|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:05:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Blob (128)","opsSec":3415.6080947284972,"samples":3},{"name":"new Blob (1024)","opsSec":458.7084361580161,"samples":2},{"name":"text (128)","opsSec":22972.739215914564,"samples":4},{"name":"text (1024)","opsSec":7283.365465726515,"samples":4},{"name":"arrayBuffer (128)","opsSec":27032.219465935486,"samples":4},{"name":"arrayBuffer (1024)","opsSec":8394.302490946426,"samples":5},{"name":"slice (0, 64)","opsSec":44843.68988662642,"samples":3},{"name":"slice (0, 512)","opsSec":12499.250639698172,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|157,415|54|
|[True conditional] Using constructor name|122,201|94|
|[True conditional] Check if property is valid then instanceof |123,472|90|
|[False conditional] Using instanceof only|607,817,330|96|
|[False conditional] Using constructor name|604,801,890|93|
|[False conditional] Check if property is valid then instanceof |600,594,008|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:06:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":157414.53398782967,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":122201.42216516972,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":123471.66497511741,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":607817330.3823866,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":604801890.1276802,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":600594008.2387089,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|1,523|95|
|crypto.verify('RSA-SHA256')|1,513|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:08:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":1523.284844288015,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":1513.1686322254668,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,680,804|93|
|fromUnixToISOString(new Date())|1,401,678|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:10:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1680803.823856562,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1401678.103160063,"samples":7}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,753|80|
|Intl.DateTimeFormat().format(new Date())|8,963|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|10,179|72|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|11,490|79|
|Reusing Intl.DateTimeFormat()|444,556|95|
|Date.toLocaleDateString()|457,788|92|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,040|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:12:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":8752.870615708815,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8962.8530455856,"samples":6},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":10179.455150006866,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":11490.120458780231,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":444555.79025617003,"samples":8},{"name":"Date.toLocaleDateString()","opsSec":457788.14293428627,"samples":3},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":10039.511652707184,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|566,512|91|
|Using brackets {}|587,951|93|
|Using '' + |598,158|90|
|Using date.toString()|650,767|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:14:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":566512.431218513,"samples":3},{"name":"Using brackets {}","opsSec":587951.4427206039,"samples":3},{"name":"Using '' + ","opsSec":598158.4780795189,"samples":8},{"name":"Using date.toString()","opsSec":650766.9478598768,"samples":4}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,454,567|98|
|Using delete property (proto: null)|16,109,292|95|
|Using delete property (cached proto: null)|2,482,677|97|
|Using undefined assignment|590,045,262|96|
|Using undefined assignment (proto: null)|18,458,565|96|
|Using undefined property (cached proto: null)|595,658,371|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:18:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2454567.1008273573,"samples":5},{"name":"Using delete property (proto: null)","opsSec":16109291.71466746,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":2482676.785765849,"samples":5},{"name":"Using undefined assignment","opsSec":590045261.8655419,"samples":10},{"name":"Using undefined assignment (proto: null)","opsSec":18458565.21209397,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":595658370.73484,"samples":9}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|142,278|56|
|NodeError|111,585|87|
|NodeError Range|112,739|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:21:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Error","opsSec":142277.82152164035,"samples":3},{"name":"NodeError","opsSec":111584.54824712452,"samples":3},{"name":"NodeError Range","opsSec":112739.19236411997,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,177,749|89|
|Function returning explicitly undefined|1,192,112|96|
|Function returning implicitly undefined|1,218,581|92|
|Function returning string|1,189,210|88|
|Function returning integer|1,215,946|91|
|Function returning float|1,213,825|96|
|Function returning functions|1,174,891|96|
|Function returning arrow functions|1,190,292|94|
|Function returning empty object|1,208,310|94|
|Function returning empty array|1,200,960|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:25:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1177749.3473721924,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1192112.1467205093,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1218580.9784771744,"samples":7},{"name":"Function returning string","opsSec":1189210.1225361251,"samples":7},{"name":"Function returning integer","opsSec":1215946.065325619,"samples":6},{"name":"Function returning float","opsSec":1213824.6070311859,"samples":7},{"name":"Function returning functions","opsSec":1174891.2978114912,"samples":7},{"name":"Function returning arrow functions","opsSec":1190291.7823264776,"samples":7},{"name":"Function returning empty object","opsSec":1208310.1635007684,"samples":7},{"name":"Function returning empty array","opsSec":1200960.0513582735,"samples":6}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|56,489,675|85|
|using Array.includes (first item)|113,705,508|87|
|Using raw comparison|726,104,746|85|
|Using raw comparison (first item)|706,962,608|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:26:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"using Array.includes","opsSec":56489674.97587588,"samples":6},{"name":"using Array.includes (first item)","opsSec":113705508.31250069,"samples":6},{"name":"Using raw comparison","opsSec":726104745.7466456,"samples":7},{"name":"Using raw comparison (first item)","opsSec":706962607.5531682,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|65,337,463|92|
|Using Object.getOwnPropertyNames()|66,488,846|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:29:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using Object.keys()","opsSec":65337463.32487164,"samples":8},{"name":"Using Object.getOwnPropertyNames()","opsSec":66488845.6618023,"samples":7}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|13,878,412|85|
|Length = 10_000 - Array.at|13,216,728|83|
|Length = 1_000_000 - Array.at|13,862,497|86|
|Length = 100 - Array[length - 1]|661,712,702|86|
|Length = 10_000 - Array[length - 1]|662,625,246|85|
|Length = 1_000_000 - Array[length - 1]|677,680,896|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:32:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":13878411.592515342,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":13216727.96320488,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":13862497.14481723,"samples":4},{"name":"Length = 100 - Array[length - 1]","opsSec":661712701.7902043,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":662625245.9634544,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":677680896.1449544,"samples":7}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|48,763,864|94|
|Object.create({})|1,234,441|73|
|Cached Empty.prototype|710,589,208|95|
|Empty.prototype|1,274,701|75|
|Empty class|853,073|78|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:37:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":48763864.32991876,"samples":8},{"name":"Object.create({})","opsSec":1234440.714362215,"samples":3},{"name":"Cached Empty.prototype","opsSec":710589207.908823,"samples":9},{"name":"Empty.prototype","opsSec":1274700.6217724495,"samples":3},{"name":"Empty class","opsSec":853072.6806391301,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|593,062,127|97|
|Using optional chain (obj.field?.field2) (undefined)|591,807,560|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|593,594,973|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|592,016,650|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:01:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":593062126.9630762,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":591807560.073124,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":593594973.0214051,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":592016650.3377469,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|144,902,501|91|
|Using parseInt(x, 10) - big number (10 len)|11,245,801|90|
|Using + - small number (2 len)|694,353,652|91|
|Using + - big number (10 len)|695,488,602|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:05:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":144902501.08898026,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":11245800.548568252,"samples":7},{"name":"Using + - small number (2 len)","opsSec":694353651.8041191,"samples":6},{"name":"Using + - big number (10 len)","opsSec":695488601.7192608,"samples":9}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|728,349|75|
|Using ? operator to avoid rejection|804,233|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:08:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using if to check function existence","opsSec":728349.2912953077,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":804232.6201470883,"samples":4}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|143,601,587|81|
|Raw usage underscore usage|152,451,777|80|
|Manipulating private properties using #|100,368,969|81|
|Manipulating private properties using underscore(_)|83,337,597|73|
|Manipulating private properties using Symbol|74,203,861|80|
|Manipulating private properties using PrivateSymbol|30,534,898|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:10:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Raw usage private field","opsSec":143601587.0970657,"samples":7},{"name":"Raw usage underscore usage","opsSec":152451776.97363168,"samples":8},{"name":"Manipulating private properties using #","opsSec":100368969.28946424,"samples":6},{"name":"Manipulating private properties using underscore(_)","opsSec":83337596.77733003,"samples":9},{"name":"Manipulating private properties using Symbol","opsSec":74203860.99661043,"samples":6},{"name":"Manipulating private properties using PrivateSymbol","opsSec":30534897.970669147,"samples":8}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,165,988|92|
|Adding property in the object creation - small object|2,200,992|91|
|Adding property after the function creation - small class|152,164|82|
|Adding property in the function creation - small class|151,932|79|
|Adding property after the class creation - small class|124,872|76|
|Adding property in the class creation - small class|122,326|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:14:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2165987.551654135,"samples":7},{"name":"Adding property in the object creation - small object","opsSec":2200992.499062429,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":152164.463497077,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":151932.1376936089,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":124871.68946868523,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":122326.23295872043,"samples":4}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|588,822,031|95|
|Getter|69,572,837|98|
|Method|592,203,473|98|
|DefineProperty (getter)|591,414,815|99|
|DefineProperty (getter & enumerable=false)|69,492,275|94|
|DefineProperty (getter & configurable=false)|592,499,883|97|
|DefineProperty (getter & enumerable=false & configurable=false)|69,592,971|96|
|DefineProperty (writable)|592,023,052|96|
|DefineProperty (writable & enumerable=false)|592,343,673|98|
|DefineProperty (writable & enumerable=false & configurable=false)|402,462,079|68|
|DefineProperties (getter)|43,852,654|88|
|DefineProperties (getter & enumerable=false)|69,658,683|96|
|DefineProperties (getter & enumerable=false & configurable=false)|69,288,757|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:18:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Getter (class)","opsSec":588822031.0591865,"samples":7},{"name":"Getter","opsSec":69572837.11167715,"samples":5},{"name":"Method","opsSec":592203473.3983008,"samples":7},{"name":"DefineProperty (getter)","opsSec":591414815.4561051,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":69492274.91954108,"samples":7},{"name":"DefineProperty (getter & configurable=false)","opsSec":592499883.0921907,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":69592970.95459181,"samples":6},{"name":"DefineProperty (writable)","opsSec":592023051.8691404,"samples":9},{"name":"DefineProperty (writable & enumerable=false)","opsSec":592343673.2539847,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":402462078.9194462,"samples":7},{"name":"DefineProperties (getter)","opsSec":43852653.73127805,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":69658682.6529101,"samples":7},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":69288756.82680985,"samples":7}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|390,533,523|91|
|Setter|5,768,998|96|
|Method|395,026,457|93|
|DefineProperty (setter)|394,659,996|96|
|DefineProperty (setter & enumerable=false)|5,717,732|97|
|DefineProperty (setter & configurable=false)|5,853,775|96|
|DefineProperty (setter & enumerable=false & configurable=false)|5,594,354|96|
|DefineProperty (writable)|586,293,349|95|
|DefineProperty (writable & enumerable=false)|421,769,677|72|
|DefineProperty (writable & enumerable=false & configurable=false)|72,128,041|84|
|DefineProperties (setter)|58,046,291|83|
|DefineProperties (setter & enumerable=false)|5,733,861|98|
|DefineProperties (setter & enumerable=false & configurable=false)|5,667,609|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:22:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Setter (class)","opsSec":390533522.7514041,"samples":6},{"name":"Setter","opsSec":5768998.300443538,"samples":6},{"name":"Method","opsSec":395026456.7027329,"samples":6},{"name":"DefineProperty (setter)","opsSec":394659996.16506386,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5717732.476603195,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":5853775.181614168,"samples":7},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5594353.624380901,"samples":5},{"name":"DefineProperty (writable)","opsSec":586293348.5218532,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":421769676.76187325,"samples":10},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":72128040.99285018,"samples":4},{"name":"DefineProperties (setter)","opsSec":58046291.427935265,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5733861.178657872,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5667608.816691364,"samples":7}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,082,682|94|
|Using replaceAll()|1,961,099|94|
|Using replaceAll(//g)|1,865,465|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:25:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":2082681.8414614145,"samples":6},{"name":"Using replaceAll()","opsSec":1961098.9827011237,"samples":6},{"name":"Using replaceAll(//g)","opsSec":1865464.8542050829,"samples":7}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|14,977,852|94|
|{ ...object, __proto__: null }|15,118,587|97|
|{ ...object, newProp: true }|496,016|78|
|structuredClone|175,870|97|
|JSON.parse + JSON.stringify|145,264|93|
|loop + object.keys starting with {}|313,024|95|
|loop + object.keys starting with { __proto__: null }|417,173|94|
|loop + object.keys starting with { randomProp: true }|324,377|93|
|object.keys + reduce(FN, {})|313,574|97|
|object.keys + reduce(FN, { __proto__: null })|414,595|97|
|object.keys + reduce(FN, { newProp: true })|326,604|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:31:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{ ...object }","opsSec":14977851.631632948,"samples":7},{"name":"{ ...object, __proto__: null }","opsSec":15118586.596375715,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":496016.46807451546,"samples":3},{"name":"structuredClone","opsSec":175870.43997343665,"samples":7},{"name":"JSON.parse + JSON.stringify","opsSec":145263.79833051283,"samples":7},{"name":"loop + object.keys starting with {}","opsSec":313024.35101550573,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":417172.93356828607,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":324376.7921982533,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":313574.22811528685,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":414594.84172135446,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":326604.4472526295,"samples":5}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|140,062|93|
|Sort using first char|632,997|96|
|Sort using localeCompare|565,413|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:34:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Sort using default","opsSec":140061.73253198495,"samples":4},{"name":"Sort using first char","opsSec":632996.911648846,"samples":5},{"name":"Sort using localeCompare","opsSec":565412.5832995712,"samples":5}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,156|84|
|{...smallObject} - Total keys: 2|62,078,689|83|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,265|88|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,434|86|
|{ ...bigObject, ...anotherBigObject }|751|81|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,546,960|85|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|20,910,077|88|
|{ ...smallObject, ...anotherSmallObject }|14,797,112|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:40:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1155.9877695495672,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":62078689.13469192,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1265.4071605488996,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3434.1086537724336,"samples":2},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":751.2581196065161,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8546960.268918786,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":20910076.52768359,"samples":4},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":14797112.113156961,"samples":5}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,287|83|
|streams.web.Readable reading 1e3 * "some data"|333|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:42:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1287.4134590891472,"samples":5},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":332.9925628804069,"samples":3}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|2,382|91|
|streams.web.WritableStream writing 1e3 * "some data"|652|63|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:50:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":2381.8962904981045,"samples":4},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":651.813294705522,"samples":4}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|693,838,082|91|
|Using backtick (`)|712,099,935|94|
|Using array.join|6,661,715|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:57:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using + sign","opsSec":693838082.0357931,"samples":5},{"name":"Using backtick (`)","opsSec":712099935.3752763,"samples":7},{"name":"Using array.join","opsSec":6661714.738760623,"samples":6}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|11,900,019|96|
|Using indexof|592,631,588|97|
|Using RegExp.test|11,309,916|96|
|Using RegExp.text with cached regex pattern|11,777,728|97|
|Using new RegExp.test|3,155,325|99|
|Using new RegExp.test with cached regex pattern|3,586,758|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:00:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using includes","opsSec":11900019.070812237,"samples":6},{"name":"Using indexof","opsSec":592631587.7659571,"samples":8},{"name":"Using RegExp.test","opsSec":11309915.776672825,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":11777727.796333084,"samples":6},{"name":"Using new RegExp.test","opsSec":3155325.212456421,"samples":7},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3586758.0201488645,"samples":5}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|19,844,260|95|
|Using this|111,711,273|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:06:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using super","opsSec":19844259.906987622,"samples":6},{"name":"Using this","opsSec":111711272.63208841,"samples":7}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,739,795|97|
|Date.now()|15,227,450|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:16:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":7739795.4510508785,"samples":6},{"name":"Date.now()","opsSec":15227450.136804735,"samples":6}]}-->
