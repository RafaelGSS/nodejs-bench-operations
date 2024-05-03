## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|912,176,634|97|
|Using dot notation|911,858,323|99|
|Using define property (writable)|4,763,846|97|
|Using define property initialized (writable)|7,071,793|94|
|Using define property (getter)|2,785,968|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:19:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":912176634.4410051,"samples":6},{"name":"Using dot notation","opsSec":911858323.3457873,"samples":6},{"name":"Using define property (writable)","opsSec":4763846.362880353,"samples":5},{"name":"Using define property initialized (writable)","opsSec":7071792.984144087,"samples":4},{"name":"Using define property (getter)","opsSec":2785967.849058611,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.094ms
new Array(length)|100|0.015ms
array.push|1,000|0.053ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.27ms
new Array(length)|10,000|0.177ms
array.push|1,000,000|29.557ms
new Array(length)|1,000,000|7.969ms
array.push|100,000,000|1,962.148ms
new Array(length)|100,000,000|4,314.779ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.016ms
new Array(length)|100|0.011ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.306ms
new Array(length)|10,000|0.2ms
array.push|1,000,000|21.916ms
new Array(length)|1,000,000|7.309ms
array.push|100,000,000|2,083.417ms
new Array(length)|100,000,000|4,915.579ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|217|85|
|Array.from|23|43|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:33:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":217.24651601448107,"samples":2},{"name":"Array.from","opsSec":23.261679866019588,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|912,258,679|99|
|[async] async function|18,177,278|87|
|[async] function|372,827|33|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:40:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"function","opsSec":912258679.0486792,"samples":6},{"name":"[async] async function","opsSec":18177277.85342129,"samples":7},{"name":"[async] function","opsSec":372826.6935797394,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|6,230|89|
|new Blob (1024)|794|77|
|text (128)|6,509|88|
|text (1024)|824|89|
|arrayBuffer (128)|6,574|89|
|arrayBuffer (1024)|831|88|
|slice (0, 64)|191,793|55|
|slice (0, 512)|32,756|51|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:51:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":6230.264611648926,"samples":6},{"name":"new Blob (1024)","opsSec":794.1658850876366,"samples":2},{"name":"text (128)","opsSec":6508.677014024432,"samples":6},{"name":"text (1024)","opsSec":823.6898507825849,"samples":2},{"name":"arrayBuffer (128)","opsSec":6574.214785337679,"samples":5},{"name":"arrayBuffer (1024)","opsSec":831.0773081224233,"samples":2},{"name":"slice (0, 64)","opsSec":191793.4658782101,"samples":4},{"name":"slice (0, 512)","opsSec":32756.192472145278,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|274,679|54|
|[True conditional] Using constructor name|228,154|96|
|[True conditional] Check if property is valid then instanceof |228,435|90|
|[False conditional] Using instanceof only|912,130,345|100|
|[False conditional] Using constructor name|913,253,201|94|
|[False conditional] Check if property is valid then instanceof |913,454,371|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:03:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":274678.7330308187,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":228154.00239916894,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":228435.25427802932,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":912130344.6276729,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":913253200.6691492,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":913454370.8391877,"samples":8}]}-->
