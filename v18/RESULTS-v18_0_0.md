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
|new Date().getTime()|7,739,795|97|
|Date.now()|15,227,450|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:16:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":7739795.4510508785,"samples":6},{"name":"Date.now()","opsSec":15227450.136804735,"samples":6}]}-->
