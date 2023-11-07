## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|916,419|97|
|Using brackets {}|937,974|96|
|Using '' + |935,374|95|
|Using date.toString()|1,085,878|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:16:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using String()","opsSec":916419.2776880118,"samples":7},{"name":"Using brackets {}","opsSec":937973.6652237623,"samples":7},{"name":"Using '' + ","opsSec":935373.7495759627,"samples":6},{"name":"Using date.toString()","opsSec":1085878.0388984203,"samples":5}]}-->
