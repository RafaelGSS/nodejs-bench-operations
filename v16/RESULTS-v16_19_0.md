## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|846,637,246|98|
|Using dot notation|845,459,598|98|
|Using define property (writable)|4,459,836|99|
|Using define property initialized (writable)|5,626,914|95|
|Using define property (getter)|2,193,984|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 14:48:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":846637246.0334784,"samples":9},{"name":"Using dot notation","opsSec":845459598.1746011,"samples":5},{"name":"Using define property (writable)","opsSec":4459835.9063445525,"samples":5},{"name":"Using define property initialized (writable)","opsSec":5626913.739952738,"samples":4},{"name":"Using define property (getter)","opsSec":2193984.125529026,"samples":6}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.002ms
array.push|100|0.068ms
new Array(length)|100|0.007ms
array.push|1,000|0.032ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.284ms
new Array(length)|10,000|0.152ms
array.push|1,000,000|32.281ms
new Array(length)|1,000,000|6.217ms
array.push|100,000,000|1,847.85ms
new Array(length)|100,000,000|4,113.021ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.017ms
array.push|100|0.048ms
new Array(length)|100|0.009ms
array.push|1,000|0.034ms
new Array(length)|1,000|0.019ms
array.push|10,000|0.423ms
new Array(length)|10,000|3.263ms
array.push|1,000,000|263.149ms
new Array(length)|1,000,000|4.863ms
array.push|100,000,000|2,236.126ms
new Array(length)|100,000,000|4,569.798ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|273|84|
|Array.from|21|39|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:05:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Array","opsSec":273.41576596039783,"samples":3},{"name":"Array.from","opsSec":20.657706040963795,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|846,428,558|99|
|[async] async function|16,731,320|90|
|[async] function|347,824|31|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:12:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":846428557.6431224,"samples":6},{"name":"[async] async function","opsSec":16731319.67763224,"samples":7},{"name":"[async] function","opsSec":347823.9175577923,"samples":3}]}-->

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
