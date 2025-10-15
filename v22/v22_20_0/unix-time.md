## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,702,994|5351583|
|Date.now()|19,809,833|9904918|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:14:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":5351583,"opsSec":10702994.43099927},{"name":"Date.now()","samples":9904918,"opsSec":19809833.34548233}]}-->
