## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|711,590,397|95|
|Length = 10_000 - Array.at|711,682,303|96|
|Length = 1_000_000 - Array.at|711,688,068|94|
|Length = 100 - Array[length - 1]|713,624,584|95|
|Length = 10_000 - Array[length - 1]|712,797,118|97|
|Length = 1_000_000 - Array[length - 1]|711,145,788|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:01:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":711590396.6367419,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":711682303.043476,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":711688067.5913002,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":713624584.4720929,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":712797118.3994956,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":711145788.3905965,"samples":11}]}-->
