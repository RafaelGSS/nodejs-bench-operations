## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|688,696,461|90|
|Length = 10_000 - Array.at|700,932,387|94|
|Length = 1_000_000 - Array.at|688,869,924|90|
|Length = 100 - Array[length - 1]|720,788,945|88|
|Length = 10_000 - Array[length - 1]|702,735,610|90|
|Length = 1_000_000 - Array[length - 1]|720,290,935|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:07:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":688696460.6543256,"samples":8},{"name":"Length = 10_000 - Array.at","opsSec":700932387.0604638,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":688869923.9932572,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":720788945.0687469,"samples":5},{"name":"Length = 10_000 - Array[length - 1]","opsSec":702735609.8425486,"samples":5},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":720290935.3379196,"samples":8}]}-->
