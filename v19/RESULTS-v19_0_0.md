## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|706,291,127|97|
|Using dot notation|712,396,201|94|
|Using define property (writable)|2,974,236|99|
|Using define property initialized (writable)|3,830,403|96|
|Using define property (getter)|1,599,073|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:27:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":706291127.114454,"samples":5},{"name":"Using dot notation","opsSec":712396200.9047467,"samples":8},{"name":"Using define property (writable)","opsSec":2974235.9267255045,"samples":6},{"name":"Using define property initialized (writable)","opsSec":3830403.0560961836,"samples":5},{"name":"Using define property (getter)","opsSec":1599072.6060941573,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.035ms
new Array(length)|100|0.01ms
array.push|1,000|0.071ms
new Array(length)|1,000|0.038ms
array.push|10,000|0.464ms
new Array(length)|10,000|0.447ms
array.push|1,000,000|40.226ms
new Array(length)|1,000,000|9.642ms
array.push|100,000,000|2,003.809ms
new Array(length)|100,000,000|5,450.418ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.019ms
array.push|100|0.016ms
new Array(length)|100|0.014ms
array.push|1,000|0.064ms
new Array(length)|1,000|0.034ms
array.push|10,000|0.48ms
new Array(length)|10,000|0.227ms
array.push|1,000,000|25.727ms
new Array(length)|1,000,000|10.815ms
array.push|100,000,000|2,614.678ms
new Array(length)|100,000,000|5,545.178ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|295|79|
|Array.from|14|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:30:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":294.85511125621093,"samples":3},{"name":"Array.from","opsSec":14.274173422781043,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,797|82|
|new Blob (1024)|375|68|
|text (128)|20,925|80|
|text (1024)|9,220|75|
|arrayBuffer (128)|23,393|76|
|arrayBuffer (1024)|10,406|78|
|slice (0, 64)|47,041|74|
|slice (0, 512)|24,893|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:32:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Blob (128)","opsSec":2797.301077793883,"samples":2},{"name":"new Blob (1024)","opsSec":375.0177841613785,"samples":2},{"name":"text (128)","opsSec":20925.054548082215,"samples":4},{"name":"text (1024)","opsSec":9220.212394604243,"samples":3},{"name":"arrayBuffer (128)","opsSec":23393.249252267193,"samples":4},{"name":"arrayBuffer (1024)","opsSec":10406.43559953082,"samples":3},{"name":"slice (0, 64)","opsSec":47040.90644855691,"samples":4},{"name":"slice (0, 512)","opsSec":24893.345004783547,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|159,532|57|
|[True conditional] Using constructor name|127,028|88|
|[True conditional] Check if property is valid then instanceof |129,024|90|
|[False conditional] Using instanceof only|642,482,960|89|
|[False conditional] Using constructor name|636,437,458|89|
|[False conditional] Check if property is valid then instanceof |637,991,258|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:34:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":159532.33235504167,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":127028.11857543683,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":129024.44862660694,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":642482959.5455151,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":636437457.8131907,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":637991257.5240357,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,554|95|
|crypto.verify('RSA-SHA256')|4,567|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:35:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":4554.354992421623,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":4567.282312815653,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|997,146|93|
|fromUnixToISOString(new Date())|1,532,025|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:37:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":997146.1766560191,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1532025.4330772706,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,540|86|
|Intl.DateTimeFormat().format(new Date())|7,277|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,825|88|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,924|92|
|Reusing Intl.DateTimeFormat()|336,384|79|
|Date.toLocaleDateString()|408,537|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,609|79|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:41:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":6539.501257115978,"samples":6},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":7276.593387639408,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":6825.391339516855,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":8923.684417669208,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":336383.5061551366,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":408536.5094256579,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":8608.81329783993,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|696,662|97|
|Using brackets {}|699,431|97|
|Using '' + |700,539|94|
|Using date.toString()|769,606|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:43:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":696661.7026781947,"samples":3},{"name":"Using brackets {}","opsSec":699431.3637782852,"samples":3},{"name":"Using '' + ","opsSec":700539.204687898,"samples":5},{"name":"Using date.toString()","opsSec":769606.1142918867,"samples":7}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,369,661|86|
|Using delete property (proto: null)|14,902,480|85|
|Using delete property (cached proto: null)|2,332,039|83|
|Using undefined assignment|840,930,145|84|
|Using undefined assignment (proto: null)|16,573,372|85|
|Using undefined property (cached proto: null)|709,584,368|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:46:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2369661.455943401,"samples":5},{"name":"Using delete property (proto: null)","opsSec":14902480.435429728,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2332039.4497538307,"samples":6},{"name":"Using undefined assignment","opsSec":840930144.985142,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":16573371.601588473,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":709584368.0869982,"samples":6}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|178,893|58|
|NodeError|145,067|94|
|NodeError Range|144,409|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:48:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Error","opsSec":178893.42283500184,"samples":3},{"name":"NodeError","opsSec":145067.08018052005,"samples":3},{"name":"NodeError Range","opsSec":144408.57721295097,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,077,762|85|
|Function returning explicitly undefined|1,035,271|87|
|Function returning implicitly undefined|1,007,153|85|
|Function returning string|1,045,786|85|
|Function returning integer|1,054,195|82|
|Function returning float|1,050,069|84|
|Function returning functions|1,041,746|86|
|Function returning arrow functions|1,069,802|89|
|Function returning empty object|1,041,216|86|
|Function returning empty array|1,083,550|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:52:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1077762.3905939646,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1035271.3845324095,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1007152.871515425,"samples":7},{"name":"Function returning string","opsSec":1045786.1766853031,"samples":5},{"name":"Function returning integer","opsSec":1054194.9465663189,"samples":6},{"name":"Function returning float","opsSec":1050068.8747485962,"samples":4},{"name":"Function returning functions","opsSec":1041745.9837736204,"samples":5},{"name":"Function returning arrow functions","opsSec":1069802.438958865,"samples":4},{"name":"Function returning empty object","opsSec":1041216.3422048179,"samples":5},{"name":"Function returning empty array","opsSec":1083550.310537316,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|707,869,784|97|
|using Array.includes (first item)|711,312,653|93|
|Using raw comparison|715,208,388|98|
|Using raw comparison (first item)|713,665,733|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:55:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"using Array.includes","opsSec":707869783.9923298,"samples":8},{"name":"using Array.includes (first item)","opsSec":711312653.0781958,"samples":6},{"name":"Using raw comparison","opsSec":715208388.1650547,"samples":6},{"name":"Using raw comparison (first item)","opsSec":713665732.9213796,"samples":9}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|55,732,187|93|
|Using Object.getOwnPropertyNames()|48,984,205|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:58:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using Object.keys()","opsSec":55732187.3985191,"samples":8},{"name":"Using Object.getOwnPropertyNames()","opsSec":48984204.67952858,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|599,920,185|94|
|Length = 10_000 - Array.at|599,486,561|98|
|Length = 1_000_000 - Array.at|599,692,856|93|
|Length = 100 - Array[length - 1]|595,586,179|93|
|Length = 10_000 - Array[length - 1]|595,566,727|96|
|Length = 1_000_000 - Array[length - 1]|593,957,139|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:01:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":599920185.1105475,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":599486561.1110871,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":599692856.2009872,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":595586179.1072974,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":595566726.9072315,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":593957139.4157964,"samples":5}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|42,304,257|89|
|Object.create({})|1,412,577|78|
|Cached Empty.prototype|714,904,212|96|
|Empty.prototype|1,344,624|75|
|Empty class|1,007,279|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:03:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Object.create(null)","opsSec":42304256.59196606,"samples":6},{"name":"Object.create({})","opsSec":1412576.8012479001,"samples":3},{"name":"Cached Empty.prototype","opsSec":714904211.5797565,"samples":7},{"name":"Empty.prototype","opsSec":1344623.9293084613,"samples":3},{"name":"Empty class","opsSec":1007278.7861237054,"samples":4}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|714,134,782|96|
|Using optional chain (obj.field?.field2) (undefined)|717,307,743|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|715,306,020|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|713,809,300|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:05:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":714134782.4652164,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":717307742.5454259,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":715306019.6175987,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":713809300.3826032,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|202,624,779|94|
|Using parseInt(x, 10) - big number (10 len)|15,118,716|96|
|Using + - small number (2 len)|600,255,376|98|
|Using + - big number (10 len)|598,582,530|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:07:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":202624778.95117012,"samples":9},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":15118715.891566949,"samples":6},{"name":"Using + - small number (2 len)","opsSec":600255375.5064838,"samples":6},{"name":"Using + - big number (10 len)","opsSec":598582530.1791689,"samples":6}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|632,686|71|
|Using ? operator to avoid rejection|677,785|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:10:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":632685.5925173835,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":677784.8035593216,"samples":4}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|707,793,081|95|
|Raw usage underscore usage|709,867,343|95|
|Manipulating private properties using #|697,652,384|92|
|Manipulating private properties using underscore(_)|701,641,104|94|
|Manipulating private properties using Symbol|700,576,728|97|
|Manipulating private properties using PrivateSymbol|28,952,035|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:15:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Raw usage private field","opsSec":707793080.7938334,"samples":8},{"name":"Raw usage underscore usage","opsSec":709867343.3650801,"samples":8},{"name":"Manipulating private properties using #","opsSec":697652384.0283681,"samples":7},{"name":"Manipulating private properties using underscore(_)","opsSec":701641103.8933773,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":700576727.5080225,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":28952035.274178937,"samples":7}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,851,146|98|
|Adding property in the object creation - small object|1,858,846|97|
|Adding property after the function creation - small class|164,411|87|
|Adding property in the function creation - small class|165,197|91|
|Adding property after the class creation - small class|138,816|87|
|Adding property in the class creation - small class|138,297|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:17:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":1851146.0936100455,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":1858846.3571770047,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":164410.60817380532,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":165197.0142703309,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":138816.20262666972,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":138296.85994955705,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|708,089,983|95|
|Getter|52,088,380|93|
|Method|714,800,501|99|
|DefineProperty (getter)|713,650,238|98|
|DefineProperty (getter & enumerable=false)|51,697,189|96|
|DefineProperty (getter & configurable=false)|715,469,006|98|
|DefineProperty (getter & enumerable=false & configurable=false)|52,233,100|94|
|DefineProperty (writable)|715,238,554|94|
|DefineProperty (writable & enumerable=false)|715,735,543|97|
|DefineProperty (writable & enumerable=false & configurable=false)|714,985,182|98|
|DefineProperties (getter)|52,325,016|93|
|DefineProperties (getter & enumerable=false)|38,230,318|72|
|DefineProperties (getter & enumerable=false & configurable=false)|35,115,867|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:21:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":708089982.9219152,"samples":8},{"name":"Getter","opsSec":52088379.69770072,"samples":5},{"name":"Method","opsSec":714800500.7418534,"samples":8},{"name":"DefineProperty (getter)","opsSec":713650237.5575055,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":51697188.853881,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":715469005.8287969,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":52233100.13304968,"samples":6},{"name":"DefineProperty (writable)","opsSec":715238554.4840522,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":715735543.2767578,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":714985181.8487722,"samples":10},{"name":"DefineProperties (getter)","opsSec":52325016.04174622,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":38230317.743606366,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":35115867.44444705,"samples":7}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|580,735,053|96|
|Setter|8,416,421|91|
|Method|588,270,260|99|
|DefineProperty (setter)|588,408,909|100|
|DefineProperty (setter & enumerable=false)|8,396,177|95|
|DefineProperty (setter & configurable=false)|8,570,114|97|
|DefineProperty (setter & enumerable=false & configurable=false)|8,463,152|97|
|DefineProperty (writable)|595,184,473|93|
|DefineProperty (writable & enumerable=false)|226,697,055|38|
|DefineProperty (writable & enumerable=false & configurable=false)|118,696,694|82|
|DefineProperties (setter)|91,043,464|88|
|DefineProperties (setter & enumerable=false)|8,365,776|95|
|DefineProperties (setter & enumerable=false & configurable=false)|8,118,159|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:27:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Setter (class)","opsSec":580735052.9273584,"samples":6},{"name":"Setter","opsSec":8416421.409427114,"samples":8},{"name":"Method","opsSec":588270259.5383509,"samples":7},{"name":"DefineProperty (setter)","opsSec":588408908.7635207,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":8396176.879917176,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":8570114.483740874,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":8463151.79679206,"samples":5},{"name":"DefineProperty (writable)","opsSec":595184472.822082,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":226697054.893903,"samples":8},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":118696693.71987097,"samples":4},{"name":"DefineProperties (setter)","opsSec":91043463.83954406,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":8365775.867978324,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":8118159.243857245,"samples":4}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,623,444|92|
|Using replaceAll()|2,260,624|94|
|Using replaceAll(//g)|2,279,754|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:30:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":2623444.2744939164,"samples":5},{"name":"Using replaceAll()","opsSec":2260624.32446433,"samples":5},{"name":"Using replaceAll(//g)","opsSec":2279753.9784427676,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|12,757,322|89|
|{ ...object, __proto__: null }|13,037,211|96|
|{ ...object, newProp: true }|471,614|83|
|structuredClone|172,954|96|
|JSON.parse + JSON.stringify|141,388|95|
|loop + object.keys starting with {}|305,536|98|
|loop + object.keys starting with { __proto__: null }|420,298|94|
|loop + object.keys starting with { randomProp: true }|310,672|96|
|object.keys + reduce(FN, {})|309,066|94|
|object.keys + reduce(FN, { __proto__: null })|422,394|98|
|object.keys + reduce(FN, { newProp: true })|316,234|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:32:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":12757321.61707197,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":13037210.547661826,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":471613.804826398,"samples":3},{"name":"structuredClone","opsSec":172954.0404152941,"samples":6},{"name":"JSON.parse + JSON.stringify","opsSec":141387.62424085804,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":305536.3973020432,"samples":6},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":420298.4550916329,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":310671.59989682003,"samples":7},{"name":"object.keys + reduce(FN, {})","opsSec":309066.0124281687,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":422394.1698023157,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":316233.85856107867,"samples":5}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|169,303|94|
|Sort using first char|777,103|96|
|Sort using localeCompare|721,636|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:39:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Sort using default","opsSec":169303.12012503634,"samples":5},{"name":"Sort using first char","opsSec":777103.1964901431,"samples":7},{"name":"Sort using localeCompare","opsSec":721636.2029503856,"samples":6}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,296|97|
|{...smallObject} - Total keys: 2|66,528,295|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,313|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,622|98|
|{ ...bigObject, ...anotherBigObject }|794|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,075,123|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|18,154,199|94|
|{ ...smallObject, ...anotherSmallObject }|12,056,445|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:45:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1296.3831975287892,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":66528294.70205284,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1313.447321586401,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3622.0693358393346,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":793.5865510497499,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8075122.776231784,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":18154198.613713074,"samples":7},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":12056445.157018755,"samples":6}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,169|83|
|streams.web.Readable reading 1e3 * "some data"|335|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:47:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1169.0643197096344,"samples":4},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":334.8919015660029,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,351|92|
|streams.web.WritableStream writing 1e3 * "some data"|818|60|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:49:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4350.70541588604,"samples":8},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":818.4128370471315,"samples":4}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|583,387,781|89|
|Using backtick (`)|590,734,850|97|
|Using array.join|5,663,342|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:57:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using + sign","opsSec":583387780.7352558,"samples":12},{"name":"Using backtick (`)","opsSec":590734850.4018842,"samples":7},{"name":"Using array.join","opsSec":5663342.231818224,"samples":8}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|714,242,790|98|
|Using indexof|717,971,904|95|
|Using RegExp.test|12,127,354|96|
|Using RegExp.text with cached regex pattern|12,743,758|97|
|Using new RegExp.test|3,149,081|97|
|Using new RegExp.test with cached regex pattern|3,544,323|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:00:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":714242790.3193058,"samples":6},{"name":"Using indexof","opsSec":717971903.7817652,"samples":7},{"name":"Using RegExp.test","opsSec":12127354.412624683,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":12743758.119163122,"samples":6},{"name":"Using new RegExp.test","opsSec":3149081.2361637373,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3544323.0621585594,"samples":4}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|114,730,739|95|
|Using this|120,182,010|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 10 2023 22:00:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":"[{\"timeStamp\":1696975246572,\"currentTarget\":{\"0\":{\"name\":\"Using super\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":1,\"stats\":{\"moe\":7.792686841058934e-11,\"rme\":0.8940607197427628,\"sem\":3.975860633193334e-11,\"deviation\":3.875189593535737e-10,\"mean\":8.71605995988844e-9,\"sample\":[9.529007423373075e-9,8.63259489030646e-9,8.878036329294014e-9,8.514976527722736e-9,8.535630471280495e-9,8.816791027011035e-9,8.494295813891704e-9,8.564186728416764e-9,8.536704840285669e-9,8.53014781765513e-9,8.480385437716841e-9,8.504190818507883e-9,8.52982572721532e-9,8.51449229075431e-9,8.52250626009286e-9,8.571218160953387e-9,8.500107335241252e-9,8.525335945750549e-9,8.6130678919545e-9,8.757221238857085e-9,8.508697543183586e-9,8.647666098108984e-9,8.75727206848988e-9,9.191544524470995e-9,8.496871351385421e-9,8.885956094379784e-9,8.488416519698431e-9,8.528792360780601e-9,8.561001404761619e-9,8.505817197325209e-9,8.613745620391764e-9,8.530164760866063e-9,8.49707450048449e-9,8.50312322678708e-9,8.784415092402342e-9,8.53692510202778e-9,9.059268537863587e-9,9.480613323903872e-9,8.510442863341652e-9,8.540415403479695e-9,8.50791815548073e-9,8.516745568376107e-9,8.533248425255618e-9,8.524844592633532e-9,8.51052757939631e-9,8.530994978201712e-9,8.491449354455191e-9,8.510578239596996e-9,8.52982572721532e-9,8.520557960267832e-9,8.54088981338578e-9,8.538043353949268e-9,8.912167411123117e-9,8.649919714595e-9,8.528927906468053e-9,1.0097686421490498e-8,1.0050686123798282e-8,8.503512920638508e-9,8.613220380852885e-9,8.59514214422095e-9,8.586822858221413e-9,8.890479762266419e-9,8.573895188280584e-9,8.616439760362002e-9,8.576114748912628e-9,8.754933905381316e-9,8.570286284352149e-9,8.589364509293267e-9,9.088190598923869e-9,8.597260045587404e-9,8.599293230899198e-9,8.647479722788739e-9,9.434917484021281e-9,9.482239872153308e-9,1.024951504294511e-8,8.584213773170052e-9,8.588940759587866e-9,8.596243283499397e-9,8.597666513217653e-9,8.682433736372788e-9,8.50707099493415e-9,8.594125551565054e-9,8.75142666071847e-9,8.526081447031542e-9,8.646903823049171e-9,8.567287336017251e-9,8.586196128849053e-9,8.471864628015151e-9,8.564139631481192e-9,8.501402464710856e-9,9.852342365342141e-9,8.49390731720864e-9,1.0004852163188471e-8,8.695151383543232e-9,8.570379871695307e-9],\"variance\":1.501709438584767e-19},\"times\":{\"cycle\":0.05209880154427981,\"elapsed\":5.571,\"period\":8.71605995988844e-9,\"timeStamp\":1696975241001},\"running\":false,\"count\":5977334,\"cycles\":8,\"hz\":114730738.95797285},\"1\":{\"name\":\"Using this\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":2,\"stats\":{\"moe\":2.6655827579954115e-11,\"rme\":0.32035509458777617,\"sem\":1.3599912030588835e-11,\"deviation\":1.3255554566964263e-10,\"mean\":8.320712868404379e-9,\"sample\":[8.279502744159388e-9,8.092565957940669e-9,8.044892795936153e-9,8.516229500779191e-9,8.370319640032636e-9,8.373037813808694e-9,8.384133705818485e-9,8.057267753307304e-9,8.372526187664149e-9,8.377770195762552e-9,8.40656531459332e-9,8.354171439845475e-9,8.298436166724252e-9,8.061936341876264e-9,8.360135241975983e-9,8.3644519276874e-9,8.347648366385714e-9,8.337143882222383e-9,8.008151483547942e-9,8.064062788039523e-9,8.371822541832233e-9,8.361206459216122e-9,8.368369065356562e-9,8.392991233445897e-9,8.375595944531412e-9,8.38325434838255e-9,8.380744182610882e-9,8.377194776233111e-9,8.360119093775797e-9,8.34029358067473e-9,8.338151146194452e-9,8.008759039594588e-9,8.347008833705036e-9,8.47756959034894e-9,8.368001334065172e-9,8.365555281444743e-9,8.003706731417219e-9,8.391552284914368e-9,8.369648290601093e-9,8.372909907272558e-9,8.067468299564143e-9,8.372158456372759e-9,8.12032583550548e-9,8.366738416904e-9,8.358951946633556e-9,8.373021825491677e-9,8.383877892746212e-9,8.133564161995546e-9,8.3644519276874e-9,8.198348982431558e-9,8.346688907481525e-9,8.382008218954246e-9,8.36861144824254e-9,8.065456009984384e-9,8.385591040914583e-9,8.35937004112355e-9,8.370657952820714e-9,8.849317466740703e-9,8.047677001461492e-9,8.371233532233327e-9,8.349745074279322e-9,8.378396138373767e-9,8.390691314043002e-9,8.363606945133052e-9,8.38954015521778e-9,8.365397636638955e-9,8.356268307622254e-9,8.264367301525429e-9,8.368947043016727e-9,8.025581147344012e-9,8.372640344247652e-9,8.374590918923724e-9,8.32075825552752e-9,8.382888855455542e-9,8.355197250265287e-9,8.423675212049051e-9,8.378987865986566e-9,8.36266363442905e-9,8.388628821147811e-9,8.352399134904142e-9,8.357211618326257e-9,8.346602658387926e-9,8.389224471369795e-9,8.353243200703403e-9,8.345325440688795e-9,7.98506640223051e-9,8.36221469325544e-9,8.342308550638067e-9,8.371696849401969e-9,8.36958970359163e-9,8.37310161327553e-9,8.281472537345168e-9,8.361288826156959e-9,8.386351090719332e-9,8.367131207180643e-9],\"variance\":1.757097268777671e-20},\"times\":{\"cycle\":0.05212425705140666,\"elapsed\":5.437,\"period\":8.320712868404379e-9,\"timeStamp\":1696975246583},\"running\":false,\"count\":6264398,\"cycles\":7,\"hz\":120182010.34159288},\"options\":{},\"events\":{\"start\":[null],\"cycle\":[null,null],\"complete\":[null,null]},\"length\":2,\"running\":false},\"type\":\"cycle\",\"target\":{\"name\":\"Using super\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":1,\"stats\":{\"moe\":7.792686841058934e-11,\"rme\":0.8940607197427628,\"sem\":3.975860633193334e-11,\"deviation\":3.875189593535737e-10,\"mean\":8.71605995988844e-9,\"sample\":[9.529007423373075e-9,8.63259489030646e-9,8.878036329294014e-9,8.514976527722736e-9,8.535630471280495e-9,8.816791027011035e-9,8.494295813891704e-9,8.564186728416764e-9,8.536704840285669e-9,8.53014781765513e-9,8.480385437716841e-9,8.504190818507883e-9,8.52982572721532e-9,8.51449229075431e-9,8.52250626009286e-9,8.571218160953387e-9,8.500107335241252e-9,8.525335945750549e-9,8.6130678919545e-9,8.757221238857085e-9,8.508697543183586e-9,8.647666098108984e-9,8.75727206848988e-9,9.191544524470995e-9,8.496871351385421e-9,8.885956094379784e-9,8.488416519698431e-9,8.528792360780601e-9,8.561001404761619e-9,8.505817197325209e-9,8.613745620391764e-9,8.530164760866063e-9,8.49707450048449e-9,8.50312322678708e-9,8.784415092402342e-9,8.53692510202778e-9,9.059268537863587e-9,9.480613323903872e-9,8.510442863341652e-9,8.540415403479695e-9,8.50791815548073e-9,8.516745568376107e-9,8.533248425255618e-9,8.524844592633532e-9,8.51052757939631e-9,8.530994978201712e-9,8.491449354455191e-9,8.510578239596996e-9,8.52982572721532e-9,8.520557960267832e-9,8.54088981338578e-9,8.538043353949268e-9,8.912167411123117e-9,8.649919714595e-9,8.528927906468053e-9,1.0097686421490498e-8,1.0050686123798282e-8,8.503512920638508e-9,8.613220380852885e-9,8.59514214422095e-9,8.586822858221413e-9,8.890479762266419e-9,8.573895188280584e-9,8.616439760362002e-9,8.576114748912628e-9,8.754933905381316e-9,8.570286284352149e-9,8.589364509293267e-9,9.088190598923869e-9,8.597260045587404e-9,8.599293230899198e-9,8.647479722788739e-9,9.434917484021281e-9,9.482239872153308e-9,1.024951504294511e-8,8.584213773170052e-9,8.588940759587866e-9,8.596243283499397e-9,8.597666513217653e-9,8.682433736372788e-9,8.50707099493415e-9,8.594125551565054e-9,8.75142666071847e-9,8.526081447031542e-9,8.646903823049171e-9,8.567287336017251e-9,8.586196128849053e-9,8.471864628015151e-9,8.564139631481192e-9,8.501402464710856e-9,9.852342365342141e-9,8.49390731720864e-9,1.0004852163188471e-8,8.695151383543232e-9,8.570379871695307e-9],\"variance\":1.501709438584767e-19},\"times\":{\"cycle\":0.05209880154427981,\"elapsed\":5.571,\"period\":8.71605995988844e-9,\"timeStamp\":1696975241001},\"running\":false,\"count\":5977334,\"cycles\":8,\"hz\":114730738.95797285},\"aborted\":false},{\"timeStamp\":1696975252020,\"currentTarget\":{\"0\":{\"name\":\"Using super\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":1,\"stats\":{\"moe\":7.792686841058934e-11,\"rme\":0.8940607197427628,\"sem\":3.975860633193334e-11,\"deviation\":3.875189593535737e-10,\"mean\":8.71605995988844e-9,\"sample\":[9.529007423373075e-9,8.63259489030646e-9,8.878036329294014e-9,8.514976527722736e-9,8.535630471280495e-9,8.816791027011035e-9,8.494295813891704e-9,8.564186728416764e-9,8.536704840285669e-9,8.53014781765513e-9,8.480385437716841e-9,8.504190818507883e-9,8.52982572721532e-9,8.51449229075431e-9,8.52250626009286e-9,8.571218160953387e-9,8.500107335241252e-9,8.525335945750549e-9,8.6130678919545e-9,8.757221238857085e-9,8.508697543183586e-9,8.647666098108984e-9,8.75727206848988e-9,9.191544524470995e-9,8.496871351385421e-9,8.885956094379784e-9,8.488416519698431e-9,8.528792360780601e-9,8.561001404761619e-9,8.505817197325209e-9,8.613745620391764e-9,8.530164760866063e-9,8.49707450048449e-9,8.50312322678708e-9,8.784415092402342e-9,8.53692510202778e-9,9.059268537863587e-9,9.480613323903872e-9,8.510442863341652e-9,8.540415403479695e-9,8.50791815548073e-9,8.516745568376107e-9,8.533248425255618e-9,8.524844592633532e-9,8.51052757939631e-9,8.530994978201712e-9,8.491449354455191e-9,8.510578239596996e-9,8.52982572721532e-9,8.520557960267832e-9,8.54088981338578e-9,8.538043353949268e-9,8.912167411123117e-9,8.649919714595e-9,8.528927906468053e-9,1.0097686421490498e-8,1.0050686123798282e-8,8.503512920638508e-9,8.613220380852885e-9,8.59514214422095e-9,8.586822858221413e-9,8.890479762266419e-9,8.573895188280584e-9,8.616439760362002e-9,8.576114748912628e-9,8.754933905381316e-9,8.570286284352149e-9,8.589364509293267e-9,9.088190598923869e-9,8.597260045587404e-9,8.599293230899198e-9,8.647479722788739e-9,9.434917484021281e-9,9.482239872153308e-9,1.024951504294511e-8,8.584213773170052e-9,8.588940759587866e-9,8.596243283499397e-9,8.597666513217653e-9,8.682433736372788e-9,8.50707099493415e-9,8.594125551565054e-9,8.75142666071847e-9,8.526081447031542e-9,8.646903823049171e-9,8.567287336017251e-9,8.586196128849053e-9,8.471864628015151e-9,8.564139631481192e-9,8.501402464710856e-9,9.852342365342141e-9,8.49390731720864e-9,1.0004852163188471e-8,8.695151383543232e-9,8.570379871695307e-9],\"variance\":1.501709438584767e-19},\"times\":{\"cycle\":0.05209880154427981,\"elapsed\":5.571,\"period\":8.71605995988844e-9,\"timeStamp\":1696975241001},\"running\":false,\"count\":5977334,\"cycles\":8,\"hz\":114730738.95797285},\"1\":{\"name\":\"Using this\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":2,\"stats\":{\"moe\":2.6655827579954115e-11,\"rme\":0.32035509458777617,\"sem\":1.3599912030588835e-11,\"deviation\":1.3255554566964263e-10,\"mean\":8.320712868404379e-9,\"sample\":[8.279502744159388e-9,8.092565957940669e-9,8.044892795936153e-9,8.516229500779191e-9,8.370319640032636e-9,8.373037813808694e-9,8.384133705818485e-9,8.057267753307304e-9,8.372526187664149e-9,8.377770195762552e-9,8.40656531459332e-9,8.354171439845475e-9,8.298436166724252e-9,8.061936341876264e-9,8.360135241975983e-9,8.3644519276874e-9,8.347648366385714e-9,8.337143882222383e-9,8.008151483547942e-9,8.064062788039523e-9,8.371822541832233e-9,8.361206459216122e-9,8.368369065356562e-9,8.392991233445897e-9,8.375595944531412e-9,8.38325434838255e-9,8.380744182610882e-9,8.377194776233111e-9,8.360119093775797e-9,8.34029358067473e-9,8.338151146194452e-9,8.008759039594588e-9,8.347008833705036e-9,8.47756959034894e-9,8.368001334065172e-9,8.365555281444743e-9,8.003706731417219e-9,8.391552284914368e-9,8.369648290601093e-9,8.372909907272558e-9,8.067468299564143e-9,8.372158456372759e-9,8.12032583550548e-9,8.366738416904e-9,8.358951946633556e-9,8.373021825491677e-9,8.383877892746212e-9,8.133564161995546e-9,8.3644519276874e-9,8.198348982431558e-9,8.346688907481525e-9,8.382008218954246e-9,8.36861144824254e-9,8.065456009984384e-9,8.385591040914583e-9,8.35937004112355e-9,8.370657952820714e-9,8.849317466740703e-9,8.047677001461492e-9,8.371233532233327e-9,8.349745074279322e-9,8.378396138373767e-9,8.390691314043002e-9,8.363606945133052e-9,8.38954015521778e-9,8.365397636638955e-9,8.356268307622254e-9,8.264367301525429e-9,8.368947043016727e-9,8.025581147344012e-9,8.372640344247652e-9,8.374590918923724e-9,8.32075825552752e-9,8.382888855455542e-9,8.355197250265287e-9,8.423675212049051e-9,8.378987865986566e-9,8.36266363442905e-9,8.388628821147811e-9,8.352399134904142e-9,8.357211618326257e-9,8.346602658387926e-9,8.389224471369795e-9,8.353243200703403e-9,8.345325440688795e-9,7.98506640223051e-9,8.36221469325544e-9,8.342308550638067e-9,8.371696849401969e-9,8.36958970359163e-9,8.37310161327553e-9,8.281472537345168e-9,8.361288826156959e-9,8.386351090719332e-9,8.367131207180643e-9],\"variance\":1.757097268777671e-20},\"times\":{\"cycle\":0.05212425705140666,\"elapsed\":5.437,\"period\":8.320712868404379e-9,\"timeStamp\":1696975246583},\"running\":false,\"count\":6264398,\"cycles\":7,\"hz\":120182010.34159288},\"options\":{},\"events\":{\"start\":[null],\"cycle\":[null,null],\"complete\":[null,null]},\"length\":2,\"running\":false},\"type\":\"cycle\",\"target\":{\"name\":\"Using this\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":2,\"stats\":{\"moe\":2.6655827579954115e-11,\"rme\":0.32035509458777617,\"sem\":1.3599912030588835e-11,\"deviation\":1.3255554566964263e-10,\"mean\":8.320712868404379e-9,\"sample\":[8.279502744159388e-9,8.092565957940669e-9,8.044892795936153e-9,8.516229500779191e-9,8.370319640032636e-9,8.373037813808694e-9,8.384133705818485e-9,8.057267753307304e-9,8.372526187664149e-9,8.377770195762552e-9,8.40656531459332e-9,8.354171439845475e-9,8.298436166724252e-9,8.061936341876264e-9,8.360135241975983e-9,8.3644519276874e-9,8.347648366385714e-9,8.337143882222383e-9,8.008151483547942e-9,8.064062788039523e-9,8.371822541832233e-9,8.361206459216122e-9,8.368369065356562e-9,8.392991233445897e-9,8.375595944531412e-9,8.38325434838255e-9,8.380744182610882e-9,8.377194776233111e-9,8.360119093775797e-9,8.34029358067473e-9,8.338151146194452e-9,8.008759039594588e-9,8.347008833705036e-9,8.47756959034894e-9,8.368001334065172e-9,8.365555281444743e-9,8.003706731417219e-9,8.391552284914368e-9,8.369648290601093e-9,8.372909907272558e-9,8.067468299564143e-9,8.372158456372759e-9,8.12032583550548e-9,8.366738416904e-9,8.358951946633556e-9,8.373021825491677e-9,8.383877892746212e-9,8.133564161995546e-9,8.3644519276874e-9,8.198348982431558e-9,8.346688907481525e-9,8.382008218954246e-9,8.36861144824254e-9,8.065456009984384e-9,8.385591040914583e-9,8.35937004112355e-9,8.370657952820714e-9,8.849317466740703e-9,8.047677001461492e-9,8.371233532233327e-9,8.349745074279322e-9,8.378396138373767e-9,8.390691314043002e-9,8.363606945133052e-9,8.38954015521778e-9,8.365397636638955e-9,8.356268307622254e-9,8.264367301525429e-9,8.368947043016727e-9,8.025581147344012e-9,8.372640344247652e-9,8.374590918923724e-9,8.32075825552752e-9,8.382888855455542e-9,8.355197250265287e-9,8.423675212049051e-9,8.378987865986566e-9,8.36266363442905e-9,8.388628821147811e-9,8.352399134904142e-9,8.357211618326257e-9,8.346602658387926e-9,8.389224471369795e-9,8.353243200703403e-9,8.345325440688795e-9,7.98506640223051e-9,8.36221469325544e-9,8.342308550638067e-9,8.371696849401969e-9,8.36958970359163e-9,8.37310161327553e-9,8.281472537345168e-9,8.361288826156959e-9,8.386351090719332e-9,8.367131207180643e-9],\"variance\":1.757097268777671e-20},\"times\":{\"cycle\":0.05212425705140666,\"elapsed\":5.437,\"period\":8.320712868404379e-9,\"timeStamp\":1696975246583},\"running\":false,\"count\":6264398,\"cycles\":7,\"hz\":120182010.34159288},\"aborted\":false}]"}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,304,485|89|
|Date.now()|14,687,191|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 10 2023 22:05:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":"[{\"timeStamp\":1696975495049,\"currentTarget\":{\"0\":{\"name\":\"new Date().getTime()\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":1,\"stats\":{\"moe\":1.2837560663842291e-9,\"rme\":0.9377176776121354,\"sem\":6.549775848899129e-10,\"deviation\":6.17904617777144e-9,\"mean\":1.3690219316897897e-7,\"sample\":[1.4777086936731907e-7,1.4831325414421425e-7,1.4075786478781736e-7,1.3797969849681678e-7,1.2815636493940284e-7,1.299810721918632e-7,1.430678432024981e-7,1.384045841385224e-7,1.4028867530938456e-7,1.3530060789106593e-7,1.3250932233866353e-7,1.368015286508061e-7,1.3235002456579326e-7,1.3753318914647798e-7,1.3757877515461255e-7,1.3618484619787367e-7,1.353680918203506e-7,1.292605366992691e-7,1.324262545016183e-7,1.4138497890380845e-7,1.2977996900151448e-7,1.4056797380324066e-7,1.3584750720512184e-7,1.3702262079025876e-7,1.3629678770596013e-7,1.2790510512639988e-7,1.306114122038809e-7,1.3777606380015094e-7,1.364598868453976e-7,1.3217552892432218e-7,1.3236268734583067e-7,1.3259137968586177e-7,1.413568700646815e-7,1.3533010348023847e-7,1.3723915939401e-7,1.4227593970490658e-7,1.3649382056334177e-7,1.3507456604652813e-7,1.4324743578704242e-7,1.4174283413277684e-7,1.380518591493651e-7,1.4512128663975403e-7,1.3958660075267564e-7,1.328284269281615e-7,1.325592162245668e-7,1.4384689685912405e-7,1.3586346230796894e-7,1.407298041321184e-7,1.3596780614803296e-7,1.341628408187247e-7,1.3308295133946887e-7,1.3824053710447806e-7,1.5068205785370944e-7,1.4177119876006057e-7,1.3701122428822514e-7,1.428733747321822e-7,1.3999763712524503e-7,1.4252134691458702e-7,1.3787179441723353e-7,1.3635301044932608e-7,1.3194937167285455e-7,1.344583926373532e-7,1.372232042911629e-7,1.3583965628149867e-7,1.3353121628534816e-7,1.3179057787862978e-7,1.3551472681318346e-7,1.3583155463483075e-7,1.3323617097792116e-7,1.514046011477544e-7,1.3691549620369854e-7,1.3546027939157876e-7,1.5267139579291795e-7,1.3137346337164246e-7,1.3473368147536582e-7,1.2865525328092629e-7,1.3850417618485632e-7,1.4604162255798286e-7,1.5914820011244548e-7,1.4610316620152056e-7,1.4137561097913678e-7,1.302912945919799e-7,1.3390147850619718e-7,1.300795729097549e-7,1.2664717442726246e-7,1.2804819454082228e-7,1.2692373207583485e-7,1.2674923643436374e-7,1.2719332337565347e-7],\"variance\":3.818061166703184e-17},\"times\":{\"cycle\":0.05499361099597885,\"elapsed\":5.578,\"period\":1.3690219316897897e-7,\"timeStamp\":1696975489471},\"running\":false,\"count\":401700,\"cycles\":5,\"hz\":7304484.879695796},\"1\":{\"name\":\"Date.now()\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":2,\"stats\":{\"moe\":8.859314751552122e-10,\"rme\":1.3011844713877592,\"sem\":4.520058546710266e-10,\"deviation\":4.240190768562884e-9,\"mean\":6.808653919842242e-8,\"sample\":[6.929531687791861e-8,7.986739095905207e-8,7.925847199720449e-8,6.725826106293084e-8,6.582491438736936e-8,6.408812605228883e-8,6.799882334254583e-8,6.93491940658852e-8,7.001986848375106e-8,6.658098033609707e-8,6.791991359318911e-8,6.820696464309539e-8,6.556010165507164e-8,6.565883541408559e-8,6.694122303758061e-8,6.682711394898185e-8,6.857546681914927e-8,6.626305155818165e-8,6.556022872391118e-8,6.76066863623368e-8,6.896480828488834e-8,6.96526458909114e-8,6.647082690047333e-8,6.825832332666222e-8,6.673424314622446e-8,6.679422090917754e-8,6.698546078337939e-8,6.880980844372439e-8,6.916077639060962e-8,6.901184916928747e-8,6.810774548111439e-8,7.387343054099558e-8,6.875186378220401e-8,6.79717792814257e-8,7.085995997331554e-8,6.7682059785889e-8,6.82597210838972e-8,6.855998729311605e-8,8.207263763143683e-8,6.789973124940436e-8,6.719144191365673e-8,6.654808475491598e-8,7.03810311636329e-8,9.194497919247753e-8,6.496618825248579e-8,6.364592776136472e-8,6.595161726865529e-8,7.043414720925061e-8,6.421304234569078e-8,6.526251405699038e-8,6.518830585469678e-8,6.406538963594006e-8,6.506645514674194e-8,6.507719769409971e-8,6.40014327560255e-8,6.575248671234331e-8,6.467709651429321e-8,6.933848341852967e-8,6.476081264588098e-8,6.397544071656368e-8,6.493948649894293e-8,6.33491663223913e-8,7.040605082852881e-8,6.309123195006148e-8,6.977274148209625e-8,7.093687440466924e-8,7.342512470532276e-8,6.752452609525537e-8,6.738035828338787e-8,6.98746155251231e-8,6.480163486869929e-8,6.437734500559626e-8,6.827699599006035e-8,6.640109326327688e-8,6.945118134464763e-8,6.994081446765629e-8,6.876282757749874e-8,6.496615395177038e-8,6.675648718989166e-8,7.15996067292451e-8,6.510198682641043e-8,6.669249487877625e-8,6.75495345846568e-8,6.558781841384882e-8,6.681643523598085e-8,7.445195366564386e-8,6.992095355898999e-8,6.347506812974503e-8],\"variance\":1.79792177538059e-17},\"times\":{\"cycle\":0.05553975601455473,\"elapsed\":5.315,\"period\":6.808653919842242e-8,\"timeStamp\":1696975495067},\"running\":false,\"count\":815723,\"cycles\":4,\"hz\":14687190.915751087},\"options\":{},\"events\":{\"start\":[null],\"cycle\":[null,null],\"complete\":[null,null]},\"length\":2,\"running\":false},\"type\":\"cycle\",\"target\":{\"name\":\"new Date().getTime()\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":1,\"stats\":{\"moe\":1.2837560663842291e-9,\"rme\":0.9377176776121354,\"sem\":6.549775848899129e-10,\"deviation\":6.17904617777144e-9,\"mean\":1.3690219316897897e-7,\"sample\":[1.4777086936731907e-7,1.4831325414421425e-7,1.4075786478781736e-7,1.3797969849681678e-7,1.2815636493940284e-7,1.299810721918632e-7,1.430678432024981e-7,1.384045841385224e-7,1.4028867530938456e-7,1.3530060789106593e-7,1.3250932233866353e-7,1.368015286508061e-7,1.3235002456579326e-7,1.3753318914647798e-7,1.3757877515461255e-7,1.3618484619787367e-7,1.353680918203506e-7,1.292605366992691e-7,1.324262545016183e-7,1.4138497890380845e-7,1.2977996900151448e-7,1.4056797380324066e-7,1.3584750720512184e-7,1.3702262079025876e-7,1.3629678770596013e-7,1.2790510512639988e-7,1.306114122038809e-7,1.3777606380015094e-7,1.364598868453976e-7,1.3217552892432218e-7,1.3236268734583067e-7,1.3259137968586177e-7,1.413568700646815e-7,1.3533010348023847e-7,1.3723915939401e-7,1.4227593970490658e-7,1.3649382056334177e-7,1.3507456604652813e-7,1.4324743578704242e-7,1.4174283413277684e-7,1.380518591493651e-7,1.4512128663975403e-7,1.3958660075267564e-7,1.328284269281615e-7,1.325592162245668e-7,1.4384689685912405e-7,1.3586346230796894e-7,1.407298041321184e-7,1.3596780614803296e-7,1.341628408187247e-7,1.3308295133946887e-7,1.3824053710447806e-7,1.5068205785370944e-7,1.4177119876006057e-7,1.3701122428822514e-7,1.428733747321822e-7,1.3999763712524503e-7,1.4252134691458702e-7,1.3787179441723353e-7,1.3635301044932608e-7,1.3194937167285455e-7,1.344583926373532e-7,1.372232042911629e-7,1.3583965628149867e-7,1.3353121628534816e-7,1.3179057787862978e-7,1.3551472681318346e-7,1.3583155463483075e-7,1.3323617097792116e-7,1.514046011477544e-7,1.3691549620369854e-7,1.3546027939157876e-7,1.5267139579291795e-7,1.3137346337164246e-7,1.3473368147536582e-7,1.2865525328092629e-7,1.3850417618485632e-7,1.4604162255798286e-7,1.5914820011244548e-7,1.4610316620152056e-7,1.4137561097913678e-7,1.302912945919799e-7,1.3390147850619718e-7,1.300795729097549e-7,1.2664717442726246e-7,1.2804819454082228e-7,1.2692373207583485e-7,1.2674923643436374e-7,1.2719332337565347e-7],\"variance\":3.818061166703184e-17},\"times\":{\"cycle\":0.05499361099597885,\"elapsed\":5.578,\"period\":1.3690219316897897e-7,\"timeStamp\":1696975489471},\"running\":false,\"count\":401700,\"cycles\":5,\"hz\":7304484.879695796},\"aborted\":false},{\"timeStamp\":1696975500382,\"currentTarget\":{\"0\":{\"name\":\"new Date().getTime()\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":1,\"stats\":{\"moe\":1.2837560663842291e-9,\"rme\":0.9377176776121354,\"sem\":6.549775848899129e-10,\"deviation\":6.17904617777144e-9,\"mean\":1.3690219316897897e-7,\"sample\":[1.4777086936731907e-7,1.4831325414421425e-7,1.4075786478781736e-7,1.3797969849681678e-7,1.2815636493940284e-7,1.299810721918632e-7,1.430678432024981e-7,1.384045841385224e-7,1.4028867530938456e-7,1.3530060789106593e-7,1.3250932233866353e-7,1.368015286508061e-7,1.3235002456579326e-7,1.3753318914647798e-7,1.3757877515461255e-7,1.3618484619787367e-7,1.353680918203506e-7,1.292605366992691e-7,1.324262545016183e-7,1.4138497890380845e-7,1.2977996900151448e-7,1.4056797380324066e-7,1.3584750720512184e-7,1.3702262079025876e-7,1.3629678770596013e-7,1.2790510512639988e-7,1.306114122038809e-7,1.3777606380015094e-7,1.364598868453976e-7,1.3217552892432218e-7,1.3236268734583067e-7,1.3259137968586177e-7,1.413568700646815e-7,1.3533010348023847e-7,1.3723915939401e-7,1.4227593970490658e-7,1.3649382056334177e-7,1.3507456604652813e-7,1.4324743578704242e-7,1.4174283413277684e-7,1.380518591493651e-7,1.4512128663975403e-7,1.3958660075267564e-7,1.328284269281615e-7,1.325592162245668e-7,1.4384689685912405e-7,1.3586346230796894e-7,1.407298041321184e-7,1.3596780614803296e-7,1.341628408187247e-7,1.3308295133946887e-7,1.3824053710447806e-7,1.5068205785370944e-7,1.4177119876006057e-7,1.3701122428822514e-7,1.428733747321822e-7,1.3999763712524503e-7,1.4252134691458702e-7,1.3787179441723353e-7,1.3635301044932608e-7,1.3194937167285455e-7,1.344583926373532e-7,1.372232042911629e-7,1.3583965628149867e-7,1.3353121628534816e-7,1.3179057787862978e-7,1.3551472681318346e-7,1.3583155463483075e-7,1.3323617097792116e-7,1.514046011477544e-7,1.3691549620369854e-7,1.3546027939157876e-7,1.5267139579291795e-7,1.3137346337164246e-7,1.3473368147536582e-7,1.2865525328092629e-7,1.3850417618485632e-7,1.4604162255798286e-7,1.5914820011244548e-7,1.4610316620152056e-7,1.4137561097913678e-7,1.302912945919799e-7,1.3390147850619718e-7,1.300795729097549e-7,1.2664717442726246e-7,1.2804819454082228e-7,1.2692373207583485e-7,1.2674923643436374e-7,1.2719332337565347e-7],\"variance\":3.818061166703184e-17},\"times\":{\"cycle\":0.05499361099597885,\"elapsed\":5.578,\"period\":1.3690219316897897e-7,\"timeStamp\":1696975489471},\"running\":false,\"count\":401700,\"cycles\":5,\"hz\":7304484.879695796},\"1\":{\"name\":\"Date.now()\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":2,\"stats\":{\"moe\":8.859314751552122e-10,\"rme\":1.3011844713877592,\"sem\":4.520058546710266e-10,\"deviation\":4.240190768562884e-9,\"mean\":6.808653919842242e-8,\"sample\":[6.929531687791861e-8,7.986739095905207e-8,7.925847199720449e-8,6.725826106293084e-8,6.582491438736936e-8,6.408812605228883e-8,6.799882334254583e-8,6.93491940658852e-8,7.001986848375106e-8,6.658098033609707e-8,6.791991359318911e-8,6.820696464309539e-8,6.556010165507164e-8,6.565883541408559e-8,6.694122303758061e-8,6.682711394898185e-8,6.857546681914927e-8,6.626305155818165e-8,6.556022872391118e-8,6.76066863623368e-8,6.896480828488834e-8,6.96526458909114e-8,6.647082690047333e-8,6.825832332666222e-8,6.673424314622446e-8,6.679422090917754e-8,6.698546078337939e-8,6.880980844372439e-8,6.916077639060962e-8,6.901184916928747e-8,6.810774548111439e-8,7.387343054099558e-8,6.875186378220401e-8,6.79717792814257e-8,7.085995997331554e-8,6.7682059785889e-8,6.82597210838972e-8,6.855998729311605e-8,8.207263763143683e-8,6.789973124940436e-8,6.719144191365673e-8,6.654808475491598e-8,7.03810311636329e-8,9.194497919247753e-8,6.496618825248579e-8,6.364592776136472e-8,6.595161726865529e-8,7.043414720925061e-8,6.421304234569078e-8,6.526251405699038e-8,6.518830585469678e-8,6.406538963594006e-8,6.506645514674194e-8,6.507719769409971e-8,6.40014327560255e-8,6.575248671234331e-8,6.467709651429321e-8,6.933848341852967e-8,6.476081264588098e-8,6.397544071656368e-8,6.493948649894293e-8,6.33491663223913e-8,7.040605082852881e-8,6.309123195006148e-8,6.977274148209625e-8,7.093687440466924e-8,7.342512470532276e-8,6.752452609525537e-8,6.738035828338787e-8,6.98746155251231e-8,6.480163486869929e-8,6.437734500559626e-8,6.827699599006035e-8,6.640109326327688e-8,6.945118134464763e-8,6.994081446765629e-8,6.876282757749874e-8,6.496615395177038e-8,6.675648718989166e-8,7.15996067292451e-8,6.510198682641043e-8,6.669249487877625e-8,6.75495345846568e-8,6.558781841384882e-8,6.681643523598085e-8,7.445195366564386e-8,6.992095355898999e-8,6.347506812974503e-8],\"variance\":1.79792177538059e-17},\"times\":{\"cycle\":0.05553975601455473,\"elapsed\":5.315,\"period\":6.808653919842242e-8,\"timeStamp\":1696975495067},\"running\":false,\"count\":815723,\"cycles\":4,\"hz\":14687190.915751087},\"options\":{},\"events\":{\"start\":[null],\"cycle\":[null,null],\"complete\":[null,null]},\"length\":2,\"running\":false},\"type\":\"cycle\",\"target\":{\"name\":\"Date.now()\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":2,\"stats\":{\"moe\":8.859314751552122e-10,\"rme\":1.3011844713877592,\"sem\":4.520058546710266e-10,\"deviation\":4.240190768562884e-9,\"mean\":6.808653919842242e-8,\"sample\":[6.929531687791861e-8,7.986739095905207e-8,7.925847199720449e-8,6.725826106293084e-8,6.582491438736936e-8,6.408812605228883e-8,6.799882334254583e-8,6.93491940658852e-8,7.001986848375106e-8,6.658098033609707e-8,6.791991359318911e-8,6.820696464309539e-8,6.556010165507164e-8,6.565883541408559e-8,6.694122303758061e-8,6.682711394898185e-8,6.857546681914927e-8,6.626305155818165e-8,6.556022872391118e-8,6.76066863623368e-8,6.896480828488834e-8,6.96526458909114e-8,6.647082690047333e-8,6.825832332666222e-8,6.673424314622446e-8,6.679422090917754e-8,6.698546078337939e-8,6.880980844372439e-8,6.916077639060962e-8,6.901184916928747e-8,6.810774548111439e-8,7.387343054099558e-8,6.875186378220401e-8,6.79717792814257e-8,7.085995997331554e-8,6.7682059785889e-8,6.82597210838972e-8,6.855998729311605e-8,8.207263763143683e-8,6.789973124940436e-8,6.719144191365673e-8,6.654808475491598e-8,7.03810311636329e-8,9.194497919247753e-8,6.496618825248579e-8,6.364592776136472e-8,6.595161726865529e-8,7.043414720925061e-8,6.421304234569078e-8,6.526251405699038e-8,6.518830585469678e-8,6.406538963594006e-8,6.506645514674194e-8,6.507719769409971e-8,6.40014327560255e-8,6.575248671234331e-8,6.467709651429321e-8,6.933848341852967e-8,6.476081264588098e-8,6.397544071656368e-8,6.493948649894293e-8,6.33491663223913e-8,7.040605082852881e-8,6.309123195006148e-8,6.977274148209625e-8,7.093687440466924e-8,7.342512470532276e-8,6.752452609525537e-8,6.738035828338787e-8,6.98746155251231e-8,6.480163486869929e-8,6.437734500559626e-8,6.827699599006035e-8,6.640109326327688e-8,6.945118134464763e-8,6.994081446765629e-8,6.876282757749874e-8,6.496615395177038e-8,6.675648718989166e-8,7.15996067292451e-8,6.510198682641043e-8,6.669249487877625e-8,6.75495345846568e-8,6.558781841384882e-8,6.681643523598085e-8,7.445195366564386e-8,6.992095355898999e-8,6.347506812974503e-8],\"variance\":1.79792177538059e-17},\"times\":{\"cycle\":0.05553975601455473,\"elapsed\":5.315,\"period\":6.808653919842242e-8,\"timeStamp\":1696975495067},\"running\":false,\"count\":815723,\"cycles\":4,\"hz\":14687190.915751087},\"aborted\":false}]"}-->
