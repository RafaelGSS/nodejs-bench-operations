## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|570,659,597|92|
|Using dot notation|585,830,378|92|
|Using define property (writable)|2,410,346|95|
|Using define property initialized (writable)|3,040,983|94|
|Using define property (getter)|1,267,524|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":570659597.1228856,"samples":7},{"name":"Using dot notation","opsSec":585830378.0294738,"samples":8},{"name":"Using define property (writable)","opsSec":2410345.531767152,"samples":6},{"name":"Using define property initialized (writable)","opsSec":3040983.3671818683,"samples":6},{"name":"Using define property (getter)","opsSec":1267524.487084279,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.03ms
new Array(length)|100|0.01ms
array.push|1,000|0.061ms
new Array(length)|1,000|0.032ms
array.push|10,000|0.384ms
new Array(length)|10,000|0.209ms
array.push|1,000,000|40.832ms
new Array(length)|1,000,000|7.033ms
array.push|100,000,000|1,551.469ms
new Array(length)|100,000,000|4,366.957ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.02ms
array.push|100|0.016ms
new Array(length)|100|0.012ms
array.push|1,000|0.06ms
new Array(length)|1,000|0.036ms
array.push|10,000|0.601ms
new Array(length)|10,000|4.34ms
array.push|1,000,000|319.931ms
new Array(length)|1,000,000|4.054ms
array.push|100,000,000|2,190.372ms
new Array(length)|100,000,000|4,821.431ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|309|69|
|Array.from|15|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:38:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Array","opsSec":308.9086504676448,"samples":5},{"name":"Array.from","opsSec":14.55278821404406,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,880|87|
|new Blob (1024)|363|69|
|text (128)|26,893|65|
|text (1024)|18,281|83|
|arrayBuffer (128)|26,513|80|
|arrayBuffer (1024)|18,721|83|
|slice (0, 64)|55,914|77|
|slice (0, 512)|34,356|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":2879.754507296435,"samples":4},{"name":"new Blob (1024)","opsSec":362.93789739156887,"samples":2},{"name":"text (128)","opsSec":26892.54864639577,"samples":3},{"name":"text (1024)","opsSec":18280.59022978663,"samples":4},{"name":"arrayBuffer (128)","opsSec":26512.739555712447,"samples":3},{"name":"arrayBuffer (1024)","opsSec":18721.44371026026,"samples":3},{"name":"slice (0, 64)","opsSec":55913.94785695802,"samples":3},{"name":"slice (0, 512)","opsSec":34356.33201675555,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|164,867|59|
|[True conditional] Using constructor name|123,116|92|
|[True conditional] Check if property is valid then instanceof |125,520|87|
|[False conditional] Using instanceof only|618,414,432|89|
|[False conditional] Using constructor name|623,393,970|88|
|[False conditional] Check if property is valid then instanceof |661,685,214|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":164867.12776311286,"samples":4},{"name":"[True conditional] Using constructor name","opsSec":123115.62952362682,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":125519.70478486127,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":618414431.5622146,"samples":8},{"name":"[False conditional] Using constructor name","opsSec":623393970.3612261,"samples":8},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":661685214.2276506,"samples":8}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,775|91|
|crypto.verify('RSA-SHA256')|4,611|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:45:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":4775.389813703348,"samples":3},{"name":"crypto.verify('RSA-SHA256')","opsSec":4610.601334405286,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,543,283|89|
|fromUnixToISOString(new Date())|1,287,535|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1543282.744536282,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1287534.6551054954,"samples":9}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,042|76|
|Intl.DateTimeFormat().format(new Date())|6,104|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|5,737|86|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|5,019|71|
|Reusing Intl.DateTimeFormat()|426,584|90|
|Date.toLocaleDateString()|351,446|80|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|6,501|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:49:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":5042.19822652876,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":6103.603672097857,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":5736.681449513852,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":5019.119580250903,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":426584.21759409504,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":351446.39512612834,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":6501.146034994636,"samples":3},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|673,964|95|
|Using brackets {}|675,999|94|
|Using '' + |680,518|94|
|Using date.toString()|729,422|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:51:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":673963.971121304,"samples":6},{"name":"Using brackets {}","opsSec":675999.3141837417,"samples":3},{"name":"Using '' + ","opsSec":680518.4572787951,"samples":4},{"name":"Using date.toString()","opsSec":729422.1617296027,"samples":3}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,006,846|87|
|Using delete property (proto: null)|9,591,043|89|
|Using delete property (cached proto: null)|2,025,309|91|
|Using undefined assignment|644,339,132|84|
|Using undefined assignment (proto: null)|12,647,331|88|
|Using undefined property (cached proto: null)|635,647,257|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:54:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2006845.9449217245,"samples":6},{"name":"Using delete property (proto: null)","opsSec":9591042.781750834,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":2025308.962914075,"samples":6},{"name":"Using undefined assignment","opsSec":644339131.812047,"samples":11},{"name":"Using undefined assignment (proto: null)","opsSec":12647330.50804694,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":635647256.9027691,"samples":7}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|165,300|54|
|NodeError|127,840|92|
|NodeError Range|128,356|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:55:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Error","opsSec":165300.1146253776,"samples":4},{"name":"NodeError","opsSec":127840.13627881891,"samples":3},{"name":"NodeError Range","opsSec":128356.39664701212,"samples":3}]}-->
