## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|8,524,591|4262296|
|Length = 10_000 - Array.at|8,445,729|4222865|
|Length = 1_000_000 - Array.at|8,383,643|4191822|
|Length = 100 - Array[length - 1]|14,744,170|7372086|
|Length = 10_000 - Array[length - 1]|14,814,823|7407412|
|Length = 1_000_000 - Array[length - 1]|14,869,915|7434958|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:58:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":8524591.84774308,"samples":4262296},{"name":"Length = 10_000 - Array.at","opsSec":8445729.909670314,"samples":4222865},{"name":"Length = 1_000_000 - Array.at","opsSec":8383643.339359971,"samples":4191822},{"name":"Length = 100 - Array[length - 1]","opsSec":14744170.421225464,"samples":7372086},{"name":"Length = 10_000 - Array[length - 1]","opsSec":14814823.334110877,"samples":7407412},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":14869915.004777918,"samples":7434958}]}-->
