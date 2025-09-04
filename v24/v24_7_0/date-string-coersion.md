## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,051,711|525856|
|Using brackets {}|1,044,222|522112|
|Using '' + |1,120,680|560445|
|Using date.toString()|1,241,706|620860|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:55:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":525856,"opsSec":1051711.7854507957},{"name":"Using brackets {}","samples":522112,"opsSec":1044222.5777688492},{"name":"Using '' + ","samples":560445,"opsSec":1120680.724081585},{"name":"Using date.toString()","samples":620860,"opsSec":1241706.6144026967}]}-->
