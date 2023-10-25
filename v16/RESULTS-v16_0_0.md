## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|587,189,594|88|
|Using dot notation|598,185,021|88|
|Using define property (writable)|2,433,001|86|
|Using define property initialized (writable)|2,989,161|87|
|Using define property (getter)|1,185,578|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":587189593.6648036,"samples":8},{"name":"Using dot notation","opsSec":598185021.4888043,"samples":6},{"name":"Using define property (writable)","opsSec":2433000.686322029,"samples":6},{"name":"Using define property initialized (writable)","opsSec":2989161.4318045694,"samples":5},{"name":"Using define property (getter)","opsSec":1185577.810211867,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.003ms
array.push|100|0.042ms
new Array(length)|100|0.013ms
array.push|1,000|0.063ms
new Array(length)|1,000|0.031ms
array.push|10,000|0.567ms
new Array(length)|10,000|0.321ms
array.push|1,000,000|33.942ms
new Array(length)|1,000,000|11.034ms
array.push|100,000,000|1,865.566ms
new Array(length)|100,000,000|5,077.103ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.003ms
array.push|100|0.018ms
new Array(length)|100|0.016ms
array.push|1,000|0.058ms
new Array(length)|1,000|0.028ms
array.push|10,000|0.496ms
new Array(length)|10,000|4.273ms
array.push|1,000,000|27.18ms
new Array(length)|1,000,000|10.47ms
array.push|100,000,000|2,844.735ms
new Array(length)|100,000,000|5,170.804ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|278|79|
|Array.from|13|35|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:38:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":277.6289633392329,"samples":3},{"name":"Array.from","opsSec":12.64800518139481,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,314|84|
|new Blob (1024)|699|74|
|text (128)|20,731|69|
|text (1024)|7,346|80|
|arrayBuffer (128)|24,375|76|
|arrayBuffer (1024)|8,194|80|
|slice (0, 64)|134,338|78|
|slice (0, 512)|19,045|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Blob (128)","opsSec":5314.200614788885,"samples":4},{"name":"new Blob (1024)","opsSec":699.4846922854346,"samples":2},{"name":"text (128)","opsSec":20731.236905487138,"samples":4},{"name":"text (1024)","opsSec":7345.922379043271,"samples":3},{"name":"arrayBuffer (128)","opsSec":24375.2132661492,"samples":3},{"name":"arrayBuffer (1024)","opsSec":8193.627211977077,"samples":3},{"name":"slice (0, 64)","opsSec":134338.32941512758,"samples":4},{"name":"slice (0, 512)","opsSec":19044.560854965643,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|254,550|85|
|[True conditional] Using constructor name|254,579|84|
|[True conditional] Check if property is valid then instanceof |255,270|84|
|[False conditional] Using instanceof only|590,636,256|96|
|[False conditional] Using constructor name|589,147,870|93|
|[False conditional] Check if property is valid then instanceof |587,849,055|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":254549.5448576256,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":254579.28932162066,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":255269.77407926583,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":590636256.3784001,"samples":9},{"name":"[False conditional] Using constructor name","opsSec":589147869.9516019,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":587849054.9755732,"samples":7}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|18,711|85|
|crypto.verify('RSA-SHA256')|18,284|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:45:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":18711.070962132133,"samples":5},{"name":"crypto.verify('RSA-SHA256')","opsSec":18283.839027042002,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,547,706|91|
|fromUnixToISOString(new Date())|1,304,655|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1547705.5252787154,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":1304654.9993029616,"samples":9}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,462|80|
|Intl.DateTimeFormat().format(new Date())|6,699|71|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,143|74|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,641|85|
|Reusing Intl.DateTimeFormat()|375,408|75|
|Date.toLocaleDateString()|469,992|87|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,528|78|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:49:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":7461.508680166917,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":6699.351997848606,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":8142.811670478267,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":10640.997367712687,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":375408.1042860747,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":469992.3769740235,"samples":3},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":9528.24627829317,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|486,788|85|
|Using brackets {}|511,469|88|
|Using '' + |514,367|87|
|Using date.toString()|551,078|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:52:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":486787.66894347506,"samples":7},{"name":"Using brackets {}","opsSec":511468.99826294504,"samples":3},{"name":"Using '' + ","opsSec":514366.7791661602,"samples":3},{"name":"Using date.toString()","opsSec":551077.5703787683,"samples":3}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,337,840|96|
|Using delete property (proto: null)|14,120,506|95|
|Using delete property (cached proto: null)|2,331,219|96|
|Using undefined assignment|596,346,540|99|
|Using undefined assignment (proto: null)|16,097,251|97|
|Using undefined property (cached proto: null)|593,776,355|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:54:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2337840.048281484,"samples":10},{"name":"Using delete property (proto: null)","opsSec":14120506.015389506,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":2331219.104710678,"samples":7},{"name":"Using undefined assignment","opsSec":596346540.2550994,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":16097250.940053742,"samples":7},{"name":"Using undefined property (cached proto: null)","opsSec":593776354.5069432,"samples":9}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|278,235|85|
|NodeError|282,875|84|
|NodeError Range|282,445|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:55:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Error","opsSec":278234.5424550009,"samples":4},{"name":"NodeError","opsSec":282874.9231994761,"samples":3},{"name":"NodeError Range","opsSec":282444.8445461997,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,229,192|98|
|Function returning explicitly undefined|1,218,897|92|
|Function returning implicitly undefined|1,247,926|95|
|Function returning string|1,223,366|97|
|Function returning integer|1,257,808|96|
|Function returning float|1,224,722|98|
|Function returning functions|1,188,170|93|
|Function returning arrow functions|1,209,923|98|
|Function returning empty object|1,229,750|98|
|Function returning empty array|1,224,270|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:58:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1229192.3658622648,"samples":7},{"name":"Function returning explicitly undefined","opsSec":1218897.0666742728,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1247926.0538724272,"samples":6},{"name":"Function returning string","opsSec":1223365.8214421738,"samples":7},{"name":"Function returning integer","opsSec":1257808.3604147849,"samples":7},{"name":"Function returning float","opsSec":1224721.9414767674,"samples":6},{"name":"Function returning functions","opsSec":1188170.446644452,"samples":7},{"name":"Function returning arrow functions","opsSec":1209923.3662787008,"samples":7},{"name":"Function returning empty object","opsSec":1229750.0963034616,"samples":7},{"name":"Function returning empty array","opsSec":1224269.8038920278,"samples":6}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|705,182,200|92|
|using Array.includes (first item)|705,516,505|95|
|Using raw comparison|705,238,982|96|
|Using raw comparison (first item)|706,551,637|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:01:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":705182200.3960431,"samples":8},{"name":"using Array.includes (first item)","opsSec":705516504.7455442,"samples":9},{"name":"Using raw comparison","opsSec":705238982.1986774,"samples":7},{"name":"Using raw comparison (first item)","opsSec":706551636.9561957,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|41,987,971|85|
|Using Object.getOwnPropertyNames()|52,949,107|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:03:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using Object.keys()","opsSec":41987971.433884956,"samples":6},{"name":"Using Object.getOwnPropertyNames()","opsSec":52949106.91820806,"samples":5}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|573,024,694|94|
|Length = 10_000 - Array[length - 1]|583,585,279|95|
|Length = 1_000_000 - Array[length - 1]|579,028,461|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:07:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":0,"samples":0},{"name":"Length = 10_000 - Array.at","opsSec":0,"samples":0},{"name":"Length = 1_000_000 - Array.at","opsSec":0,"samples":0},{"name":"Length = 100 - Array[length - 1]","opsSec":573024694.4021798,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":583585279.2478479,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":579028460.7195885,"samples":9}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|47,525,718|89|
|Object.create({})|1,285,906|83|
|Cached Empty.prototype|597,382,270|97|
|Empty.prototype|1,463,958|78|
|Empty class|846,156|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:09:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":47525718.287965804,"samples":6},{"name":"Object.create({})","opsSec":1285906.335072969,"samples":3},{"name":"Cached Empty.prototype","opsSec":597382270.2489673,"samples":7},{"name":"Empty.prototype","opsSec":1463957.7119818646,"samples":3},{"name":"Empty class","opsSec":846156.1576100177,"samples":4}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|595,176,998|92|
|Using optional chain (obj.field?.field2) (undefined)|588,533,232|91|
|Using and operator (obj.field && obj.field.field2) (Valid)|597,078,816|99|
|Using and operator (obj.field && obj.field.field2) (undefined)|596,286,920|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:13:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":595176998.3437189,"samples":8},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":588533232.0853472,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":597078815.7559959,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":596286919.5660444,"samples":9}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|137,143,385|84|
|Using parseInt(x, 10) - big number (10 len)|9,220,397|86|
|Using + - small number (2 len)|612,211,491|89|
|Using + - big number (10 len)|615,856,763|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:15:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":137143385.12864187,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":9220397.387174523,"samples":7},{"name":"Using + - small number (2 len)","opsSec":612211491.3404117,"samples":6},{"name":"Using + - big number (10 len)","opsSec":615856763.0827967,"samples":7}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|533,882|69|
|Using ? operator to avoid rejection|598,104|72|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:19:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":533881.9315873092,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":598103.9188501614,"samples":3}]}-->
