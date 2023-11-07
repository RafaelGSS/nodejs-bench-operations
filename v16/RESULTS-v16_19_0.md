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
|new Blob (128)|4,380|83|
|new Blob (1024)|556|73|
|text (128)|40,723|85|
|text (1024)|26,042|72|
|arrayBuffer (128)|50,673|85|
|arrayBuffer (1024)|30,145|71|
|slice (0, 64)|88,720|79|
|slice (0, 512)|45,075|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:20:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4380.250352935759,"samples":3},{"name":"new Blob (1024)","opsSec":555.8047846678493,"samples":2},{"name":"text (128)","opsSec":40723.27285400267,"samples":4},{"name":"text (1024)","opsSec":26042.085884365824,"samples":4},{"name":"arrayBuffer (128)","opsSec":50673.158182317595,"samples":4},{"name":"arrayBuffer (1024)","opsSec":30144.618345180505,"samples":4},{"name":"slice (0, 64)","opsSec":88719.94394699612,"samples":3},{"name":"slice (0, 512)","opsSec":45074.76460710991,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|236,688|53|
|[True conditional] Using constructor name|183,579|94|
|[True conditional] Check if property is valid then instanceof |186,479|97|
|[False conditional] Using instanceof only|847,060,070|100|
|[False conditional] Using constructor name|845,702,523|98|
|[False conditional] Check if property is valid then instanceof |847,710,499|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:35:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":236687.78199815727,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":183579.48473759982,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":186479.1872003973,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":847060069.7962646,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":845702522.7899752,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":847710498.9695412,"samples":6}]}-->
