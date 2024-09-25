## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,208,323|7104162|
|Length = 10_000 - Array.at|13,473,941|6736971|
|Length = 1_000_000 - Array.at|14,522,813|7261407|
|Length = 100 - Array[length - 1]|14,151,774|7075888|
|Length = 10_000 - Array[length - 1]|13,820,689|6910345|
|Length = 1_000_000 - Array[length - 1]|13,160,206|6580104|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:39:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":14208323.023941977,"samples":7104162},{"name":"Length = 10_000 - Array.at","opsSec":13473941.934345797,"samples":6736971},{"name":"Length = 1_000_000 - Array.at","opsSec":14522813.674659446,"samples":7261407},{"name":"Length = 100 - Array[length - 1]","opsSec":14151774.818161294,"samples":7075888},{"name":"Length = 10_000 - Array[length - 1]","opsSec":13820689.579024062,"samples":6910345},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":13160206.959775003,"samples":6580104}]}-->
