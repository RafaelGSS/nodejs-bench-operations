## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|714,875,680|97|
|Using dot notation|714,497,402|96|
|Using define property (writable)|2,999,744|96|
|Using define property initialized (writable)|3,747,945|96|
|Using define property (getter)|1,595,186|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":714875679.9522846,"samples":7},{"name":"Using dot notation","opsSec":714497401.6350578,"samples":6},{"name":"Using define property (writable)","opsSec":2999743.605630906,"samples":7},{"name":"Using define property initialized (writable)","opsSec":3747945.1541666393,"samples":6},{"name":"Using define property (getter)","opsSec":1595185.6850718383,"samples":5}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.01ms
array.push|100|0.035ms
new Array(length)|100|0.014ms
array.push|1,000|0.074ms
new Array(length)|1,000|0.038ms
array.push|10,000|0.47ms
new Array(length)|10,000|0.451ms
array.push|1,000,000|37.588ms
new Array(length)|1,000,000|9.183ms
array.push|100,000,000|2,173.919ms
new Array(length)|100,000,000|4,866.91ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.018ms
array.push|100|0.096ms
new Array(length)|100|0.018ms
array.push|1,000|0.046ms
new Array(length)|1,000|0.022ms
array.push|10,000|8.225ms
new Array(length)|10,000|0.02ms
array.push|1,000,000|84.606ms
new Array(length)|1,000,000|9.652ms
array.push|100,000,000|3,535.326ms
new Array(length)|100,000,000|4,849.887ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|300|78|
|Array.from|13|36|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:38:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Array","opsSec":299.67419703455715,"samples":5},{"name":"Array.from","opsSec":13.070674137874652,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,048|82|
|new Blob (1024)|396|67|
|text (128)|3,576|84|
|text (1024)|440|89|
|arrayBuffer (128)|3,487|85|
|arrayBuffer (1024)|434|87|
|slice (0, 64)|58,436|67|
|slice (0, 512)|21,509|58|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":3048.0860929948803,"samples":4},{"name":"new Blob (1024)","opsSec":396.13694482724617,"samples":2},{"name":"text (128)","opsSec":3575.8894938793296,"samples":4},{"name":"text (1024)","opsSec":440.47467522056,"samples":3},{"name":"arrayBuffer (128)","opsSec":3486.609387266867,"samples":4},{"name":"arrayBuffer (1024)","opsSec":434.4433488704228,"samples":2},{"name":"slice (0, 64)","opsSec":58436.12691889784,"samples":4},{"name":"slice (0, 512)","opsSec":21508.901780861568,"samples":5}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|196,998|56|
|[True conditional] Using constructor name|154,863|93|
|[True conditional] Check if property is valid then instanceof |154,594|88|
|[False conditional] Using instanceof only|989,929,682|95|
|[False conditional] Using constructor name|944,256,058|89|
|[False conditional] Check if property is valid then instanceof |983,327,764|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":196998.39555315176,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":154862.58316604438,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":154593.53932479725,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":989929681.515476,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":944256057.615183,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":983327764.0183756,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,741|91|
|crypto.verify('RSA-SHA256')|3,804|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:45:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":3740.953822777264,"samples":6},{"name":"crypto.verify('RSA-SHA256')","opsSec":3804.1872085846644,"samples":3}]}-->
