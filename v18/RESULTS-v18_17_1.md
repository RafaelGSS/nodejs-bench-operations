## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|676,510,527|88|
|Using dot notation|569,137,610|88|
|Using define property (writable)|2,212,049|87|
|Using define property initialized (writable)|2,958,175|90|
|Using define property (getter)|1,147,178|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":676510526.9449942,"samples":6},{"name":"Using dot notation","opsSec":569137609.851336,"samples":7},{"name":"Using define property (writable)","opsSec":2212049.0427864045,"samples":8},{"name":"Using define property initialized (writable)","opsSec":2958174.7331113685,"samples":7},{"name":"Using define property (getter)","opsSec":1147178.0353662486,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.031ms
new Array(length)|100|0.01ms
array.push|1,000|0.06ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.385ms
new Array(length)|10,000|0.209ms
array.push|1,000,000|38.318ms
new Array(length)|1,000,000|6.077ms
array.push|100,000,000|1,562.501ms
new Array(length)|100,000,000|4,233.373ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.019ms
array.push|100|0.018ms
new Array(length)|100|0.012ms
array.push|1,000|0.061ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.658ms
new Array(length)|10,000|4.344ms
array.push|1,000,000|336.173ms
new Array(length)|1,000,000|4.329ms
array.push|100,000,000|2,123.57ms
new Array(length)|100,000,000|4,794.247ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|306|82|
|Array.from|15|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:38:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":305.75675616523284,"samples":3},{"name":"Array.from","opsSec":14.648591962893354,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,763|85|
|new Blob (1024)|365|66|
|text (128)|24,302|78|
|text (1024)|11,278|78|
|arrayBuffer (128)|24,870|79|
|arrayBuffer (1024)|11,482|79|
|slice (0, 64)|47,436|74|
|slice (0, 512)|27,264|74|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Blob (128)","opsSec":2763.003755723908,"samples":3},{"name":"new Blob (1024)","opsSec":365.1543842921994,"samples":2},{"name":"text (128)","opsSec":24301.869461150065,"samples":4},{"name":"text (1024)","opsSec":11278.102525301358,"samples":4},{"name":"arrayBuffer (128)","opsSec":24869.53869958962,"samples":4},{"name":"arrayBuffer (1024)","opsSec":11481.801017349087,"samples":3},{"name":"slice (0, 64)","opsSec":47436.26676423013,"samples":4},{"name":"slice (0, 512)","opsSec":27264.405397647384,"samples":5}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|151,341|54|
|[True conditional] Using constructor name|121,512|92|
|[True conditional] Check if property is valid then instanceof |122,278|91|
|[False conditional] Using instanceof only|581,791,027|93|
|[False conditional] Using constructor name|588,232,063|94|
|[False conditional] Check if property is valid then instanceof |589,557,365|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":151340.6610135677,"samples":4},{"name":"[True conditional] Using constructor name","opsSec":121511.52822205538,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":122277.65420209369,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":581791027.4259527,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":588232063.4145262,"samples":8},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":589557365.344524,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,455|87|
|crypto.verify('RSA-SHA256')|4,493|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:45:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":4455.227572790839,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":4493.366328010938,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,298,541|94|
|fromUnixToISOString(new Date())|1,103,039|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1298541.440511099,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":1103039.1009930912,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|10,686|89|
|Intl.DateTimeFormat().format(new Date())|9,762|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|11,615|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,455|77|
|Reusing Intl.DateTimeFormat()|475,250|90|
|Date.toLocaleDateString()|499,943|87|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|11,703|84|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:49:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":10685.574335868647,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":9761.769974798895,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":11614.50577784418,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":9454.64677365822,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":475249.5293657673,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":499943.42694623687,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":11703.047863825377,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|715,598|97|
|Using brackets {}|742,736|96|
|Using '' + |736,370|99|
|Using date.toString()|807,869|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:51:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":715597.7242742995,"samples":6},{"name":"Using brackets {}","opsSec":742736.4336766147,"samples":3},{"name":"Using '' + ","opsSec":736370.2634832282,"samples":5},{"name":"Using date.toString()","opsSec":807868.9910217893,"samples":4}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,337,987|89|
|Using delete property (proto: null)|11,185,177|91|
|Using delete property (cached proto: null)|2,343,700|92|
|Using undefined assignment|728,173,268|91|
|Using undefined assignment (proto: null)|14,115,529|90|
|Using undefined property (cached proto: null)|718,614,998|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:54:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using delete property","opsSec":2337986.909457394,"samples":5},{"name":"Using delete property (proto: null)","opsSec":11185176.574860435,"samples":7},{"name":"Using delete property (cached proto: null)","opsSec":2343700.101390656,"samples":7},{"name":"Using undefined assignment","opsSec":728173268.38945,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":14115529.487218637,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":718614998.1528685,"samples":7}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|181,989|56|
|NodeError|143,405|94|
|NodeError Range|143,584|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:55:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Error","opsSec":181988.7195392328,"samples":4},{"name":"NodeError","opsSec":143405.46612564946,"samples":3},{"name":"NodeError Range","opsSec":143584.44908999949,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,280,270|96|
|Function returning explicitly undefined|1,280,486|89|
|Function returning implicitly undefined|1,299,646|90|
|Function returning string|1,304,741|97|
|Function returning integer|1,251,121|96|
|Function returning float|1,325,621|95|
|Function returning functions|1,270,105|98|
|Function returning arrow functions|1,291,856|92|
|Function returning empty object|1,322,990|96|
|Function returning empty array|1,317,503|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:58:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1280270.2100520146,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1280485.6196354083,"samples":8},{"name":"Function returning implicitly undefined","opsSec":1299646.3232016505,"samples":6},{"name":"Function returning string","opsSec":1304740.5301916893,"samples":5},{"name":"Function returning integer","opsSec":1251121.205070396,"samples":6},{"name":"Function returning float","opsSec":1325620.811342723,"samples":6},{"name":"Function returning functions","opsSec":1270105.491866154,"samples":6},{"name":"Function returning arrow functions","opsSec":1291856.2869752701,"samples":6},{"name":"Function returning empty object","opsSec":1322989.6766935007,"samples":5},{"name":"Function returning empty array","opsSec":1317502.9439866133,"samples":7}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|709,442,244|96|
|using Array.includes (first item)|710,921,181|96|
|Using raw comparison|712,469,125|97|
|Using raw comparison (first item)|711,990,866|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:01:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"using Array.includes","opsSec":709442244.2018203,"samples":8},{"name":"using Array.includes (first item)","opsSec":710921181.0641251,"samples":8},{"name":"Using raw comparison","opsSec":712469124.9507518,"samples":7},{"name":"Using raw comparison (first item)","opsSec":711990865.9772139,"samples":7}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|39,305,422|94|
|Using Object.getOwnPropertyNames()|38,320,027|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:03:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using Object.keys()","opsSec":39305421.53616904,"samples":7},{"name":"Using Object.getOwnPropertyNames()","opsSec":38320026.72441486,"samples":9}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,691,593|87|
|Length = 10_000 - Array.at|14,999,433|89|
|Length = 1_000_000 - Array.at|14,916,598|88|
|Length = 100 - Array[length - 1]|640,714,219|89|
|Length = 10_000 - Array[length - 1]|639,801,867|91|
|Length = 1_000_000 - Array[length - 1]|646,720,011|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:07:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":14691593.063424738,"samples":4},{"name":"Length = 10_000 - Array.at","opsSec":14999433.416608652,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":14916598.077952126,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":640714218.7963121,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":639801866.7935123,"samples":8},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":646720011.0699558,"samples":8}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|48,794,918|94|
|Object.create({})|956,321|74|
|Cached Empty.prototype|712,923,743|99|
|Empty.prototype|1,058,913|80|
|Empty class|729,587|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:09:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Object.create(null)","opsSec":48794917.64190368,"samples":7},{"name":"Object.create({})","opsSec":956320.7607725401,"samples":3},{"name":"Cached Empty.prototype","opsSec":712923743.4280591,"samples":9},{"name":"Empty.prototype","opsSec":1058913.0947199478,"samples":3},{"name":"Empty class","opsSec":729586.7794075147,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|590,419,090|95|
|Using optional chain (obj.field?.field2) (undefined)|592,243,151|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|592,371,618|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|592,025,512|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:13:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":590419090.081836,"samples":8},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":592243151.3022157,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":592371617.9682833,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":592025511.558404,"samples":7}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|142,292,441|79|
|Using parseInt(x, 10) - big number (10 len)|11,603,862|87|
|Using + - small number (2 len)|701,114,233|86|
|Using + - big number (10 len)|701,052,382|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:15:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":142292440.63735244,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":11603862.094019089,"samples":6},{"name":"Using + - small number (2 len)","opsSec":701114233.2855191,"samples":6},{"name":"Using + - big number (10 len)","opsSec":701052381.8984606,"samples":8}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|458,576|69|
|Using ? operator to avoid rejection|506,710|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:19:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":458576.2345438182,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":506710.0183175374,"samples":4}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|190,899,304|87|
|Raw usage underscore usage|188,025,577|87|
|Manipulating private properties using #|132,513,728|87|
|Manipulating private properties using underscore(_)|116,101,621|88|
|Manipulating private properties using Symbol|114,432,008|90|
|Manipulating private properties using PrivateSymbol|21,994,638|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:22:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Raw usage private field","opsSec":190899303.53976476,"samples":6},{"name":"Raw usage underscore usage","opsSec":188025576.67739332,"samples":8},{"name":"Manipulating private properties using #","opsSec":132513727.71410877,"samples":7},{"name":"Manipulating private properties using underscore(_)","opsSec":116101621.03221332,"samples":8},{"name":"Manipulating private properties using Symbol","opsSec":114432008.34074138,"samples":9},{"name":"Manipulating private properties using PrivateSymbol","opsSec":21994638.02908857,"samples":9}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,971,818|94|
|Adding property in the object creation - small object|1,968,366|95|
|Adding property after the function creation - small class|144,371|83|
|Adding property in the function creation - small class|144,808|85|
|Adding property after the class creation - small class|116,681|83|
|Adding property in the class creation - small class|116,703|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:27:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":1971818.0000372601,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":1968366.2304761787,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":144371.0890259159,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":144808.24494086122,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":116681.47146821507,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":116702.72757156339,"samples":4}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|710,713,517|88|
|Getter|51,187,790|84|
|Method|717,775,003|86|
|DefineProperty (getter)|730,529,734|87|
|DefineProperty (getter & enumerable=false)|52,524,768|87|
|DefineProperty (getter & configurable=false)|738,519,587|88|
|DefineProperty (getter & enumerable=false & configurable=false)|51,248,729|86|
|DefineProperty (writable)|741,930,312|90|
|DefineProperty (writable & enumerable=false)|260,590,692|36|
|DefineProperty (writable & enumerable=false & configurable=false)|712,278,864|91|
|DefineProperties (getter)|51,706,172|85|
|DefineProperties (getter & enumerable=false)|52,790,525|87|
|DefineProperties (getter & enumerable=false & configurable=false)|51,454,785|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:32:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":710713516.8381191,"samples":6},{"name":"Getter","opsSec":51187790.15054272,"samples":7},{"name":"Method","opsSec":717775003.050625,"samples":8},{"name":"DefineProperty (getter)","opsSec":730529733.9800127,"samples":8},{"name":"DefineProperty (getter & enumerable=false)","opsSec":52524768.15641603,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":738519587.2314054,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":51248728.997690775,"samples":8},{"name":"DefineProperty (writable)","opsSec":741930311.9637858,"samples":5},{"name":"DefineProperty (writable & enumerable=false)","opsSec":260590692.2786555,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":712278863.825875,"samples":8},{"name":"DefineProperties (getter)","opsSec":51706171.53541699,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":52790524.77257173,"samples":7},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":51454784.79801917,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|574,432,109|95|
|Setter|8,478,350|98|
|Method|579,424,153|99|
|DefineProperty (setter)|581,694,744|97|
|DefineProperty (setter & enumerable=false)|8,320,480|98|
|DefineProperty (setter & configurable=false)|8,546,883|98|
|DefineProperty (setter & enumerable=false & configurable=false)|8,380,402|97|
|DefineProperty (writable)|591,992,814|98|
|DefineProperty (writable & enumerable=false)|591,969,194|98|
|DefineProperty (writable & enumerable=false & configurable=false)|161,088,182|28|
|DefineProperties (setter)|85,817,780|78|
|DefineProperties (setter & enumerable=false)|8,112,184|98|
|DefineProperties (setter & enumerable=false & configurable=false)|8,446,178|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:36:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":574432108.930753,"samples":7},{"name":"Setter","opsSec":8478349.653379401,"samples":8},{"name":"Method","opsSec":579424153.2007114,"samples":9},{"name":"DefineProperty (setter)","opsSec":581694744.1954932,"samples":10},{"name":"DefineProperty (setter & enumerable=false)","opsSec":8320480.360345151,"samples":7},{"name":"DefineProperty (setter & configurable=false)","opsSec":8546882.718272807,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":8380401.969373344,"samples":7},{"name":"DefineProperty (writable)","opsSec":591992813.8743993,"samples":9},{"name":"DefineProperty (writable & enumerable=false)","opsSec":591969193.7759646,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":161088182.05958992,"samples":7},{"name":"DefineProperties (setter)","opsSec":85817779.70074746,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":8112183.673647817,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":8446178.352311116,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,077,486|96|
|Using replaceAll()|1,980,680|94|
|Using replaceAll(//g)|1,871,505|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:39:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Using replace(//g)","opsSec":2077486.4414756002,"samples":7},{"name":"Using replaceAll()","opsSec":1980679.5865625276,"samples":5},{"name":"Using replaceAll(//g)","opsSec":1871504.8311220962,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|15,162,872|92|
|{ ...object, __proto__: null }|15,474,037|95|
|{ ...object, newProp: true }|453,568|84|
|structuredClone|178,788|96|
|JSON.parse + JSON.stringify|147,156|95|
|loop + object.keys starting with {}|674,385|98|
|loop + object.keys starting with { __proto__: null }|432,615|91|
|loop + object.keys starting with { randomProp: true }|317,947|98|
|object.keys + reduce(FN, {})|303,312|94|
|object.keys + reduce(FN, { __proto__: null })|432,158|97|
|object.keys + reduce(FN, { newProp: true })|314,198|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:44:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":15162872.357371971,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":15474037.223964296,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":453567.7910222224,"samples":3},{"name":"structuredClone","opsSec":178787.9792468986,"samples":4},{"name":"JSON.parse + JSON.stringify","opsSec":147155.6268740268,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":674384.8814762434,"samples":7},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":432614.5533573679,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":317946.535072462,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":303312.1787749182,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":432157.5299577947,"samples":7},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":314198.0434268242,"samples":5}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|172,227|95|
|Sort using first char|745,727|97|
|Sort using localeCompare|668,428|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:47:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Sort using default","opsSec":172226.6862340683,"samples":5},{"name":"Sort using first char","opsSec":745727.2330928337,"samples":8},{"name":"Sort using localeCompare","opsSec":668427.9014134366,"samples":8}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,173|89|
|{...smallObject} - Total keys: 2|54,320,182|89|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,137|85|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,244|91|
|{ ...bigObject, ...anotherBigObject }|751|91|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,784,350|90|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|15,327,309|94|
|{ ...smallObject, ...anotherSmallObject }|9,840,031|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:51:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1172.711498439369,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":54320181.80201864,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1137.0445018726912,"samples":2},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3244.4830959731457,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":750.5228880834187,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6784350.256868666,"samples":4},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":15327309.096785385,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9840031.11165301,"samples":9}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,017|72|
|streams.web.Readable reading 1e3 * "some data"|360|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:54:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1016.7525650215764,"samples":3},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":360.3161596961441,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|3,018|86|
|streams.web.WritableStream writing 1e3 * "some data"|829|56|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:00:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":3017.9142661253472,"samples":9},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":829.4419610836002,"samples":2}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|707,499,503|97|
|Using backtick (`)|709,995,201|96|
|Using array.join|6,170,833|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:05:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using + sign","opsSec":707499502.8134934,"samples":7},{"name":"Using backtick (`)","opsSec":709995200.5279809,"samples":6},{"name":"Using array.join","opsSec":6170833.03048464,"samples":6}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|705,764,714|97|
|Using indexof|712,172,496|99|
|Using RegExp.test|11,654,762|97|
|Using RegExp.text with cached regex pattern|12,454,898|94|
|Using new RegExp.test|3,026,078|92|
|Using new RegExp.test with cached regex pattern|3,561,968|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:07:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":705764713.7092154,"samples":10},{"name":"Using indexof","opsSec":712172496.4821588,"samples":7},{"name":"Using RegExp.test","opsSec":11654761.932480443,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":12454897.624667134,"samples":5},{"name":"Using new RegExp.test","opsSec":3026078.310625579,"samples":4},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3561968.027697518,"samples":5}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|108,702,143|93|
|Using this|113,283,360|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:13:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using super","opsSec":108702142.77125645,"samples":7},{"name":"Using this","opsSec":113283359.97063817,"samples":7}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,359,214|93|
|Date.now()|15,231,443|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:17:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":7359214.147970316,"samples":6},{"name":"Date.now()","opsSec":15231443.150928186,"samples":6}]}-->
