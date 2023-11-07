## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|849,455,710|99|
|Using dot notation|849,090,469|99|
|Using define property (writable)|4,505,435|100|
|Using define property initialized (writable)|5,721,307|94|
|Using define property (getter)|2,248,053|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:49:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":849455710.3406456,"samples":9},{"name":"Using dot notation","opsSec":849090469.4449084,"samples":9},{"name":"Using define property (writable)","opsSec":4505435.374477738,"samples":6},{"name":"Using define property initialized (writable)","opsSec":5721306.551332858,"samples":6},{"name":"Using define property (getter)","opsSec":2248052.509515246,"samples":6}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.064ms
new Array(length)|100|0.006ms
array.push|1,000|0.033ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.273ms
new Array(length)|10,000|0.151ms
array.push|1,000,000|30.943ms
new Array(length)|1,000,000|6.045ms
array.push|100,000,000|1,788.519ms
new Array(length)|100,000,000|3,904.735ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.017ms
array.push|100|0.048ms
new Array(length)|100|0.009ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.432ms
new Array(length)|10,000|3.241ms
array.push|1,000,000|258.269ms
new Array(length)|1,000,000|4.671ms
array.push|100,000,000|2,187.776ms
new Array(length)|100,000,000|4,207.022ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|295|88|
|Array.from|21|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:07:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Array","opsSec":294.6421809033492,"samples":3},{"name":"Array.from","opsSec":21.315797378198916,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|849,956,988|98|
|[async] async function|16,365,153|90|
|[async] function|292,249|30|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:13:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":849956988.412415,"samples":6},{"name":"[async] async function","opsSec":16365153.116623286,"samples":6},{"name":"[async] function","opsSec":292249.4806138971,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,376|82|
|new Blob (1024)|564|73|
|text (128)|41,817|88|
|text (1024)|26,212|75|
|arrayBuffer (128)|51,871|79|
|arrayBuffer (1024)|30,100|72|
|slice (0, 64)|92,984|81|
|slice (0, 512)|46,490|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:21:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4376.1027339449565,"samples":3},{"name":"new Blob (1024)","opsSec":564.2125917421217,"samples":2},{"name":"text (128)","opsSec":41817.18349144265,"samples":5},{"name":"text (1024)","opsSec":26211.855852439207,"samples":3},{"name":"arrayBuffer (128)","opsSec":51870.66517924242,"samples":4},{"name":"arrayBuffer (1024)","opsSec":30100.05187949594,"samples":4},{"name":"slice (0, 64)","opsSec":92983.67423104268,"samples":4},{"name":"slice (0, 512)","opsSec":46489.510135585835,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|243,024|53|
|[True conditional] Using constructor name|185,997|96|
|[True conditional] Check if property is valid then instanceof |188,506|97|
|[False conditional] Using instanceof only|848,727,847|94|
|[False conditional] Using constructor name|848,006,938|100|
|[False conditional] Check if property is valid then instanceof |847,825,648|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:37:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":243024.45842123806,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":185997.1938203462,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":188505.60589971283,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":848727846.7789552,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":848006938.415337,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":847825647.7346226,"samples":6}]}-->
