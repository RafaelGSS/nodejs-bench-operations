## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|888,876,730|95|
|Length = 10_000 - Array.at|894,472,524|97|
|Length = 1_000_000 - Array.at|887,605,537|98|
|Length = 100 - Array[length - 1]|787,577,057|98|
|Length = 10_000 - Array[length - 1]|787,503,018|96|
|Length = 1_000_000 - Array[length - 1]|787,098,384|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:52:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":888876729.5069023,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":894472524.4603256,"samples":5},{"name":"Length = 1_000_000 - Array.at","opsSec":887605536.9379541,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":787577057.4788822,"samples":8},{"name":"Length = 10_000 - Array[length - 1]","opsSec":787503018.4457252,"samples":9},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":787098383.5152053,"samples":6}]}-->
