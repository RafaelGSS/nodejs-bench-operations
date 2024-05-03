## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|1,002,699,684|98|
|Length = 10_000 - Array.at|1,004,271,918|97|
|Length = 1_000_000 - Array.at|1,003,835,239|99|
|Length = 100 - Array[length - 1]|913,989,741|95|
|Length = 10_000 - Array[length - 1]|914,777,213|99|
|Length = 1_000_000 - Array[length - 1]|913,941,144|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:37:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":1002699683.6448263,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":1004271917.6295959,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":1003835238.5718048,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":913989741.2410219,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":914777212.858826,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":913941143.773282,"samples":6}]}-->
