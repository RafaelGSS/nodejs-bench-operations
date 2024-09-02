## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,536,475|7268238|
|Length = 10_000 - Array.at|14,490,205|7245103|
|Length = 1_000_000 - Array.at|14,645,687|7322844|
|Length = 100 - Array[length - 1]|14,349,508|7174755|
|Length = 10_000 - Array[length - 1]|14,610,695|7305348|
|Length = 1_000_000 - Array[length - 1]|14,632,419|7316210|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:00:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":14536475.45825748,"samples":7268238},{"name":"Length = 10_000 - Array.at","opsSec":14490205.587780032,"samples":7245103},{"name":"Length = 1_000_000 - Array.at","opsSec":14645687.047910566,"samples":7322844},{"name":"Length = 100 - Array[length - 1]","opsSec":14349508.353392236,"samples":7174755},{"name":"Length = 10_000 - Array[length - 1]","opsSec":14610695.309812032,"samples":7305348},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":14632419.085213032,"samples":7316210}]}-->
