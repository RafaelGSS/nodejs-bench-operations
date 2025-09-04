## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,030,953|515505|
|Using brackets {}|1,039,447|519724|
|Using '' + |1,054,371|527266|
|Using date.toString()|1,156,955|580824|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:53:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":515505,"opsSec":1030953.5511692592},{"name":"Using brackets {}","samples":519724,"opsSec":1039447.993763312},{"name":"Using '' + ","samples":527266,"opsSec":1054371.2104991411},{"name":"Using date.toString()","samples":580824,"opsSec":1156955.020212412}]}-->
