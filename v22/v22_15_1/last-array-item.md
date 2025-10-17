## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|99,368,731|49684377|
|Length = 10_000 - Array.at|100,246,021|50123021|
|Length = 1_000_000 - Array.at|98,055,278|49037132|
|Length = 100 - Array[length - 1]|96,413,218|48206620|
|Length = 10_000 - Array[length - 1]|95,910,314|47955166|
|Length = 1_000_000 - Array[length - 1]|97,716,307|48858163|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:26:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Length = 100 - Array.at","samples":49684377,"opsSec":99368731.54266667},{"name":"Length = 10_000 - Array.at","samples":50123021,"opsSec":100246021.95079562},{"name":"Length = 1_000_000 - Array.at","samples":49037132,"opsSec":98055278.53696968},{"name":"Length = 100 - Array[length - 1]","samples":48206620,"opsSec":96413218.40343907},{"name":"Length = 10_000 - Array[length - 1]","samples":47955166,"opsSec":95910314.54432276},{"name":"Length = 1_000_000 - Array[length - 1]","samples":48858163,"opsSec":97716307.4339016}]}-->
