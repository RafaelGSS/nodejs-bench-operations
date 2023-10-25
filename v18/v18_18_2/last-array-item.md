## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|13,210,699|90|
|Length = 10_000 - Array.at|13,505,327|95|
|Length = 1_000_000 - Array.at|13,506,214|96|
|Length = 100 - Array[length - 1]|590,515,734|95|
|Length = 10_000 - Array[length - 1]|565,781,417|93|
|Length = 1_000_000 - Array[length - 1]|586,756,464|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:07:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":13210699.098810783,"samples":9},{"name":"Length = 10_000 - Array.at","opsSec":13505327.194506293,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":13506214.100107208,"samples":5},{"name":"Length = 100 - Array[length - 1]","opsSec":590515733.532531,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":565781417.2999202,"samples":9},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":586756464.3076245,"samples":8}]}-->
