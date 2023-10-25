## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|392,652,744|95|
|Length = 10_000 - Array.at|390,740,726|93|
|Length = 1_000_000 - Array.at|394,099,878|92|
|Length = 100 - Array[length - 1]|586,513,847|93|
|Length = 10_000 - Array[length - 1]|585,493,872|94|
|Length = 1_000_000 - Array[length - 1]|586,639,591|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:07:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":392652743.85273457,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":390740726.38348716,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":394099877.7461991,"samples":8},{"name":"Length = 100 - Array[length - 1]","opsSec":586513847.3895895,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":585493871.6251258,"samples":8},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":586639591.0318083,"samples":7}]}-->
