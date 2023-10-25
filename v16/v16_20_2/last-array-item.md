## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|13,696,543|88|
|Length = 10_000 - Array.at|13,507,969|84|
|Length = 1_000_000 - Array.at|13,742,551|84|
|Length = 100 - Array[length - 1]|660,884,892|90|
|Length = 10_000 - Array[length - 1]|652,363,238|85|
|Length = 1_000_000 - Array[length - 1]|665,426,639|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:07:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":13696543.422417933,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":13507969.188053286,"samples":5},{"name":"Length = 1_000_000 - Array.at","opsSec":13742551.13588658,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":660884891.9703271,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":652363237.936635,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":665426639.169129,"samples":7}]}-->
