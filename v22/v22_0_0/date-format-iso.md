## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,325,111|663232|
|fromUnixToISOString(new Date())|1,798,714|899546|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:29:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().toISOString()","samples":663232,"opsSec":1325111.4428489467},{"name":"fromUnixToISOString(new Date())","samples":899546,"opsSec":1798714.6656374424}]}-->
