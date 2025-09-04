## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|91,025,702|45512875|
|Using parseInt(x, 10) - big number (10 len)|91,439,015|45907153|
|Using + - small number (2 len)|91,778,689|45889361|
|Using + - big number (10 len)|91,983,429|46001979|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:34:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":45512875,"opsSec":91025702.66663462},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":45907153,"opsSec":91439015.59147836},{"name":"Using + - small number (2 len)","samples":45889361,"opsSec":91778689.32678661},{"name":"Using + - big number (10 len)","samples":46001979,"opsSec":91983429.32221073}]}-->
