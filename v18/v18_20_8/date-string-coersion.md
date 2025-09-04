## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,025,652|512908|
|Using brackets {}|1,027,677|513953|
|Using '' + |1,021,424|510713|
|Using date.toString()|1,140,412|570207|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:54:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":512908,"opsSec":1025652.0843864817},{"name":"Using brackets {}","samples":513953,"opsSec":1027677.8020886906},{"name":"Using '' + ","samples":510713,"opsSec":1021424.8703040935},{"name":"Using date.toString()","samples":570207,"opsSec":1140412.152532313}]}-->
