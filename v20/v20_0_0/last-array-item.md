## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|603,371,795|93|
|Length = 10_000 - Array.at|608,267,142|89|
|Length = 1_000_000 - Array.at|601,728,944|94|
|Length = 100 - Array[length - 1]|619,381,079|95|
|Length = 10_000 - Array[length - 1]|613,617,087|89|
|Length = 1_000_000 - Array[length - 1]|616,382,607|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:32:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":603371795.1788844,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":608267142.3256228,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":601728944.0683215,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":619381079.3162417,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":613617087.4982859,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":616382607.4353615,"samples":5}]}-->
