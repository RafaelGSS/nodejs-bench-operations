## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|700,883,737|93|
|Using dot notation|707,945,153|97|
|Using define property (writable)|2,935,063|97|
|Using define property initialized (writable)|3,721,353|97|
|Using define property (getter)|1,501,616|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Aug 27 2023 00:42:51 GMT+0000 (Coordinated Universal Time)
</details>


## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|710,991,416|97|
|Using dot notation|712,361,683|98|
|Using define property (writable)|2,979,398|97|
|Using define property initialized (writable)|3,761,717|97|
|Using define property (getter)|1,566,910|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:02:59 GMT+0000 (Coordinated Universal Time)
</details>


## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.029ms
new Array(length)|100|0.009ms
array.push|1,000|0.066ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.462ms
new Array(length)|10,000|0.239ms
array.push|1,000,000|44.518ms
new Array(length)|1,000,000|6.407ms
array.push|100,000,000|1,998.555ms
new Array(length)|100,000,000|4,609.028ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.02ms
array.push|100|0.032ms
new Array(length)|100|0.013ms
array.push|1,000|0.067ms
new Array(length)|1,000|0.036ms
array.push|10,000|0.678ms
new Array(length)|10,000|4.293ms
array.push|1,000,000|325.727ms
new Array(length)|1,000,000|4.572ms
array.push|100,000,000|2,776.477ms
new Array(length)|100,000,000|5,430.25ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:04:21 GMT+0000 (Coordinated Universal Time)
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




<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Aug 27 2023 00:21:31 GMT+0000 (Coordinated Universal Time)
</details>

