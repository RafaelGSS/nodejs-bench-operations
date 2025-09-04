## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|941,050|470657|
|Using brackets {}|944,273|472145|
|Using '' + |928,369|464197|
|Using date.toString()|1,016,723|508363|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:54:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":470657,"opsSec":941050.7843314194},{"name":"Using brackets {}","samples":472145,"opsSec":944273.0748494064},{"name":"Using '' + ","samples":464197,"opsSec":928369.539319378},{"name":"Using date.toString()","samples":508363,"opsSec":1016723.6615355784}]}-->
