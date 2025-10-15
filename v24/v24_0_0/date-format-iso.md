## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,568,551|784619|
|fromUnixToISOString(new Date())|3,069,213|1534710|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:17:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":784619,"opsSec":1568551.2882460058},{"name":"fromUnixToISOString(new Date())","samples":1534710,"opsSec":3069213.0736545743}]}-->
