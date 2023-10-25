## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|573,024,694|94|
|Length = 10_000 - Array[length - 1]|583,585,279|95|
|Length = 1_000_000 - Array[length - 1]|579,028,461|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:07:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":0,"samples":0},{"name":"Length = 10_000 - Array.at","opsSec":0,"samples":0},{"name":"Length = 1_000_000 - Array.at","opsSec":0,"samples":0},{"name":"Length = 100 - Array[length - 1]","opsSec":573024694.4021798,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":583585279.2478479,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":579028460.7195885,"samples":9}]}-->
