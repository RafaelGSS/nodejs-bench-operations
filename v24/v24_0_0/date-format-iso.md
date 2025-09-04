## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,444,007|722155|
|fromUnixToISOString(new Date())|2,657,163|1328671|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:44:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":722155,"opsSec":1444007.844246607},{"name":"fromUnixToISOString(new Date())","samples":1328671,"opsSec":2657163.8903044327}]}-->
