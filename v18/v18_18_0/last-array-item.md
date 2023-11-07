## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|27,153,792|95|
|Length = 10_000 - Array.at|27,300,553|96|
|Length = 1_000_000 - Array.at|27,098,055|94|
|Length = 100 - Array[length - 1]|847,379,918|100|
|Length = 10_000 - Array[length - 1]|844,886,423|101|
|Length = 1_000_000 - Array[length - 1]|847,184,735|101|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:37:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":27153791.524160076,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":27300553.293940555,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":27098055.32676241,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":847379918.4664456,"samples":9},{"name":"Length = 10_000 - Array[length - 1]","opsSec":844886423.2793416,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":847184735.0171555,"samples":7}]}-->
