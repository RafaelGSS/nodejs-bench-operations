## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,025,228|512872|
|Using brackets {}|1,030,458|515314|
|Using '' + |1,015,454|507760|
|Using date.toString()|1,135,884|568047|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:37:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using String()","samples":512872,"opsSec":1025228.7589844272},{"name":"Using brackets {}","samples":515314,"opsSec":1030458.1021899434},{"name":"Using '' + ","samples":507760,"opsSec":1015454.0868752209},{"name":"Using date.toString()","samples":568047,"opsSec":1135884.1340473935}]}-->
