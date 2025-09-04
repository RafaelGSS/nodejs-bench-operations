## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,554,516|1277302|
|fromUnixToISOString(new Date())|2,047,738|1023939|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:43:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":1277302,"opsSec":2554516.5537893306},{"name":"fromUnixToISOString(new Date())","samples":1023939,"opsSec":2047738.7210031524}]}-->
