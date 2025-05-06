## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,471,315|735838|
|fromUnixToISOString(new Date())|2,075,442|1037952|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:30:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().toISOString()","samples":735838,"opsSec":1471315.0834673953},{"name":"fromUnixToISOString(new Date())","samples":1037952,"opsSec":2075442.4174554732}]}-->
