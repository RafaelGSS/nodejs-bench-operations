## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,660,786|1330442|
|fromUnixToISOString(new Date())|2,229,801|1115305|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:17:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":1330442,"opsSec":2660786.6684236694},{"name":"fromUnixToISOString(new Date())","samples":1115305,"opsSec":2229801.7370067663}]}-->
