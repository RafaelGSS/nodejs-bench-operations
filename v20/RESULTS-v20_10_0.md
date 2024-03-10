## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|848,064,151|99|
|Using dot notation|843,427,170|98|
|Using define property (writable)|4,236,892|92|
|Using define property initialized (writable)|6,193,798|96|
|Using define property (getter)|2,356,714|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:33:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":848064150.7195677,"samples":8},{"name":"Using dot notation","opsSec":843427170.3590678,"samples":8},{"name":"Using define property (writable)","opsSec":4236891.778481218,"samples":5},{"name":"Using define property initialized (writable)","opsSec":6193797.802056683,"samples":5},{"name":"Using define property (getter)","opsSec":2356714.246597577,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.016ms
new Array(length)|10|0.002ms
array.push|100|0.028ms
new Array(length)|100|0.008ms
array.push|1,000|0.05ms
new Array(length)|1,000|0.028ms
array.push|10,000|0.366ms
new Array(length)|10,000|0.405ms
array.push|1,000,000|26.786ms
new Array(length)|1,000,000|5.548ms
array.push|100,000,000|1,087.118ms
new Array(length)|100,000,000|3,602.468ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.022ms
array.push|100|0.078ms
new Array(length)|100|0.011ms
array.push|1,000|0.033ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.248ms
new Array(length)|10,000|0.177ms
array.push|1,000,000|22.01ms
new Array(length)|1,000,000|2.88ms
array.push|100,000,000|1,344.949ms
new Array(length)|100,000,000|3,521.819ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|616|72|
|Array.from|23|42|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:35:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Array","opsSec":615.6035807205033,"samples":2},{"name":"Array.from","opsSec":22.60583768410511,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|845,577,698|98|
|[async] async function|17,170,996|88|
|[async] function|191,693|19|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:37:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"function","opsSec":845577698.276055,"samples":5},{"name":"[async] async function","opsSec":17170995.795459077,"samples":6},{"name":"[async] function","opsSec":191693.14315070445,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,245|88|
|new Blob (1024)|674|77|
|text (128)|5,952|88|
|text (1024)|727|89|
|arrayBuffer (128)|5,963|87|
|arrayBuffer (1024)|746|90|
|slice (0, 64)|77,220|71|
|slice (0, 512)|21,169|61|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:38:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":5245.283835556108,"samples":4},{"name":"new Blob (1024)","opsSec":673.8063759055207,"samples":2},{"name":"text (128)","opsSec":5951.665174473568,"samples":6},{"name":"text (1024)","opsSec":727.2031378301923,"samples":3},{"name":"arrayBuffer (128)","opsSec":5962.787522667537,"samples":3},{"name":"arrayBuffer (1024)","opsSec":746.4617557265697,"samples":3},{"name":"slice (0, 64)","opsSec":77219.99371940555,"samples":3},{"name":"slice (0, 512)","opsSec":21169.36390114864,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|247,080|54|
|[True conditional] Using constructor name|199,867|94|
|[True conditional] Check if property is valid then instanceof |202,449|94|
|[False conditional] Using instanceof only|847,347,751|94|
|[False conditional] Using constructor name|844,662,677|96|
|[False conditional] Check if property is valid then instanceof |846,754,835|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:40:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":247080.45280150656,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":199866.83856870598,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":202449.4666521109,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":847347751.2131714,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":844662677.2628103,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":846754835.2887367,"samples":6}]}-->
