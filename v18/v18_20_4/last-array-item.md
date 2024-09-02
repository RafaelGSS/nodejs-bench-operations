## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|8,560,644|4280323|
|Length = 10_000 - Array.at|8,600,756|4300379|
|Length = 1_000_000 - Array.at|8,563,489|4281745|
|Length = 100 - Array[length - 1]|15,133,383|7566692|
|Length = 10_000 - Array[length - 1]|15,215,981|7607991|
|Length = 1_000_000 - Array[length - 1]|14,952,804|7476403|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:57:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":8560644.771993563,"samples":4280323},{"name":"Length = 10_000 - Array.at","opsSec":8600756.607912388,"samples":4300379},{"name":"Length = 1_000_000 - Array.at","opsSec":8563489.188952642,"samples":4281745},{"name":"Length = 100 - Array[length - 1]","opsSec":15133383.050398529,"samples":7566692},{"name":"Length = 10_000 - Array[length - 1]","opsSec":15215981.711336989,"samples":7607991},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":14952804.191501135,"samples":7476403}]}-->
