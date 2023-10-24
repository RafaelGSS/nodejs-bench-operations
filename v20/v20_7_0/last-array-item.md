## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|708,537,754|96|
|Length = 10_000 - Array.at|714,311,272|97|
|Length = 1_000_000 - Array.at|714,199,233|97|
|Length = 100 - Array[length - 1]|716,711,399|95|
|Length = 10_000 - Array[length - 1]|716,027,784|97|
|Length = 1_000_000 - Array[length - 1]|716,219,211|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:32:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":708537753.538098,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":714311271.5303947,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":714199232.5182551,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":716711399.0179228,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":716027784.3464487,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":716219211.4158398,"samples":7}]}-->
