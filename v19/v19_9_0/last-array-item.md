## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|585,143,559|90|
|Length = 10_000 - Array.at|588,155,213|95|
|Length = 1_000_000 - Array.at|589,084,070|93|
|Length = 100 - Array[length - 1]|589,857,345|97|
|Length = 10_000 - Array[length - 1]|589,112,909|97|
|Length = 1_000_000 - Array[length - 1]|586,618,764|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:32:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":585143559.3406457,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":588155212.5877043,"samples":8},{"name":"Length = 1_000_000 - Array.at","opsSec":589084070.1366146,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":589857344.7448335,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":589112908.6186161,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":586618763.8125651,"samples":7}]}-->
