## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|16,653,719|8326860|
|Using Object.getOwnPropertyNames()|16,030,505|8015253|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:30:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using Object.keys()","opsSec":16653719.100677721,"samples":8326860},{"name":"Using Object.getOwnPropertyNames()","opsSec":16030505.64729773,"samples":8015253}]}-->
