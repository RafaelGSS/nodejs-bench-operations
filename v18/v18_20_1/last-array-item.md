## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|26,369,150|97|
|Length = 10_000 - Array.at|26,347,917|96|
|Length = 1_000_000 - Array.at|26,347,389|95|
|Length = 100 - Array[length - 1]|908,034,845|97|
|Length = 10_000 - Array[length - 1]|907,704,148|99|
|Length = 1_000_000 - Array[length - 1]|906,910,040|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:36:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":26369149.74264011,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":26347917.454478644,"samples":5},{"name":"Length = 1_000_000 - Array.at","opsSec":26347388.6337016,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":908034845.351528,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":907704147.880939,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":906910040.4311123,"samples":6}]}-->
