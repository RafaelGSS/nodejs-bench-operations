## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|22,937,818|96|
|Length = 10_000 - Array.at|23,762,405|98|
|Length = 1_000_000 - Array.at|23,652,034|99|
|Length = 100 - Array[length - 1]|820,851,592|97|
|Length = 10_000 - Array[length - 1]|819,805,634|96|
|Length = 1_000_000 - Array[length - 1]|819,282,339|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:52:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":22937817.541622233,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":23762404.582668517,"samples":5},{"name":"Length = 1_000_000 - Array.at","opsSec":23652033.635704424,"samples":8},{"name":"Length = 100 - Array[length - 1]","opsSec":820851592.2493669,"samples":8},{"name":"Length = 10_000 - Array[length - 1]","opsSec":819805634.3617429,"samples":8},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":819282339.0645319,"samples":6}]}-->
