## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|567,663,771|90|
|Using dot notation|587,784,973|92|
|Using define property (writable)|2,627,968|91|
|Using define property initialized (writable)|3,612,819|93|
|Using define property (getter)|1,411,777|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":567663771.3958545,"samples":8},{"name":"Using dot notation","opsSec":587784972.8908635,"samples":7},{"name":"Using define property (writable)","opsSec":2627968.3176407665,"samples":6},{"name":"Using define property initialized (writable)","opsSec":3612818.761976375,"samples":5},{"name":"Using define property (getter)","opsSec":1411776.9815053002,"samples":5}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.021ms
new Array(length)|10|0.003ms
array.push|100|0.096ms
new Array(length)|100|0.016ms
array.push|1,000|0.061ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.448ms
new Array(length)|10,000|0.238ms
array.push|1,000,000|35.206ms
new Array(length)|1,000,000|11.085ms
array.push|100,000,000|1,854.569ms
new Array(length)|100,000,000|4,689.522ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.004ms
array.push|100|0.023ms
new Array(length)|100|0.015ms
array.push|1,000|0.06ms
new Array(length)|1,000|0.032ms
array.push|10,000|4.934ms
new Array(length)|10,000|0.301ms
array.push|1,000,000|29.012ms
new Array(length)|1,000,000|8.915ms
array.push|100,000,000|2,044.426ms
new Array(length)|100,000,000|4,735.778ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|336|83|
|Array.from|15|42|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:38:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":336.33539375770994,"samples":4},{"name":"Array.from","opsSec":15.433056623172263,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,423|80|
|new Blob (1024)|408|63|
|text (128)|3,909|84|
|text (1024)|483|89|
|arrayBuffer (128)|3,896|85|
|arrayBuffer (1024)|485|89|
|slice (0, 64)|93,474|45|
|slice (0, 512)|24,952|64|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Blob (128)","opsSec":3423.051834570329,"samples":4},{"name":"new Blob (1024)","opsSec":407.77655332776595,"samples":2},{"name":"text (128)","opsSec":3908.741006548852,"samples":5},{"name":"text (1024)","opsSec":482.59950628990356,"samples":2},{"name":"arrayBuffer (128)","opsSec":3895.606790632378,"samples":4},{"name":"arrayBuffer (1024)","opsSec":484.5056376571351,"samples":2},{"name":"slice (0, 64)","opsSec":93473.79792372797,"samples":4},{"name":"slice (0, 512)","opsSec":24951.528988719958,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|159,919|55|
|[True conditional] Using constructor name|128,491|94|
|[True conditional] Check if property is valid then instanceof |128,288|92|
|[False conditional] Using instanceof only|595,551,213|95|
|[False conditional] Using constructor name|598,311,523|89|
|[False conditional] Check if property is valid then instanceof |603,818,011|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":159918.83193254686,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":128491.4071532465,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":128288.27432291608,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":595551212.7071731,"samples":8},{"name":"[False conditional] Using constructor name","opsSec":598311523.317196,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":603818011.352398,"samples":7}]}-->
