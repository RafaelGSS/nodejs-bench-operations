## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|892,702,511|95|
|Length = 10_000 - Array.at|895,841,393|98|
|Length = 1_000_000 - Array.at|895,364,670|95|
|Length = 100 - Array[length - 1]|788,003,143|95|
|Length = 10_000 - Array[length - 1]|785,790,641|99|
|Length = 1_000_000 - Array[length - 1]|788,547,557|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:56:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":892702510.5440935,"samples":8},{"name":"Length = 10_000 - Array.at","opsSec":895841393.0660479,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":895364670.1988674,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":788003142.8021915,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":785790641.3267989,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":788547556.5236295,"samples":7}]}-->
