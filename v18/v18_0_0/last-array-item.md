## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|13,953,833|82|
|Length = 10_000 - Array.at|14,631,605|85|
|Length = 1_000_000 - Array.at|15,061,206|82|
|Length = 100 - Array[length - 1]|738,922,509|84|
|Length = 10_000 - Array[length - 1]|706,078,971|86|
|Length = 1_000_000 - Array[length - 1]|704,387,859|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:07:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":13953832.748648578,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":14631605.09431355,"samples":4},{"name":"Length = 1_000_000 - Array.at","opsSec":15061206.046562824,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":738922508.8200243,"samples":8},{"name":"Length = 10_000 - Array[length - 1]","opsSec":706078971.2719367,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":704387858.7797654,"samples":6}]}-->
