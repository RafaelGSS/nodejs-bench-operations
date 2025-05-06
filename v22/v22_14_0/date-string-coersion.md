## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,084,115|542058|
|Using brackets {}|1,052,290|526193|
|Using '' + |1,075,497|537778|
|Using date.toString()|1,184,495|592249|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:39:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using String()","samples":542058,"opsSec":1084115.0091188818},{"name":"Using brackets {}","samples":526193,"opsSec":1052290.0627149823},{"name":"Using '' + ","samples":537778,"opsSec":1075497.3230170507},{"name":"Using date.toString()","samples":592249,"opsSec":1184495.3656823067}]}-->
