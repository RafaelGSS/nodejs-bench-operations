## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|14,176,365|7088183|
|Using dot notation|13,917,893|6958947|
|Using define property (writable)|3,350,433|1675217|
|Using define property initialized (writable)|4,112,435|2056218|
|Using define property (getter)|2,032,989|1016495|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:23:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":14176365.007658187,"samples":7088183},{"name":"Using dot notation","opsSec":13917893.610262696,"samples":6958947},{"name":"Using define property (writable)","opsSec":3350433.557746716,"samples":1675217},{"name":"Using define property initialized (writable)","opsSec":4112435.909550317,"samples":2056218},{"name":"Using define property (getter)","opsSec":2032989.4307593498,"samples":1016495}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.078ms
new Array(length)|100|0.008ms
array.push|1,000|0.027ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.286ms
new Array(length)|10,000|0.163ms
array.push|1,000,000|29.749ms
new Array(length)|1,000,000|6.743ms
array.push|100,000,000|1,898.812ms
new Array(length)|100,000,000|4,023.329ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.004ms
array.push|100|0.039ms
new Array(length)|100|0.014ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.019ms
array.push|10,000|164.745ms
new Array(length)|10,000|0.036ms
array.push|1,000,000|17.04ms
new Array(length)|1,000,000|8.597ms
array.push|100,000,000|2,022.513ms
new Array(length)|100,000,000|4,617.676ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|336|169|
|Array.from|24|13|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:35:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Array","opsSec":336.43771982285625,"samples":169},{"name":"Array.from","opsSec":24.39299930451994,"samples":13}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,307|1154|
|new Blob (1024)|657|329|
|text (128)|4,437|2219|
|text (1024)|574|288|
|arrayBuffer (128)|4,571|2286|
|arrayBuffer (1024)|569|285|
|slice (0, 64)|177,363|88682|
|slice (0, 512)|39,507|19754|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:41:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Blob (128)","opsSec":2307.9769525423762,"samples":1154},{"name":"new Blob (1024)","opsSec":657.4141177975036,"samples":329},{"name":"text (128)","opsSec":4437.079155214597,"samples":2219},{"name":"text (1024)","opsSec":574.7310983359264,"samples":288},{"name":"arrayBuffer (128)","opsSec":4571.2634688874095,"samples":2286},{"name":"arrayBuffer (1024)","opsSec":569.2201615480334,"samples":285},{"name":"slice (0, 64)","opsSec":177363.0081860567,"samples":88682},{"name":"slice (0, 512)","opsSec":39507.642692867754,"samples":19754}]}-->
