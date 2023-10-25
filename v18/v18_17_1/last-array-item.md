## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,691,593|87|
|Length = 10_000 - Array.at|14,999,433|89|
|Length = 1_000_000 - Array.at|14,916,598|88|
|Length = 100 - Array[length - 1]|640,714,219|89|
|Length = 10_000 - Array[length - 1]|639,801,867|91|
|Length = 1_000_000 - Array[length - 1]|646,720,011|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:07:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":14691593.063424738,"samples":4},{"name":"Length = 10_000 - Array.at","opsSec":14999433.416608652,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":14916598.077952126,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":640714218.7963121,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":639801866.7935123,"samples":8},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":646720011.0699558,"samples":8}]}-->
