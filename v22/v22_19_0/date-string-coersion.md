## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,036,605|518314|
|Using brackets {}|937,006|468504|
|Using '' + |1,033,497|516801|
|Using date.toString()|1,234,734|617421|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:28:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":518314,"opsSec":1036605.9368792394},{"name":"Using brackets {}","samples":468504,"opsSec":937006.1409798162},{"name":"Using '' + ","samples":516801,"opsSec":1033497.5464699734},{"name":"Using date.toString()","samples":617421,"opsSec":1234734.3509203494}]}-->
