## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|846,132,160|101|
|Length = 10_000 - Array[length - 1]|846,714,943|92|
|Length = 1_000_000 - Array[length - 1]|845,886,926|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:23:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":0,"samples":0},{"name":"Length = 10_000 - Array.at","opsSec":0,"samples":0},{"name":"Length = 1_000_000 - Array.at","opsSec":0,"samples":0},{"name":"Length = 100 - Array[length - 1]","opsSec":846132160.0580738,"samples":8},{"name":"Length = 10_000 - Array[length - 1]","opsSec":846714942.9995958,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":845886925.8192949,"samples":7}]}-->
