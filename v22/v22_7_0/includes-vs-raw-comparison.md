## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|13,847,633|6923817|
|using Array.includes (first item)|14,936,160|7468081|
|Using raw comparison|15,095,380|7547691|
|Using raw comparison (first item)|14,604,486|7302244|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:48:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"using Array.includes","opsSec":13847633.002980616,"samples":6923817},{"name":"using Array.includes (first item)","opsSec":14936160.148243712,"samples":7468081},{"name":"Using raw comparison","opsSec":15095380.158230208,"samples":7547691},{"name":"Using raw comparison (first item)","opsSec":14604486.159965565,"samples":7302244}]}-->
