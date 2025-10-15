## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,065,416|532758|
|Using brackets {}|1,092,426|546285|
|Using '' + |1,078,226|539114|
|Using date.toString()|1,218,168|609118|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:27:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":532758,"opsSec":1065416.4922304587},{"name":"Using brackets {}","samples":546285,"opsSec":1092426.6146371225},{"name":"Using '' + ","samples":539114,"opsSec":1078226.1583897213},{"name":"Using date.toString()","samples":609118,"opsSec":1218168.6913071305}]}-->
