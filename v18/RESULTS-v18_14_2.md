## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|595,271,421|92|
|Using dot notation|606,545,042|93|
|Using define property (writable)|2,565,170|97|
|Using define property initialized (writable)|3,156,964|96|
|Using define property (getter)|1,310,978|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:50:38 GMT+0000 (Coordinated Universal Time)
</details>


## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.036ms
new Array(length)|100|0.012ms
array.push|1,000|0.069ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.468ms
new Array(length)|10,000|0.241ms
array.push|1,000,000|46.929ms
new Array(length)|1,000,000|6.885ms
array.push|100,000,000|1,955.015ms
new Array(length)|100,000,000|4,715.513ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.021ms
array.push|100|0.017ms
new Array(length)|100|0.011ms
array.push|1,000|0.073ms
new Array(length)|1,000|0.038ms
array.push|10,000|0.668ms
new Array(length)|10,000|4.273ms
array.push|1,000,000|327.205ms
new Array(length)|1,000,000|4.981ms
array.push|100,000,000|2,775.915ms
new Array(length)|100,000,000|5,524.558ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:51:57 GMT+0000 (Coordinated Universal Time)
</details>


## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|304|84|
|Array.from|15|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:53:42 GMT+0000 (Coordinated Universal Time)
</details>


## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,003|82|
|new Blob (1024)|390|67|
|text (128)|28,549|61|
|text (1024)|19,414|77|
|arrayBuffer (128)|28,518|74|
|arrayBuffer (1024)|20,050|79|
|slice (0, 64)|52,990|74|
|slice (0, 512)|23,950|72|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:55:59 GMT+0000 (Coordinated Universal Time)
</details>


## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|126,203|60|
|[True conditional] Using constructor name|100,482|90|
|[True conditional] Check if property is valid then instanceof |103,716|92|
|[False conditional] Using instanceof only|710,767,286|92|
|[False conditional] Using constructor name|704,987,935|88|
|[False conditional] Check if property is valid then instanceof |703,669,939|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:07:27 GMT+0000 (Coordinated Universal Time)
</details>


## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|126,203|60|
|[True conditional] Using constructor name|100,482|90|
|[True conditional] Check if property is valid then instanceof |103,716|92|
|[False conditional] Using instanceof only|710,767,286|92|
|[False conditional] Using constructor name|704,987,935|88|
|[False conditional] Check if property is valid then instanceof |703,669,939|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:07:27 GMT+0000 (Coordinated Universal Time)
</details>


## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|126,203|60|
|[True conditional] Using constructor name|100,482|90|
|[True conditional] Check if property is valid then instanceof |103,716|92|
|[False conditional] Using instanceof only|710,767,286|92|
|[False conditional] Using constructor name|704,987,935|88|
|[False conditional] Check if property is valid then instanceof |703,669,939|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:07:27 GMT+0000 (Coordinated Universal Time)
</details>


## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|126,203|60|
|[True conditional] Using constructor name|100,482|90|
|[True conditional] Check if property is valid then instanceof |103,716|92|
|[False conditional] Using instanceof only|710,767,286|92|
|[False conditional] Using constructor name|704,987,935|88|
|[False conditional] Check if property is valid then instanceof |703,669,939|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:07:27 GMT+0000 (Coordinated Universal Time)
</details>


## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|126,203|60|
|[True conditional] Using constructor name|100,482|90|
|[True conditional] Check if property is valid then instanceof |103,716|92|
|[False conditional] Using instanceof only|710,767,286|92|
|[False conditional] Using constructor name|704,987,935|88|
|[False conditional] Check if property is valid then instanceof |703,669,939|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:07:27 GMT+0000 (Coordinated Universal Time)
</details>


## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|126,203|60|
|[True conditional] Using constructor name|100,482|90|
|[True conditional] Check if property is valid then instanceof |103,716|92|
|[False conditional] Using instanceof only|710,767,286|92|
|[False conditional] Using constructor name|704,987,935|88|
|[False conditional] Check if property is valid then instanceof |703,669,939|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:07:27 GMT+0000 (Coordinated Universal Time)
</details>


## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|126,203|60|
|[True conditional] Using constructor name|100,482|90|
|[True conditional] Check if property is valid then instanceof |103,716|92|
|[False conditional] Using instanceof only|710,767,286|92|
|[False conditional] Using constructor name|704,987,935|88|
|[False conditional] Check if property is valid then instanceof |703,669,939|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:07:27 GMT+0000 (Coordinated Universal Time)
</details>


## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|126,203|60|
|[True conditional] Using constructor name|100,482|90|
|[True conditional] Check if property is valid then instanceof |103,716|92|
|[False conditional] Using instanceof only|710,767,286|92|
|[False conditional] Using constructor name|704,987,935|88|
|[False conditional] Check if property is valid then instanceof |703,669,939|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:07:27 GMT+0000 (Coordinated Universal Time)
</details>


## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|126,203|60|
|[True conditional] Using constructor name|100,482|90|
|[True conditional] Check if property is valid then instanceof |103,716|92|
|[False conditional] Using instanceof only|710,767,286|92|
|[False conditional] Using constructor name|704,987,935|88|
|[False conditional] Check if property is valid then instanceof |703,669,939|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:07:27 GMT+0000 (Coordinated Universal Time)
</details>


## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|66,394,745|89|
|Using Object.getOwnPropertyNames()|65,049,405|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:25:05 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,704,688|96|
|Length = 10_000 - Array.at|19,062,395|96|
|Length = 1_000_000 - Array.at|19,269,176|96|
|Length = 100 - Array[length - 1]|589,456,031|97|
|Length = 10_000 - Array[length - 1]|588,279,927|92|
|Length = 1_000_000 - Array[length - 1]|588,403,148|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:55 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,704,688|96|
|Length = 10_000 - Array.at|19,062,395|96|
|Length = 1_000_000 - Array.at|19,269,176|96|
|Length = 100 - Array[length - 1]|589,456,031|97|
|Length = 10_000 - Array[length - 1]|588,279,927|92|
|Length = 1_000_000 - Array[length - 1]|588,403,148|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:55 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,704,688|96|
|Length = 10_000 - Array.at|19,062,395|96|
|Length = 1_000_000 - Array.at|19,269,176|96|
|Length = 100 - Array[length - 1]|589,456,031|97|
|Length = 10_000 - Array[length - 1]|588,279,927|92|
|Length = 1_000_000 - Array[length - 1]|588,403,148|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:55 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,704,688|96|
|Length = 10_000 - Array.at|19,062,395|96|
|Length = 1_000_000 - Array.at|19,269,176|96|
|Length = 100 - Array[length - 1]|589,456,031|97|
|Length = 10_000 - Array[length - 1]|588,279,927|92|
|Length = 1_000_000 - Array[length - 1]|588,403,148|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:55 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,704,688|96|
|Length = 10_000 - Array.at|19,062,395|96|
|Length = 1_000_000 - Array.at|19,269,176|96|
|Length = 100 - Array[length - 1]|589,456,031|97|
|Length = 10_000 - Array[length - 1]|588,279,927|92|
|Length = 1_000_000 - Array[length - 1]|588,403,148|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:55 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,704,688|96|
|Length = 10_000 - Array.at|19,062,395|96|
|Length = 1_000_000 - Array.at|19,269,176|96|
|Length = 100 - Array[length - 1]|589,456,031|97|
|Length = 10_000 - Array[length - 1]|588,279,927|92|
|Length = 1_000_000 - Array[length - 1]|588,403,148|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:55 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,704,688|96|
|Length = 10_000 - Array.at|19,062,395|96|
|Length = 1_000_000 - Array.at|19,269,176|96|
|Length = 100 - Array[length - 1]|589,456,031|97|
|Length = 10_000 - Array[length - 1]|588,279,927|92|
|Length = 1_000_000 - Array[length - 1]|588,403,148|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:55 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,704,688|96|
|Length = 10_000 - Array.at|19,062,395|96|
|Length = 1_000_000 - Array.at|19,269,176|96|
|Length = 100 - Array[length - 1]|589,456,031|97|
|Length = 10_000 - Array[length - 1]|588,279,927|92|
|Length = 1_000_000 - Array[length - 1]|588,403,148|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:55 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,704,688|96|
|Length = 10_000 - Array.at|19,062,395|96|
|Length = 1_000_000 - Array.at|19,269,176|96|
|Length = 100 - Array[length - 1]|589,456,031|97|
|Length = 10_000 - Array[length - 1]|588,279,927|92|
|Length = 1_000_000 - Array[length - 1]|588,403,148|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:55 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,704,688|96|
|Length = 10_000 - Array.at|19,062,395|96|
|Length = 1_000_000 - Array.at|19,269,176|96|
|Length = 100 - Array[length - 1]|589,456,031|97|
|Length = 10_000 - Array[length - 1]|588,279,927|92|
|Length = 1_000_000 - Array[length - 1]|588,403,148|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:55 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,704,688|96|
|Length = 10_000 - Array.at|19,062,395|96|
|Length = 1_000_000 - Array.at|19,269,176|96|
|Length = 100 - Array[length - 1]|589,456,031|97|
|Length = 10_000 - Array[length - 1]|588,279,927|92|
|Length = 1_000_000 - Array[length - 1]|588,403,148|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:55 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,704,688|96|
|Length = 10_000 - Array.at|19,062,395|96|
|Length = 1_000_000 - Array.at|19,269,176|96|
|Length = 100 - Array[length - 1]|589,456,031|97|
|Length = 10_000 - Array[length - 1]|588,279,927|92|
|Length = 1_000_000 - Array[length - 1]|588,403,148|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:55 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,704,688|96|
|Length = 10_000 - Array.at|19,062,395|96|
|Length = 1_000_000 - Array.at|19,269,176|96|
|Length = 100 - Array[length - 1]|589,456,031|97|
|Length = 10_000 - Array[length - 1]|588,279,927|92|
|Length = 1_000_000 - Array[length - 1]|588,403,148|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:55 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,704,688|96|
|Length = 10_000 - Array.at|19,062,395|96|
|Length = 1_000_000 - Array.at|19,269,176|96|
|Length = 100 - Array[length - 1]|589,456,031|97|
|Length = 10_000 - Array[length - 1]|588,279,927|92|
|Length = 1_000_000 - Array[length - 1]|588,403,148|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:55 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,704,688|96|
|Length = 10_000 - Array.at|19,062,395|96|
|Length = 1_000_000 - Array.at|19,269,176|96|
|Length = 100 - Array[length - 1]|589,456,031|97|
|Length = 10_000 - Array[length - 1]|588,279,927|92|
|Length = 1_000_000 - Array[length - 1]|588,403,148|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:55 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,704,688|96|
|Length = 10_000 - Array.at|19,062,395|96|
|Length = 1_000_000 - Array.at|19,269,176|96|
|Length = 100 - Array[length - 1]|589,456,031|97|
|Length = 10_000 - Array[length - 1]|588,279,927|92|
|Length = 1_000_000 - Array[length - 1]|588,403,148|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:55 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,704,688|96|
|Length = 10_000 - Array.at|19,062,395|96|
|Length = 1_000_000 - Array.at|19,269,176|96|
|Length = 100 - Array[length - 1]|589,456,031|97|
|Length = 10_000 - Array[length - 1]|588,279,927|92|
|Length = 1_000_000 - Array[length - 1]|588,403,148|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:55 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,704,688|96|
|Length = 10_000 - Array.at|19,062,395|96|
|Length = 1_000_000 - Array.at|19,269,176|96|
|Length = 100 - Array[length - 1]|589,456,031|97|
|Length = 10_000 - Array[length - 1]|588,279,927|92|
|Length = 1_000_000 - Array[length - 1]|588,403,148|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:55 GMT+0000 (Coordinated Universal Time)
</details>


## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|8,010,207|94|
|Date.now()|15,802,914|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 23:19:11 GMT+0000 (Coordinated Universal Time)
</details>

