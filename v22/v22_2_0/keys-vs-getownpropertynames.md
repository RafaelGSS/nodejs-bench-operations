## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|13,935,003|6967502|
|Using Object.getOwnPropertyNames()|13,947,912|6973957|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:22:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Using Object.keys()","opsSec":13935003.999995891,"samples":6967502},{"name":"Using Object.getOwnPropertyNames()","opsSec":13947912.549436064,"samples":6973957}]}-->
