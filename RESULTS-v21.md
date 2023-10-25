## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|567,663,771|90|
|Using dot notation|587,784,973|92|
|Using define property (writable)|2,627,968|91|
|Using define property initialized (writable)|3,612,819|93|
|Using define property (getter)|1,411,777|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":567663771.3958545,"samples":8},{"name":"Using dot notation","opsSec":587784972.8908635,"samples":7},{"name":"Using define property (writable)","opsSec":2627968.3176407665,"samples":6},{"name":"Using define property initialized (writable)","opsSec":3612818.761976375,"samples":5},{"name":"Using define property (getter)","opsSec":1411776.9815053002,"samples":5}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.021ms
new Array(length)|10|0.003ms
array.push|100|0.096ms
new Array(length)|100|0.016ms
array.push|1,000|0.061ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.448ms
new Array(length)|10,000|0.238ms
array.push|1,000,000|35.206ms
new Array(length)|1,000,000|11.085ms
array.push|100,000,000|1,854.569ms
new Array(length)|100,000,000|4,689.522ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.004ms
array.push|100|0.023ms
new Array(length)|100|0.015ms
array.push|1,000|0.06ms
new Array(length)|1,000|0.032ms
array.push|10,000|4.934ms
new Array(length)|10,000|0.301ms
array.push|1,000,000|29.012ms
new Array(length)|1,000,000|8.915ms
array.push|100,000,000|2,044.426ms
new Array(length)|100,000,000|4,735.778ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|336|83|
|Array.from|15|42|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:38:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":336.33539375770994,"samples":4},{"name":"Array.from","opsSec":15.433056623172263,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,423|80|
|new Blob (1024)|408|63|
|text (128)|3,909|84|
|text (1024)|483|89|
|arrayBuffer (128)|3,896|85|
|arrayBuffer (1024)|485|89|
|slice (0, 64)|93,474|45|
|slice (0, 512)|24,952|64|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Blob (128)","opsSec":3423.051834570329,"samples":4},{"name":"new Blob (1024)","opsSec":407.77655332776595,"samples":2},{"name":"text (128)","opsSec":3908.741006548852,"samples":5},{"name":"text (1024)","opsSec":482.59950628990356,"samples":2},{"name":"arrayBuffer (128)","opsSec":3895.606790632378,"samples":4},{"name":"arrayBuffer (1024)","opsSec":484.5056376571351,"samples":2},{"name":"slice (0, 64)","opsSec":93473.79792372797,"samples":4},{"name":"slice (0, 512)","opsSec":24951.528988719958,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|159,919|55|
|[True conditional] Using constructor name|128,491|94|
|[True conditional] Check if property is valid then instanceof |128,288|92|
|[False conditional] Using instanceof only|595,551,213|95|
|[False conditional] Using constructor name|598,311,523|89|
|[False conditional] Check if property is valid then instanceof |603,818,011|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":159918.83193254686,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":128491.4071532465,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":128288.27432291608,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":595551212.7071731,"samples":8},{"name":"[False conditional] Using constructor name","opsSec":598311523.317196,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":603818011.352398,"samples":7}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,605|91|
|crypto.verify('RSA-SHA256')|4,543|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:45:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":4605.139304930181,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":4542.953637919513,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|780,759|93|
|fromUnixToISOString(new Date())|1,344,240|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":780758.8526696538,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":1344240.1187290414,"samples":5}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,546|77|
|Intl.DateTimeFormat().format(new Date())|8,541|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|7,149|71|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,672|81|
|Reusing Intl.DateTimeFormat()|413,724|85|
|Date.toLocaleDateString()|488,134|88|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,837|83|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:49:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":7545.5440896061145,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8541.164904270965,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":7149.105888115374,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":8671.923667417248,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":413723.5554711957,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":488133.9129696268,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":9836.879589277612,"samples":6},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|565,406|92|
|Using brackets {}|574,799|90|
|Using '' + |593,764|94|
|Using date.toString()|639,600|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:52:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using String()","opsSec":565406.1675100203,"samples":6},{"name":"Using brackets {}","opsSec":574798.884464134,"samples":5},{"name":"Using '' + ","opsSec":593763.5756847401,"samples":7},{"name":"Using date.toString()","opsSec":639599.8882514624,"samples":4}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,528,216|90|
|Using delete property (proto: null)|13,975,388|88|
|Using delete property (cached proto: null)|2,333,957|87|
|Using undefined assignment|669,108,011|87|
|Using undefined assignment (proto: null)|14,075,210|84|
|Using undefined property (cached proto: null)|660,913,130|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:54:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759738922119141},"benchmarks":[{"name":"Using delete property","opsSec":2528215.6723251687,"samples":4},{"name":"Using delete property (proto: null)","opsSec":13975387.8341963,"samples":8},{"name":"Using delete property (cached proto: null)","opsSec":2333957.476038135,"samples":4},{"name":"Using undefined assignment","opsSec":669108011.3784556,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":14075210.421404392,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":660913129.5363672,"samples":7}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|147,807|58|
|NodeError|122,708|89|
|NodeError Range|123,362|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:55:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Error","opsSec":147807.13379777136,"samples":4},{"name":"NodeError","opsSec":122707.95598753943,"samples":3},{"name":"NodeError Range","opsSec":123361.70166853645,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,301,754|92|
|Function returning explicitly undefined|1,277,507|90|
|Function returning implicitly undefined|1,319,054|96|
|Function returning string|1,297,929|92|
|Function returning integer|1,335,902|94|
|Function returning float|1,294,484|95|
|Function returning functions|1,274,804|95|
|Function returning arrow functions|1,365,989|81|
|Function returning empty object|1,403,914|92|
|Function returning empty array|1,386,123|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:58:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1301753.6845019844,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1277507.4359567645,"samples":4},{"name":"Function returning implicitly undefined","opsSec":1319054.2487943482,"samples":6},{"name":"Function returning string","opsSec":1297928.6314036364,"samples":5},{"name":"Function returning integer","opsSec":1335902.1542302736,"samples":5},{"name":"Function returning float","opsSec":1294483.5370170095,"samples":6},{"name":"Function returning functions","opsSec":1274803.6445392233,"samples":4},{"name":"Function returning arrow functions","opsSec":1365989.2413332737,"samples":5},{"name":"Function returning empty object","opsSec":1403914.4835316588,"samples":7},{"name":"Function returning empty array","opsSec":1386122.7244744918,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|579,494,431|93|
|using Array.includes (first item)|580,762,369|94|
|Using raw comparison|584,871,058|91|
|Using raw comparison (first item)|583,879,841|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:01:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"using Array.includes","opsSec":579494431.3141736,"samples":7},{"name":"using Array.includes (first item)","opsSec":580762369.2095482,"samples":6},{"name":"Using raw comparison","opsSec":584871058.319697,"samples":7},{"name":"Using raw comparison (first item)","opsSec":583879840.8997555,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|54,012,625|87|
|Using Object.getOwnPropertyNames()|48,989,437|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:03:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using Object.keys()","opsSec":54012625.427627444,"samples":6},{"name":"Using Object.getOwnPropertyNames()","opsSec":48989436.770208344,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|708,468,772|84|
|Length = 10_000 - Array.at|749,618,951|88|
|Length = 1_000_000 - Array.at|733,550,195|83|
|Length = 100 - Array[length - 1]|784,302,691|90|
|Length = 10_000 - Array[length - 1]|777,380,375|87|
|Length = 1_000_000 - Array[length - 1]|774,149,947|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:07:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":708468771.8866978,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":749618951.4779851,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":733550194.8780358,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":784302690.6931503,"samples":10},{"name":"Length = 10_000 - Array[length - 1]","opsSec":777380374.94607,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":774149946.6115987,"samples":7}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|37,015,759|87|
|Object.create({})|1,198,684|71|
|Cached Empty.prototype|613,252,819|89|
|Empty.prototype|1,132,832|65|
|Empty class|803,517|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:09:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":37015759.26371592,"samples":6},{"name":"Object.create({})","opsSec":1198683.921723666,"samples":6},{"name":"Cached Empty.prototype","opsSec":613252819.2809101,"samples":6},{"name":"Empty.prototype","opsSec":1132831.7248301355,"samples":3},{"name":"Empty class","opsSec":803516.9239285291,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|711,452,319|92|
|Using optional chain (obj.field?.field2) (undefined)|711,169,788|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|708,902,958|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|710,106,966|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:13:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":711452318.6756583,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":711169788.051615,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":708902958.4780121,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":710106965.7437314,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|706,079,061|94|
|Using parseInt(x, 10) - big number (10 len)|713,396,380|96|
|Using + - small number (2 len)|713,077,648|96|
|Using + - big number (10 len)|712,360,617|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:15:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":706079061.0274659,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":713396379.8631185,"samples":6},{"name":"Using + - small number (2 len)","opsSec":713077647.8182667,"samples":8},{"name":"Using + - big number (10 len)","opsSec":712360617.1095392,"samples":6}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|833,089|75|
|Using ? operator to avoid rejection|946,749|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:19:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":833088.9800241624,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":946748.6429932367,"samples":4}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|472,881,447|94|
|Raw usage underscore usage|477,981,213|94|
|Manipulating private properties using #|473,545,256|96|
|Manipulating private properties using underscore(_)|474,352,282|97|
|Manipulating private properties using Symbol|473,327,538|98|
|Manipulating private properties using PrivateSymbol|40,231,893|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:22:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Raw usage private field","opsSec":472881447.2985066,"samples":8},{"name":"Raw usage underscore usage","opsSec":477981213.25002426,"samples":8},{"name":"Manipulating private properties using #","opsSec":473545255.644407,"samples":8},{"name":"Manipulating private properties using underscore(_)","opsSec":474352281.98570645,"samples":11},{"name":"Manipulating private properties using Symbol","opsSec":473327538.12156415,"samples":9},{"name":"Manipulating private properties using PrivateSymbol","opsSec":40231892.6226876,"samples":7}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,813,260|95|
|Adding property in the object creation - small object|5,903,147|97|
|Adding property after the function creation - small class|186,117|87|
|Adding property in the function creation - small class|189,763|89|
|Adding property after the class creation - small class|182,776|84|
|Adding property in the class creation - small class|182,144|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:27:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5813259.806687427,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5903146.959169575,"samples":7},{"name":"Adding property after the function creation - small class","opsSec":186116.8714789931,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":189763.06833285256,"samples":5},{"name":"Adding property after the class creation - small class","opsSec":182775.86766304023,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":182143.78095326366,"samples":4}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|703,473,919|94|
|Getter|56,558,992|94|
|Method|709,523,658|96|
|DefineProperty (getter)|710,872,894|93|
|DefineProperty (getter & enumerable=false)|56,474,879|96|
|DefineProperty (getter & configurable=false)|711,505,018|96|
|DefineProperty (getter & enumerable=false & configurable=false)|57,063,402|98|
|DefineProperty (writable)|712,759,965|98|
|DefineProperty (writable & enumerable=false)|710,835,018|93|
|DefineProperty (writable & enumerable=false & configurable=false)|709,153,598|98|
|DefineProperties (getter)|57,185,903|96|
|DefineProperties (getter & enumerable=false)|42,506,541|73|
|DefineProperties (getter & enumerable=false & configurable=false)|37,102,059|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:32:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":703473919.0698085,"samples":6},{"name":"Getter","opsSec":56558991.79756999,"samples":7},{"name":"Method","opsSec":709523658.3538618,"samples":9},{"name":"DefineProperty (getter)","opsSec":710872894.2109172,"samples":8},{"name":"DefineProperty (getter & enumerable=false)","opsSec":56474878.66391017,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":711505018.4111184,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":57063402.068451285,"samples":5},{"name":"DefineProperty (writable)","opsSec":712759964.8577704,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":710835018.0735443,"samples":8},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":709153598.4228256,"samples":9},{"name":"DefineProperties (getter)","opsSec":57185902.9439867,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":42506540.677409686,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":37102058.91989677,"samples":6}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|572,997,096|82|
|Setter|7,076,096|85|
|Method|593,206,620|86|
|DefineProperty (setter)|574,917,413|87|
|DefineProperty (setter & enumerable=false)|7,078,691|87|
|DefineProperty (setter & configurable=false)|7,331,518|82|
|DefineProperty (setter & enumerable=false & configurable=false)|7,333,610|83|
|DefineProperty (writable)|582,510,792|82|
|DefineProperty (writable & enumerable=false)|603,371,393|87|
|DefineProperty (writable & enumerable=false & configurable=false)|466,421,230|68|
|DefineProperties (setter)|549,981,562|80|
|DefineProperties (setter & enumerable=false)|6,691,355|87|
|DefineProperties (setter & enumerable=false & configurable=false)|6,648,044|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:36:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":572997096.1106516,"samples":6},{"name":"Setter","opsSec":7076095.846181372,"samples":6},{"name":"Method","opsSec":593206620.2630024,"samples":7},{"name":"DefineProperty (setter)","opsSec":574917413.0103852,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":7078691.216090669,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":7331517.739678454,"samples":7},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":7333609.773759889,"samples":4},{"name":"DefineProperty (writable)","opsSec":582510792.100051,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":603371393.0796366,"samples":8},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":466421230.2207872,"samples":6},{"name":"DefineProperties (setter)","opsSec":549981562.3649402,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6691355.227291437,"samples":4},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6648043.852068301,"samples":4}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,921,039|86|
|Using replaceAll()|1,717,939|85|
|Using replaceAll(//g)|1,706,094|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:39:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using replace(//g)","opsSec":1921039.0444206402,"samples":7},{"name":"Using replaceAll()","opsSec":1717939.103971522,"samples":8},{"name":"Using replaceAll(//g)","opsSec":1706093.5146477818,"samples":6}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,560,740|93|
|{ ...object, __proto__: null }|1,833,391|86|
|{ ...object, newProp: true }|22,955,145|94|
|structuredClone|190,487|95|
|JSON.parse + JSON.stringify|194,712|95|
|loop + object.keys starting with {}|1,158,899|95|
|loop + object.keys starting with { __proto__: null }|620,694|92|
|loop + object.keys starting with { randomProp: true }|448,474|99|
|object.keys + reduce(FN, {})|429,893|91|
|object.keys + reduce(FN, { __proto__: null })|627,623|96|
|object.keys + reduce(FN, { newProp: true })|451,289|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:44:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{ ...object }","opsSec":24560740.114840984,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":1833390.9214714998,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":22955144.658031773,"samples":7},{"name":"structuredClone","opsSec":190487.33197297703,"samples":6},{"name":"JSON.parse + JSON.stringify","opsSec":194711.79166008852,"samples":4},{"name":"loop + object.keys starting with {}","opsSec":1158899.121275618,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":620693.6633310496,"samples":7},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":448473.5348311612,"samples":6},{"name":"object.keys + reduce(FN, {})","opsSec":429893.2404082583,"samples":3},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":627623.1758068737,"samples":8},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":451288.62521930283,"samples":4}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|214,244|86|
|Sort using first char|874,335|93|
|Sort using localeCompare|797,309|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:47:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Sort using default","opsSec":214244.004888239,"samples":4},{"name":"Sort using first char","opsSec":874335.1962185736,"samples":8},{"name":"Sort using localeCompare","opsSec":797309.4350821063,"samples":5}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,192|90|
|{...smallObject} - Total keys: 2|62,255,381|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,126|91|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,114|93|
|{ ...bigObject, ...anotherBigObject }|713|90|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,055,691|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|17,075,426|95|
|{ ...smallObject, ...anotherSmallObject }|11,986,944|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:51:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1192.0645863479322,"samples":5},{"name":"{...smallObject} - Total keys: 2","opsSec":62255381.47263774,"samples":7},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1126.4919067749934,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3113.9384324521943,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":713.438840783722,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7055691.250805437,"samples":4},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":17075425.934784476,"samples":7},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":11986943.582671937,"samples":5}]}-->
