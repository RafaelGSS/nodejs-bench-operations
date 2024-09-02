## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|13,273,873|6636937|
|Length = 10_000 - Array.at|13,892,467|6946234|
|Length = 1_000_000 - Array.at|14,682,269|7341135|
|Length = 100 - Array[length - 1]|14,939,500|7469751|
|Length = 10_000 - Array[length - 1]|14,045,965|7022983|
|Length = 1_000_000 - Array[length - 1]|14,070,145|7035073|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:06:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":13273873.708048563,"samples":6636937},{"name":"Length = 10_000 - Array.at","opsSec":13892467.861143405,"samples":6946234},{"name":"Length = 1_000_000 - Array.at","opsSec":14682269.911848238,"samples":7341135},{"name":"Length = 100 - Array[length - 1]","opsSec":14939500.266923575,"samples":7469751},{"name":"Length = 10_000 - Array[length - 1]","opsSec":14045965.97205134,"samples":7022983},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":14070145.240419103,"samples":7035073}]}-->
