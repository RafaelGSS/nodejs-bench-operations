## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|13,643,543|6821772|
|using Array.includes (first item)|14,908,814|7454408|
|Using raw comparison|15,996,423|7998212|
|Using raw comparison (first item)|15,939,967|7969984|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:44:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"using Array.includes","opsSec":13643543.9174329,"samples":6821772},{"name":"using Array.includes (first item)","opsSec":14908814.863491869,"samples":7454408},{"name":"Using raw comparison","opsSec":15996423.575590609,"samples":7998212},{"name":"Using raw comparison (first item)","opsSec":15939967.231461339,"samples":7969984}]}-->
