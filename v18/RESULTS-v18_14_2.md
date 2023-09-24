## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|710,948,790|97|
|Using dot notation|709,283,648|95|
|Using define property (writable)|2,949,572|92|
|Using define property initialized (writable)|3,725,494|95|
|Using define property (getter)|1,554,221|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Sep 24 2023 10:42:11 GMT+0000 (Coordinated Universal Time)
</details>


## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.003ms
array.push|100|0.035ms
new Array(length)|100|0.028ms
array.push|1,000|0.078ms
new Array(length)|1,000|0.041ms
array.push|10,000|0.541ms
new Array(length)|10,000|0.281ms
array.push|1,000,000|48.977ms
new Array(length)|1,000,000|8.373ms
array.push|100,000,000|2,142.3ms
new Array(length)|100,000,000|5,691.055ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.021ms
array.push|100|0.019ms
new Array(length)|100|0.013ms
array.push|1,000|0.079ms
new Array(length)|1,000|0.044ms
array.push|10,000|0.791ms
new Array(length)|10,000|5.088ms
array.push|1,000,000|402.53ms
new Array(length)|1,000,000|5.156ms
array.push|100,000,000|3,140.076ms
new Array(length)|100,000,000|6,391.633ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Sep 24 2023 10:51:30 GMT+0000 (Coordinated Universal Time)
</details>


## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|265|78|
|Array.from|12|34|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:05:51 GMT+0000 (Coordinated Universal Time)
</details>




<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Fri Sep 22 2023 10:14:02 GMT+0000 (Coordinated Universal Time)
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

