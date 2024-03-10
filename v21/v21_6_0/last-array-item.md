## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|869,557,077|97|
|Length = 10_000 - Array.at|870,627,431|98|
|Length = 1_000_000 - Array.at|873,600,630|96|
|Length = 100 - Array[length - 1]|822,624,418|96|
|Length = 10_000 - Array[length - 1]|821,936,212|97|
|Length = 1_000_000 - Array[length - 1]|822,817,786|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:56:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":869557077.2826685,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":870627431.1149796,"samples":9},{"name":"Length = 1_000_000 - Array.at","opsSec":873600630.2064217,"samples":9},{"name":"Length = 100 - Array[length - 1]","opsSec":822624417.601331,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":821936212.286512,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":822817785.8072021,"samples":6}]}-->
