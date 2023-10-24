## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|677,592,064|84|
|Length = 10_000 - Array.at|635,043,663|82|
|Length = 1_000_000 - Array.at|651,162,036|87|
|Length = 100 - Array[length - 1]|794,278,791|88|
|Length = 10_000 - Array[length - 1]|800,429,622|89|
|Length = 1_000_000 - Array[length - 1]|795,602,662|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:32:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":677592064.0968108,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":635043663.4860573,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":651162036.1196299,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":794278791.421098,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":800429621.6321969,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":795602662.4057903,"samples":7}]}-->
