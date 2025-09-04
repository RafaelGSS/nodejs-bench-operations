## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,039,401|519756|
|Using brackets {}|1,053,706|527186|
|Using '' + |1,044,170|522330|
|Using date.toString()|1,142,013|571059|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:54:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":519756,"opsSec":1039401.0501743002},{"name":"Using brackets {}","samples":527186,"opsSec":1053706.0746201372},{"name":"Using '' + ","samples":522330,"opsSec":1044170.5053971158},{"name":"Using date.toString()","samples":571059,"opsSec":1142013.4692231352}]}-->
