## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|713,436,129|95|
|Length = 10_000 - Array.at|716,121,258|98|
|Length = 1_000_000 - Array.at|711,472,161|93|
|Length = 100 - Array[length - 1]|716,131,556|96|
|Length = 10_000 - Array[length - 1]|715,537,709|95|
|Length = 1_000_000 - Array[length - 1]|715,199,597|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:07:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":713436129.3001529,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":716121257.9466088,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":711472161.3344755,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":716131555.7758018,"samples":8},{"name":"Length = 10_000 - Array[length - 1]","opsSec":715537709.4737694,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":715199596.6917496,"samples":7}]}-->
