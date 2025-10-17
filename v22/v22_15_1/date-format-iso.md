## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,448,390|724196|
|fromUnixToISOString(new Date())|2,163,837|1082046|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:03:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Date().toISOString()","samples":724196,"opsSec":1448390.603751458},{"name":"fromUnixToISOString(new Date())","samples":1082046,"opsSec":2163837.995713035}]}-->
