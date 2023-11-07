## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|26,434,886|98|
|Length = 10_000 - Array.at|26,104,977|99|
|Length = 1_000_000 - Array.at|26,731,142|99|
|Length = 100 - Array[length - 1]|846,494,735|92|
|Length = 10_000 - Array[length - 1]|845,402,075|88|
|Length = 1_000_000 - Array[length - 1]|847,545,252|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:34:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":26434885.532525904,"samples":4},{"name":"Length = 10_000 - Array.at","opsSec":26104976.614542816,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":26731142.283102203,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":846494735.2293371,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":845402075.3443291,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":847545251.7191346,"samples":6}]}-->
