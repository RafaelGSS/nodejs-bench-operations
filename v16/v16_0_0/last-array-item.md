## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|581,857,784|94|
|Length = 10_000 - Array[length - 1]|577,798,335|93|
|Length = 1_000_000 - Array[length - 1]|581,337,521|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:00:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":0,"samples":0},{"name":"Length = 10_000 - Array.at","opsSec":0,"samples":0},{"name":"Length = 1_000_000 - Array.at","opsSec":0,"samples":0},{"name":"Length = 100 - Array[length - 1]","opsSec":581857783.7169433,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":577798334.9664301,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":581337521.1558263,"samples":6}]}-->
