## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|888,956,742|94|
|Length = 10_000 - Array.at|893,175,888|99|
|Length = 1_000_000 - Array.at|896,976,364|99|
|Length = 100 - Array[length - 1]|785,346,735|94|
|Length = 10_000 - Array[length - 1]|787,764,820|97|
|Length = 1_000_000 - Array[length - 1]|780,563,259|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 15:57:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":888956742.2858129,"samples":8},{"name":"Length = 10_000 - Array.at","opsSec":893175887.5904894,"samples":8},{"name":"Length = 1_000_000 - Array.at","opsSec":896976364.4964765,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":785346734.9315332,"samples":9},{"name":"Length = 10_000 - Array[length - 1]","opsSec":787764820.253667,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":780563259.3793459,"samples":7}]}-->
