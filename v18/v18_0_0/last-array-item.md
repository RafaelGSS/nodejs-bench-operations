## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|13,878,412|85|
|Length = 10_000 - Array.at|13,216,728|83|
|Length = 1_000_000 - Array.at|13,862,497|86|
|Length = 100 - Array[length - 1]|661,712,702|86|
|Length = 10_000 - Array[length - 1]|662,625,246|85|
|Length = 1_000_000 - Array[length - 1]|677,680,896|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:32:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":13878411.592515342,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":13216727.96320488,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":13862497.14481723,"samples":4},{"name":"Length = 100 - Array[length - 1]","opsSec":661712701.7902043,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":662625245.9634544,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":677680896.1449544,"samples":7}]}-->
