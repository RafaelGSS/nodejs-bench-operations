## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,537,833|768918|
|fromUnixToISOString(new Date())|2,760,631|1380317|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:21:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Date().toISOString()","samples":768918,"opsSec":1537833.7240060882},{"name":"fromUnixToISOString(new Date())","samples":1380317,"opsSec":2760631.4823040883}]}-->
