## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|26,593,023|96|
|Length = 10_000 - Array.at|26,583,422|95|
|Length = 1_000_000 - Array.at|26,695,632|99|
|Length = 100 - Array[length - 1]|846,337,604|92|
|Length = 10_000 - Array[length - 1]|844,625,188|97|
|Length = 1_000_000 - Array[length - 1]|845,400,178|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:33:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":26593022.509454697,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":26583422.15792344,"samples":5},{"name":"Length = 1_000_000 - Array.at","opsSec":26695631.57803039,"samples":5},{"name":"Length = 100 - Array[length - 1]","opsSec":846337603.8793663,"samples":8},{"name":"Length = 10_000 - Array[length - 1]","opsSec":844625187.8456317,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":845400178.3594215,"samples":9}]}-->
