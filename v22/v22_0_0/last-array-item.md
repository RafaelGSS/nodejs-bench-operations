## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|13,747,606|6873804|
|Length = 10_000 - Array.at|13,824,570|6912286|
|Length = 1_000_000 - Array.at|13,787,177|6893589|
|Length = 100 - Array[length - 1]|13,920,651|6960326|
|Length = 10_000 - Array[length - 1]|14,096,680|7048341|
|Length = 1_000_000 - Array[length - 1]|13,475,055|6737528|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:46:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":13747606.267853437,"samples":6873804},{"name":"Length = 10_000 - Array.at","opsSec":13824570.672906147,"samples":6912286},{"name":"Length = 1_000_000 - Array.at","opsSec":13787177.751751969,"samples":6893589},{"name":"Length = 100 - Array[length - 1]","opsSec":13920651.749415321,"samples":6960326},{"name":"Length = 10_000 - Array[length - 1]","opsSec":14096680.703299811,"samples":7048341},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":13475055.945800135,"samples":6737528}]}-->
