## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,212,236|606186|
|fromUnixToISOString(new Date())|2,154,696|1095128|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:43:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":606186,"opsSec":1212236.389539575},{"name":"fromUnixToISOString(new Date())","samples":1095128,"opsSec":2154696.339567715}]}-->
