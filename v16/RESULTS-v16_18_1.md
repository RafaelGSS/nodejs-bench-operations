## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|849,428,177|97|
|Using dot notation|848,756,204|98|
|Using define property (writable)|4,603,486|97|
|Using define property initialized (writable)|5,913,252|94|
|Using define property (getter)|2,274,922|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:50:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":849428177.4301213,"samples":6},{"name":"Using dot notation","opsSec":848756203.9423821,"samples":8},{"name":"Using define property (writable)","opsSec":4603486.043842479,"samples":5},{"name":"Using define property initialized (writable)","opsSec":5913252.225284116,"samples":4},{"name":"Using define property (getter)","opsSec":2274922.4888364654,"samples":5}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.066ms
new Array(length)|100|0.006ms
array.push|1,000|0.033ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.291ms
new Array(length)|10,000|0.155ms
array.push|1,000,000|30.745ms
new Array(length)|1,000,000|5.993ms
array.push|100,000,000|1,788.759ms
new Array(length)|100,000,000|3,920.251ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.017ms
array.push|100|0.052ms
new Array(length)|100|0.008ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.42ms
new Array(length)|10,000|3.212ms
array.push|1,000,000|250.062ms
new Array(length)|1,000,000|4.712ms
array.push|100,000,000|2,170.546ms
new Array(length)|100,000,000|4,172.922ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|300|86|
|Array.from|21|39|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:07:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Array","opsSec":300.45530656138504,"samples":4},{"name":"Array.from","opsSec":20.978021216633298,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|849,990,879|98|
|[async] async function|16,832,739|86|
|[async] function|353,126|28|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:14:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":849990879.1732303,"samples":6},{"name":"[async] async function","opsSec":16832739.269487873,"samples":6},{"name":"[async] function","opsSec":353126.1980019028,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,425|83|
|new Blob (1024)|581|75|
|text (128)|42,697|85|
|text (1024)|26,548|74|
|arrayBuffer (128)|50,092|87|
|arrayBuffer (1024)|29,764|70|
|slice (0, 64)|94,326|82|
|slice (0, 512)|44,778|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:22:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4425.27966613247,"samples":4},{"name":"new Blob (1024)","opsSec":581.0274959524711,"samples":2},{"name":"text (128)","opsSec":42696.64245428106,"samples":4},{"name":"text (1024)","opsSec":26547.55533992964,"samples":6},{"name":"arrayBuffer (128)","opsSec":50091.61108733965,"samples":4},{"name":"arrayBuffer (1024)","opsSec":29764.055426172028,"samples":3},{"name":"slice (0, 64)","opsSec":94326.11192084792,"samples":3},{"name":"slice (0, 512)","opsSec":44778.025155977295,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|240,032|53|
|[True conditional] Using constructor name|187,269|99|
|[True conditional] Check if property is valid then instanceof |189,396|98|
|[False conditional] Using instanceof only|850,261,865|98|
|[False conditional] Using constructor name|850,072,858|89|
|[False conditional] Check if property is valid then instanceof |851,545,352|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:36:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":240031.82531861117,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":187269.48962319206,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":189396.2863907056,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":850261864.8954334,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":850072857.8457361,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":851545351.9906434,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|29,897|93|
|crypto.verify('RSA-SHA256')|28,613|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:48:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":29897.126201656123,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":28613.443428922194,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,590,637|96|
|fromUnixToISOString(new Date())|2,077,897|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:57:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2590637.444046439,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":2077896.8786674319,"samples":5}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|11,705|80|
|Intl.DateTimeFormat().format(new Date())|13,963|92|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|15,359|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|14,480|87|
|Reusing Intl.DateTimeFormat()|626,808|96|
|Date.toLocaleDateString()|627,307|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,910|83|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:07:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":11705.340019647907,"samples":5},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":13962.646797172014,"samples":6},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":15359.032911634986,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":14479.758278227595,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":626807.5692898304,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":627307.419236547,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":13909.591519880092,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|983,261|94|
|Using brackets {}|954,619|98|
|Using '' + |1,007,586|98|
|Using date.toString()|1,107,016|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:22:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using String()","opsSec":983260.7428283982,"samples":5},{"name":"Using brackets {}","opsSec":954619.2715266648,"samples":4},{"name":"Using '' + ","opsSec":1007585.5381267281,"samples":7},{"name":"Using date.toString()","opsSec":1107015.6673826308,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,475,901|88|
|Using delete property (proto: null)|22,525,665|99|
|Using delete property (cached proto: null)|3,500,681|96|
|Using undefined assignment|848,995,355|100|
|Using undefined assignment (proto: null)|24,643,558|99|
|Using undefined property (cached proto: null)|846,622,655|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:31:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using delete property","opsSec":3475901.0919661857,"samples":4},{"name":"Using delete property (proto: null)","opsSec":22525665.43815364,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":3500680.670932923,"samples":5},{"name":"Using undefined assignment","opsSec":848995355.1993964,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":24643558.272555295,"samples":7},{"name":"Using undefined property (cached proto: null)","opsSec":846622655.0760931,"samples":8}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|233,134|50|
|NodeError|182,615|91|
|NodeError Range|182,661|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:43:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Error","opsSec":233134.07610300873,"samples":3},{"name":"NodeError","opsSec":182614.78537220502,"samples":3},{"name":"NodeError Range","opsSec":182660.93712139377,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,701,716|97|
|Function returning explicitly undefined|1,681,429|93|
|Function returning implicitly undefined|1,705,501|95|
|Function returning string|1,715,099|101|
|Function returning integer|1,747,279|100|
|Function returning float|1,729,852|96|
|Function returning functions|1,675,227|96|
|Function returning arrow functions|1,691,660|100|
|Function returning empty object|1,712,298|95|
|Function returning empty array|1,705,254|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:55:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Function returning null","opsSec":1701715.9944136036,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1681429.3146576805,"samples":7},{"name":"Function returning implicitly undefined","opsSec":1705500.5223481157,"samples":6},{"name":"Function returning string","opsSec":1715098.9518841116,"samples":10},{"name":"Function returning integer","opsSec":1747278.9142801573,"samples":8},{"name":"Function returning float","opsSec":1729851.5031334425,"samples":5},{"name":"Function returning functions","opsSec":1675226.6553434525,"samples":7},{"name":"Function returning arrow functions","opsSec":1691659.6139957625,"samples":6},{"name":"Function returning empty object","opsSec":1712298.3665695998,"samples":5},{"name":"Function returning empty array","opsSec":1705254.1518324756,"samples":8}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|848,949,399|98|
|using Array.includes (first item)|849,024,166|93|
|Using raw comparison|850,159,523|97|
|Using raw comparison (first item)|849,341,416|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:12:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"using Array.includes","opsSec":848949399.2778369,"samples":6},{"name":"using Array.includes (first item)","opsSec":849024166.3412673,"samples":7},{"name":"Using raw comparison","opsSec":850159522.7655486,"samples":7},{"name":"Using raw comparison (first item)","opsSec":849341416.4850185,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|90,420,716|92|
|Using Object.getOwnPropertyNames()|91,846,104|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:24:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using Object.keys()","opsSec":90420715.78336665,"samples":7},{"name":"Using Object.getOwnPropertyNames()","opsSec":91846103.72135077,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|26,593,023|96|
|Length = 10_000 - Array.at|26,583,422|95|
|Length = 1_000_000 - Array.at|26,695,632|99|
|Length = 100 - Array[length - 1]|846,337,604|92|
|Length = 10_000 - Array[length - 1]|844,625,188|97|
|Length = 1_000_000 - Array[length - 1]|845,400,178|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:33:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":26593022.509454697,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":26583422.15792344,"samples":5},{"name":"Length = 1_000_000 - Array.at","opsSec":26695631.57803039,"samples":5},{"name":"Length = 100 - Array[length - 1]","opsSec":846337603.8793663,"samples":8},{"name":"Length = 10_000 - Array[length - 1]","opsSec":844625187.8456317,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":845400178.3594215,"samples":9}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|68,123,429|93|
|Object.create({})|2,103,031|91|
|Cached Empty.prototype|848,911,235|100|
|Empty.prototype|2,116,173|81|
|Empty class|1,300,489|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:46:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Object.create(null)","opsSec":68123429.19507092,"samples":6},{"name":"Object.create({})","opsSec":2103031.4851912763,"samples":3},{"name":"Cached Empty.prototype","opsSec":848911234.9495606,"samples":8},{"name":"Empty.prototype","opsSec":2116172.8018522207,"samples":3},{"name":"Empty class","opsSec":1300488.6919063018,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|847,990,604|100|
|Using optional chain (obj.field?.field2) (undefined)|848,167,892|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|850,189,931|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|848,998,567|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:56:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":847990603.9542552,"samples":10},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":848167892.3630656,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":850189930.5702424,"samples":10},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":848998567.0442418,"samples":7}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|293,297,521|88|
|Using parseInt(x, 10) - big number (10 len)|21,416,275|96|
|Using + - small number (2 len)|851,051,273|96|
|Using + - big number (10 len)|847,881,088|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:06:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":293297520.9026808,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":21416274.963520404,"samples":6},{"name":"Using + - small number (2 len)","opsSec":851051273.1759746,"samples":7},{"name":"Using + - big number (10 len)","opsSec":847881088.2355431,"samples":9}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,116,722|80|
|Using ? operator to avoid rejection|1,184,409|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:15:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using if to check function existence","opsSec":1116722.40216696,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":1184409.1269245609,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|12,891,451|94|
|Raw usage underscore usage|10,739,190|99|
|Manipulating private properties using #|3,948,434|91|
|Manipulating private properties using underscore(_)|839,051,199|96|
|Manipulating private properties using Symbol|837,429,957|95|
|Manipulating private properties using PrivateSymbol|47,242,670|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:24:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Raw usage private field","opsSec":12891451.437357968,"samples":5},{"name":"Raw usage underscore usage","opsSec":10739189.754360702,"samples":7},{"name":"Manipulating private properties using #","opsSec":3948433.606453878,"samples":6},{"name":"Manipulating private properties using underscore(_)","opsSec":839051199.4194332,"samples":9},{"name":"Manipulating private properties using Symbol","opsSec":837429957.193773,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":47242670.4111989,"samples":8}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,750,207|97|
|Adding property in the object creation - small object|3,775,539|100|
|Adding property after the function creation - small class|231,350|86|
|Adding property in the function creation - small class|232,352|91|
|Adding property after the class creation - small class|197,478|87|
|Adding property in the class creation - small class|197,532|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:36:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3750207.307452458,"samples":7},{"name":"Adding property in the object creation - small object","opsSec":3775538.726166939,"samples":7},{"name":"Adding property after the function creation - small class","opsSec":231349.7808116261,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":232352.2348892068,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":197477.823954522,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":197531.54783111694,"samples":4}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|849,710,218|100|
|Getter|93,946,504|97|
|Method|850,134,814|99|
|DefineProperty (getter)|850,090,221|101|
|DefineProperty (getter & enumerable=false)|93,774,217|96|
|DefineProperty (getter & configurable=false)|850,612,876|99|
|DefineProperty (getter & enumerable=false & configurable=false)|94,288,352|98|
|DefineProperty (writable)|849,193,654|98|
|DefineProperty (writable & enumerable=false)|549,506,960|68|
|DefineProperty (writable & enumerable=false & configurable=false)|144,170,370|84|
|DefineProperties (getter)|57,329,101|90|
|DefineProperties (getter & enumerable=false)|93,916,472|95|
|DefineProperties (getter & enumerable=false & configurable=false)|93,790,648|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:52:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Getter (class)","opsSec":849710218.2944398,"samples":6},{"name":"Getter","opsSec":93946503.63723586,"samples":7},{"name":"Method","opsSec":850134813.7045143,"samples":9},{"name":"DefineProperty (getter)","opsSec":850090221.4682009,"samples":8},{"name":"DefineProperty (getter & enumerable=false)","opsSec":93774217.3728765,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":850612875.9770522,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":94288351.73538716,"samples":6},{"name":"DefineProperty (writable)","opsSec":849193653.8678926,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":549506959.510271,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":144170370.26594317,"samples":5},{"name":"DefineProperties (getter)","opsSec":57329101.45968896,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":93916472.00272693,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":93790648.37497649,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|841,184,942|98|
|Setter|10,599,812|99|
|Method|846,353,855|96|
|DefineProperty (setter)|842,657,739|99|
|DefineProperty (setter & enumerable=false)|10,850,761|98|
|DefineProperty (setter & configurable=false)|10,968,708|98|
|DefineProperty (setter & enumerable=false & configurable=false)|10,919,994|98|
|DefineProperty (writable)|850,131,337|100|
|DefineProperty (writable & enumerable=false)|849,774,546|97|
|DefineProperty (writable & enumerable=false & configurable=false)|201,748,366|25|
|DefineProperties (setter)|115,813,619|83|
|DefineProperties (setter & enumerable=false)|10,668,821|98|
|DefineProperties (setter & enumerable=false & configurable=false)|10,524,218|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:14:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Setter (class)","opsSec":841184942.0205836,"samples":6},{"name":"Setter","opsSec":10599811.901117006,"samples":6},{"name":"Method","opsSec":846353855.3582678,"samples":8},{"name":"DefineProperty (setter)","opsSec":842657738.7504783,"samples":9},{"name":"DefineProperty (setter & enumerable=false)","opsSec":10850760.65063751,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":10968708.428512309,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":10919994.349783586,"samples":6},{"name":"DefineProperty (writable)","opsSec":850131336.5111969,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":849774546.4689144,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":201748366.4660899,"samples":9},{"name":"DefineProperties (setter)","opsSec":115813619.19311582,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10668821.238380207,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10524218.483081104,"samples":6}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,418,461|94|
|Using replaceAll()|3,211,110|98|
|Using replaceAll(//g)|3,077,471|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:33:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using replace(//g)","opsSec":3418460.6683516265,"samples":4},{"name":"Using replaceAll()","opsSec":3211109.8962074583,"samples":5},{"name":"Using replaceAll(//g)","opsSec":3077470.9413962457,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|19,897,219|97|
|{ ...object, __proto__: null }|20,185,273|97|
|{ ...object, newProp: true }|768,001|90|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|202,107|96|
|loop + object.keys starting with {}|544,089|92|
|loop + object.keys starting with { __proto__: null }|821,651|96|
|loop + object.keys starting with { randomProp: true }|557,784|95|
|object.keys + reduce(FN, {})|551,031|98|
|object.keys + reduce(FN, { __proto__: null })|835,350|95|
|object.keys + reduce(FN, { newProp: true })|568,926|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:44:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{ ...object }","opsSec":19897219.14924646,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":20185273.40450858,"samples":4},{"name":"{ ...object, newProp: true }","opsSec":768000.8825236595,"samples":3},{"name":"structuredClone","opsSec":0,"samples":0},{"name":"JSON.parse + JSON.stringify","opsSec":202106.664974925,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":544089.1778131583,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":821651.1382366525,"samples":6},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":557783.7960720444,"samples":7},{"name":"object.keys + reduce(FN, {})","opsSec":551030.871583326,"samples":4},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":835350.2111266084,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":568926.3724769548,"samples":6}]}-->
