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

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|593,361,548|94|
|[async] - function|124,743,997|94|
|[async] - await function|742,143|25|
|[async] - await async function|254,941|31|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Oct 26 2023 23:42:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"function","opsSec":593361548.1003458,"samples":7},{"name":"[async] - function","opsSec":124743996.81434906,"samples":6},{"name":"[async] - await function","opsSec":742143.4317052788,"samples":3},{"name":"[async] - await async function","opsSec":254941.1100040912,"samples":3}]}-->

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

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|5,952,269|88|
|Raw usage underscore usage|4,940,994|93|
|Manipulating private properties using #|1,822,589|88|
|Manipulating private properties using underscore(_)|569,105,188|96|
|Manipulating private properties using Symbol|560,716,065|94|
|Manipulating private properties using PrivateSymbol|21,085,129|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:22:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Raw usage private field","opsSec":5952268.794462701,"samples":6},{"name":"Raw usage underscore usage","opsSec":4940993.5090916855,"samples":6},{"name":"Manipulating private properties using #","opsSec":1822588.7330868833,"samples":5},{"name":"Manipulating private properties using underscore(_)","opsSec":569105187.77393,"samples":8},{"name":"Manipulating private properties using Symbol","opsSec":560716065.2364923,"samples":8},{"name":"Manipulating private properties using PrivateSymbol","opsSec":21085129.281573337,"samples":7}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,735,647|97|
|Adding property in the object creation - small object|1,740,432|97|
|Adding property after the function creation - small class|153,113|86|
|Adding property in the function creation - small class|153,862|87|
|Adding property after the class creation - small class|130,334|85|
|Adding property in the class creation - small class|130,219|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:27:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":1735646.5997568844,"samples":7},{"name":"Adding property in the object creation - small object","opsSec":1740432.3713283255,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":153112.6085991084,"samples":5},{"name":"Adding property in the function creation - small class","opsSec":153862.1011504004,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":130333.61874019098,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":130218.65911394333,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|597,355,185|88|
|Getter|46,788,213|88|
|Method|598,021,200|90|
|DefineProperty (getter)|602,062,995|88|
|DefineProperty (getter & enumerable=false)|47,521,007|87|
|DefineProperty (getter & configurable=false)|595,931,760|90|
|DefineProperty (getter & enumerable=false & configurable=false)|48,524,310|86|
|DefineProperty (writable)|596,854,672|89|
|DefineProperty (writable & enumerable=false)|138,081,423|22|
|DefineProperty (writable & enumerable=false & configurable=false)|74,219,188|81|
|DefineProperties (getter)|30,724,983|84|
|DefineProperties (getter & enumerable=false)|30,061,715|84|
|DefineProperties (getter & enumerable=false & configurable=false)|47,593,380|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:32:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":597355184.5034064,"samples":7},{"name":"Getter","opsSec":46788213.466746,"samples":5},{"name":"Method","opsSec":598021200.0679028,"samples":6},{"name":"DefineProperty (getter)","opsSec":602062994.6004039,"samples":8},{"name":"DefineProperty (getter & enumerable=false)","opsSec":47521006.70719235,"samples":8},{"name":"DefineProperty (getter & configurable=false)","opsSec":595931759.501273,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":48524309.67562897,"samples":8},{"name":"DefineProperty (writable)","opsSec":596854671.9080957,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":138081423.22967803,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":74219188.08135727,"samples":7},{"name":"DefineProperties (getter)","opsSec":30724982.80748173,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":30061715.04541202,"samples":8},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":47593379.67963806,"samples":7}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|567,554,979|90|
|Setter|5,466,843|96|
|Method|295,771,994|99|
|DefineProperty (setter)|573,802,522|92|
|DefineProperty (setter & enumerable=false)|5,288,606|97|
|DefineProperty (setter & configurable=false)|5,447,139|99|
|DefineProperty (setter & enumerable=false & configurable=false)|5,498,679|93|
|DefineProperty (writable)|586,339,496|96|
|DefineProperty (writable & enumerable=false)|197,881,183|34|
|DefineProperty (writable & enumerable=false & configurable=false)|67,109,775|80|
|DefineProperties (setter)|47,779,715|83|
|DefineProperties (setter & enumerable=false)|5,414,581|99|
|DefineProperties (setter & enumerable=false & configurable=false)|5,417,934|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:36:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":567554978.6284537,"samples":11},{"name":"Setter","opsSec":5466842.578243825,"samples":5},{"name":"Method","opsSec":295771993.5789944,"samples":7},{"name":"DefineProperty (setter)","opsSec":573802521.8954552,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5288605.915633083,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":5447138.701383205,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5498678.774423502,"samples":6},{"name":"DefineProperty (writable)","opsSec":586339495.897133,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":197881182.5796395,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":67109774.66272949,"samples":4},{"name":"DefineProperties (setter)","opsSec":47779715.3697129,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5414581.269331962,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5417934.434488867,"samples":7}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,447,508|77|
|Using replaceAll()|1,150,890|68|
|Using replaceAll(//g)|1,134,447|70|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:39:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using replace(//g)","opsSec":1447508.2362232364,"samples":5},{"name":"Using replaceAll()","opsSec":1150890.1886325274,"samples":3},{"name":"Using replaceAll(//g)","opsSec":1134447.0244331753,"samples":6}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,345,117|94|
|{ ...object, __proto__: null }|13,572,197|95|
|{ ...object, newProp: true }|463,111|85|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|137,288|99|
|loop + object.keys starting with {}|306,263|91|
|loop + object.keys starting with { __proto__: null }|419,911|93|
|loop + object.keys starting with { randomProp: true }|323,626|92|
|object.keys + reduce(FN, {})|314,973|97|
|object.keys + reduce(FN, { __proto__: null })|419,162|97|
|object.keys + reduce(FN, { newProp: true })|323,474|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:44:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":13345117.16148596,"samples":9},{"name":"{ ...object, __proto__: null }","opsSec":13572197.461420244,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":463110.5407541469,"samples":3},{"name":"structuredClone","opsSec":0,"samples":0},{"name":"JSON.parse + JSON.stringify","opsSec":137287.9788915144,"samples":4},{"name":"loop + object.keys starting with {}","opsSec":306262.50143285166,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":419911.2478145471,"samples":7},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":323625.98222581093,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":314972.96820378845,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":419161.71170925687,"samples":9},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":323473.8309314779,"samples":5}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|171,898|93|
|Sort using first char|784,853|93|
|Sort using localeCompare|417,707|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:47:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Sort using default","opsSec":171897.8144577827,"samples":5},{"name":"Sort using first char","opsSec":784853.2573346342,"samples":6},{"name":"Sort using localeCompare","opsSec":417707.32200125844,"samples":7}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,176|93|
|{...smallObject} - Total keys: 2|51,399,344|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,337|95|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,689|98|
|{ ...bigObject, ...anotherBigObject }|757|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,152,008|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|18,234,540|97|
|{ ...smallObject, ...anotherSmallObject }|12,275,395|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:51:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1176.2835912808152,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":51399344.0043578,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1336.8796763095975,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3689.4915147304073,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":757.4268855906447,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8152008.211484661,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":18234540.25024413,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":12275395.115754193,"samples":5}]}-->



## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|701,265,227|94|
|Using backtick (`)|708,273,160|95|
|Using array.join|6,259,799|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:05:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using + sign","opsSec":701265226.7398936,"samples":7},{"name":"Using backtick (`)","opsSec":708273160.021701,"samples":7},{"name":"Using array.join","opsSec":6259799.00117586,"samples":7}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|11,777,248|96|
|Using indexof|593,109,272|99|
|Using RegExp.test|11,049,768|95|
|Using RegExp.text with cached regex pattern|11,550,026|99|
|Using new RegExp.test|3,435,098|95|
|Using new RegExp.test with cached regex pattern|4,150,370|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:07:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":11777248.430725597,"samples":6},{"name":"Using indexof","opsSec":593109271.925809,"samples":9},{"name":"Using RegExp.test","opsSec":11049768.35825118,"samples":8},{"name":"Using RegExp.text with cached regex pattern","opsSec":11550026.21015568,"samples":7},{"name":"Using new RegExp.test","opsSec":3435098.48130961,"samples":7},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4150370.189549999,"samples":5}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|145,025,282|84|
|Using this|149,231,697|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:13:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using super","opsSec":145025281.90089834,"samples":6},{"name":"Using this","opsSec":149231697.0415118,"samples":6}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,299,295|96|
|Date.now()|14,736,393|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:17:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":7299295.432304326,"samples":6},{"name":"Date.now()","opsSec":14736393.051506799,"samples":7}]}-->
