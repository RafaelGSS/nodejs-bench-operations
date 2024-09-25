## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,348,123|7174062|
|Length = 10_000 - Array.at|14,348,893|7174447|
|Length = 1_000_000 - Array.at|14,142,108|7071055|
|Length = 100 - Array[length - 1]|13,827,543|6913772|
|Length = 10_000 - Array[length - 1]|13,840,552|6920277|
|Length = 1_000_000 - Array[length - 1]|13,711,475|6855738|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:47:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":14348123.971374417,"samples":7174062},{"name":"Length = 10_000 - Array.at","opsSec":14348893.512226509,"samples":7174447},{"name":"Length = 1_000_000 - Array.at","opsSec":14142108.331265945,"samples":7071055},{"name":"Length = 100 - Array[length - 1]","opsSec":13827543.198013289,"samples":6913772},{"name":"Length = 10_000 - Array[length - 1]","opsSec":13840552.228276592,"samples":6920277},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":13711475.259731729,"samples":6855738}]}-->
