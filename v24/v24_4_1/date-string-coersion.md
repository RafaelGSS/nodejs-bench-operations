## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,133,423|567661|
|Using brackets {}|1,139,076|569623|
|Using '' + |1,139,919|569982|
|Using date.toString()|1,262,320|631313|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:08:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using String()","samples":567661,"opsSec":1133423.3707757592},{"name":"Using brackets {}","samples":569623,"opsSec":1139076.7218083718},{"name":"Using '' + ","samples":569982,"opsSec":1139919.7893508899},{"name":"Using date.toString()","samples":631313,"opsSec":1262320.1297340044}]}-->
