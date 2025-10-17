## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,341,076|670650|
|fromUnixToISOString(new Date())|1,978,670|989642|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:01:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Date().toISOString()","samples":670650,"opsSec":1341076.2360657076},{"name":"fromUnixToISOString(new Date())","samples":989642,"opsSec":1978670.5409001817}]}-->
