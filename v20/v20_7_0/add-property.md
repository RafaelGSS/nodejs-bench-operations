## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|852,449,418|96|
|Using dot notation|853,526,935|99|
|Using define property (writable)|4,775,186|96|
|Using define property initialized (writable)|6,443,108|95|
|Using define property (getter)|2,483,856|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:55:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":852449417.9952933,"samples":6},{"name":"Using dot notation","opsSec":853526934.8407301,"samples":6},{"name":"Using define property (writable)","opsSec":4775186.499770695,"samples":5},{"name":"Using define property initialized (writable)","opsSec":6443108.423486155,"samples":6},{"name":"Using define property (getter)","opsSec":2483856.4074469754,"samples":5}]}-->
