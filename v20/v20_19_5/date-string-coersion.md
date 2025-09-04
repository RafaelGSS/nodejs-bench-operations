## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,056,171|528170|
|Using brackets {}|1,084,325|542167|
|Using '' + |1,057,621|529041|
|Using date.toString()|1,193,600|596801|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:53:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":528170,"opsSec":1056171.0950061446},{"name":"Using brackets {}","samples":542167,"opsSec":1084325.8220146503},{"name":"Using '' + ","samples":529041,"opsSec":1057621.3614769797},{"name":"Using date.toString()","samples":596801,"opsSec":1193600.429221835}]}-->
