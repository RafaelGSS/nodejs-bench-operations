## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|25,908,850|99|
|Length = 10_000 - Array.at|26,110,789|95|
|Length = 1_000_000 - Array.at|26,027,129|98|
|Length = 100 - Array[length - 1]|908,390,594|98|
|Length = 10_000 - Array[length - 1]|908,545,520|99|
|Length = 1_000_000 - Array[length - 1]|908,339,025|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:35:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":25908849.934851173,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":26110788.511599455,"samples":5},{"name":"Length = 1_000_000 - Array.at","opsSec":26027128.570884567,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":908390594.175983,"samples":8},{"name":"Length = 10_000 - Array[length - 1]","opsSec":908545519.7761123,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":908339025.355132,"samples":6}]}-->
