## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,255,130|96|
|Length = 10_000 - Array.at|18,901,674|94|
|Length = 1_000_000 - Array.at|18,703,211|97|
|Length = 100 - Array[length - 1]|592,374,453|94|
|Length = 10_000 - Array[length - 1]|591,399,045|96|
|Length = 1_000_000 - Array[length - 1]|591,312,685|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:01:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":19255129.613928806,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":18901674.170357093,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":18703211.478133112,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":592374453.1636695,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":591399044.8258128,"samples":8},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":591312685.4918702,"samples":7}]}-->
