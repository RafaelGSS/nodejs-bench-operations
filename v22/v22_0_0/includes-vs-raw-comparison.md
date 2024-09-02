## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|13,410,449|6705225|
|using Array.includes (first item)|13,297,987|6648994|
|Using raw comparison|14,417,369|7208685|
|Using raw comparison (first item)|14,459,861|7229931|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:46:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"using Array.includes","opsSec":13410449.731765447,"samples":6705225},{"name":"using Array.includes (first item)","opsSec":13297987.707460815,"samples":6648994},{"name":"Using raw comparison","opsSec":14417369.27907601,"samples":7208685},{"name":"Using raw comparison (first item)","opsSec":14459861.132220028,"samples":7229931}]}-->
