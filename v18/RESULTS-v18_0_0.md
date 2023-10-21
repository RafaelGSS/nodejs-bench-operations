## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|587,875,627|92|
|Using dot notation|597,973,412|100|
|Using define property (writable)|3,329,799|96|
|Using define property initialized (writable)|4,168,302|97|
|Using define property (getter)|1,612,933|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:27:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":587875627.0985748,"samples":6},{"name":"Using dot notation","opsSec":597973412.2828697,"samples":8},{"name":"Using define property (writable)","opsSec":3329799.358569805,"samples":6},{"name":"Using define property initialized (writable)","opsSec":4168302.1487322734,"samples":7},{"name":"Using define property (getter)","opsSec":1612933.3660592858,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.002ms
array.push|100|0.026ms
new Array(length)|100|0.013ms
array.push|1,000|0.057ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.464ms
new Array(length)|10,000|0.251ms
array.push|1,000,000|32.038ms
new Array(length)|1,000,000|10.03ms
array.push|100,000,000|1,972.474ms
new Array(length)|100,000,000|4,812.772ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.02ms
array.push|100|0.016ms
new Array(length)|100|0.012ms
array.push|1,000|0.064ms
new Array(length)|1,000|0.037ms
array.push|10,000|0.65ms
new Array(length)|10,000|4.297ms
array.push|1,000,000|204.082ms
new Array(length)|1,000,000|7.125ms
array.push|100,000,000|2,508.129ms
new Array(length)|100,000,000|5,417.517ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|359|83|
|Array.from|15|41|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:30:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":359.0019659685542,"samples":4},{"name":"Array.from","opsSec":14.826674547225,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,293|90|
|new Blob (1024)|416|73|
|text (128)|24,046|75|
|text (1024)|10,878|85|
|arrayBuffer (128)|26,689|84|
|arrayBuffer (1024)|11,983|88|
|slice (0, 64)|54,715|84|
|slice (0, 512)|15,991|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:32:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":3292.859719928048,"samples":6},{"name":"new Blob (1024)","opsSec":416.0905447000114,"samples":2},{"name":"text (128)","opsSec":24045.569646284242,"samples":5},{"name":"text (1024)","opsSec":10878.014706198635,"samples":4},{"name":"arrayBuffer (128)","opsSec":26689.15471519903,"samples":3},{"name":"arrayBuffer (1024)","opsSec":11983.366258947482,"samples":4},{"name":"slice (0, 64)","opsSec":54714.79296732744,"samples":3},{"name":"slice (0, 512)","opsSec":15991.215520317302,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|169,480|53|
|[True conditional] Using constructor name|130,263|95|
|[True conditional] Check if property is valid then instanceof |131,390|93|
|[False conditional] Using instanceof only|593,986,919|98|
|[False conditional] Using constructor name|593,120,036|95|
|[False conditional] Check if property is valid then instanceof |592,096,476|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:34:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":169480.2606815362,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":130263.39544590334,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":131389.63834237112,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":593986919.4425759,"samples":8},{"name":"[False conditional] Using constructor name","opsSec":593120035.6066624,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":592096476.2905276,"samples":8}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|1,220|93|
|crypto.verify('RSA-SHA256')|1,267|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:36:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":1219.9349176395365,"samples":2},{"name":"crypto.verify('RSA-SHA256')","opsSec":1266.771246426415,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,418,794|80|
|fromUnixToISOString(new Date())|1,175,577|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:38:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1418793.5923473518,"samples":6},{"name":"fromUnixToISOString(new Date())","opsSec":1175577.4846759457,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,831|83|
|Intl.DateTimeFormat().format(new Date())|8,464|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|7,425|72|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,674|94|
|Reusing Intl.DateTimeFormat()|361,455|76|
|Date.toLocaleDateString()|492,864|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,915|83|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:40:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":7831.445902061464,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8464.32337676716,"samples":6},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":7425.338509239615,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":10673.581038930437,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":361455.3323692559,"samples":7},{"name":"Date.toLocaleDateString()","opsSec":492863.7306457423,"samples":6},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":9915.184975927123,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|682,957|94|
|Using brackets {}|688,671|97|
|Using '' + |702,678|94|
|Using date.toString()|767,277|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:43:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using String()","opsSec":682956.7024031065,"samples":6},{"name":"Using brackets {}","opsSec":688671.2068254374,"samples":3},{"name":"Using '' + ","opsSec":702677.5330842447,"samples":5},{"name":"Using date.toString()","opsSec":767276.8000764627,"samples":7}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,426,684|95|
|Using delete property (proto: null)|12,673,974|93|
|Using delete property (cached proto: null)|2,429,939|97|
|Using undefined assignment|709,300,362|95|
|Using undefined assignment (proto: null)|14,576,088|95|
|Using undefined property (cached proto: null)|708,003,683|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:46:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2426684.4273038493,"samples":6},{"name":"Using delete property (proto: null)","opsSec":12673973.655338705,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":2429939.2020113706,"samples":6},{"name":"Using undefined assignment","opsSec":709300362.0157505,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":14576088.473956298,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":708003682.8568424,"samples":8}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|144,140|52|
|NodeError|117,575|88|
|NodeError Range|122,430|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:48:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Error","opsSec":144140.4664992417,"samples":4},{"name":"NodeError","opsSec":117575.34050989602,"samples":3},{"name":"NodeError Range","opsSec":122430.4588066133,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,328,410|96|
|Function returning explicitly undefined|1,326,457|93|
|Function returning implicitly undefined|1,261,658|91|
|Function returning string|1,343,957|98|
|Function returning integer|1,350,337|95|
|Function returning float|1,358,559|97|
|Function returning functions|1,316,394|96|
|Function returning arrow functions|1,330,346|95|
|Function returning empty object|1,322,303|94|
|Function returning empty array|1,353,442|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:52:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1328410.4677625643,"samples":9},{"name":"Function returning explicitly undefined","opsSec":1326456.5954911637,"samples":7},{"name":"Function returning implicitly undefined","opsSec":1261657.6245298022,"samples":6},{"name":"Function returning string","opsSec":1343956.7329552846,"samples":5},{"name":"Function returning integer","opsSec":1350336.6061600004,"samples":7},{"name":"Function returning float","opsSec":1358559.0707666345,"samples":7},{"name":"Function returning functions","opsSec":1316393.5538300371,"samples":6},{"name":"Function returning arrow functions","opsSec":1330345.7375685633,"samples":6},{"name":"Function returning empty object","opsSec":1322302.671029584,"samples":8},{"name":"Function returning empty array","opsSec":1353442.1526621168,"samples":8}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|67,251,144|96|
|using Array.includes (first item)|117,545,938|91|
|Using raw comparison|711,292,262|98|
|Using raw comparison (first item)|711,667,007|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:55:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"using Array.includes","opsSec":67251144.22682332,"samples":7},{"name":"using Array.includes (first item)","opsSec":117545937.77538282,"samples":6},{"name":"Using raw comparison","opsSec":711292262.1714602,"samples":10},{"name":"Using raw comparison (first item)","opsSec":711667006.7378162,"samples":9}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|41,317,883|92|
|Using Object.getOwnPropertyNames()|39,937,166|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:58:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using Object.keys()","opsSec":41317883.48771773,"samples":7},{"name":"Using Object.getOwnPropertyNames()","opsSec":39937166.14397547,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,045,109|80|
|Length = 10_000 - Array.at|17,447,791|87|
|Length = 1_000_000 - Array.at|17,148,152|85|
|Length = 100 - Array[length - 1]|822,739,932|82|
|Length = 10_000 - Array[length - 1]|835,624,238|84|
|Length = 1_000_000 - Array[length - 1]|848,090,501|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:01:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":16045108.903407618,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":17447791.369958274,"samples":5},{"name":"Length = 1_000_000 - Array.at","opsSec":17148152.30325275,"samples":4},{"name":"Length = 100 - Array[length - 1]","opsSec":822739932.3563603,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":835624238.1505429,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":848090501.1237621,"samples":6}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|50,105,361|94|
|Object.create({})|1,253,863|79|
|Cached Empty.prototype|713,314,114|97|
|Empty.prototype|1,284,224|74|
|Empty class|888,483|78|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:03:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":50105360.72848693,"samples":5},{"name":"Object.create({})","opsSec":1253862.7897505658,"samples":3},{"name":"Cached Empty.prototype","opsSec":713314114.3808991,"samples":7},{"name":"Empty.prototype","opsSec":1284224.3568498394,"samples":3},{"name":"Empty class","opsSec":888482.6453791185,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|710,178,678|96|
|Using optional chain (obj.field?.field2) (undefined)|712,795,948|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|709,133,173|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|710,540,833|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:05:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":710178677.618671,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":712795947.7547957,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":709133172.7403678,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":710540833.4400622,"samples":7}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|188,582,582|97|
|Using parseInt(x, 10) - big number (10 len)|13,796,156|92|
|Using + - small number (2 len)|708,687,667|98|
|Using + - big number (10 len)|705,885,711|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:07:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":188582582.1813218,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":13796155.560931252,"samples":5},{"name":"Using + - small number (2 len)","opsSec":708687666.722873,"samples":7},{"name":"Using + - big number (10 len)","opsSec":705885710.6736047,"samples":7}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|703,705|75|
|Using ? operator to avoid rejection|784,349|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:10:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":703704.7067990209,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":784348.6349790059,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|187,191,062|79|
|Raw usage underscore usage|161,520,519|83|
|Manipulating private properties using #|109,485,717|85|
|Manipulating private properties using underscore(_)|112,321,613|89|
|Manipulating private properties using Symbol|114,904,778|88|
|Manipulating private properties using PrivateSymbol|27,266,997|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:15:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Raw usage private field","opsSec":187191062.47787407,"samples":5},{"name":"Raw usage underscore usage","opsSec":161520518.50296986,"samples":6},{"name":"Manipulating private properties using #","opsSec":109485717.34410878,"samples":7},{"name":"Manipulating private properties using underscore(_)","opsSec":112321612.56465062,"samples":8},{"name":"Manipulating private properties using Symbol","opsSec":114904777.86385614,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":27266996.631110735,"samples":9}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,116,813|96|
|Adding property in the object creation - small object|2,014,100|90|
|Adding property after the function creation - small class|145,379|81|
|Adding property in the function creation - small class|142,001|82|
|Adding property after the class creation - small class|115,222|75|
|Adding property in the class creation - small class|112,675|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:17:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2116813.2555152,"samples":7},{"name":"Adding property in the object creation - small object","opsSec":2014100.3948322255,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":145378.71647755394,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":142001.45709402653,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":115221.50611513878,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":112674.51848881238,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|712,602,775|98|
|Getter|58,182,048|96|
|Method|710,581,400|97|
|DefineProperty (getter)|707,698,014|99|
|DefineProperty (getter & enumerable=false)|58,269,244|96|
|DefineProperty (getter & configurable=false)|711,974,444|97|
|DefineProperty (getter & enumerable=false & configurable=false)|58,299,568|97|
|DefineProperty (writable)|670,196,512|95|
|DefineProperty (writable & enumerable=false)|89,719,768|87|
|DefineProperty (writable & enumerable=false & configurable=false)|89,779,470|86|
|DefineProperties (getter)|35,971,399|86|
|DefineProperties (getter & enumerable=false)|58,076,682|96|
|DefineProperties (getter & enumerable=false & configurable=false)|55,902,306|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:21:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":712602775.3690449,"samples":10},{"name":"Getter","opsSec":58182048.21085734,"samples":6},{"name":"Method","opsSec":710581400.0670455,"samples":7},{"name":"DefineProperty (getter)","opsSec":707698014.3866959,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":58269244.11871758,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":711974444.3163246,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":58299568.24213313,"samples":6},{"name":"DefineProperty (writable)","opsSec":670196511.5836,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":89719768.14834878,"samples":5},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":89779469.73952636,"samples":5},{"name":"DefineProperties (getter)","opsSec":35971399.054644056,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":58076681.602407776,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":55902305.8354464,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|477,620,103|98|
|Setter|7,202,045|94|
|Method|477,447,590|95|
|DefineProperty (setter)|476,396,863|97|
|DefineProperty (setter & enumerable=false)|7,175,160|91|
|DefineProperty (setter & configurable=false)|7,210,173|94|
|DefineProperty (setter & enumerable=false & configurable=false)|6,975,662|96|
|DefineProperty (writable)|711,747,074|93|
|DefineProperty (writable & enumerable=false)|477,363,791|66|
|DefineProperty (writable & enumerable=false & configurable=false)|86,806,236|79|
|DefineProperties (setter)|68,927,442|83|
|DefineProperties (setter & enumerable=false)|7,245,965|95|
|DefineProperties (setter & enumerable=false & configurable=false)|7,194,301|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:27:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":477620102.90645236,"samples":6},{"name":"Setter","opsSec":7202045.013227475,"samples":5},{"name":"Method","opsSec":477447590.1849844,"samples":7},{"name":"DefineProperty (setter)","opsSec":476396862.8733079,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":7175160.450809124,"samples":4},{"name":"DefineProperty (setter & configurable=false)","opsSec":7210172.771196721,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6975661.612546631,"samples":5},{"name":"DefineProperty (writable)","opsSec":711747073.7659411,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":477363790.87079173,"samples":8},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":86806235.8102737,"samples":6},{"name":"DefineProperties (setter)","opsSec":68927442.3907632,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":7245964.5485527795,"samples":7},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":7194301.267405498,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,071,495|94|
|Using replaceAll()|1,948,662|94|
|Using replaceAll(//g)|1,859,386|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:30:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":2071495.3557671213,"samples":5},{"name":"Using replaceAll()","opsSec":1948662.2747307487,"samples":6},{"name":"Using replaceAll(//g)","opsSec":1859386.3303781205,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|14,805,773|90|
|{ ...object, __proto__: null }|15,323,391|99|
|{ ...object, newProp: true }|494,080|77|
|structuredClone|175,661|96|
|JSON.parse + JSON.stringify|143,975|95|
|loop + object.keys starting with {}|658,851|97|
|loop + object.keys starting with { __proto__: null }|416,865|96|
|loop + object.keys starting with { randomProp: true }|328,397|98|
|object.keys + reduce(FN, {})|322,452|97|
|object.keys + reduce(FN, { __proto__: null })|416,524|92|
|object.keys + reduce(FN, { newProp: true })|332,373|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:32:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":14805772.88702505,"samples":4},{"name":"{ ...object, __proto__: null }","opsSec":15323390.525096383,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":494079.508969354,"samples":3},{"name":"structuredClone","opsSec":175661.37614081294,"samples":8},{"name":"JSON.parse + JSON.stringify","opsSec":143975.09777117986,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":658850.6066054046,"samples":6},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":416865.0879822274,"samples":6},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":328397.3287534863,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":322452.46810754295,"samples":7},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":416523.7158293562,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":332373.2346594031,"samples":5}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|172,270|97|
|Sort using first char|787,930|96|
|Sort using localeCompare|710,955|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:38:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Sort using default","opsSec":172269.61912464455,"samples":5},{"name":"Sort using first char","opsSec":787930.2705459301,"samples":7},{"name":"Sort using localeCompare","opsSec":710954.842579918,"samples":6}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,393|90|
|{...smallObject} - Total keys: 2|74,505,589|98|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,595|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,650|97|
|{ ...bigObject, ...anotherBigObject }|828|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,812,475|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|24,969,874|97|
|{ ...smallObject, ...anotherSmallObject }|16,944,572|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:45:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1392.800580997692,"samples":5},{"name":"{...smallObject} - Total keys: 2","opsSec":74505588.56276776,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1595.0380721579318,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":4650.2850387790795,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":828.1553450974739,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":9812475.29230169,"samples":7},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":24969873.672278747,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":16944572.440988865,"samples":5}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,212|84|
|streams.web.Readable reading 1e3 * "some data"|326|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:47:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1211.683094265881,"samples":4},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":326.3496880154629,"samples":8}]}-->

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
|new Date().getTime()|7,517,178|96|
|Date.now()|15,466,867|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 10 2023 22:04:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":"[{\"timeStamp\":1696975487793,\"currentTarget\":{\"0\":{\"name\":\"new Date().getTime()\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":1,\"stats\":{\"moe\":1.344182925335139e-9,\"rme\":1.0104461885312952,\"sem\":6.858076149669077e-10,\"deviation\":6.719514873536141e-9,\"mean\":1.3302865017373535e-7,\"sample\":[1.3172006053252972e-7,1.3807107875751764e-7,1.3298342661083061e-7,1.30151002206432e-7,1.2953071286119654e-7,1.290380768555887e-7,1.3077549982969147e-7,1.2977583012499612e-7,1.395015740635612e-7,1.3291573082997018e-7,1.3056028921482613e-7,1.3009167759049575e-7,1.319632830321109e-7,1.3199347408730118e-7,1.30443651104941e-7,1.2978099098913123e-7,1.3053164641887638e-7,1.2957429580008877e-7,1.3057551376402464e-7,1.3006252128856456e-7,1.2948191633207065e-7,1.3136900436609106e-7,1.3028392235995995e-7,1.3019928418814445e-7,1.3164795423345685e-7,1.3041655914866385e-7,1.2925741616176212e-7,1.311592152389996e-7,1.3107612016556052e-7,1.3058970614039613e-7,1.290499468430994e-7,1.304862282340555e-7,1.303063721189476e-7,1.302160569965835e-7,1.2948578698017196e-7,1.3036159336519309e-7,1.314809976982546e-7,1.3081472239711818e-7,1.3313868274103818e-7,1.3361039088384958e-7,1.3372134688232198e-7,1.3123507994178546e-7,1.3077085505196992e-7,1.3101857911088633e-7,1.3007026000433513e-7,1.3016109121311273e-7,1.3025347326156292e-7,1.3012754559623465e-7,1.299977498632371e-7,1.3153879679613553e-7,1.3051771208571163e-7,1.2991311169142163e-7,1.3075201789787683e-7,1.3622878110710858e-7,1.5436113404828503e-7,1.8677786866632948e-7,1.3205385619768172e-7,1.3235215930555413e-7,1.3278593509697263e-7,1.3172510915227645e-7,1.3182058513877563e-7,1.3228145546690338e-7,1.3117056914009682e-7,1.3779124562616763e-7,1.3195167108780694e-7,1.3219655667144906e-7,1.3154215135782334e-7,1.3115818048574053e-7,1.445824912523353e-7,1.3377528049296574e-7,1.3132926571225085e-7,1.3217746147414923e-7,1.3231293673812744e-7,1.3240428403331854e-7,1.3371334754291259e-7,1.345292904843987e-7,1.335912931061177e-7,1.3196870193945275e-7,1.3336111856569262e-7,1.309881300124893e-7,1.336638032472157e-7,1.3381037436908435e-7,1.376276436526532e-7,1.3553541126926292e-7,1.3367490168553822e-7,1.3193283393371388e-7,1.3319674246255793e-7,1.3386430539929605e-7,1.3247989069289762e-7,1.3277199818337582e-7,1.332514476223899e-7,1.5080397489755684e-7,1.342565362344271e-7,1.3379050504216426e-7,1.3205643921018136e-7,1.3255291692040916e-7],\"variance\":4.5151880135673424e-17},\"times\":{\"cycle\":0.051552858859128005,\"elapsed\":5.616,\"period\":1.3302865017373535e-7,\"timeStamp\":1696975482177},\"running\":false,\"count\":387532,\"cycles\":7,\"hz\":7517177.680852964},\"1\":{\"name\":\"Date.now()\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":2,\"stats\":{\"moe\":8.742029493176554e-11,\"rme\":0.1352118038142606,\"sem\":4.460219129171711e-11,\"deviation\":4.301279559923211e-10,\"mean\":6.465433672629213e-8,\"sample\":[6.476072877622782e-8,6.455090356402231e-8,6.48459973981478e-8,6.454562257686412e-8,6.514315339335625e-8,6.46311500959594e-8,6.618514912403518e-8,6.503698766008717e-8,6.4895969800126e-8,6.462124795179518e-8,6.491277887343282e-8,6.435550805103286e-8,6.457697849850066e-8,6.477933151213654e-8,6.425016135427239e-8,6.484489972938675e-8,6.416784565421298e-8,6.46263881920751e-8,6.489392576548648e-8,6.459315498607157e-8,6.478049531591434e-8,6.440799598635258e-8,6.453451569980278e-8,6.456223014059314e-8,6.426466719959555e-8,6.460495983144734e-8,6.452822705336945e-8,6.476933203822203e-8,6.487416548083573e-8,6.440838092696265e-8,6.464858643392302e-8,6.433716691409793e-8,6.480551645556951e-8,6.514336984708876e-8,6.500119716529734e-8,6.495808381696844e-8,6.460791104279128e-8,6.493254814003113e-8,6.489636243954828e-8,6.435577237691844e-8,6.485850994622379e-8,6.575042760486103e-8,6.583460256806713e-8,6.651082388838775e-8,6.453079332410331e-8,6.478999051762963e-8,6.455619940436856e-8,6.475034163479144e-8,6.460906586462151e-8,6.416984349597929e-8,6.446111907367891e-8,6.442670799166657e-8,6.446968487977094e-8,6.457425413627582e-8,6.432821723882263e-8,6.465442823314511e-8,6.459926933704138e-8,6.419147320432138e-8,6.45987562310311e-8,6.426625968808285e-8,6.457720577859988e-8,6.473101058794252e-8,6.422328577695794e-8,6.46432681774218e-8,6.462454109081207e-8,6.503297732327987e-8,6.499770000230898e-8,6.44632936787905e-8,6.493240726250247e-8,6.44085208949595e-8,6.43124392290069e-8,6.451935179317723e-8,6.467033580222842e-8,6.601994827891416e-8,6.444905626977061e-8,6.43655469838346e-8,6.506710015572767e-8,6.449246050053739e-8,6.44798084038038e-8,6.422446225393908e-8,6.443137132114727e-8,6.392758144308027e-8,6.457770240479297e-8,6.442843194513846e-8,6.446243797910742e-8,6.416830525120852e-8,6.431129067231286e-8,6.422021912985804e-8,6.384177625285392e-8,6.428922335174295e-8,6.435006568793766e-8,6.447251438119412e-8,6.456753995484752e-8],\"variance\":1.8501005852613211e-19},\"times\":{\"cycle\":0.05068964653678029,\"elapsed\":5.389,\"period\":6.465433672629213e-8,\"timeStamp\":1696975487807},\"running\":false,\"count\":784010,\"cycles\":6,\"hz\":15466866.580557514},\"options\":{},\"events\":{\"start\":[null],\"cycle\":[null,null],\"complete\":[null,null]},\"length\":2,\"running\":false},\"type\":\"cycle\",\"target\":{\"name\":\"new Date().getTime()\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":1,\"stats\":{\"moe\":1.344182925335139e-9,\"rme\":1.0104461885312952,\"sem\":6.858076149669077e-10,\"deviation\":6.719514873536141e-9,\"mean\":1.3302865017373535e-7,\"sample\":[1.3172006053252972e-7,1.3807107875751764e-7,1.3298342661083061e-7,1.30151002206432e-7,1.2953071286119654e-7,1.290380768555887e-7,1.3077549982969147e-7,1.2977583012499612e-7,1.395015740635612e-7,1.3291573082997018e-7,1.3056028921482613e-7,1.3009167759049575e-7,1.319632830321109e-7,1.3199347408730118e-7,1.30443651104941e-7,1.2978099098913123e-7,1.3053164641887638e-7,1.2957429580008877e-7,1.3057551376402464e-7,1.3006252128856456e-7,1.2948191633207065e-7,1.3136900436609106e-7,1.3028392235995995e-7,1.3019928418814445e-7,1.3164795423345685e-7,1.3041655914866385e-7,1.2925741616176212e-7,1.311592152389996e-7,1.3107612016556052e-7,1.3058970614039613e-7,1.290499468430994e-7,1.304862282340555e-7,1.303063721189476e-7,1.302160569965835e-7,1.2948578698017196e-7,1.3036159336519309e-7,1.314809976982546e-7,1.3081472239711818e-7,1.3313868274103818e-7,1.3361039088384958e-7,1.3372134688232198e-7,1.3123507994178546e-7,1.3077085505196992e-7,1.3101857911088633e-7,1.3007026000433513e-7,1.3016109121311273e-7,1.3025347326156292e-7,1.3012754559623465e-7,1.299977498632371e-7,1.3153879679613553e-7,1.3051771208571163e-7,1.2991311169142163e-7,1.3075201789787683e-7,1.3622878110710858e-7,1.5436113404828503e-7,1.8677786866632948e-7,1.3205385619768172e-7,1.3235215930555413e-7,1.3278593509697263e-7,1.3172510915227645e-7,1.3182058513877563e-7,1.3228145546690338e-7,1.3117056914009682e-7,1.3779124562616763e-7,1.3195167108780694e-7,1.3219655667144906e-7,1.3154215135782334e-7,1.3115818048574053e-7,1.445824912523353e-7,1.3377528049296574e-7,1.3132926571225085e-7,1.3217746147414923e-7,1.3231293673812744e-7,1.3240428403331854e-7,1.3371334754291259e-7,1.345292904843987e-7,1.335912931061177e-7,1.3196870193945275e-7,1.3336111856569262e-7,1.309881300124893e-7,1.336638032472157e-7,1.3381037436908435e-7,1.376276436526532e-7,1.3553541126926292e-7,1.3367490168553822e-7,1.3193283393371388e-7,1.3319674246255793e-7,1.3386430539929605e-7,1.3247989069289762e-7,1.3277199818337582e-7,1.332514476223899e-7,1.5080397489755684e-7,1.342565362344271e-7,1.3379050504216426e-7,1.3205643921018136e-7,1.3255291692040916e-7],\"variance\":4.5151880135673424e-17},\"times\":{\"cycle\":0.051552858859128005,\"elapsed\":5.616,\"period\":1.3302865017373535e-7,\"timeStamp\":1696975482177},\"running\":false,\"count\":387532,\"cycles\":7,\"hz\":7517177.680852964},\"aborted\":false},{\"timeStamp\":1696975493196,\"currentTarget\":{\"0\":{\"name\":\"new Date().getTime()\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":1,\"stats\":{\"moe\":1.344182925335139e-9,\"rme\":1.0104461885312952,\"sem\":6.858076149669077e-10,\"deviation\":6.719514873536141e-9,\"mean\":1.3302865017373535e-7,\"sample\":[1.3172006053252972e-7,1.3807107875751764e-7,1.3298342661083061e-7,1.30151002206432e-7,1.2953071286119654e-7,1.290380768555887e-7,1.3077549982969147e-7,1.2977583012499612e-7,1.395015740635612e-7,1.3291573082997018e-7,1.3056028921482613e-7,1.3009167759049575e-7,1.319632830321109e-7,1.3199347408730118e-7,1.30443651104941e-7,1.2978099098913123e-7,1.3053164641887638e-7,1.2957429580008877e-7,1.3057551376402464e-7,1.3006252128856456e-7,1.2948191633207065e-7,1.3136900436609106e-7,1.3028392235995995e-7,1.3019928418814445e-7,1.3164795423345685e-7,1.3041655914866385e-7,1.2925741616176212e-7,1.311592152389996e-7,1.3107612016556052e-7,1.3058970614039613e-7,1.290499468430994e-7,1.304862282340555e-7,1.303063721189476e-7,1.302160569965835e-7,1.2948578698017196e-7,1.3036159336519309e-7,1.314809976982546e-7,1.3081472239711818e-7,1.3313868274103818e-7,1.3361039088384958e-7,1.3372134688232198e-7,1.3123507994178546e-7,1.3077085505196992e-7,1.3101857911088633e-7,1.3007026000433513e-7,1.3016109121311273e-7,1.3025347326156292e-7,1.3012754559623465e-7,1.299977498632371e-7,1.3153879679613553e-7,1.3051771208571163e-7,1.2991311169142163e-7,1.3075201789787683e-7,1.3622878110710858e-7,1.5436113404828503e-7,1.8677786866632948e-7,1.3205385619768172e-7,1.3235215930555413e-7,1.3278593509697263e-7,1.3172510915227645e-7,1.3182058513877563e-7,1.3228145546690338e-7,1.3117056914009682e-7,1.3779124562616763e-7,1.3195167108780694e-7,1.3219655667144906e-7,1.3154215135782334e-7,1.3115818048574053e-7,1.445824912523353e-7,1.3377528049296574e-7,1.3132926571225085e-7,1.3217746147414923e-7,1.3231293673812744e-7,1.3240428403331854e-7,1.3371334754291259e-7,1.345292904843987e-7,1.335912931061177e-7,1.3196870193945275e-7,1.3336111856569262e-7,1.309881300124893e-7,1.336638032472157e-7,1.3381037436908435e-7,1.376276436526532e-7,1.3553541126926292e-7,1.3367490168553822e-7,1.3193283393371388e-7,1.3319674246255793e-7,1.3386430539929605e-7,1.3247989069289762e-7,1.3277199818337582e-7,1.332514476223899e-7,1.5080397489755684e-7,1.342565362344271e-7,1.3379050504216426e-7,1.3205643921018136e-7,1.3255291692040916e-7],\"variance\":4.5151880135673424e-17},\"times\":{\"cycle\":0.051552858859128005,\"elapsed\":5.616,\"period\":1.3302865017373535e-7,\"timeStamp\":1696975482177},\"running\":false,\"count\":387532,\"cycles\":7,\"hz\":7517177.680852964},\"1\":{\"name\":\"Date.now()\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":2,\"stats\":{\"moe\":8.742029493176554e-11,\"rme\":0.1352118038142606,\"sem\":4.460219129171711e-11,\"deviation\":4.301279559923211e-10,\"mean\":6.465433672629213e-8,\"sample\":[6.476072877622782e-8,6.455090356402231e-8,6.48459973981478e-8,6.454562257686412e-8,6.514315339335625e-8,6.46311500959594e-8,6.618514912403518e-8,6.503698766008717e-8,6.4895969800126e-8,6.462124795179518e-8,6.491277887343282e-8,6.435550805103286e-8,6.457697849850066e-8,6.477933151213654e-8,6.425016135427239e-8,6.484489972938675e-8,6.416784565421298e-8,6.46263881920751e-8,6.489392576548648e-8,6.459315498607157e-8,6.478049531591434e-8,6.440799598635258e-8,6.453451569980278e-8,6.456223014059314e-8,6.426466719959555e-8,6.460495983144734e-8,6.452822705336945e-8,6.476933203822203e-8,6.487416548083573e-8,6.440838092696265e-8,6.464858643392302e-8,6.433716691409793e-8,6.480551645556951e-8,6.514336984708876e-8,6.500119716529734e-8,6.495808381696844e-8,6.460791104279128e-8,6.493254814003113e-8,6.489636243954828e-8,6.435577237691844e-8,6.485850994622379e-8,6.575042760486103e-8,6.583460256806713e-8,6.651082388838775e-8,6.453079332410331e-8,6.478999051762963e-8,6.455619940436856e-8,6.475034163479144e-8,6.460906586462151e-8,6.416984349597929e-8,6.446111907367891e-8,6.442670799166657e-8,6.446968487977094e-8,6.457425413627582e-8,6.432821723882263e-8,6.465442823314511e-8,6.459926933704138e-8,6.419147320432138e-8,6.45987562310311e-8,6.426625968808285e-8,6.457720577859988e-8,6.473101058794252e-8,6.422328577695794e-8,6.46432681774218e-8,6.462454109081207e-8,6.503297732327987e-8,6.499770000230898e-8,6.44632936787905e-8,6.493240726250247e-8,6.44085208949595e-8,6.43124392290069e-8,6.451935179317723e-8,6.467033580222842e-8,6.601994827891416e-8,6.444905626977061e-8,6.43655469838346e-8,6.506710015572767e-8,6.449246050053739e-8,6.44798084038038e-8,6.422446225393908e-8,6.443137132114727e-8,6.392758144308027e-8,6.457770240479297e-8,6.442843194513846e-8,6.446243797910742e-8,6.416830525120852e-8,6.431129067231286e-8,6.422021912985804e-8,6.384177625285392e-8,6.428922335174295e-8,6.435006568793766e-8,6.447251438119412e-8,6.456753995484752e-8],\"variance\":1.8501005852613211e-19},\"times\":{\"cycle\":0.05068964653678029,\"elapsed\":5.389,\"period\":6.465433672629213e-8,\"timeStamp\":1696975487807},\"running\":false,\"count\":784010,\"cycles\":6,\"hz\":15466866.580557514},\"options\":{},\"events\":{\"start\":[null],\"cycle\":[null,null],\"complete\":[null,null]},\"length\":2,\"running\":false},\"type\":\"cycle\",\"target\":{\"name\":\"Date.now()\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":2,\"stats\":{\"moe\":8.742029493176554e-11,\"rme\":0.1352118038142606,\"sem\":4.460219129171711e-11,\"deviation\":4.301279559923211e-10,\"mean\":6.465433672629213e-8,\"sample\":[6.476072877622782e-8,6.455090356402231e-8,6.48459973981478e-8,6.454562257686412e-8,6.514315339335625e-8,6.46311500959594e-8,6.618514912403518e-8,6.503698766008717e-8,6.4895969800126e-8,6.462124795179518e-8,6.491277887343282e-8,6.435550805103286e-8,6.457697849850066e-8,6.477933151213654e-8,6.425016135427239e-8,6.484489972938675e-8,6.416784565421298e-8,6.46263881920751e-8,6.489392576548648e-8,6.459315498607157e-8,6.478049531591434e-8,6.440799598635258e-8,6.453451569980278e-8,6.456223014059314e-8,6.426466719959555e-8,6.460495983144734e-8,6.452822705336945e-8,6.476933203822203e-8,6.487416548083573e-8,6.440838092696265e-8,6.464858643392302e-8,6.433716691409793e-8,6.480551645556951e-8,6.514336984708876e-8,6.500119716529734e-8,6.495808381696844e-8,6.460791104279128e-8,6.493254814003113e-8,6.489636243954828e-8,6.435577237691844e-8,6.485850994622379e-8,6.575042760486103e-8,6.583460256806713e-8,6.651082388838775e-8,6.453079332410331e-8,6.478999051762963e-8,6.455619940436856e-8,6.475034163479144e-8,6.460906586462151e-8,6.416984349597929e-8,6.446111907367891e-8,6.442670799166657e-8,6.446968487977094e-8,6.457425413627582e-8,6.432821723882263e-8,6.465442823314511e-8,6.459926933704138e-8,6.419147320432138e-8,6.45987562310311e-8,6.426625968808285e-8,6.457720577859988e-8,6.473101058794252e-8,6.422328577695794e-8,6.46432681774218e-8,6.462454109081207e-8,6.503297732327987e-8,6.499770000230898e-8,6.44632936787905e-8,6.493240726250247e-8,6.44085208949595e-8,6.43124392290069e-8,6.451935179317723e-8,6.467033580222842e-8,6.601994827891416e-8,6.444905626977061e-8,6.43655469838346e-8,6.506710015572767e-8,6.449246050053739e-8,6.44798084038038e-8,6.422446225393908e-8,6.443137132114727e-8,6.392758144308027e-8,6.457770240479297e-8,6.442843194513846e-8,6.446243797910742e-8,6.416830525120852e-8,6.431129067231286e-8,6.422021912985804e-8,6.384177625285392e-8,6.428922335174295e-8,6.435006568793766e-8,6.447251438119412e-8,6.456753995484752e-8],\"variance\":1.8501005852613211e-19},\"times\":{\"cycle\":0.05068964653678029,\"elapsed\":5.389,\"period\":6.465433672629213e-8,\"timeStamp\":1696975487807},\"running\":false,\"count\":784010,\"cycles\":6,\"hz\":15466866.580557514},\"aborted\":false}]"}-->
