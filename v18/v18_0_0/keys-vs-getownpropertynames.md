## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|39,460,910|90|
|Using Object.getOwnPropertyNames()|37,113,119|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:03:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Using Object.keys()","opsSec":39460910.0029679,"samples":6},{"name":"Using Object.getOwnPropertyNames()","opsSec":37113119.20535671,"samples":5}]}-->
