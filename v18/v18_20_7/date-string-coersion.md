## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,030,417|515210|
|Using brackets {}|1,058,413|529283|
|Using '' + |1,060,725|530363|
|Using date.toString()|1,153,015|576546|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:25:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":515210,"opsSec":1030417.4548688864},{"name":"Using brackets {}","samples":529283,"opsSec":1058413.0698955308},{"name":"Using '' + ","samples":530363,"opsSec":1060725.522673515},{"name":"Using date.toString()","samples":576546,"opsSec":1153015.5712098468}]}-->
