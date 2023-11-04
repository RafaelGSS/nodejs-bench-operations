## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|823,053,163|96|
|Using dot notation|822,264,416|100|
|Using define property (writable)|4,284,771|95|
|Using define property initialized (writable)|6,178,436|90|
|Using define property (getter)|2,432,254|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:01:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"Directly in the object","opsSec":823053162.6142813,"samples":8},{"name":"Using dot notation","opsSec":822264416.2285348,"samples":6},{"name":"Using define property (writable)","opsSec":4284771.00869299,"samples":4},{"name":"Using define property initialized (writable)","opsSec":6178436.146773968,"samples":4},{"name":"Using define property (getter)","opsSec":2432254.4320893977,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.022ms
new Array(length)|10|0.003ms
array.push|100|0.197ms
new Array(length)|100|0.019ms
array.push|1,000|0.059ms
new Array(length)|1,000|0.029ms
array.push|10,000|0.447ms
new Array(length)|10,000|0.242ms
array.push|1,000,000|34.581ms
new Array(length)|1,000,000|11.562ms
array.push|100,000,000|2,259.491ms
new Array(length)|100,000,000|5,126.624ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.004ms
array.push|100|0.039ms
new Array(length)|100|0.016ms
array.push|1,000|0.061ms
new Array(length)|1,000|0.03ms
array.push|10,000|0.506ms
new Array(length)|10,000|0.323ms
array.push|1,000,000|24.994ms
new Array(length)|1,000,000|9.241ms
array.push|100,000,000|2,152.218ms
new Array(length)|100,000,000|5,788.254ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|322|77|
|Array.from|15|42|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:03:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":322.13624909944633,"samples":2},{"name":"Array.from","opsSec":15.470825351824026,"samples":1}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|592,882,655|97|
|[async] async function|12,942,578|82|
|[async] function|141,316|17|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:04:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"function","opsSec":592882654.7597103,"samples":8},{"name":"[async] async function","opsSec":12942578.464322563,"samples":7},{"name":"[async] function","opsSec":141315.6839449993,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,698|93|
|new Blob (1024)|731|78|
|text (128)|5,924|87|
|text (1024)|722|86|
|arrayBuffer (128)|5,913|89|
|arrayBuffer (1024)|755|90|
|slice (0, 64)|190,455|58|
|slice (0, 512)|31,944|65|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:06:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"new Blob (128)","opsSec":5697.922443167337,"samples":3},{"name":"new Blob (1024)","opsSec":730.9100181284247,"samples":2},{"name":"text (128)","opsSec":5924.373735251055,"samples":7},{"name":"text (1024)","opsSec":722.0735529684263,"samples":2},{"name":"arrayBuffer (128)","opsSec":5912.9381219791,"samples":3},{"name":"arrayBuffer (1024)","opsSec":754.9458096994156,"samples":4},{"name":"slice (0, 64)","opsSec":190454.80782303037,"samples":4},{"name":"slice (0, 512)","opsSec":31944.343183282006,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|251,842|50|
|[True conditional] Using constructor name|207,724|93|
|[True conditional] Check if property is valid then instanceof |209,176|96|
|[False conditional] Using instanceof only|820,585,502|97|
|[False conditional] Using constructor name|820,005,231|94|
|[False conditional] Check if property is valid then instanceof |819,291,663|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:08:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":251841.9691184357,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":207724.00100426315,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":209176.29044882618,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":820585502.1309226,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":820005230.7474855,"samples":8},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":819291662.9645302,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,362|92|
|crypto.verify('RSA-SHA256')|6,396|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:09:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6362.224767048198,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":6395.824028153965,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,492,090|92|
|fromUnixToISOString(new Date())|2,209,901|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:10:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606910705566406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1492090.2793073507,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":2209900.997081006,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|13,381|83|
|Intl.DateTimeFormat().format(new Date())|11,090|74|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,700|88|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|14,580|89|
|Reusing Intl.DateTimeFormat()|464,228|83|
|Date.toLocaleDateString()|566,259|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,207|87|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:11:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":13380.956702883317,"samples":5},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":11089.904460825488,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":13700.003243888168,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":14579.690785106692,"samples":6},{"name":"Reusing Intl.DateTimeFormat()","opsSec":464228.19243604207,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":566259.484443638,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":14206.570509589184,"samples":6},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,047,058|95|
|Using brackets {}|1,066,815|98|
|Using '' + |1,072,495|99|
|Using date.toString()|1,201,569|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:13:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"Using String()","opsSec":1047057.5992056653,"samples":5},{"name":"Using brackets {}","opsSec":1066814.9806055669,"samples":5},{"name":"Using '' + ","opsSec":1072495.2544594002,"samples":4},{"name":"Using date.toString()","opsSec":1201569.020866129,"samples":6}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,270,764|91|
|Using delete property (proto: null)|11,155,538|89|
|Using delete property (cached proto: null)|2,305,066|92|
|Using undefined assignment|584,533,460|95|
|Using undefined assignment (proto: null)|13,238,794|94|
|Using undefined property (cached proto: null)|586,252,558|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:15:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2270763.6922898716,"samples":8},{"name":"Using delete property (proto: null)","opsSec":11155537.515724763,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2305065.6738850167,"samples":4},{"name":"Using undefined assignment","opsSec":584533460.0797694,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":13238794.194433143,"samples":8},{"name":"Using undefined property (cached proto: null)","opsSec":586252557.5578027,"samples":7}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|163,688|51|
|NodeError|131,565|93|
|NodeError Range|131,315|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:16:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Error","opsSec":163688.29013567095,"samples":3},{"name":"NodeError","opsSec":131564.80695911238,"samples":3},{"name":"NodeError Range","opsSec":131315.42747803952,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,499,406|93|
|Function returning explicitly undefined|1,516,802|92|
|Function returning implicitly undefined|1,553,737|95|
|Function returning string|1,517,915|99|
|Function returning integer|1,548,193|98|
|Function returning float|1,547,796|97|
|Function returning functions|1,486,894|97|
|Function returning arrow functions|1,493,749|96|
|Function returning empty object|1,535,297|97|
|Function returning empty array|1,538,977|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:18:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1499405.7957374414,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1516802.1988911377,"samples":4},{"name":"Function returning implicitly undefined","opsSec":1553736.5716802964,"samples":7},{"name":"Function returning string","opsSec":1517914.60419713,"samples":6},{"name":"Function returning integer","opsSec":1548192.9947436722,"samples":7},{"name":"Function returning float","opsSec":1547796.450825901,"samples":5},{"name":"Function returning functions","opsSec":1486893.5220471588,"samples":4},{"name":"Function returning arrow functions","opsSec":1493749.4573884015,"samples":7},{"name":"Function returning empty object","opsSec":1535297.150194072,"samples":6},{"name":"Function returning empty array","opsSec":1538976.5829495436,"samples":8}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|585,742,530|97|
|using Array.includes (first item)|582,351,968|96|
|Using raw comparison|589,143,038|95|
|Using raw comparison (first item)|590,623,486|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:19:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"using Array.includes","opsSec":585742530.1006917,"samples":6},{"name":"using Array.includes (first item)","opsSec":582351967.9275491,"samples":6},{"name":"Using raw comparison","opsSec":589143037.7082245,"samples":6},{"name":"Using raw comparison (first item)","opsSec":590623485.6486257,"samples":7}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|90,676,751|93|
|Using Object.getOwnPropertyNames()|88,635,898|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:21:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"Using Object.keys()","opsSec":90676751.27976142,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":88635897.73853593,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|594,316,914|91|
|Length = 10_000 - Array.at|593,397,580|97|
|Length = 1_000_000 - Array.at|596,020,635|96|
|Length = 100 - Array[length - 1]|590,351,584|99|
|Length = 10_000 - Array[length - 1]|590,759,911|100|
|Length = 1_000_000 - Array[length - 1]|590,086,311|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:22:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":594316914.3661816,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":593397580.4513993,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":596020634.5631065,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":590351583.6599178,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":590759910.9382839,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":590086310.9318001,"samples":7}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|81,676,231|94|
|Object.create({})|2,492,941|80|
|Cached Empty.prototype|821,181,741|99|
|Empty.prototype|2,506,013|91|
|Empty class|1,519,672|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:23:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"Object.create(null)","opsSec":81676231.47857925,"samples":5},{"name":"Object.create({})","opsSec":2492940.6821776815,"samples":3},{"name":"Cached Empty.prototype","opsSec":821181740.9949559,"samples":7},{"name":"Empty.prototype","opsSec":2506013.053669825,"samples":4},{"name":"Empty class","opsSec":1519672.4015344377,"samples":4}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|580,136,076|91|
|Using optional chain (obj.field?.field2) (undefined)|582,364,642|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|583,440,619|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|584,348,528|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:25:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":580136075.5618768,"samples":8},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":582364642.4775295,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":583440619.4261454,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":584348528.4298753,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|820,947,762|97|
|Using parseInt(x, 10) - big number (10 len)|821,963,212|91|
|Using + - small number (2 len)|822,076,793|96|
|Using + - big number (10 len)|821,127,266|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:26:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606910705566406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":820947762.4204906,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":821963211.5578542,"samples":6},{"name":"Using + - small number (2 len)","opsSec":822076792.9511677,"samples":7},{"name":"Using + - big number (10 len)","opsSec":821127266.4135127,"samples":6}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|615,312|66|
|Using ? operator to avoid rejection|737,663|72|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:28:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":615312.4880824218,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":737663.1204488319,"samples":6}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|819,383,457|97|
|Raw usage underscore usage|818,620,781|95|
|Manipulating private properties using #|814,066,595|86|
|Manipulating private properties using underscore(_)|810,700,296|96|
|Manipulating private properties using Symbol|810,320,061|97|
|Manipulating private properties using PrivateSymbol|49,921,216|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:29:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"Raw usage private field","opsSec":819383457.3908353,"samples":6},{"name":"Raw usage underscore usage","opsSec":818620781.398617,"samples":6},{"name":"Manipulating private properties using #","opsSec":814066594.608728,"samples":8},{"name":"Manipulating private properties using underscore(_)","opsSec":810700295.5356841,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":810320061.3540742,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":49921215.65270842,"samples":6}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,210,204|98|
|Adding property in the object creation - small object|5,184,127|95|
|Adding property after the function creation - small class|271,562|89|
|Adding property in the function creation - small class|273,988|92|
|Adding property after the class creation - small class|277,101|88|
|Adding property in the class creation - small class|277,118|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:33:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5210203.816703333,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5184127.036976368,"samples":7},{"name":"Adding property after the function creation - small class","opsSec":271561.56869022193,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":273988.3755766129,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":277100.56004455115,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":277117.5932067762,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|710,193,738|97|
|Getter|56,719,857|94|
|Method|710,478,493|97|
|DefineProperty (getter)|710,687,889|95|
|DefineProperty (getter & enumerable=false)|56,674,645|97|
|DefineProperty (getter & configurable=false)|712,352,200|95|
|DefineProperty (getter & enumerable=false & configurable=false)|56,981,767|99|
|DefineProperty (writable)|712,658,451|93|
|DefineProperty (writable & enumerable=false)|712,235,472|94|
|DefineProperty (writable & enumerable=false & configurable=false)|318,167,195|47|
|DefineProperties (getter)|37,129,858|93|
|DefineProperties (getter & enumerable=false)|37,172,042|95|
|DefineProperties (getter & enumerable=false & configurable=false)|56,969,582|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:35:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":710193738.3813092,"samples":7},{"name":"Getter","opsSec":56719857.33674735,"samples":7},{"name":"Method","opsSec":710478492.6038377,"samples":7},{"name":"DefineProperty (getter)","opsSec":710687888.7548915,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":56674645.43135256,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":712352199.631936,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":56981766.6244992,"samples":5},{"name":"DefineProperty (writable)","opsSec":712658450.7900271,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":712235471.7325711,"samples":5},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":318167194.8145236,"samples":6},{"name":"DefineProperties (getter)","opsSec":37129858.060331754,"samples":4},{"name":"DefineProperties (getter & enumerable=false)","opsSec":37172041.716963224,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":56969581.505066685,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|651,892,924|85|
|Setter|7,737,431|83|
|Method|626,315,603|85|
|DefineProperty (setter)|646,645,717|82|
|DefineProperty (setter & enumerable=false)|7,708,016|87|
|DefineProperty (setter & configurable=false)|7,600,871|80|
|DefineProperty (setter & enumerable=false & configurable=false)|7,909,249|80|
|DefineProperty (writable)|632,176,320|81|
|DefineProperty (writable & enumerable=false)|634,902,978|85|
|DefineProperty (writable & enumerable=false & configurable=false)|517,113,931|72|
|DefineProperties (setter)|638,682,413|86|
|DefineProperties (setter & enumerable=false)|7,776,897|83|
|DefineProperties (setter & enumerable=false & configurable=false)|7,895,260|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:38:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":651892924.245494,"samples":9},{"name":"Setter","opsSec":7737431.187130003,"samples":5},{"name":"Method","opsSec":626315602.6795619,"samples":6},{"name":"DefineProperty (setter)","opsSec":646645717.246242,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":7708016.475380411,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":7600870.51227999,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":7909249.097657357,"samples":5},{"name":"DefineProperty (writable)","opsSec":632176319.7742302,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":634902978.027198,"samples":5},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":517113931.4498037,"samples":6},{"name":"DefineProperties (setter)","opsSec":638682413.4795297,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":7776897.132753654,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":7895260.29022597,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,752,579|90|
|Using replaceAll()|1,644,776|93|
|Using replaceAll(//g)|1,576,793|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:39:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":1752579.4019151896,"samples":8},{"name":"Using replaceAll()","opsSec":1644775.8029184265,"samples":6},{"name":"Using replaceAll(//g)","opsSec":1576793.4466587093,"samples":6}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,704,572|93|
|{ ...object, __proto__: null }|1,462,626|100|
|{ ...object, newProp: true }|21,483,781|93|
|structuredClone|183,723|95|
|JSON.parse + JSON.stringify|186,468|97|
|loop + object.keys starting with {}|840,257|98|
|loop + object.keys starting with { __proto__: null }|464,674|93|
|loop + object.keys starting with { randomProp: true }|378,494|95|
|object.keys + reduce(FN, {})|366,221|96|
|object.keys + reduce(FN, { __proto__: null })|466,684|94|
|object.keys + reduce(FN, { newProp: true })|370,513|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:44:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{ ...object }","opsSec":23704572.203651957,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":1462626.4569974067,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":21483780.5166368,"samples":5},{"name":"structuredClone","opsSec":183722.82607842083,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":186467.74812313498,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":840257.4081004761,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":464674.1596876341,"samples":6},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":378494.23981029686,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":366221.3527400278,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":466683.99717624666,"samples":7},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":370512.77400479495,"samples":5}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|221,701|89|
|Sort using first char|1,049,219|88|
|Sort using localeCompare|914,171|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:47:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Sort using default","opsSec":221701.37663366666,"samples":3},{"name":"Sort using first char","opsSec":1049218.9082807342,"samples":7},{"name":"Sort using localeCompare","opsSec":914170.8367619525,"samples":5}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,113|94|
|{...smallObject} - Total keys: 2|60,316,539|93|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,092|95|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,045|96|
|{ ...bigObject, ...anotherBigObject }|695|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,804,257|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|16,785,342|96|
|{ ...smallObject, ...anotherSmallObject }|11,760,899|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:51:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1113.010444562484,"samples":6},{"name":"{...smallObject} - Total keys: 2","opsSec":60316538.838438295,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1092.4864096446422,"samples":4},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3044.6440230412873,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":694.606702851731,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6804256.653723907,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":16785342.365750026,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":11760899.136977306,"samples":5}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,148|81|
|streams.web.Readable reading 1e3 * "some data"|1,561|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:54:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1147.5823776440452,"samples":4},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1561.066447578314,"samples":6}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|3,603|85|
|streams.web.WritableStream writing 1e3 * "some data"|762|24|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:00:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":3603.3181755752544,"samples":4},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":761.9708507347693,"samples":4}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|573,990,134|90|
|Using backtick (`)|568,994,915|95|
|Using array.join|5,493,600|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:05:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using + sign","opsSec":573990133.9091995,"samples":11},{"name":"Using backtick (`)","opsSec":568994915.0242441,"samples":7},{"name":"Using array.join","opsSec":5493599.733536295,"samples":6}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|710,288,675|98|
|Using indexof|706,023,689|97|
|Using RegExp.test|11,854,762|98|
|Using RegExp.text with cached regex pattern|12,392,845|98|
|Using new RegExp.test|3,348,403|96|
|Using new RegExp.test with cached regex pattern|3,977,130|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:07:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using includes","opsSec":710288674.5983127,"samples":6},{"name":"Using indexof","opsSec":706023688.9442966,"samples":6},{"name":"Using RegExp.test","opsSec":11854761.545021065,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":12392845.232826713,"samples":5},{"name":"Using new RegExp.test","opsSec":3348403.4613065505,"samples":4},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3977130.0089877197,"samples":5}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|586,387,417|98|
|Using this|585,157,825|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:13:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using super","opsSec":586387416.730817,"samples":6},{"name":"Using this","opsSec":585157825.3295196,"samples":8}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,117,962|92|
|Date.now()|14,628,241|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:17:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":7117962.272436723,"samples":6},{"name":"Date.now()","opsSec":14628240.779100573,"samples":6}]}-->
