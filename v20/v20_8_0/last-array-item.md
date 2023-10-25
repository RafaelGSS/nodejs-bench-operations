## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|578,989,701|91|
|Length = 10_000 - Array.at|600,549,773|94|
|Length = 1_000_000 - Array.at|598,914,358|90|
|Length = 100 - Array[length - 1]|602,131,609|93|
|Length = 10_000 - Array[length - 1]|596,730,527|94|
|Length = 1_000_000 - Array[length - 1]|602,276,213|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:07:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":578989701.3780521,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":600549772.8738027,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":598914358.3443836,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":602131608.9920862,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":596730527.0902689,"samples":8},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":602276213.4305481,"samples":8}]}-->
