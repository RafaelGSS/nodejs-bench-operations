## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|15,662,117|7831059|
|Using Object.getOwnPropertyNames()|15,648,712|7824357|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:31:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using Object.keys()","opsSec":15662117.999966156,"samples":7831059},{"name":"Using Object.getOwnPropertyNames()","opsSec":15648712.560186334,"samples":7824357}]}-->
