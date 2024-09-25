## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|14,249,847|7124924|
|Using Object.getOwnPropertyNames()|14,199,538|7099770|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:29:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using Object.keys()","opsSec":14249847.089860812,"samples":7124924},{"name":"Using Object.getOwnPropertyNames()","opsSec":14199538.43034892,"samples":7099770}]}-->
