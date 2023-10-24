## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,986,828|94|
|Length = 10_000 - Array.at|18,547,190|95|
|Length = 1_000_000 - Array.at|18,981,762|97|
|Length = 100 - Array[length - 1]|593,572,977|97|
|Length = 10_000 - Array[length - 1]|593,374,815|96|
|Length = 1_000_000 - Array[length - 1]|592,917,898|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:32:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":18986828.118198562,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":18547189.772391044,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":18981761.880293515,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":593572976.9716222,"samples":9},{"name":"Length = 10_000 - Array[length - 1]","opsSec":593374815.4055427,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":592917897.5421089,"samples":9}]}-->
