## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,512,224|756146|
|fromUnixToISOString(new Date())|2,088,331|1044166|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:17:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":756146,"opsSec":1512224.5033715165},{"name":"fromUnixToISOString(new Date())","samples":1044166,"opsSec":2088331.6575136082}]}-->
