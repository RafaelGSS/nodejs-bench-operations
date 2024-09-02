## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|13,697,914|6848958|
|Length = 10_000 - Array.at|13,794,237|6897119|
|Length = 1_000_000 - Array.at|13,804,244|6902123|
|Length = 100 - Array[length - 1]|14,205,353|7102677|
|Length = 10_000 - Array[length - 1]|14,219,005|7109503|
|Length = 1_000_000 - Array[length - 1]|14,613,769|7306885|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:05:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":13697914.21939194,"samples":6848958},{"name":"Length = 10_000 - Array.at","opsSec":13794237.144836398,"samples":6897119},{"name":"Length = 1_000_000 - Array.at","opsSec":13804244.78511486,"samples":6902123},{"name":"Length = 100 - Array[length - 1]","opsSec":14205353.090756735,"samples":7102677},{"name":"Length = 10_000 - Array[length - 1]","opsSec":14219005.602203734,"samples":7109503},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":14613769.35712833,"samples":7306885}]}-->
