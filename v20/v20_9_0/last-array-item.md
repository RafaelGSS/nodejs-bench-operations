## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|847,383,904|97|
|Length = 10_000 - Array.at|848,069,329|99|
|Length = 1_000_000 - Array.at|848,824,299|100|
|Length = 100 - Array[length - 1]|850,082,862|98|
|Length = 10_000 - Array[length - 1]|850,092,115|100|
|Length = 1_000_000 - Array[length - 1]|849,842,557|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:35:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":847383904.2320437,"samples":8},{"name":"Length = 10_000 - Array.at","opsSec":848069328.6103436,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":848824299.0281385,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":850082861.851655,"samples":8},{"name":"Length = 10_000 - Array[length - 1]","opsSec":850092115.2413454,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":849842556.6441283,"samples":7}]}-->
