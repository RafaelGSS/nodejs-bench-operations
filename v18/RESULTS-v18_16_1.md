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
