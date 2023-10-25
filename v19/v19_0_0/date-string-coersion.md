## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|682,799|96|
|Using brackets {}|695,524|94|
|Using '' + |694,752|97|
|Using date.toString()|750,919|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:51:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":682798.8497476443,"samples":5},{"name":"Using brackets {}","opsSec":695523.9261144428,"samples":3},{"name":"Using '' + ","opsSec":694751.9783757286,"samples":5},{"name":"Using date.toString()","opsSec":750918.531583909,"samples":5}]}-->
