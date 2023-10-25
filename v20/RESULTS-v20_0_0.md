## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|699,133,184|90|
|Using dot notation|583,727,198|89|
|Using define property (writable)|2,411,388|89|
|Using define property initialized (writable)|3,084,870|88|
|Using define property (getter)|1,230,625|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":699133184.2023561,"samples":9},{"name":"Using dot notation","opsSec":583727198.3207844,"samples":10},{"name":"Using define property (writable)","opsSec":2411387.5926445546,"samples":4},{"name":"Using define property initialized (writable)","opsSec":3084870.4389169975,"samples":5},{"name":"Using define property (getter)","opsSec":1230624.8022871173,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.014ms
new Array(length)|10|0.003ms
array.push|100|0.034ms
new Array(length)|100|0.013ms
array.push|1,000|0.068ms
new Array(length)|1,000|0.036ms
array.push|10,000|0.53ms
new Array(length)|10,000|0.462ms
array.push|1,000,000|40.1ms
new Array(length)|1,000,000|7.206ms
array.push|100,000,000|1,814.11ms
new Array(length)|100,000,000|5,302.341ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.018ms
array.push|100|0.029ms
new Array(length)|100|0.012ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.365ms
new Array(length)|10,000|0.241ms
array.push|1,000,000|32.365ms
new Array(length)|1,000,000|4.465ms
array.push|100,000,000|3,070.628ms
new Array(length)|100,000,000|4,925.47ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|307|74|
|Array.from|15|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:38:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":306.8841833834791,"samples":4},{"name":"Array.from","opsSec":14.66927827006052,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,023|79|
|new Blob (1024)|386|64|
|text (128)|2,985|82|
|text (1024)|392|80|
|arrayBuffer (128)|2,945|82|
|arrayBuffer (1024)|392|82|
|slice (0, 64)|37,788|64|
|slice (0, 512)|13,719|58|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":3022.696298846174,"samples":3},{"name":"new Blob (1024)","opsSec":385.97523344677325,"samples":3},{"name":"text (128)","opsSec":2984.805175593328,"samples":4},{"name":"text (1024)","opsSec":391.9509868895917,"samples":2},{"name":"arrayBuffer (128)","opsSec":2945.4226779285123,"samples":3},{"name":"arrayBuffer (1024)","opsSec":392.09387057455024,"samples":4},{"name":"slice (0, 64)","opsSec":37787.86376204858,"samples":5},{"name":"slice (0, 512)","opsSec":13718.6948745658,"samples":5}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|165,945|55|
|[True conditional] Using constructor name|129,128|94|
|[True conditional] Check if property is valid then instanceof |129,987|93|
|[False conditional] Using instanceof only|596,944,778|96|
|[False conditional] Using constructor name|597,348,310|96|
|[False conditional] Check if property is valid then instanceof |598,320,114|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":165944.63509854447,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":129128.1646339486,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":129987.3194858227,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":596944777.6304117,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":597348310.3874255,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":598320113.5361209,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,120|84|
|crypto.verify('RSA-SHA256')|3,251|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:45:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":3119.7271162399347,"samples":3},{"name":"crypto.verify('RSA-SHA256')","opsSec":3250.585806467758,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|738,521|92|
|fromUnixToISOString(new Date())|1,242,688|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":738521.492770016,"samples":3},{"name":"fromUnixToISOString(new Date())","opsSec":1242688.4686763887,"samples":7}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|4,834|85|
|Intl.DateTimeFormat().format(new Date())|5,801|86|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|5,446|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|6,442|90|
|Reusing Intl.DateTimeFormat()|348,758|81|
|Date.toLocaleDateString()|405,867|92|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|6,375|78|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:49:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":4833.664124540381,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":5800.811980176461,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":5445.738453651324,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":6442.352618191858,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":348757.90868272877,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":405867.22507356177,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":6374.686782462092,"samples":6},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|633,410|86|
|Using brackets {}|654,729|87|
|Using '' + |654,443|90|
|Using date.toString()|718,794|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:51:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":633409.991499142,"samples":4},{"name":"Using brackets {}","opsSec":654729.0446645044,"samples":5},{"name":"Using '' + ","opsSec":654442.8666460891,"samples":5},{"name":"Using date.toString()","opsSec":718793.6284471028,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,152,220|87|
|Using delete property (proto: null)|12,077,432|87|
|Using delete property (cached proto: null)|2,201,136|90|
|Using undefined assignment|663,881,943|88|
|Using undefined assignment (proto: null)|13,055,140|90|
|Using undefined property (cached proto: null)|639,136,333|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:54:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2152220.0322882975,"samples":5},{"name":"Using delete property (proto: null)","opsSec":12077432.344977314,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2201136.0285486523,"samples":4},{"name":"Using undefined assignment","opsSec":663881943.1728916,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":13055139.671589307,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":639136333.2510166,"samples":6}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|146,970|60|
|NodeError|120,055|92|
|NodeError Range|120,818|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:55:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Error","opsSec":146970.31621173702,"samples":3},{"name":"NodeError","opsSec":120054.82134410241,"samples":3},{"name":"NodeError Range","opsSec":120817.77961628494,"samples":3}]}-->
