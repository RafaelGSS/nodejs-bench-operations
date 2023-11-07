## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|27,135,337|99|
|Length = 10_000 - Array.at|27,200,316|94|
|Length = 1_000_000 - Array.at|26,770,248|96|
|Length = 100 - Array[length - 1]|846,650,909|101|
|Length = 10_000 - Array[length - 1]|845,155,568|98|
|Length = 1_000_000 - Array[length - 1]|842,931,878|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:36:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":27135336.764652956,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":27200316.170272958,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":26770248.25897284,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":846650909.2896446,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":845155568.1907703,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":842931877.7061819,"samples":8}]}-->
