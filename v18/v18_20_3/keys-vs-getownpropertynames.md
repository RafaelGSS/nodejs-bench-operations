## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|11,860,115|5930058|
|Using Object.getOwnPropertyNames()|12,068,961|6034481|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:28:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using Object.keys()","opsSec":11860115.84370485,"samples":5930058},{"name":"Using Object.getOwnPropertyNames()","opsSec":12068961.382671436,"samples":6034481}]}-->
