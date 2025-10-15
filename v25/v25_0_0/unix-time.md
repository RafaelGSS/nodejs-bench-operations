## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,181,463|4591248|
|Date.now()|19,690,079|9845128|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:14:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":4591248,"opsSec":9181463.103763754},{"name":"Date.now()","samples":9845128,"opsSec":19690079.14370913}]}-->
