## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,620,734|7310368|
|Length = 10_000 - Array.at|14,719,507|7359754|
|Length = 1_000_000 - Array.at|15,360,298|7680150|
|Length = 100 - Array[length - 1]|15,301,970|7650986|
|Length = 10_000 - Array[length - 1]|14,906,147|7453074|
|Length = 1_000_000 - Array[length - 1]|15,139,925|7569963|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:08:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":14620734.596475491,"samples":7310368},{"name":"Length = 10_000 - Array.at","opsSec":14719507.411292866,"samples":7359754},{"name":"Length = 1_000_000 - Array.at","opsSec":15360298.433162302,"samples":7680150},{"name":"Length = 100 - Array[length - 1]","opsSec":15301970.622840883,"samples":7650986},{"name":"Length = 10_000 - Array[length - 1]","opsSec":14906147.43382238,"samples":7453074},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":15139925.667042034,"samples":7569963}]}-->
