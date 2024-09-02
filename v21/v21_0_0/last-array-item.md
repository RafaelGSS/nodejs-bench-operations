## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,635,769|7317885|
|Length = 10_000 - Array.at|14,324,121|7162061|
|Length = 1_000_000 - Array.at|15,628,871|7814437|
|Length = 100 - Array[length - 1]|15,723,223|7861612|
|Length = 10_000 - Array[length - 1]|15,149,252|7574627|
|Length = 1_000_000 - Array[length - 1]|15,650,333|7825167|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:04:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":14635769.88989183,"samples":7317885},{"name":"Length = 10_000 - Array.at","opsSec":14324121.510968432,"samples":7162061},{"name":"Length = 1_000_000 - Array.at","opsSec":15628871.476800466,"samples":7814437},{"name":"Length = 100 - Array[length - 1]","opsSec":15723223.443843937,"samples":7861612},{"name":"Length = 10_000 - Array[length - 1]","opsSec":15149252.674954087,"samples":7574627},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":15650333.467090247,"samples":7825167}]}-->
