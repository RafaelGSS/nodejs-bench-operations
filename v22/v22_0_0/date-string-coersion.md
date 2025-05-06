## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|921,039|460569|
|Using brackets {}|988,788|494418|
|Using '' + |918,982|459492|
|Using date.toString()|1,003,214|501677|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:39:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using String()","samples":460569,"opsSec":921039.6090227267},{"name":"Using brackets {}","samples":494418,"opsSec":988788.8644348324},{"name":"Using '' + ","samples":459492,"opsSec":918982.0297025284},{"name":"Using date.toString()","samples":501677,"opsSec":1003214.6093493187}]}-->
