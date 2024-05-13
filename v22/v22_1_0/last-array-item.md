## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,804,043|7902022|
|Length = 10_000 - Array.at|15,772,696|7886349|
|Length = 1_000_000 - Array.at|15,810,330|7905166|
|Length = 100 - Array[length - 1]|15,821,754|7910878|
|Length = 10_000 - Array[length - 1]|15,829,844|7914923|
|Length = 1_000_000 - Array[length - 1]|15,818,252|7909127|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:02:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":15804043.96837422,"samples":7902022},{"name":"Length = 10_000 - Array.at","opsSec":15772696.422719667,"samples":7886349},{"name":"Length = 1_000_000 - Array.at","opsSec":15810330.703634407,"samples":7905166},{"name":"Length = 100 - Array[length - 1]","opsSec":15821754.576082587,"samples":7910878},{"name":"Length = 10_000 - Array[length - 1]","opsSec":15829844.733628234,"samples":7914923},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":15818252.639517942,"samples":7909127}]}-->
