## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|96,762,936|48387337|
|Using parseInt(x, 10) - big number (10 len)|14,067,243|7034512|
|Using + - small number (2 len)|106,837,939|53425096|
|Using + - big number (10 len)|105,200,566|52600301|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:31:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":48387337,"opsSec":96762936.46228126},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":7034512,"opsSec":14067243.143287031},{"name":"Using + - small number (2 len)","samples":53425096,"opsSec":106837939.61140949},{"name":"Using + - big number (10 len)","samples":52600301,"opsSec":105200566.86301066}]}-->
