## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|89,396,567|94|
|Using Object.getOwnPropertyNames()|91,465,322|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:24:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using Object.keys()","opsSec":89396567.45244552,"samples":7},{"name":"Using Object.getOwnPropertyNames()","opsSec":91465322.4085564,"samples":8}]}-->
