## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|98,081,462|49040739|
|Using parseInt(x, 10) - big number (10 len)|91,796,587|45911927|
|Using + - small number (2 len)|98,310,241|49193967|
|Using + - big number (10 len)|98,158,143|49079079|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:31:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":49040739,"opsSec":98081462.30696604},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":45911927,"opsSec":91796587.65956748},{"name":"Using + - small number (2 len)","samples":49193967,"opsSec":98310241.3824403},{"name":"Using + - big number (10 len)","samples":49079079,"opsSec":98158143.27627851}]}-->
