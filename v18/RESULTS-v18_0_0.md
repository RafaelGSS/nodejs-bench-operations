## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|584,769,095|97|
|Using dot notation|587,385,319|95|
|Using define property (writable)|2,480,600|94|
|Using define property initialized (writable)|3,068,573|91|
|Using define property (getter)|1,247,552|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":584769095.4796222,"samples":6},{"name":"Using dot notation","opsSec":587385319.2876967,"samples":7},{"name":"Using define property (writable)","opsSec":2480600.361643891,"samples":6},{"name":"Using define property initialized (writable)","opsSec":3068573.0179144167,"samples":5},{"name":"Using define property (getter)","opsSec":1247552.0367843828,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.033ms
new Array(length)|100|0.015ms
array.push|1,000|0.057ms
new Array(length)|1,000|0.027ms
array.push|10,000|0.462ms
new Array(length)|10,000|0.238ms
array.push|1,000,000|46.204ms
new Array(length)|1,000,000|8.202ms
array.push|100,000,000|1,995.529ms
new Array(length)|100,000,000|4,837.198ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.019ms
array.push|100|0.016ms
new Array(length)|100|0.011ms
array.push|1,000|0.064ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.603ms
new Array(length)|10,000|4.27ms
array.push|1,000,000|332.792ms
new Array(length)|1,000,000|4.542ms
array.push|100,000,000|2,706.794ms
new Array(length)|100,000,000|5,415.823ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|316|76|
|Array.from|15|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:38:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Array","opsSec":315.55210601864786,"samples":3},{"name":"Array.from","opsSec":14.73454319546673,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,905|86|
|new Blob (1024)|353|70|
|text (128)|21,239|70|
|text (1024)|8,527|84|
|arrayBuffer (128)|23,770|84|
|arrayBuffer (1024)|9,444|85|
|slice (0, 64)|45,778|76|
|slice (0, 512)|13,378|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":2904.5358990448394,"samples":4},{"name":"new Blob (1024)","opsSec":352.7275018803132,"samples":2},{"name":"text (128)","opsSec":21239.189300105267,"samples":4},{"name":"text (1024)","opsSec":8527.357308017494,"samples":3},{"name":"arrayBuffer (128)","opsSec":23770.468109742826,"samples":6},{"name":"arrayBuffer (1024)","opsSec":9443.577479299109,"samples":5},{"name":"slice (0, 64)","opsSec":45778.24544353137,"samples":3},{"name":"slice (0, 512)","opsSec":13377.826815824785,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|151,499|54|
|[True conditional] Using constructor name|123,753|89|
|[True conditional] Check if property is valid then instanceof |124,972|84|
|[False conditional] Using instanceof only|719,953,814|89|
|[False conditional] Using constructor name|730,197,749|89|
|[False conditional] Check if property is valid then instanceof |742,985,756|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":151499.38728375162,"samples":5},{"name":"[True conditional] Using constructor name","opsSec":123753.0101309557,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":124971.66809030065,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":719953814.0725436,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":730197748.7382903,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":742985756.3524308,"samples":5}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|1,246|93|
|crypto.verify('RSA-SHA256')|1,264|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:45:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":1246.2679722715664,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":1264.218080480397,"samples":2}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,554,390|96|
|fromUnixToISOString(new Date())|1,362,522|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1554390.020361357,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1362521.730559692,"samples":8}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|4,723|82|
|Intl.DateTimeFormat().format(new Date())|5,930|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|5,571|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|4,554|64|
|Reusing Intl.DateTimeFormat()|433,198|84|
|Date.toLocaleDateString()|388,640|81|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|6,121|80|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:49:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":4722.754051548831,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":5929.8826718697,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":5570.7324146711935,"samples":6},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":4554.330642714435,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":433197.74731315306,"samples":3},{"name":"Date.toLocaleDateString()","opsSec":388640.31821695424,"samples":3},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":6121.304853934307,"samples":3},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|690,801|98|
|Using brackets {}|699,349|97|
|Using '' + |695,276|98|
|Using date.toString()|755,804|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:51:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":690800.9003201475,"samples":6},{"name":"Using brackets {}","opsSec":699349.127974865,"samples":4},{"name":"Using '' + ","opsSec":695275.5550734929,"samples":8},{"name":"Using date.toString()","opsSec":755804.4656043036,"samples":4}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,442,583|96|
|Using delete property (proto: null)|12,418,531|93|
|Using delete property (cached proto: null)|2,441,182|97|
|Using undefined assignment|709,871,448|96|
|Using undefined assignment (proto: null)|14,941,609|97|
|Using undefined property (cached proto: null)|708,676,249|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:54:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2442583.3299644017,"samples":8},{"name":"Using delete property (proto: null)","opsSec":12418531.301595902,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2441181.89003604,"samples":7},{"name":"Using undefined assignment","opsSec":709871447.9413433,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":14941609.25026634,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":708676249.4264269,"samples":8}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|178,987|61|
|NodeError|139,705|94|
|NodeError Range|140,477|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:55:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Error","opsSec":178987.03434048066,"samples":3},{"name":"NodeError","opsSec":139705.12567912307,"samples":3},{"name":"NodeError Range","opsSec":140477.20018101842,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,490,636|87|
|Function returning explicitly undefined|1,507,430|87|
|Function returning implicitly undefined|1,438,159|87|
|Function returning string|1,429,763|83|
|Function returning integer|1,412,107|83|
|Function returning float|1,414,726|84|
|Function returning functions|1,419,582|87|
|Function returning arrow functions|1,459,390|86|
|Function returning empty object|1,446,855|86|
|Function returning empty array|1,509,971|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:58:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Function returning null","opsSec":1490635.5996955207,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1507430.3999451601,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1438158.85921622,"samples":7},{"name":"Function returning string","opsSec":1429763.4449937083,"samples":3},{"name":"Function returning integer","opsSec":1412106.841565971,"samples":4},{"name":"Function returning float","opsSec":1414726.4240577295,"samples":6},{"name":"Function returning functions","opsSec":1419581.5376207721,"samples":6},{"name":"Function returning arrow functions","opsSec":1459389.8921130209,"samples":7},{"name":"Function returning empty object","opsSec":1446854.8671796913,"samples":5},{"name":"Function returning empty array","opsSec":1509970.784132009,"samples":6}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|59,645,065|86|
|using Array.includes (first item)|117,661,060|84|
|Using raw comparison|730,667,802|90|
|Using raw comparison (first item)|740,680,931|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:01:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":59645064.72161868,"samples":6},{"name":"using Array.includes (first item)","opsSec":117661059.66200058,"samples":6},{"name":"Using raw comparison","opsSec":730667801.7366118,"samples":6},{"name":"Using raw comparison (first item)","opsSec":740680930.7138088,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|39,460,910|90|
|Using Object.getOwnPropertyNames()|37,113,119|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:03:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Using Object.keys()","opsSec":39460910.0029679,"samples":6},{"name":"Using Object.getOwnPropertyNames()","opsSec":37113119.20535671,"samples":5}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|13,953,833|82|
|Length = 10_000 - Array.at|14,631,605|85|
|Length = 1_000_000 - Array.at|15,061,206|82|
|Length = 100 - Array[length - 1]|738,922,509|84|
|Length = 10_000 - Array[length - 1]|706,078,971|86|
|Length = 1_000_000 - Array[length - 1]|704,387,859|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:07:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":13953832.748648578,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":14631605.09431355,"samples":4},{"name":"Length = 1_000_000 - Array.at","opsSec":15061206.046562824,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":738922508.8200243,"samples":8},{"name":"Length = 10_000 - Array[length - 1]","opsSec":706078971.2719367,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":704387858.7797654,"samples":6}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|54,519,859|93|
|Object.create({})|1,379,271|86|
|Cached Empty.prototype|593,628,262|98|
|Empty.prototype|1,439,485|75|
|Empty class|901,691|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:09:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":54519858.63929848,"samples":6},{"name":"Object.create({})","opsSec":1379270.8191830318,"samples":3},{"name":"Cached Empty.prototype","opsSec":593628262.3845466,"samples":9},{"name":"Empty.prototype","opsSec":1439485.328915559,"samples":3},{"name":"Empty class","opsSec":901691.2386628466,"samples":5}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|600,635,194|93|
|Using optional chain (obj.field?.field2) (undefined)|599,367,489|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|587,653,593|92|
|Using and operator (obj.field && obj.field.field2) (undefined)|599,524,072|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:13:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":600635193.7143804,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":599367488.8832651,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":587653592.9444718,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":599524071.7658277,"samples":7}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|169,748,230|89|
|Using parseInt(x, 10) - big number (10 len)|13,395,959|93|
|Using + - small number (2 len)|735,841,113|93|
|Using + - big number (10 len)|725,745,980|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:15:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":169748230.18710756,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":13395958.576349026,"samples":4},{"name":"Using + - small number (2 len)","opsSec":735841112.6820475,"samples":9},{"name":"Using + - big number (10 len)","opsSec":725745979.8071882,"samples":8}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|570,904|71|
|Using ? operator to avoid rejection|640,785|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:19:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using if to check function existence","opsSec":570904.329101975,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":640785.3763807961,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|187,025,602|91|
|Raw usage underscore usage|173,810,857|84|
|Manipulating private properties using #|129,488,739|86|
|Manipulating private properties using underscore(_)|117,868,439|84|
|Manipulating private properties using Symbol|118,753,834|83|
|Manipulating private properties using PrivateSymbol|25,005,805|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:22:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Raw usage private field","opsSec":187025602.32200372,"samples":9},{"name":"Raw usage underscore usage","opsSec":173810857.27239618,"samples":6},{"name":"Manipulating private properties using #","opsSec":129488738.5430051,"samples":8},{"name":"Manipulating private properties using underscore(_)","opsSec":117868439.01443897,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":118753834.16190329,"samples":8},{"name":"Manipulating private properties using PrivateSymbol","opsSec":25005804.951870862,"samples":6}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,051,810|88|
|Adding property in the object creation - small object|2,048,313|89|
|Adding property after the function creation - small class|137,857|79|
|Adding property in the function creation - small class|145,899|84|
|Adding property after the class creation - small class|114,833|78|
|Adding property in the class creation - small class|120,151|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:27:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2051809.9181268343,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":2048312.6246504334,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":137856.83766816603,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":145899.26727186728,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":114833.40538944404,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":120151.27348922394,"samples":4}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|591,466,527|96|
|Getter|69,535,468|95|
|Method|592,087,258|97|
|DefineProperty (getter)|592,085,909|97|
|DefineProperty (getter & enumerable=false)|69,729,867|97|
|DefineProperty (getter & configurable=false)|592,990,816|98|
|DefineProperty (getter & enumerable=false & configurable=false)|69,833,000|98|
|DefineProperty (writable)|592,640,275|94|
|DefineProperty (writable & enumerable=false)|593,467,214|100|
|DefineProperty (writable & enumerable=false & configurable=false)|453,956,589|80|
|DefineProperties (getter)|44,174,344|90|
|DefineProperties (getter & enumerable=false)|69,871,166|97|
|DefineProperties (getter & enumerable=false & configurable=false)|69,743,205|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:32:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Getter (class)","opsSec":591466526.5777628,"samples":6},{"name":"Getter","opsSec":69535467.85248336,"samples":8},{"name":"Method","opsSec":592087257.8198944,"samples":6},{"name":"DefineProperty (getter)","opsSec":592085909.4186918,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":69729866.79722854,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":592990816.4461273,"samples":8},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":69833000.05404428,"samples":5},{"name":"DefineProperty (writable)","opsSec":592640275.2718022,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":593467214.4413372,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":453956589.11946875,"samples":6},{"name":"DefineProperties (getter)","opsSec":44174343.85041053,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":69871166.17309487,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":69743204.60904191,"samples":6}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|390,092,017|95|
|Setter|5,775,377|98|
|Method|393,520,533|96|
|DefineProperty (setter)|392,503,642|97|
|DefineProperty (setter & enumerable=false)|4,974,967|97|
|DefineProperty (setter & configurable=false)|5,780,856|93|
|DefineProperty (setter & enumerable=false & configurable=false)|5,772,458|92|
|DefineProperty (writable)|586,263,960|94|
|DefineProperty (writable & enumerable=false)|587,211,477|94|
|DefineProperty (writable & enumerable=false & configurable=false)|378,248,384|64|
|DefineProperties (setter)|58,840,210|84|
|DefineProperties (setter & enumerable=false)|5,680,944|97|
|DefineProperties (setter & enumerable=false & configurable=false)|5,756,164|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:36:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":390092016.9162838,"samples":7},{"name":"Setter","opsSec":5775377.043844006,"samples":6},{"name":"Method","opsSec":393520532.836069,"samples":8},{"name":"DefineProperty (setter)","opsSec":392503642.0881593,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":4974967.471102991,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":5780855.764052864,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5772457.903412471,"samples":5},{"name":"DefineProperty (writable)","opsSec":586263960.1473362,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":587211477.1679869,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":378248383.8593871,"samples":11},{"name":"DefineProperties (setter)","opsSec":58840209.50863844,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5680943.652216309,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5756163.82062624,"samples":6}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,878,757|80|
|Using replaceAll()|1,670,350|85|
|Using replaceAll(//g)|1,706,969|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:39:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using replace(//g)","opsSec":1878756.7692822092,"samples":5},{"name":"Using replaceAll()","opsSec":1670350.0002570818,"samples":8},{"name":"Using replaceAll(//g)","opsSec":1706969.1678437563,"samples":4}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|16,154,721|85|
|{ ...object, __proto__: null }|16,399,351|91|
|{ ...object, newProp: true }|453,791|81|
|structuredClone|166,048|89|
|JSON.parse + JSON.stringify|130,813|94|
|loop + object.keys starting with {}|762,840|90|
|loop + object.keys starting with { __proto__: null }|408,299|90|
|loop + object.keys starting with { randomProp: true }|306,260|89|
|object.keys + reduce(FN, {})|299,251|89|
|object.keys + reduce(FN, { __proto__: null })|409,084|90|
|object.keys + reduce(FN, { newProp: true })|306,664|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:44:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{ ...object }","opsSec":16154720.537335247,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":16399350.984602844,"samples":7},{"name":"{ ...object, newProp: true }","opsSec":453791.3948042042,"samples":3},{"name":"structuredClone","opsSec":166047.64264725012,"samples":4},{"name":"JSON.parse + JSON.stringify","opsSec":130813.04303033708,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":762839.9065518312,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":408299.4515387518,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":306260.46799515,"samples":6},{"name":"object.keys + reduce(FN, {})","opsSec":299250.8142834734,"samples":4},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":409084.4123669708,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":306664.28224030166,"samples":6}]}-->
