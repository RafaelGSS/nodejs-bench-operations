## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,565,729|782865|
|fromUnixToISOString(new Date())|2,996,484|1498363|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:18:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":782865,"opsSec":1565729.8121124227},{"name":"fromUnixToISOString(new Date())","samples":1498363,"opsSec":2996484.507320586}]}-->
