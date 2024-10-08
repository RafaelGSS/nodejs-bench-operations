## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|102,425,387|51232569|
|Using dot notation|67,375,071|33689286|
|Using define property (writable)|4,726,425|2363461|
|Using define property initialized (writable)|6,706,944|3353722|
|Using define property (getter)|2,318,633|1161770|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 20:59:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Directly in the object","opsSec":102425387.11696145,"samples":51232569},{"name":"Using dot notation","opsSec":67375071.86501661,"samples":33689286},{"name":"Using define property (writable)","opsSec":4726425.073120663,"samples":2363461},{"name":"Using define property initialized (writable)","opsSec":6706944.708208142,"samples":3353722},{"name":"Using define property (getter)","opsSec":2318633.8496077806,"samples":1161770}]}-->
