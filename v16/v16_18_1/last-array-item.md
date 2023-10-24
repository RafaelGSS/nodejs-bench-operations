## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,564,583|88|
|Length = 10_000 - Array.at|15,742,770|90|
|Length = 1_000_000 - Array.at|15,546,188|89|
|Length = 100 - Array[length - 1]|736,160,704|87|
|Length = 10_000 - Array[length - 1]|750,915,790|84|
|Length = 1_000_000 - Array[length - 1]|751,760,134|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:32:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":15564583.255655084,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":15742770.419336373,"samples":4},{"name":"Length = 1_000_000 - Array.at","opsSec":15546188.197709,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":736160703.5384701,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":750915790.1934425,"samples":9},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":751760133.9647564,"samples":5}]}-->
