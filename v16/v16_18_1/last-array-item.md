## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,827,110|96|
|Length = 10_000 - Array.at|18,732,067|99|
|Length = 1_000_000 - Array.at|18,811,680|95|
|Length = 100 - Array[length - 1]|592,498,894|96|
|Length = 10_000 - Array[length - 1]|591,802,220|95|
|Length = 1_000_000 - Array[length - 1]|590,519,595|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:01:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":18827110.174413193,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":18732067.27626797,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":18811680.418919012,"samples":5},{"name":"Length = 100 - Array[length - 1]","opsSec":592498894.0184777,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":591802220.2947268,"samples":8},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":590519595.1301861,"samples":6}]}-->
