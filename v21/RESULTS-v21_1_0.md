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
