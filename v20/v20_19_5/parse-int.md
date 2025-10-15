## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|95,859,652|47929832|
|Using parseInt(x, 10) - big number (10 len)|97,092,571|48546286|
|Using + - small number (2 len)|94,912,870|47456443|
|Using + - big number (10 len)|95,728,517|47866263|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:01:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":47929832,"opsSec":95859652.11340313},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":48546286,"opsSec":97092571.61162971},{"name":"Using + - small number (2 len)","samples":47456443,"opsSec":94912870.62411495},{"name":"Using + - big number (10 len)","samples":47866263,"opsSec":95728517.84695774}]}-->
