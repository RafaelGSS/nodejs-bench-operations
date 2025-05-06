## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,534,858|767716|
|fromUnixToISOString(new Date())|2,763,539|1383317|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:31:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().toISOString()","samples":767716,"opsSec":1534858.5461499875},{"name":"fromUnixToISOString(new Date())","samples":1383317,"opsSec":2763539.4438016196}]}-->
