## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,493,469|746736|
|fromUnixToISOString(new Date())|2,245,042|1122522|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:19:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":746736,"opsSec":1493469.983815522},{"name":"fromUnixToISOString(new Date())","samples":1122522,"opsSec":2245042.7831868115}]}-->
