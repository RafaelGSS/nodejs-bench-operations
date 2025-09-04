## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|102,236,083|51139382|
|Using parseInt(x, 10) - big number (10 len)|99,594,515|49835882|
|Using + - small number (2 len)|101,261,644|50673244|
|Using + - big number (10 len)|101,542,852|50789257|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:32:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":51139382,"opsSec":102236083.50222033},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":49835882,"opsSec":99594515.70497279},{"name":"Using + - small number (2 len)","samples":50673244,"opsSec":101261644.7158351},{"name":"Using + - big number (10 len)","samples":50789257,"opsSec":101542852.35333923}]}-->
