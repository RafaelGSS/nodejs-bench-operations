## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|13,868,778|88|
|Length = 10_000 - Array.at|13,816,495|91|
|Length = 1_000_000 - Array.at|13,793,853|90|
|Length = 100 - Array[length - 1]|621,981,557|91|
|Length = 10_000 - Array[length - 1]|622,692,336|87|
|Length = 1_000_000 - Array[length - 1]|627,934,346|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:32:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":13868777.592273714,"samples":8},{"name":"Length = 10_000 - Array.at","opsSec":13816495.330353575,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":13793852.59770747,"samples":5},{"name":"Length = 100 - Array[length - 1]","opsSec":621981557.1796572,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":622692335.7334629,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":627934346.005889,"samples":7}]}-->
