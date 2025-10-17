## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,133,771|566983|
|Using brackets {}|1,154,345|577270|
|Using '' + |1,144,587|572294|
|Using date.toString()|1,273,015|636698|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:07:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using String()","samples":566983,"opsSec":1133771.5944522424},{"name":"Using brackets {}","samples":577270,"opsSec":1154345.5135591845},{"name":"Using '' + ","samples":572294,"opsSec":1144587.0774628154},{"name":"Using date.toString()","samples":636698,"opsSec":1273015.6051149732}]}-->
