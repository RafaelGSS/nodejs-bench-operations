## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|556,371,686|88|
|Length = 10_000 - Array.at|535,614,533|81|
|Length = 1_000_000 - Array.at|554,410,862|86|
|Length = 100 - Array[length - 1]|675,980,382|86|
|Length = 10_000 - Array[length - 1]|656,954,893|86|
|Length = 1_000_000 - Array[length - 1]|655,468,637|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:32:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":556371686.1959195,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":535614532.58916944,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":554410862.3460473,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":675980381.5846635,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":656954892.6558911,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":655468636.5593085,"samples":6}]}-->
