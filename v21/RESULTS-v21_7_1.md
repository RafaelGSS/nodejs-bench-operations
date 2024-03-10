## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|822,501,125|95|
|Using dot notation|817,784,327|97|
|Using define property (writable)|4,416,419|92|
|Using define property initialized (writable)|6,265,623|95|
|Using define property (getter)|2,483,912|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:33:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":822501125.4191921,"samples":8},{"name":"Using dot notation","opsSec":817784326.7236955,"samples":6},{"name":"Using define property (writable)","opsSec":4416418.552217441,"samples":5},{"name":"Using define property initialized (writable)","opsSec":6265623.350427806,"samples":5},{"name":"Using define property (getter)","opsSec":2483911.7509763613,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.072ms
new Array(length)|100|0.011ms
array.push|1,000|0.033ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.279ms
new Array(length)|10,000|0.159ms
array.push|1,000,000|25.081ms
new Array(length)|1,000,000|5.239ms
array.push|100,000,000|1,011.34ms
new Array(length)|100,000,000|3,616.321ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.016ms
new Array(length)|100|0.012ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.356ms
new Array(length)|10,000|0.221ms
array.push|1,000,000|16.89ms
new Array(length)|1,000,000|5.691ms
array.push|100,000,000|1,149.705ms
new Array(length)|100,000,000|3,591.471ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|617|80|
|Array.from|23|42|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:35:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Array","opsSec":616.5175546256347,"samples":2},{"name":"Array.from","opsSec":22.740016279155338,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|822,104,847|94|
|[async] async function|16,754,381|84|
|[async] function|204,595|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:37:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"function","opsSec":822104846.9222684,"samples":6},{"name":"[async] async function","opsSec":16754380.719680255,"samples":6},{"name":"[async] function","opsSec":204595.31457990562,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,560|89|
|new Blob (1024)|704|77|
|text (128)|5,981|89|
|text (1024)|746|89|
|arrayBuffer (128)|5,983|89|
|arrayBuffer (1024)|751|90|
|slice (0, 64)|174,750|53|
|slice (0, 512)|24,307|51|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:38:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":5560.302575968935,"samples":5},{"name":"new Blob (1024)","opsSec":704.3495690586105,"samples":2},{"name":"text (128)","opsSec":5981.4200111769405,"samples":5},{"name":"text (1024)","opsSec":746.0643185612771,"samples":2},{"name":"arrayBuffer (128)","opsSec":5983.004045934672,"samples":3},{"name":"arrayBuffer (1024)","opsSec":750.6311800967388,"samples":3},{"name":"slice (0, 64)","opsSec":174750.0570754478,"samples":3},{"name":"slice (0, 512)","opsSec":24306.87762378252,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|246,721|52|
|[True conditional] Using constructor name|202,867|95|
|[True conditional] Check if property is valid then instanceof |204,985|98|
|[False conditional] Using instanceof only|824,293,333|98|
|[False conditional] Using constructor name|823,404,041|98|
|[False conditional] Check if property is valid then instanceof |824,803,604|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:40:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":246721.46906887201,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":202867.3858783728,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":204985.26491637417,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":824293333.4402988,"samples":8},{"name":"[False conditional] Using constructor name","opsSec":823404040.512674,"samples":8},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":824803604.0712243,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,671|91|
|crypto.verify('RSA-SHA256')|6,709|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:42:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6670.530312273687,"samples":5},{"name":"crypto.verify('RSA-SHA256')","opsSec":6709.118260124717,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,369,644|95|
|fromUnixToISOString(new Date())|2,231,067|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:43:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1369643.7274465105,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":2231066.6164413407,"samples":4}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|16,868|81|
|Intl.DateTimeFormat().format(new Date())|17,115|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|15,817|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|20,364|81|
|Reusing Intl.DateTimeFormat()|681,753|84|
|Date.toLocaleDateString()|782,947|93|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|20,052|89|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:45:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":16868.142315007135,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":17115.29548717906,"samples":6},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":15817.297327150287,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":20364.04063439477,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":681752.9054480148,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":782947.172481649,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":20051.55665147416,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,034,399|92|
|Using brackets {}|1,068,228|96|
|Using '' + |1,056,210|94|
|Using date.toString()|1,186,044|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:46:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using String()","opsSec":1034398.8987885935,"samples":4},{"name":"Using brackets {}","opsSec":1068228.497586988,"samples":4},{"name":"Using '' + ","opsSec":1056209.8142862655,"samples":4},{"name":"Using date.toString()","opsSec":1186044.1789596693,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,203,756|96|
|Using delete property (proto: null)|22,323,659|96|
|Using delete property (cached proto: null)|4,277,704|95|
|Using undefined assignment|881,107,114|96|
|Using undefined assignment (proto: null)|24,876,199|98|
|Using undefined property (cached proto: null)|880,433,464|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:48:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using delete property","opsSec":4203755.78387056,"samples":4},{"name":"Using delete property (proto: null)","opsSec":22323658.70514654,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":4277703.868538703,"samples":5},{"name":"Using undefined assignment","opsSec":881107114.4572463,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":24876199.14843088,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":880433463.7431455,"samples":6}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|231,923|53|
|NodeError|195,083|94|
|NodeError Range|194,335|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:49:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Error","opsSec":231922.8951321432,"samples":3},{"name":"NodeError","opsSec":195083.3255261575,"samples":3},{"name":"NodeError Range","opsSec":194334.69596125153,"samples":3}]}-->
