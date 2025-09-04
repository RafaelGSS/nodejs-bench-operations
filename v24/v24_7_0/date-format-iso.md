## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,548,189|774111|
|fromUnixToISOString(new Date())|2,818,530|1409461|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:46:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":774111,"opsSec":1548189.7697853725},{"name":"fromUnixToISOString(new Date())","samples":1409461,"opsSec":2818530.8555619884}]}-->
