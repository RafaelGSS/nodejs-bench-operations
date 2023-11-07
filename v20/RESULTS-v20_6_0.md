## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|853,516,082|95|
|Using dot notation|853,250,434|95|
|Using define property (writable)|4,817,736|99|
|Using define property initialized (writable)|6,416,729|97|
|Using define property (getter)|2,483,205|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:54:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":853516081.7303174,"samples":7},{"name":"Using dot notation","opsSec":853250434.1669738,"samples":7},{"name":"Using define property (writable)","opsSec":4817736.400874697,"samples":4},{"name":"Using define property initialized (writable)","opsSec":6416728.6953104,"samples":6},{"name":"Using define property (getter)","opsSec":2483205.175203627,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.013ms
new Array(length)|10|0.004ms
array.push|100|0.023ms
new Array(length)|100|0.01ms
array.push|1,000|0.043ms
new Array(length)|1,000|0.028ms
array.push|10,000|0.305ms
new Array(length)|10,000|0.307ms
array.push|1,000,000|30.753ms
new Array(length)|1,000,000|6.583ms
array.push|100,000,000|1,751.384ms
new Array(length)|100,000,000|4,240.035ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.017ms
array.push|100|0.013ms
new Array(length)|100|0.009ms
array.push|1,000|0.031ms
new Array(length)|1,000|0.012ms
array.push|10,000|0.235ms
new Array(length)|10,000|0.159ms
array.push|1,000,000|22.929ms
new Array(length)|1,000,000|4.41ms
array.push|100,000,000|2,449.49ms
new Array(length)|100,000,000|3,952.21ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|310|88|
|Array.from|23|42|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:10:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Array","opsSec":309.83781862412314,"samples":4},{"name":"Array.from","opsSec":23.069157694234523,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|854,062,157|99|
|[async] async function|18,629,299|88|
|[async] function|189,704|16|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:17:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":854062157.2650232,"samples":6},{"name":"[async] async function","opsSec":18629298.83960283,"samples":6},{"name":"[async] function","opsSec":189704.2634036507,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,413|82|
|new Blob (1024)|545|71|
|text (128)|5,089|83|
|text (1024)|668|87|
|arrayBuffer (128)|5,357|86|
|arrayBuffer (1024)|681|89|
|slice (0, 64)|67,604|71|
|slice (0, 512)|19,445|63|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:29:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4413.193876808367,"samples":6},{"name":"new Blob (1024)","opsSec":544.6383067046266,"samples":2},{"name":"text (128)","opsSec":5088.603339795935,"samples":5},{"name":"text (1024)","opsSec":667.6898159498797,"samples":3},{"name":"arrayBuffer (128)","opsSec":5357.020390889295,"samples":3},{"name":"arrayBuffer (1024)","opsSec":681.2862623744352,"samples":3},{"name":"slice (0, 64)","opsSec":67604.4788716625,"samples":3},{"name":"slice (0, 512)","opsSec":19444.690473756007,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|227,819|52|
|[True conditional] Using constructor name|181,006|98|
|[True conditional] Check if property is valid then instanceof |181,013|95|
|[False conditional] Using instanceof only|852,291,754|99|
|[False conditional] Using constructor name|851,637,891|99|
|[False conditional] Check if property is valid then instanceof |852,657,143|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:41:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":227818.89604480373,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":181005.66005299587,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":181013.3968355075,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":852291754.0837125,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":851637890.7073481,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":852657142.5204705,"samples":6}]}-->
