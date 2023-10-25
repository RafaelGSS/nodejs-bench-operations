## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|587,189,594|88|
|Using dot notation|598,185,021|88|
|Using define property (writable)|2,433,001|86|
|Using define property initialized (writable)|2,989,161|87|
|Using define property (getter)|1,185,578|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":587189593.6648036,"samples":8},{"name":"Using dot notation","opsSec":598185021.4888043,"samples":6},{"name":"Using define property (writable)","opsSec":2433000.686322029,"samples":6},{"name":"Using define property initialized (writable)","opsSec":2989161.4318045694,"samples":5},{"name":"Using define property (getter)","opsSec":1185577.810211867,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.003ms
array.push|100|0.042ms
new Array(length)|100|0.013ms
array.push|1,000|0.063ms
new Array(length)|1,000|0.031ms
array.push|10,000|0.567ms
new Array(length)|10,000|0.321ms
array.push|1,000,000|33.942ms
new Array(length)|1,000,000|11.034ms
array.push|100,000,000|1,865.566ms
new Array(length)|100,000,000|5,077.103ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.003ms
array.push|100|0.018ms
new Array(length)|100|0.016ms
array.push|1,000|0.058ms
new Array(length)|1,000|0.028ms
array.push|10,000|0.496ms
new Array(length)|10,000|4.273ms
array.push|1,000,000|27.18ms
new Array(length)|1,000,000|10.47ms
array.push|100,000,000|2,844.735ms
new Array(length)|100,000,000|5,170.804ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|278|79|
|Array.from|13|35|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:38:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":277.6289633392329,"samples":3},{"name":"Array.from","opsSec":12.64800518139481,"samples":1}]}-->
