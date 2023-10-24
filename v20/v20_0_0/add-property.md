## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|641,406,850|89|
|Using dot notation|619,830,405|89|
|Using define property (writable)|2,868,879|91|
|Using define property initialized (writable)|3,688,138|91|
|Using define property (getter)|1,525,956|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:19:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Directly in the object","opsSec":641406850.148402,"samples":9},{"name":"Using dot notation","opsSec":619830405.0831674,"samples":7},{"name":"Using define property (writable)","opsSec":2868879.357801959,"samples":7},{"name":"Using define property initialized (writable)","opsSec":3688138.3736254964,"samples":6},{"name":"Using define property (getter)","opsSec":1525955.7799537,"samples":5}]}-->
