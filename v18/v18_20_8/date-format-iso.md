## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,664,742|1332508|
|fromUnixToISOString(new Date())|2,115,938|1057971|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:16:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":1332508,"opsSec":2664742.464186051},{"name":"fromUnixToISOString(new Date())","samples":1057971,"opsSec":2115938.7033675006}]}-->
