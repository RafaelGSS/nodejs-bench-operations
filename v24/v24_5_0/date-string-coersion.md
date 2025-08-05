## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,092,048|546092|
|Using brackets {}|1,116,223|558112|
|Using '' + |1,114,844|557481|
|Using date.toString()|1,241,043|620522|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:24:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using String()","samples":546092,"opsSec":1092048.566320902},{"name":"Using brackets {}","samples":558112,"opsSec":1116223.294546878},{"name":"Using '' + ","samples":557481,"opsSec":1114844.1409071116},{"name":"Using date.toString()","samples":620522,"opsSec":1241043.5035825986}]}-->
